
import React, { useState, useEffect } from 'react';
import { contactService } from '../contactService';

interface FooterProps {
  onOpenDashboard?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenDashboard }) => {
  const currentYear = new Date().getFullYear();
  const [unreadCount, setUnreadCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    setUnreadCount(contactService.getUnreadCount());
    const handleStorage = () => setUnreadCount(contactService.getUnreadCount());
    window.addEventListener('storage', handleStorage);
    const interval = setInterval(handleStorage, 2000);
    return () => {
      window.removeEventListener('storage', handleStorage);
      clearInterval(interval);
    };
  }, []);

  const handleSecretTrigger = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 5) {
      setIsRevealed(true);
      // Optional: Visual confirmation that secret is revealed
      console.log("Dev Mode Activated");
    }
    // Reset click count after 2 seconds of inactivity
    const timeout = setTimeout(() => setClickCount(0), 2000);
    return () => clearTimeout(timeout);
  };
  
  return (
    <footer className="border-t border-zinc-900 py-12 px-6 lg:px-12 mt-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <a href="#hero" className="text-xl font-bold tracking-tight text-indigo-400">
            EFEMENA<span className="text-zinc-600">.DEV</span>
          </a>
          <button 
            onClick={handleSecretTrigger}
            className="text-sm text-zinc-500 cursor-default select-none hover:text-zinc-400 transition-colors active:scale-95"
          >
            &copy; {currentYear} Efemena Evwierhurhoma. All rights reserved.
          </button>
        </div>

        <div className="flex gap-8 text-sm font-medium text-zinc-500 items-center">
          <a href="#projects" className="hover:text-zinc-100 transition-colors">Work</a>
          <a href="#skills" className="hover:text-zinc-100 transition-colors">Skills</a>
          <a href="#about" className="hover:text-zinc-100 transition-colors">About</a>
          <a href="#contact" className="hover:text-zinc-100 transition-colors">Contact</a>
          
          {onOpenDashboard && isRevealed && (
            <button 
              onClick={onOpenDashboard}
              className="relative px-3 py-1 border border-zinc-800 rounded text-[10px] uppercase font-bold text-zinc-400 hover:text-indigo-400 hover:border-indigo-400/50 transition-all flex items-center gap-2 group animate-in fade-in slide-in-from-right-2 duration-500"
            >
              Dev Dashboard
              {unreadCount > 0 && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500 text-[8px] text-white animate-bounce group-hover:animate-none">
                  {unreadCount}
                </span>
              )}
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
