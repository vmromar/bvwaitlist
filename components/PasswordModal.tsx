
import React, { useState } from 'react';
import { VALID_PASSCODES } from '../constants';

interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const PasswordModal: React.FC<PasswordModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [view, setView] = useState<'LOGIN' | 'SIGNUP'>('LOGIN');
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState(false);
  const [signedUp, setSignedUp] = useState(false);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  
  const WHATSAPP_NUMBER = "212619003275";

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const input = passwordInput.trim().toUpperCase();
    if (VALID_PASSCODES.includes(input)) {
      onSuccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName && email) {
      setSignedUp(true);
      const message = encodeURIComponent(`ACCESS REQUEST: ${fullName} (${email})`);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
      setTimeout(() => {
        setView('LOGIN');
        setSignedUp(false);
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-3xl animate-in fade-in duration-300">
      <div className="w-full max-w-sm glass rounded-[2.5rem] p-10 md:p-12 ios-shadow relative overflow-hidden">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-8 text-zinc-500 hover:text-white transition-colors text-xl font-light"
        >
          ✕
        </button>
        
        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-black tracking-tight uppercase italic text-white mb-2">WaitList Pass</h2>
          <p className="text-[9px] tracking-[0.3em] text-blue-500 font-bold uppercase">
            {view === 'LOGIN' ? 'Authorized Access' : 'Register Profile'}
          </p>
        </div>

        {view === 'LOGIN' ? (
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className={`w-full bg-white/5 border ${error ? 'border-red-500/50' : 'border-white/10'} rounded-2xl p-5 text-white focus:outline-none focus:border-blue-500/50 transition-all text-center tracking-[0.5em] text-lg`}
              placeholder="••••"
              autoFocus
            />
            
            <button
              type="submit"
              className="w-full bg-white text-black font-bold p-5 rounded-2xl uppercase text-[10px] tracking-widest hover:bg-blue-600 hover:text-white transition-all transform active:scale-95 shadow-xl"
            >
              Lets Gooo
            </button>

            <button 
              type="button"
              onClick={() => setView('SIGNUP')}
              className="w-full text-[9px] text-zinc-500 hover:text-white uppercase tracking-widest transition-colors"
            >
              Request Access Code
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:border-blue-500/50 text-xs tracking-widest"
              placeholder="FULL NAME"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:border-blue-500/50 text-xs tracking-widest"
              placeholder="EMAIL ADDRESS"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold p-5 rounded-2xl uppercase text-[10px] tracking-widest hover:bg-blue-500 transition-all"
            >
              Submit Request
            </button>
            <button 
              type="button"
              onClick={() => setView('LOGIN')}
              className="w-full text-[9px] text-zinc-500 hover:text-white uppercase tracking-widest transition-colors pt-2"
            >
              Back to Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PasswordModal;
