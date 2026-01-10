import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MessageCenter from './components/MessageCenter';

const App: React.FC = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [showPasscodePrompt, setShowPasscodePrompt] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);

  const DEV_PIN = "1337"; // Secret developer PIN

  const handleDashboardRequest = () => {
    setShowPasscodePrompt(true);
  };

  const handlePasscodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === DEV_PIN) {
      setIsDashboardOpen(true);
      setShowPasscodePrompt(false);
      setPasscode('');
      setError(false);
    } else {
      setError(true);
      setPasscode('');
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 space-y-32">
        <section id="hero">
          <Hero />
        </section>

        <section id="projects">
          <ProjectGrid />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer onOpenDashboard={handleDashboardRequest} />
      
      {/* Passcode Protection Modal */}
      {showPasscodePrompt && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md" onClick={() => setShowPasscodePrompt(false)} />
          <form 
            onSubmit={handlePasscodeSubmit}
            className={`relative w-full max-w-sm bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] shadow-2xl transition-transform ${error ? 'animate-bounce text-red-500' : ''}`}
          >
            <h3 className="text-xl font-bold mb-2 text-white">Developer Access</h3>
            <p className="text-sm text-zinc-500 mb-6">Enter secure PIN to access the message vault.</p>
            <input 
              autoFocus
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="••••"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 text-center text-2xl tracking-[1em] focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-white mb-4"
            />
            <div className="flex gap-3">
              <button 
                type="button"
                onClick={() => setShowPasscodePrompt(false)}
                className="flex-1 py-3 text-sm font-bold text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-500/20 transition-all"
              >
                Unlock
              </button>
            </div>
          </form>
        </div>
      )}

      {isDashboardOpen && (
        <MessageCenter onClose={() => setIsDashboardOpen(false)} />
      )}
    </div>
  );
};

export default App;