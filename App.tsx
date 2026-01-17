
import React, { useState } from 'react';
import TopTicker from './components/TopTicker';
import PasswordModal from './components/PasswordModal';
import DynamicIsland from './components/DynamicIsland';
import { LOCK_ICON, PRODUCTS } from './constants';
import { AppState } from './types';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.LOCKED);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const WHATSAPP_NUMBER = "212619003275";

  const handleUnlock = () => {
    setIsModalOpen(false);
    setAppState(AppState.UNLOCKED);
  };

  const handleAddToCart = (productName: string, price: string) => {
    const message = encodeURIComponent(`Hello BURVLAND,\n\nI would like to order the ${productName} (${price}).\n\nPlease let me know the next steps for shipping.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const CollabSection = () => (
    <div className="flex items-center justify-center gap-6 mt-6 mb-12 opacity-80 group/collab transition-opacity hover:opacity-100">
      <div className="h-[1px] w-8 bg-zinc-800"></div>
      <div className="flex items-center gap-4">
        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white">BURVLAND</span>
        <span className="text-zinc-600 font-light text-xl">×</span>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Strava_Logo.svg" 
          alt="Strava" 
          className="h-4 brightness-0 invert opacity-60 group-hover/collab:opacity-100 transition-opacity" 
        />
      </div>
      <div className="h-[1px] w-8 bg-zinc-800"></div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-600 selection:text-white">
      <TopTicker />
      <DynamicIsland />

      {appState === AppState.LOCKED ? (
        <main className="flex-1 flex flex-col items-center justify-center px-6 relative">
          <div className="max-w-6xl w-full text-center z-10 pt-20">
            <div className="inline-block px-4 py-1 glass rounded-full mb-8">
              <span className="text-blue-400 font-bold text-[10px] tracking-[0.5em] uppercase">
                Nothing Stops Us
              </span>
            </div>
            
            <h1 className="brand-title font-black uppercase mb-4 text-white">
              BURVLAND
            </h1>
            
            <CollabSection />
            
            <p className="max-w-2xl mx-auto text-zinc-400 text-sm md:text-lg mb-12 tracking-tight font-light leading-relaxed">
              Technical bundle engineered for extreme thermal regulation. <br className="hidden md:block" />
              Access restricted to authorized personnel only.
            </p>

            <div className="flex flex-col items-center gap-6">
              <div className="relative group">
                {/* Floating Item Decorations on Hover */}
                <div className="hover-item top-0 left-1/2 w-2 h-2 bg-blue-500 rounded-full" style={{ '--translate-target': 'translate(-60px, -110px)' } as any}></div>
                <div className="hover-item top-0 left-1/2 w-4 h-4 border border-blue-500/50 rotate-45" style={{ '--translate-target': 'translate(90px, -90px)' } as any}>burv</div>
                <div className="hover-item top-0 left-1/2 text-[9px] font-black text-blue-400 tracking-tighter" style={{ '--translate-target': 'translate(-140px, -30px)' } as any}>Nothing Stops Us</div>
                <div className="hover-item top-0 left-1/2 w-1 h-12 bg-zinc-800" style={{ '--translate-target': 'translate(120px, 40px)' } as any}>burvland</div>
                <div className="hover-item top-0 left-1/2 w-8 h-[1px] bg-white/20" style={{ '--translate-target': 'translate(-160px, 70px)' } as any}>Nothing Stops Us</div>
                
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="relative z-10 flex items-center gap-4 bg-white text-black px-12 py-6 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 ios-shadow overflow-hidden group-hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                >
                  <span className="uppercase text-[11px] tracking-[0.3em] relative z-10">Enter Access Code</span>
                  <div className="group-hover:rotate-12 transition-transform relative z-10 text-blue-600">{LOCK_ICON}</div>
                </button>
              </div>
              
              <p className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] mt-8">
                Global Shipment // Winter 2026
              </p>
            </div>
          </div>
        </main>
      ) : (
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24 pt-40">
          <header className="mb-16 md:mb-32 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 border-b border-white/5 pb-12">
            <div className="text-center md:text-left">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">BURVLAND</h2>
              <div className="flex items-center gap-3 mt-4">
                <p className="text-[10px] tracking-[0.8em] text-blue-500 uppercase font-bold">Stay tuned we collaborate with</p>
                <span className="text-zinc-800">|</span>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Strava_Logo.svg" 
                  alt="Strava" 
                  className="h-3 brightness-0 invert opacity-40" 
                />
              </div>
            </div>
            <div className="hidden md:block text-right">
               <span className="glass px-6 py-3 rounded-full text-[10px] font-bold text-zinc-400 uppercase tracking-widest border border-white/5">
                 Nothing Stops Us
               </span>
            </div>
          </header>

          <div className="flex justify-center w-full">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="glass rounded-[3rem] overflow-hidden w-full max-w-4xl ios-shadow group border border-white/5">
                <div className="grid md:grid-cols-2">
                  <div className="aspect-square md:aspect-auto relative bg-black/40 p-6">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name}
                      className="w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                    />
                    <div className="absolute top-10 left-10">
                      <span className="bg-blue-600/20 backdrop-blur-md border border-blue-500/30 px-4 py-1.5 rounded-xl text-[9px] font-black tracking-[0.3em] text-blue-400 uppercase">
                        Limited Pack
                      </span>
                    </div>
                  </div>

                  <div className="p-10 md:p-16 flex flex-col justify-between space-y-10">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-none">{product.name}</h3>
                        <span className="text-xl font-bold mono text-blue-500">{product.price}</span>
                      </div>
                      <p className="text-[11px] text-zinc-500 uppercase tracking-widest leading-relaxed mb-10 font-light">
                        {product.description}
                      </p>

                      <div className="grid grid-cols-2 gap-y-4">
                        {['Core Hoodie', 'Tactical Cargos', 'Strike Balaclava', 'Block-01 Puffer', 'Raw Tee', 'Thermal LS'].map(item => (
                          <div key={item} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600/40"></div>
                            <span className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button 
                      onClick={() => handleAddToCart(product.name, product.price)}
                      className="w-full bg-white text-black py-6 rounded-[1.5rem] text-[11px] font-black uppercase tracking-[0.4em] hover:bg-blue-600 hover:text-white transition-all transform active:scale-95 shadow-xl"
                    >
                      PURCHASE THE PACK
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <footer className="mt-48 pb-16 flex flex-col items-center text-center">
            <h2 className="text-5xl font-black tracking-tighter mb-12 text-white opacity-[0.03]">BURVLAND</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 mb-16">
               <a href="https://www.instagram.com/burvland/" className="hover:text-blue-500 transition-colors">Instagram</a>
               <a href="#" className="hover:text-blue-400 transition-colors">Discord</a>
               <a href="#" className="hover:text-blue-400 transition-colors">Youtube</a>
               <a href="https://burvwaitlist.vercel.app" className="hover:text-blue-400 transition-colors">Home</a>
            </div>
            <p className="text-[9px] font-black uppercase tracking-[0.8em] text-zinc-800">&copy; 2026 BURVLAND waitlist ,all right are reserved</p>
          </footer>
        </main>
      )}

      <PasswordModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleUnlock}
      />
    </div>
  );
};

export default App;
