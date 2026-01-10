
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 tracking-tight text-white">Expertise</h2>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Built on a foundation of fundamental engineering principles, my stack evolves with the ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILL_CATEGORIES.map((category) => (
          <div 
            key={category.title}
            className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 transition-colors group"
          >
            <h3 className="text-lg font-bold mb-6 text-white group-hover:text-indigo-400 transition-colors">
              {category.title}
            </h3>
            <ul className="space-y-4">
              {category.skills.map(skill => (
                <li key={skill} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/40 group-hover:bg-indigo-500 transition-colors" />
                  <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="p-8 rounded-3xl bg-indigo-600 text-white flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
        <div className="relative z-10">
          <h4 className="text-2xl font-bold mb-2">Want to see my full stack in action?</h4>
          <p className="text-indigo-100 max-w-md">I regularly publish technical articles and open-source boilerplates on my GitHub.</p>
        </div>
        <a 
          href="https://github.com/efemenahiri" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative z-10 px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:bg-zinc-100 transition-all shadow-xl shadow-black/10"
        >
          Explore Repo
        </a>
      </div>
    </div>
  );
};

export default Skills;
