import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { ExternalLink, Code } from 'lucide-react';
import SectionHeading from '../SectionHeading';

export default function Projects() {
  const { projects } = portfolioData;
  return (
    <section id="projects" className="py-16 w-full px-6 bg-transparent">
      <div className="container max-w-6xl mx-auto">
        <SectionHeading title={projects.title} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.items.map((project, idx) => (
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
                    <Code size={16} /> Code
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
}