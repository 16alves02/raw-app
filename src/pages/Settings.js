import React from 'react';

const Settings = ({ onBack, settings, onUpdate }) => {
  const languages = [
    { id: 'PT-PT', label: 'Português (EU)' },
    { id: 'EN', label: 'English' },
    { id: 'ES', label: 'Español' },
    { id: 'FR', label: 'Français' },
    { id: 'DE', label: 'Deutsch' }
  ];

  return (
    <div className="min-h-screen bg-raw-onyx text-raw-bone p-8 flex flex-col items-center overflow-y-auto">
      <div className="max-w-2xl w-full pt-12 pb-20">
        
        {/* HEADER */}
        <div className="flex justify-between items-end mb-12 border-b border-raw-bone/10 pb-8">
          <h1 className="text-6xl font-archivo tracking-tighter uppercase font-bold text-white">
            Config<span className="text-raw-cyan">.</span>
          </h1>
          <button 
            onClick={onBack} 
            className="text-[10px] uppercase tracking-[0.3em] text-raw-cyan font-bold mb-2 hover:opacity-70 transition-all border border-raw-cyan/20 px-4 py-2"
          >
            [ Fechar ]
          </button>
        </div>

        <div className="space-y-16">
          
          {/* SECÇÃO: IDIOMA */}
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-raw-bone/30 mb-6 font-bold font-archivo">Region / Language</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => onUpdate('language', lang.id)}
                  className={`p-4 border transition-all duration-300 text-left uppercase text-[10px] tracking-widest font-archivo ${
                    settings.language === lang.id 
                      ? 'border-raw-cyan text-raw-cyan bg-raw-cyan/5' 
                      : 'border-raw-bone/10 text-raw-bone/40 hover:border-raw-bone/30'
                  }`}
                >
                  {lang.label}
                  {settings.language === lang.id && <span className="float-right text-[8px]">●</span>}
                </button>
              ))}
            </div>
          </section>

          {/* SECÇÃO: PERFORMANCE */}
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-raw-bone/30 mb-6 font-bold font-archivo">Interface</h2>
            <div className="flex justify-between items-center p-5 border border-raw-bone/10 bg-white/[0.02]">
              <div className="flex flex-col">
                <span className="font-archivo text-xs uppercase tracking-wider">Animações de Sistema</span>
              </div>
              <button 
                onClick={() => onUpdate('animations', !settings.animations)}
                className={`w-12 h-6 border transition-all flex items-center px-1 ${
                    settings.animations ? 'border-raw-cyan bg-raw-cyan/10' : 'border-raw-bone/20'
                }`}
              >
                <div className={`w-3 h-3 transition-all ${
                    settings.animations ? 'bg-raw-cyan translate-x-6' : 'bg-raw-bone/20 translate-x-0'
                }`} />
              </button>
            </div>
          </section>

          {/* SECÇÃO: THE STORY */}
          <section className="relative border-l-2 border-raw-red pl-8 py-2">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-raw-red mb-6 font-bold font-archivo tracking-tighter">The Story</h2>
            
            <div className="font-inter text-sm leading-relaxed text-raw-bone/80 space-y-6">
              <p>
                A <span className="text-raw-cyan font-bold font-archivo uppercase">RAW.</span> nasceu para quebrar o isolamento digital e resgatar a conexão humana verdadeira.
              </p>

              <div className="bg-white/5 p-6 border border-raw-bone/5">
                <h3 className="font-archivo text-[10px] uppercase tracking-widest mb-2 text-white/50">Missão</h3>
                <p className="text-xs text-raw-bone/60 leading-relaxed uppercase tracking-tighter">
                  Iluminar conexões através de perguntas cruas e sem filtros. Desliga o automático. Encara a realidade.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-raw-bone/5 flex flex-col items-start space-y-4">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-raw-bone/20 block mb-1">Lead Developer</span>
                  <span className="text-xl font-archivo tracking-tighter">16ALVES02</span>
                </div>
                <a 
                  href="https://github.com/16alves02" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-raw-cyan hover:underline text-[10px] font-bold uppercase tracking-widest"
                >
                  [ View Source on GitHub ]
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Settings;