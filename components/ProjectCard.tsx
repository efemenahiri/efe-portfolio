
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 px-2 py-0.5 bg-indigo-500/10 rounded">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors text-white">
          {project.title}
        </h3>
        
        <p className="text-zinc-400 text-sm line-clamp-2 mb-8">
          {project.description}
        </p>

        <div className="mt-auto flex items-center gap-2 text-sm font-bold text-indigo-400">
          View Case Study
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
