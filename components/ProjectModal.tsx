
import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4 md:p-6">
      <div 
        className="absolute inset-0 bg-zinc-950/90 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-5xl max-h-[95vh] bg-zinc-900 rounded-2xl sm:rounded-3xl overflow-y-auto shadow-2xl border border-zinc-800 animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="sticky top-4 right-4 sm:top-6 sm:right-6 float-right z-50 p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors shadow-lg text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-5 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400">Case Study</span>
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight text-white">{project.title}</h2>
              
              <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1 bg-zinc-800 rounded-full text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-6 sm:space-y-8">
                <section>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Overview</h4>
                  <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">
                    {project.longDescription}
                  </p>
                </section>

                <section>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Technical Decisions</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {project.details.techDecisions.map((decision, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                        {decision}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4">
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none px-6 py-3 bg-white text-zinc-950 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                  Live Preview
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 01-2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none px-6 py-3 border border-zinc-700 text-zinc-400 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors">
                  Source Code
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-zinc-800 bg-zinc-800">
                <img src={project.image} alt={project.title} className="w-full h-auto" />
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-zinc-800 bg-zinc-800">
                    <img src={img} alt={`${project.title} detail ${idx + 1}`} className="w-full h-auto object-cover aspect-[3/2] hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
