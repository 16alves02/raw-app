import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-black border-t border-raw-bone/5 mt-auto">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex space-x-8 text-[9px] uppercase tracking-[0.4em] text-raw-bone/20 font-inter">
          <span>© 2026 RAW. PROJECT</span>
          <span>EST. PORTUGAL</span>
        </div>
        
        <div className="flex space-x-2">
          <div className="w-8 h-[1px] bg-raw-cyan/20"></div>
          <div className="w-2 h-[1px] bg-raw-red/40"></div>
          <div className="w-8 h-[1px] bg-raw-cyan/20"></div>
        </div>

        <p className="text-[8px] text-raw-bone/10 uppercase tracking-[0.5em]">
          Built for deep connections — No filters allowed.
        </p>
      </div>
    </footer>
  );
};

export default Footer;