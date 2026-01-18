import React, { useState } from 'react';

const DynamicIsland: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed top-12 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center pointer-events-none">
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          pointer-events-auto
          bg-black/95 backdrop-blur-2xl border border-white/10 shadow-2xl
          transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          overflow-hidden flex flex-col items-center justify-center
          ${isExpanded ? 'w-[calc(100vw-3rem)] max-w-sm h-24 rounded-[2rem] p-6' : 'w-36 h-9 rounded-full cursor-pointer hover:w-44'}
        `}
      >
        {!isExpanded ? 
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></div>
            <span className="text-[10px] font-black tracking-[0.2em] text-white uppercase">Try BURV</span>
          </div>
        : (
          <div className="w-full flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-[8px] font-black text-white italic">BURV</div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-black rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Boost your Mentality with BURV</span>
                <span className="text-[9px] text-zinc-500 font-medium tracking-wider mt-0.5">@mr.burv</span>
              </div>
            </div>
            
            <a 
              href="https://instagram.com/mr.burv" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-black px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all active:scale-95"
            >
              Open Now
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicIsland;
