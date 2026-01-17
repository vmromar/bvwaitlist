
import React from 'react';

const TopTicker: React.FC = () => {
  const text = "System Active ★ Restricted Access ★ Zero Degree Release ★ Neural Link Established ★ Global Shipping Enabled ★ ";
  
  return (
    <div className="bg-white/95 backdrop-blur-md text-black h-8 flex items-center overflow-hidden sticky top-0 z-[60] border-b border-black/5">
      <div className="ticker-animate flex whitespace-nowrap">
        <span className="font-bold text-[8px] tracking-[0.5em] uppercase">
          {text}{text}{text}{text}{text}{text}
        </span>
      </div>
    </div>
  );
};

export default TopTicker;
