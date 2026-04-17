import fs from 'fs';

const Projects = `import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 w-full px-6">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center font-orbitron uppercase tracking-widest text-glow-secondary text-secondary">Neural_Constructs</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card overflow-hidden group border border-white/5 hover:border-primary/50 transition-colors"
            >
              <div className="h-48 bg-darker relative overflow-hidden flex items-center justify-center p-6 border-b border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0"></div>
                <h3 className="text-2xl font-orbitron font-bold text-white z-10 text-center group-hover:scale-110 transition-transform duration-500">{project.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-6 h-20 overflow-hidden line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded text-primary">{t}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-primary hover:text-white transition-colors">
                    Demo <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`;

const Experience = `import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 w-full px-6 relative">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center font-orbitron uppercase tracking-widest text-glow-primary">Experience_Logs</h2>
        
        <div className="relative border-l border-white/20 ml-4 md:ml-0 md:pl-0">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="mb-12 relative pl-8 md:pl-0 md:flex items-center justify-between group"
            >
              {/* Timeline marker for mobile */}
              <div className="absolute w-4 h-4 bg-primary rounded-full left-[-9px] top-1 md:hidden shadow-[0_0_10px_#00f3ff]"></div>
              
              <div className="md:w-5/12 text-left md:text-right mb-2 md:mb-0 pr-8">
                <h3 className="text-2xl font-bold text-white font-orbitron">{exp.company}</h3>
                <p className="text-primary font-mono text-sm">{exp.duration}</p>
              </div>
              
              {/* Timeline marker for desktop view */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_#00f3ff] group-hover:scale-150 transition-transform"></div>
              
              <div className="md:w-5/12 pl-0 md:pl-8">
                <div className="glass-card p-6 bg-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="text-xl font-semibold mb-2 text-secondary">{exp.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Custom style for md vertical line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-l border-white/20 z-[-1]"></div>
        </div>
      </div>
    </section>
  );
}`;

const Education = `import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 w-full px-6">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center font-orbitron uppercase tracking-widest text-glow-secondary text-secondary">Academic_Records</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.education.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform group-hover:shadow-[0_0_20px_#ff00ff]">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white font-orbitron">{edu.degree}</h3>
              <h4 className="text-lg text-primary mb-4">{edu.institution}</h4>
              <span className="px-4 py-1 rounded-full bg-white/10 text-xs text-gray-300 font-mono mb-6">{edu.year}</span>
              <p className="text-gray-400 text-sm">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`;

const Sections2 = { Projects, Experience, Education };

Object.entries(Sections2).forEach(([name, content]) => {
  fs.writeFileSync('src/components/sections/' + name + '.jsx', content);
});
console.log("Sections 2 generated");
