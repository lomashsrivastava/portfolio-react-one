import fs from 'fs';

const Hero = `import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center pt-20 px-6">
      <div className="container max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left z-10"
        >
          <h2 className="text-secondary font-orbitron text-xl md:text-2xl font-bold mb-2 tracking-widest uppercase">System Operational</h2>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient"> {portfolioData.name}</span>
          </h1>
          <div className="h-12 mb-8">
            <p className="text-2xl md:text-3xl text-gray-300 font-exo font-light uppercase tracking-widest border-r-4 border-primary inline-block pr-2 animate-pulse">
              {portfolioData.role}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
            <a href="#projects" className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full font-orbitron font-bold tracking-widest border border-primary text-primary hover:text-darker transition-colors duration-300 w-full sm:w-auto text-center">
              <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">Deploy Projects <ChevronRight size={20} /></span>
            </a>
            <a href="/assets/pdf/Resume.pdf" download className="group px-8 py-4 bg-white/5 hover:bg-white/10 rounded-full font-orbitron font-bold tracking-widest border border-white/20 text-white transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2 backdrop-blur-sm">
               Download Data <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-sm md:max-w-md relative"
        >
          <div className="relative w-full aspect-square rounded-3xl overflow-hidden glass-card neon-border z-10 transform sm:hover:rotate-3 transition-transform duration-500">
            <img src="/assets/img/profile.jpeg" alt={portfolioData.name} className="w-full h-full object-cover object-top filter contrast-125" />
            <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent opacity-60"></div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-20 -z-10 animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
}`;

const About = `import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 w-full px-6">
      <div className="container max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary inline-block">
            Entity_Origin
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 text-lg text-gray-300 leading-relaxed font-light">
            <div>
              <p className="mb-6">{portfolioData.about}</p>
              <p>Constantly upgrading modules to integrate the latest tech stacks and optimize performance architectures.</p>
            </div>
            
            <div className="flex flex-col gap-6 justify-center">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                <h3 className="font-orbitron text-xl text-white mb-2">Prime Directive</h3>
                <p className="text-sm">Build pixel-perfect, highly scalable, and futuristic digital experiences that push boundaries.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-secondary/50 transition-colors">
                <h3 className="font-orbitron text-xl text-white mb-2">Current Status</h3>
                <p className="text-sm">Available for new opportunities and challenging missions.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}`;

const Skills = `import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

const icons = {
  frontend: <Layout className="text-primary mb-4 w-10 h-10" />,
  backend: <Terminal className="text-secondary mb-4 w-10 h-10" />,
  database: <Database className="text-accent1 mb-4 w-10 h-10" />,
  tools: <Code2 className="text-white mb-4 w-10 h-10" />
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 w-full px-6">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center font-orbitron uppercase tracking-widest text-glow-primary">Tech_Arsenal</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(portfolioData.skills).map(([category, items], idx) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 border-t-4 hover:-translate-y-2 transition-transform duration-300"
              style={{ borderTopColor: idx % 2 === 0 ? '#00f3ff' : '#ff00ff' }}
            >
              {icons[category]}
              <h3 className="text-2xl font-bold mb-6 capitalize text-white font-orbitron">{category}</h3>
              <ul className="space-y-3">
                {items.map(skill => (
                  <li key={skill} className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#00f3ff]"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`;

const Sections = {
  Hero, About, Skills
};

Object.entries(Sections).forEach(([name, content]) => {
  fs.writeFileSync('src/components/sections/' + name + '.jsx', content);
});

console.log("Sections generated");
