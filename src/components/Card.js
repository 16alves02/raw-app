// Substitui o teu components/Card.js por este:
import React from 'react';

const Card = ({ text, category, color = '#00F0FF' }) => {
  // Verifica se o texto contém quebras de linha (comum nos novos modos)
  const isList = text.includes('\n');

  return (
    <div 
      className="w-full max-w-md aspect-[3/4] bg-raw-bone p-8 flex flex-col justify-between transition-all duration-500"
      style={{ 
        boxShadow: `20px 20px 0px 0px ${color}` 
      }}
    >
      <div className="flex justify-between items-start">
        <span className="text-raw-onyx font-archivo text-[10px] tracking-tighter">
          RAW<span style={{ color: color }}>.</span> SESSION
        </span>
        
        <span 
          className="px-2 py-1 text-raw-bone text-[9px] font-bold uppercase"
          style={{ backgroundColor: color }}
        >
          {category}
        </span>
      </div>
      
      <div className="flex-grow flex items-center justify-center">
        <h3 className={`text-raw-onyx font-archivo leading-tight uppercase text-center whitespace-pre-line ${
          text.length > 100 ? 'text-xl' : 'text-3xl'
        }`}>
          {isList ? text : `"${text}"`}
        </h3>
      </div>

      <div className="border-t border-raw-onyx/10 pt-4 flex justify-center">
        <span className="text-[8px] text-raw-onyx/40 uppercase tracking-[0.4em]">
          Read Carefully
        </span>
      </div>
    </div>
  );
};

export default Card;