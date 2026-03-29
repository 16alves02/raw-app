import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { triggerHaptic } from '../utils/feedback';
import Card from '../components/Card';

// --- IMPORTS: DEEP END ---
import atTheTable from '../data/modes/deep-end/at-the-table.json';
import couples from '../data/modes/deep-end/couples.json';
import dating from '../data/modes/deep-end/dating.json';
import deepQuestions from '../data/modes/deep-end/deep-questions.json';
import family from '../data/modes/deep-end/family.json';
import intimate from '../data/modes/deep-end/intimate.json';
import longDistance from '../data/modes/deep-end/long-distance.json';
import nightTalks from '../data/modes/deep-end/night-talks.json';
import soulmates from '../data/modes/deep-end/soulmates.json';
import talkingStage from '../data/modes/deep-end/talking-stage.json';

// --- IMPORTS: UNFILTERED ---
import flags from '../data/modes/unfiltered/flags.json';
import kmk from '../data/modes/unfiltered/kiss-marry-kill.json';
import nhie from '../data/modes/unfiltered/never-have-i-ever.json';
import spicy from '../data/modes/unfiltered/spicy.json';
import tod from '../data/modes/unfiltered/truth-or-drink.json';
import wiml from '../data/modes/unfiltered/who-is-most-likely.json';
import wyr from '../data/modes/unfiltered/would-you-rather.json';

// --- IMPORTS: LAB ---
import fw from '../data/modes/lab/forbidden-words.json';
import imp from '../data/modes/lab/the-impostor.json';
import wao from '../data/modes/lab/wrong-answers-only.json';

const Game = ({ modeId, onBack, settings }) => {
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Configurações visuais e de conteúdo por modo
  const modeConfigs = {
    deep: { 
      color: '#00F0FF', 
      bg: 'bg-raw-onyx',
      title: 'THE DEEP END',
      decks: [
        { id: 'dq', title: 'Deep Questions', data: deepQuestions, desc: 'O núcleo da experiência RAW.' },
        { id: 'nt', title: 'Night Talks', data: nightTalks, desc: 'Conversas para o silêncio da noite.' },
        { id: 'int', title: 'Intimate', data: intimate, desc: 'Vulnerabilidade e conexão física.' },
        { id: 'ts', title: 'Talking Stage', data: talkingStage, desc: 'Para quem se está a conhecer.' },
        { id: 'cpl', title: 'Couples', data: couples, desc: 'Fortalece o laço com o teu parceiro.' },
        { id: 'sm', title: 'Soulmates', data: soulmates, desc: 'Conexão espiritual e destino.' },
        { id: 'ld', title: 'Long Distance', data: longDistance, desc: 'Para encurtar distâncias.' },
        { id: 'fam', title: 'Family', data: family, desc: 'Raízes, infância e laços de sangue.' },
        { id: 'tab', title: 'At the Table', data: atTheTable, desc: 'O acompanhamento perfeito para um jantar.' },
        { id: 'dat', title: 'Dating', data: dating, desc: 'Encontros com substância.' }
      ]
    },
    unfiltered: { 
      color: '#FF3E3E', 
      bg: 'bg-[#0F0A0A]',
      title: 'UNFILTERED',
      decks: [
        { id: 'spicy', title: 'Modo Picante', data: spicy, desc: 'Sem filtros, sem vergonha.' },
        { id: 'tod', title: 'Truth or Drink', data: tod, desc: 'Responde ou bebe.' },
        { id: 'nhie', title: 'Eu Nunca', data: nhie, desc: 'Confissões de coisas que (não) fizeste.' },
        { id: 'kmk', title: 'Kiss Marry Kill', data: kmk, desc: 'Três opções, três destinos.' },
        { id: 'wiml', title: 'Most Likely To', data: wiml, desc: 'Quem do grupo é mais provável?' },
        { id: 'flags', title: 'Red or Green?', data: flags, desc: 'Julgamento rápido de comportamentos.' },
        { id: 'wyr', title: 'Would You Rather', data: wyr, desc: 'Escolhas impossíveis entre dois males.' }
      ]
    },
    lab: { 
      color: '#F2F2F2', 
      bg: 'bg-black',
      title: 'THE LAB',
      decks: [
        { id: 'imp', title: 'O Impostor', data: imp, desc: 'Um de vocês tem uma palavra diferente. Descobre quem.' },
        { id: 'fw', title: 'Palavras Proibidas', data: fw, desc: 'Explica o conceito sem usar as palavras tabu.' },
        { id: 'wao', title: 'Wrong Answers Only', data: wao, desc: 'Responde o mais errado possível.' }
      ]
    }
  };

  const config = modeConfigs[modeId] || modeConfigs.deep;

  const startDeck = (deck) => {
    let prepared;
    if (deck.id === 'imp') {
      prepared = deck.data.map(item => ({
        text: `PALAVRA GRUPO: ${item.grupo}\n\nPALAVRA IMPOSTOR: ${item.impostor}`,
        category: 'O IMPOSTOR'
      }));
    } else if (deck.id === 'fw') {
      prepared = deck.data.map(item => ({
        text: `${item.target.toUpperCase()}\n\nPROIBIDO:\n${item.forbidden.join(', ')}`,
        category: 'TABU'
      }));
    } else {
      prepared = deck.data.map(item => ({
        text: typeof item === 'string' ? item : (item.question || item.text),
        category: deck.title
      }));
    }
    
    setQuestions(prepared.sort(() => Math.random() - 0.5));
    setSelectedDeck(deck);
    setCurrentIndex(0);
  };

  const nextQuestion = () => {
    triggerHaptic('light');
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  // 1. Ecrã de Seleção de Decks
  if (!selectedDeck) {
    return (
      <div className={`min-h-screen ${config.bg} p-8 pt-24 ${settings?.animations ? 'animate-in fade-in duration-700' : ''}`}>
        <button 
          onClick={onBack} 
          className="fixed top-8 left-8 text-raw-bone/30 hover:text-white uppercase tracking-[0.3em] text-[10px] transition-colors z-50"
        >
          ← Voltar aos Modos
        </button>
        
        <div className="max-w-5xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl font-archivo text-raw-bone uppercase tracking-tighter" style={{ color: config.color }}>
              {config.title}
            </h1>
            <p className="text-raw-bone/40 text-xs uppercase tracking-widest mt-2">Escolhe o teu deck</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {config.decks.map((deck) => (
              <button 
                key={deck.id} 
                onClick={() => startDeck(deck)} 
                className="p-8 border border-raw-bone/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-raw-bone/20 transition-all text-left group flex flex-col justify-between min-h-[180px]"
              >
                <div>
                  <h3 className="text-raw-bone font-archivo text-xl uppercase mb-2 group-hover:translate-x-1 transition-transform">{deck.title}</h3>
                  <p className="text-raw-bone/40 text-[10px] leading-relaxed uppercase tracking-widest">{deck.desc}</p>
                </div>
                <span className="text-[9px] mt-6 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: config.color }}>INICIAR SESSÃO →</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 2. Ecrã do Jogo Ativo
  return (
    <div className={`min-h-screen ${config.bg} flex flex-col items-center justify-center p-6 overflow-hidden transition-colors duration-700`}>
      <button 
        onClick={() => setSelectedDeck(null)} 
        className="fixed top-8 left-8 w-12 h-12 flex items-center justify-center border border-raw-bone/10 rounded-full hover:bg-raw-bone hover:text-raw-onyx transition-all z-50 text-raw-bone"
      >
        ✕
      </button>

      {/* Progress Bar Superior */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/5">
        <div 
          className="h-full transition-all duration-500"
          style={{ 
            width: `${((currentIndex + 1) / questions.length) * 100}%`,
            backgroundColor: config.color,
            boxShadow: `0 0 10px ${config.color}`
          }}
        />
      </div>

      {/* Área da Carta com Swipe e Respeito às Settings */}
      <div className="relative w-full max-w-md flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            drag={settings?.animations ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(event, info) => {
              const swipeThreshold = 100;
              if (Math.abs(info.offset.x) > swipeThreshold) {
                nextQuestion();
              }
            }}
            initial={settings?.animations ? { x: 100, opacity: 0, rotate: 5 } : { opacity: 1 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            exit={settings?.animations ? { 
              x: -100, 
              opacity: 0, 
              rotate: -5,
              transition: { duration: 0.2 } 
            } : { opacity: 0 }}
            whileTap={{ scale: 0.98 }}
            className="w-full cursor-grab active:cursor-grabbing z-20"
            onClick={nextQuestion}
          >
            <Card 
              text={questions[currentIndex]?.text} 
              category={questions[currentIndex]?.category} 
              color={config.color} 
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Instrução Inferior */}
      <div className="mt-12 flex flex-col items-center pointer-events-none">
        <p className="text-raw-bone/20 text-[9px] uppercase tracking-[0.5em] animate-pulse">
          Desliza ou toca para a próxima
        </p>
        <span className="mt-4 text-[10px] font-archivo text-raw-bone/40 uppercase">
          {currentIndex + 1} / {questions.length}
        </span>
      </div>
    </div>
  );
};

export default Game;