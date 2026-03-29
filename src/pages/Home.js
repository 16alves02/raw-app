import React from 'react';

const Home = ({ onNavigate }) => {
    const modes = [
    {
      id: 'deep',
      title: 'THE DEEP END',
      subtitle: 'Conexão & Vulnerabilidade',
      color: 'border-[#00F0FF] text-[#00F0FF]',
      desc: 'Para quem não tem medo de sentir.'
    },
    {
      id: 'unfiltered',
      title: 'UNFILTERED',
      subtitle: 'Caos & Festa',
      color: 'border-[#FF3E3E] text-[#FF3E3E]',
      desc: 'O que acontece na RAW., fica na RAW.'
    },
    {
      id: 'lab',
      title: 'THE LAB',
      subtitle: 'Dinâmicas de Grupo',
      color: 'border-[#F2F2F2] text-[#F2F2F2]',
      desc: 'Jogos mentais e estratégia social.'
    }
  ];

  return (
    <div className="min-h-screen bg-raw-onyx p-6 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-8xl md:text-9xl font-archivo text-raw-bone tracking-tighter animate-pulse-slow">
          RAW<span className="text-raw-cyan">.</span>
        </h1>
        <p className="text-raw-bone/50 font-inter tracking-[0.2em] uppercase mt-2">
          Stay Real. Stay RAW.
        </p>
      </div>

      {/* Grid de Modos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {modes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => onNavigate(mode.id)} // Envia o ID ('deep', 'unfiltered' ou 'lab')
            className={`group relative p-8 border-2 ${mode.color} bg-transparent hover:bg-raw-bone hover:text-raw-onyx transition-all duration-300 text-left`}
          >
            <span className="text-xs uppercase tracking-widest opacity-70">{mode.subtitle}</span>
            <h2 className="text-3xl font-archivo mt-2 mb-4 uppercase">{mode.title}</h2>
            <p className="text-sm font-inter opacity-0 group-hover:opacity-100 transition-opacity">
              {mode.desc}
            </p>
            <div className="absolute bottom-4 right-4 text-2xl transition-transform group-hover:translate-x-2">→</div>
          </button>
        ))}
      </div>

      {/* Créditos no Footer da Home */}
      <footer className="mt-20 flex flex-col items-center space-y-2">
        <span className="text-[10px] text-raw-bone/30 uppercase tracking-[0.3em]">Lead Developer</span>
        <a 
          href="https://github.com/16alves02" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-raw-bone hover:text-raw-cyan transition-colors font-bold tracking-widest text-xs"
        >
          @16ALVES02
        </a>
      </footer>
    </div>
  );
};

export default Home;