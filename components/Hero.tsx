
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 pb-12 flex flex-col items-center text-center">
      <div className="absolute top-0 -z-10 w-full max-w-lg aspect-square bg-indigo-500/10 blur-[120px] rounded-full" />
      
      <div className="mb-8 relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <img
          src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/aa41abdebb32183d13bf1d390b5a4e69~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=add5ab47&x-expires=1768147200&x-signature=R8mqtNAqcLgf573Yt51ITHrxQcQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
          alt="Efemena Evwierhurhoma"
          className="relative w-32 h-32 rounded-full border-4 border-zinc-900 shadow-xl object-cover"
        />
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 leading-tight">
        Efemena <br className="hidden sm:block" />
        Evwierhurhoma
      </h1>

      <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 font-medium">
        Frontend Engineer crafting <span className="text-indigo-400">polished production UIs</span> with thoughtful AI integrations and modern craftsmanship.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#projects"
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
        >
          View Projects
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        
        <a
          href="#contact"
          className="px-8 py-4 bg-zinc-800 border border-zinc-700 hover:bg-zinc-750 text-white rounded-xl font-bold transition-all flex items-center justify-center hover:scale-[1.02] active:scale-95 shadow-sm"
        >
          Get in Touch
        </a>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-widest text-zinc-600">
        <span className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> 
          Open for Opportunities
        </span>
        <span>•</span>
        <span>Based in Lagos, Nigeria</span>
        <span>•</span>
        <span>Relocation Available</span>
      </div>
    </div>
  );
};

export default Hero;
