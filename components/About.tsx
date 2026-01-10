
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-12 text-center">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 mb-4">The Mindset</h2>
          <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Building the web, one <span className="text-zinc-500">pixel-perfect</span> interaction at a time.
          </h3>
        </div>

        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto">
          <p>
            I'm a Frontend Engineer who believes that the bridge between code and design shouldn't be a gap, but a seamless transition. With over 4 years of experience, I focus on creating high-performance, accessible, and beautiful user interfaces.
          </p>
          <p>
            I specialize in building complex, interactive web applications that demand both technical precision and aesthetic polish. My approach centers on modularity, scalability, and an uncompromising focus on the end-user experience.
          </p>
          <p>
            When I'm not coding, you'll find me exploring typography, contributing to open-source UI libraries, or sharing my journey on technical blogs. I'm driven by curiosity and a relentless desire to polish everything I touch.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-800">
          <div>
            <div className="text-4xl font-bold text-white mb-1">50+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-1">4+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
