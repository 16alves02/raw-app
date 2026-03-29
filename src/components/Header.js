import React from 'react';

const Header = ({ onOpenSettings, currentLang }) => {
  return (
    <header className="w-full p-6 flex justify-between items-center bg-[#0D0D0D] border-b border-[#F2F2F2]/10 z-50 font-archivo">
      <div 
        className="text-2xl tracking-tighter text-[#F2F2F2] cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => window.location.href = '/'}
      >
        RAW<span className="text-raw-cyan">.</span>
      </div>
      
      <button 
        onClick={onOpenSettings}
        className="group flex items-center space-x-3 focus:outline-none"
      >
        <span className="text-[10px] text-raw-bone/60 uppercase tracking-[0.3em] font-bold group-hover:text-raw-cyan transition-colors">
          {currentLang || 'PT-PT'}
        </span>
        <div className="relative flex items-center justify-center">
          <div className="w-2 h-2 bg-raw-cyan rounded-full group-hover:animate-ping absolute"></div>
          <div className="w-2 h-2 bg-raw-cyan rounded-full relative"></div>
        </div>
      </button>
    </header>
  );
};

export default Header;