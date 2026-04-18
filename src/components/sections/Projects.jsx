import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { 
  FaGithub, FaLinkedinIn, FaReact, FaNodeJs, FaPython, 
  FaHtml5, FaCss3Alt, FaJs, FaDocker, FaAws 
} from 'react-icons/fa';
import { 
  SiNetlify, SiExpress, SiMongodb, SiDjango, SiTailwindcss, 
  SiVite, SiTypescript, SiJavascript, SiFramer, SiSocketdotio, 
  SiThreedotjs, SiChartdotjs, SiRedux, SiCloudinary, SiFirebase, 
  SiPostgresql, SiFastapi, SiScikitlearn, SiTensorflow, SiGsap, SiSpacy 
} from 'react-icons/si';
import { ExternalLink, Code2 } from 'lucide-react';
import SectionHeading from '../SectionHeading';

// --- Sub-components ---

const getTechIcon = (tech) => {
  const t = tech.toLowerCase();
  if (t.includes('react')) return FaReact;
  if (t.includes('node')) return FaNodeJs;
  if (t.includes('express')) return SiExpress;
  if (t.includes('mongo')) return SiMongodb;
  if (t.includes('django')) return SiDjango;
  if (t.includes('python')) return FaPython;
  if (t.includes('tailwind')) return SiTailwindcss;
  if (t.includes('vite')) return SiVite;
  if (t.includes('typescript')) return SiTypescript;
  if (t.includes('javascript') || t === 'js') return FaJs;
  if (t.includes('html')) return FaHtml5;
  if (t.includes('css')) return FaCss3Alt;
  if (t.includes('docker')) return FaDocker;
  if (t.includes('aws')) return FaAws;
  if (t.includes('framer')) return SiFramer;
  if (t.includes('socket')) return SiSocketdotio;
  if (t.includes('three')) return SiThreedotjs;
  if (t.includes('chart')) return SiChartdotjs;
  if (t.includes('redux')) return SiRedux;
  if (t.includes('cloudinary')) return SiCloudinary;
  if (t.includes('firebase')) return SiFirebase;
  if (t.includes('postgres')) return SiPostgresql;
  if (t.includes('fastapi')) return SiFastapi;
  if (t.includes('scikit')) return SiScikitlearn;
  if (t.includes('tensor')) return SiTensorflow;
  if (t.includes('gsap')) return SiGsap;
  if (t.includes('spacy')) return SiSpacy;
  return Code2;
};

const TechIcon = ({ tech, theme }) => {
  const Icon = getTechIcon(tech);
  return (
    <div className="relative group/icon">
      <Icon 
        size={18} 
        className={`${theme.text} opacity-50 group-hover/icon:opacity-100 transition-opacity duration-300`}
      />
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/10 backdrop-blur-md rounded border border-white/5 text-[8px] text-white opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
        {tech}
      </div>
    </div>
  );
};

const SocialBox = ({ href, icon: Icon, theme, title }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.98 }}
    title={title}
    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 border ${theme.border} ${theme.bg} ${theme.text} hover:shadow-[0_0_15px_rgba(var(--theme-rgb),0.3)] relative group overflow-hidden`}
    style={{ '--theme-rgb': theme.rgb }}
  >
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-white/5 to-transparent`}></div>
    <Icon size={20} className="relative z-10" />
    <div className={`absolute inset-0 blur-lg ${theme.bg} opacity-5`}></div>
  </motion.a>
);

// --- Main Section ---

export default function Projects() {
  const { projects, contact } = portfolioData;

  const cardThemes = [
    { name: 'cyan', border: 'border-cyan-500/30', text: 'text-cyan-400', bg: 'bg-cyan-500/10', badge: 'bg-cyan-500/20', rgb: '6, 182, 212', glow: 'shadow-cyan-500/20' },
    { name: 'fuchsia', border: 'border-fuchsia-500/30', text: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10', badge: 'bg-fuchsia-500/20', rgb: '217, 70, 239', glow: 'shadow-fuchsia-500/20' },
    { name: 'amber', border: 'border-yellow-500/30', text: 'text-yellow-400', bg: 'bg-yellow-500/10', badge: 'bg-yellow-500/20', rgb: '245, 158, 11', glow: 'shadow-yellow-500/20' },
    { name: 'emerald', border: 'border-emerald-500/30', text: 'text-emerald-400', bg: 'bg-emerald-500/10', badge: 'bg-emerald-500/20', rgb: '16, 185, 129', glow: 'shadow-emerald-500/20' },
    { name: 'orange', border: 'border-orange-500/30', text: 'text-orange-400', bg: 'bg-orange-500/10', badge: 'bg-orange-500/20', rgb: '249, 115, 22', glow: 'shadow-orange-500/20' },
    { name: 'violet', border: 'border-violet-500/30', text: 'text-violet-400', bg: 'bg-violet-500/10', badge: 'bg-violet-500/20', rgb: '139, 92, 246', glow: 'shadow-violet-500/20' },
  ];

  return (
    <section id="projects" className="py-20 w-full px-6 md:px-12 bg-transparent relative overflow-hidden">
      {/* Heavy performance elements removed */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[60px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[60px]"></div>
      </div>

      <div className="container max-w-[1400px] mx-auto relative z-10">
        <SectionHeading title={projects.title} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {projects.items.map((project, idx) => {
            const theme = cardThemes[idx % cardThemes.length];

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.3, delay: idx % 3 * 0.05 }}
                className={`group relative glass-card rounded-2xl overflow-hidden border ${theme.border} hover:border-white/30 transition-all duration-300 flex flex-col h-full bg-white/[0.01] p-6`}
              >
                {/* Visual Highlight Background (Static) */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${theme.bg} to-transparent rounded-full blur-[40px] opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>

                {/* Card Header */}
                <div className="flex justify-between items-center mb-4 relative z-10">
                  <div className={`flex items-center gap-1.5 px-2 py-0.5 transparent-badge ${theme.badge} ${theme.text} border border-white/5 rounded-md text-[9px] uppercase font-orbitron font-bold tracking-widest`}>
                    <Code2 size={10} /> {project.category || 'APP'}
                  </div>
                  <span className="text-white/10 text-[9px] font-mono">#{String(idx + 1).padStart(2, '0')}</span>
                </div>

                {/* Title & Description */}
                <div className="relative z-10 flex-grow">
                  <h3 className={`text-xl font-orbitron font-black mb-2 leading-tight ${theme.text}`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-white/40 text-xs leading-relaxed mb-6 line-clamp-2 group-hover:text-white/50 transition-colors">
                    {project.description}
                  </p>

                  {/* Tech Stack Icons (Static) */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    {project.tech.map((t, i) => (
                      <TechIcon key={i} tech={t} theme={theme} />
                    ))}
                  </div>
                </div>

                {/* Social Section */}
                <div className="mt-auto relative z-10 pt-4 border-t border-white/5 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2.5">
                      <SocialBox href={project.github} icon={FaGithub} theme={theme} title="Repo" />
                      <SocialBox href={contact.socials.linkedin} icon={FaLinkedinIn} theme={theme} title="LinkedIn" />
                      <SocialBox href={project.demo} icon={SiNetlify} theme={theme} title="Live" />
                    </div>
                  </div>

                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`w-full py-2.5 rounded-lg text-center font-orbitron font-bold text-[10px] tracking-[0.15em] transition-all flex items-center justify-center gap-2 relative overflow-hidden ${theme.text} border ${theme.border} hover:${theme.bg} hover:border-white/20 active:scale-95`}
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                       LIVE PREVIEW <ExternalLink size={12} />
                    </span>
                    {/* Simplified Hover Shimmer */}
                    <div className={`absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </a>
                </div>

                {/* Simple Bottom accent */}
                <div className={`absolute bottom-0 left-0 h-[1.5px] w-0 bg-current group-hover:w-full transition-all duration-500 opacity-30`}></div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-[8px] font-orbitron tracking-[0.2em] text-white/10 uppercase">
             Static Performance Mode Active
          </div>
        </div>
      </div>
    </section>
  );
}