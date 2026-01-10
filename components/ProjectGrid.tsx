
import React, { useState, useMemo, useRef } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Project } from '../types';

type ProjectCategory = 'All' | 'AI Solutions' | 'SaaS Platforms' | 'E-Commerce';

const ProjectGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filters: ProjectCategory[] = ['All', 'AI Solutions', 'SaaS Platforms', 'E-Commerce'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      if (activeFilter === 'All') return true;
      
      const tags = project.tags.map(t => t.toLowerCase());
      const desc = (project.description + project.title).toLowerCase();

      if (activeFilter === 'AI Solutions') {
        return tags.some(t => t.includes('ai') || t.includes('gemini'));
      }
      if (activeFilter === 'SaaS Platforms') {
        return tags.some(t => t.includes('saas') || t.includes('lms') || t.includes('system')) || 
               desc.includes('dashboard') || desc.includes('workspace');
      }
      if (activeFilter === 'E-Commerce') {
        return desc.includes('store') || desc.includes('hotel') || desc.includes('cafe') || desc.includes('lounge') || desc.includes('shop');
      }
      return false;
    });
  }, [activeFilter]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = filteredProjects.length > visibleCount;
  const canViewLess = visibleCount > 6;

  const handleFilterChange = (filter: ProjectCategory) => {
    setActiveFilter(filter);
    setVisibleCount(6);
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const viewLess = () => {
    setVisibleCount(6);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div ref={sectionRef} className="space-y-12 scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-white">Selected Work</h2>
          <p className="text-zinc-400 max-w-xl">
            A collection of digital experiences that prioritize accessibility, performance, and clean aesthetics.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 p-1.5 bg-zinc-900/50 border border-zinc-800 rounded-2xl w-fit">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'text-zinc-500 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {visibleProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div key={project.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <ProjectCard 
                project={project} 
                onClick={() => setSelectedProject(project)} 
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center border-2 border-dashed border-zinc-800 rounded-3xl">
          <p className="text-zinc-500 font-medium">No projects found in this category.</p>
          <button 
            onClick={() => handleFilterChange('All')}
            className="mt-4 text-indigo-500 font-bold hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8">
        {hasMore && (
          <button
            onClick={loadMore}
            className="group relative w-full sm:w-auto px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-indigo-500/20 overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
            Load More Projects
          </button>
        )}
        
        {canViewLess && (
          <button
            onClick={viewLess}
            className="w-full sm:w-auto px-10 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-2xl font-bold transition-all hover:bg-zinc-850 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
            Show Less
          </button>
        )}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default ProjectGrid;
