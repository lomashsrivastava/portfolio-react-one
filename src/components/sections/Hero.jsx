import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  ChevronRight, 
  MapPin, 
  Mail, 
  Code2, 
  Zap,
  Star
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaAws } from 'react-icons/fa6';
import { 
  SiReact, 
  SiJavascript, 
  SiNodedotjs, 
  SiPython, 
  SiDocker, 
  SiPytorch, 
  SiNextdotjs,
  SiTailwindcss
} from 'react-icons/si';
import { portfolioData } from '../../data/portfolioData';

const ROLES = [
  { label: 'Full-Stack Developer', color: '#00f3ff' },
  { label: 'Web Developer',        color: '#a855f7' },
  { label: 'Frontend Developer',   color: '#f59e0b' },
  { label: 'Backend Developer',    color: '#00ff9d' },
];

const SEQ_DURATION  = 1600;
const ALL_DURATION  = 5000;

function RoleCycler() {
  const [phase, setPhase]     = useState('sequence');
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let t;
    if (phase === 'sequence') {
      t = setTimeout(() => {
        if (current < ROLES.length - 1) {
          setCurrent(c => c + 1);
        } else {
          setPhase('allshow');
        }
      }, SEQ_DURATION);
    } else {
      t = setTimeout(() => {
        setPhase('sequence');
        setCurrent(0);
      }, ALL_DURATION);
    }
    return () => clearTimeout(t);
  }, [phase, current]);

  if (phase === 'allshow') {
    return (
      <div className="flex flex-col gap-0.5">
        {ROLES.map((r, i) => (
          <motion.span
            key={r.label}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
            className="font-orbitron font-black text-[10px] md:text-sm uppercase tracking-widest leading-tight"
            style={{ color: r.color, textShadow: `0 0 8px ${r.color}88` }}
          >
            {r.label}
          </motion.span>
        ))}
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={current}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2 }}
        className="text-sm md:text-base font-orbitron font-black uppercase tracking-widest inline-flex items-center gap-1.5"
        style={{ color: ROLES[current]?.color || '#fff', textShadow: `0 0 12px ${ROLES[current]?.color}66` }}
      >
        {ROLES[current]?.label || ''}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.7, repeat: Infinity }}
          className="inline-block w-[2px] h-4 rounded-sm"
          style={{ background: ROLES[current]?.color || '#fff' }}
        />
      </motion.p>
    </AnimatePresence>
  );
}

const MINI_SKILLS = [
  { name: 'React',     icon: SiReact,      color: '#61DAFB' },
  { name: 'JS',        icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Node',      icon: SiNodedotjs,  color: '#339933' },
  { name: 'Python',    icon: SiPython,     color: '#3776AB' },
  { name: 'Next.js',   icon: SiNextdotjs,  color: '#ffffff' },
  { name: 'AWS',       icon: FaAws,        color: '#FF9900' },
  { name: 'Docker',    icon: SiDocker,     color: '#2496ED' },
  { name: 'PyTorch',   icon: SiPytorch,    color: '#EE4C2C' },
];

function MiniSkillsRing() {
  return (
    <div className="relative w-full h-[140px] flex items-center justify-center">
      {/* Centered anchor point */}
      <div className="relative">
        
        {/* Central fixed focus point (Energy Chip) */}
        <motion.div 
          style={{ x: "-50%", y: "-50%", willChange: "transform, scale, opacity" }}
          animate={{ scale: [1, 1.25, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-9 h-9 rounded-full bg-primary/22 border border-primary/45 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,243,255,0.3)]"
        >
          <Zap size={16} className="text-primary" />
        </motion.div>

        {/* Outer Rotating ring of skills */}
        <motion.div 
          style={{ x: "-50%", y: "-50%", willChange: "transform" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 w-[115px] h-[115px]"
        >
          {MINI_SKILLS.map((skill, i) => {
            const angle = (360 / MINI_SKILLS.length) * i;
            const radius = 58;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="absolute left-1/2 top-1/2"
                style={{ 
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  willChange: "transform" 
                }}
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                  style={{ willChange: "transform" }}
                  className="w-7 h-7 rounded-full bg-[#050512] border flex items-center justify-center shadow-lg group/skill relative transition-colors duration-300"
                  style={{ borderColor: `${skill.color}55`, color: skill.color }}
                >
                  <Icon size={14} />
                  
                  {/* Tooltip on hover */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/skill:opacity-100 transition-opacity bg-darker/90 border border-white/20 px-1.5 py-0.5 rounded text-[8px] font-orbitron pointer-events-none z-50 whitespace-nowrap text-white">
                    {skill.name}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { hero, about, skills, contact } = portfolioData || {};
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!portfolioData) return null;

  return (
    <section id="home" className="relative min-h-screen lg:h-screen w-full flex items-center justify-center pt-20 pb-10 lg:pt-16 lg:pb-4 px-4 sm:px-8 overflow-y-visible lg:overflow-hidden bg-[#05050F]">
      
      {/* Background Layer: Animated Grid & Scanlines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-[length:35px_35px] animate-grid-move opacity-30" 
          style={{ backgroundImage: 'linear-gradient(rgba(0,243,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,243,255,0.03) 1px, transparent 1px)' }}
        />
        <div 
          className="absolute inset-0 bg-[length:25px_25px] animate-particle-float opacity-40"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 40%, rgba(0,243,255,0.05) 0px, transparent 2px)' }}
        />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,255,255,0.01)_0px,rgba(0,255,255,0.01)_2px,transparent_2px,transparent_6px)] opacity-20 pointer-events-none" />
      </div>

      <div className="container max-w-[1300px] mx-auto relative z-10 flex items-center justify-center h-auto lg:h-full">
        
        {/* Main Neon Card - MOBILE FLEXIBLE HEIGHT */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative group rounded-[32px] p-0.5 overflow-hidden w-full lg:max-h-[90vh]"
        >
          {/* Animated Spin Border */}
          <div 
            className="absolute inset-[-100%] animate-border-spin opacity-40 pointer-events-none"
            style={{ background: 'conic-gradient(from 0deg, cyan, magenta, cyan, cyan)' }}
          />
          
          <div className="relative bg-[#05050F]/90 backdrop-blur-md rounded-[31px] p-4 lg:p-6 z-10 overflow-hidden flex flex-col justify-center h-auto">
            
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,243,255,0.15),transparent_70%)] opacity-30 animate-pulse pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 items-stretch relative z-20">
              
              {/* Box 1: My Profile */}
              <div className="flex flex-col items-center text-center p-6 lg:p-6 rounded-[24px] bg-white/5 border border-primary/20 backdrop-blur-xl relative group/card transition-all duration-500 hover:bg-white/10 hover:border-primary/50 shadow-xl overflow-hidden shrink-0">
                <div className="relative mb-4 lg:mb-4">
                  <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-primary animate-avatar-pulse shadow-[0_0_15px_#00f3ff]">
                    <img src={hero?.profileImage} alt={hero?.name} className="w-full h-full object-cover object-top filter contrast-125 scale-110" />
                  </div>
                  <div className="absolute -inset-1 border-2 border-dashed border-primary/40 rounded-full animate-spin-ring pointer-events-none" />
                </div>
                
                <h2 className="text-2xl lg:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-secondary uppercase tracking-tight mb-1">
                  {hero?.name}
                </h2>
                
                <p className="flex items-center gap-1.5 text-primary/70 font-bold text-[10px] mb-0.5">
                  <MapPin size={10} /> {contact?.location || "India / Distributed"}
                </p>
                <p className="text-secondary font-orbitron font-black text-[9px] uppercase tracking-[0.1em] mb-4">
                  Full-Stack Engineer
                </p>
                
                <div className="grid grid-cols-2 gap-2 w-full mb-6">
                  {(about?.highlights || []).slice(0, 4).map((stat) => (
                    <div key={stat.title} className="bg-primary/5 border border-primary/20 rounded-xl p-2 text-center transition-all hover:bg-primary/10">
                      <div className="text-xl font-black text-primary text-glow-primary tracking-tighter">{stat.number}</div>
                      <div className="text-[7px] font-orbitron font-bold text-white/40 uppercase tracking-widest">{stat.title}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {[
                    { Icon: FaGithub, link: contact?.socials?.github, color: '#00f3ff' },
                    { Icon: FaLinkedin, link: contact?.socials?.linkedin, color: '#0077b5' },
                    { Icon: FaWhatsapp, link: contact?.socials?.whatsapp, color: '#25d366' }
                  ].map(({ Icon, link, color }, idx) => (
                    <motion.a 
                      key={idx}
                      href={link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      animate={{ 
                        boxShadow: [
                          `0 0 0px ${color}00`,
                          `0 0 12px ${color}66`,
                          `0 0 0px ${color}00`
                        ],
                        borderColor: [`${color}33`, `${color}aa`, `${color}33`]
                      }}
                      transition={{ 
                        duration: 3.5, 
                        repeat: Infinity, 
                        delay: idx * 0.7,
                        ease: "linear"
                      }}
                      style={{ color, willChange: "transform, box-shadow" }}
                      className="p-2 bg-white/5 border rounded-full transition-colors flex items-center justify-center"
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
              
              {/* Box 2: What I Do */}
              <div className="flex flex-col p-6 lg:p-6 rounded-[24px] bg-white/5 border border-primary/20 backdrop-blur-xl relative group/card transition-all duration-500 hover:bg-white/10 hover:border-primary/50 shadow-xl">
                <div className="flex justify-start mb-4">
                  <span className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 px-3 py-1 rounded-full text-[8px] font-black tracking-widest text-white/70 animate-pulse uppercase">
                    ✦ Modern Web Development ✦
                  </span>
                </div>
                
                <h1 className="text-3xl lg:text-3xl font-black leading-[1.1] tracking-tighter mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-secondary">
                    Building high-quality <br /> web apps with code.
                  </span>
                </h1>
                
                <div className="min-h-[55px] mb-3">
                  <RoleCycler />
                </div>
                
                <p className="text-white/40 text-[11px] lg:text-xs font-sans leading-snug mb-5 italic border-l-2 border-primary/20 pl-3">
                  "{hero?.description}"
                </p>
                
                <div className="flex-1 flex items-center justify-center py-2">
                  <MiniSkillsRing />
                </div>
              </div>
              
              {/* Box 3: My Work */}
              <div className="flex flex-col p-6 lg:p-6 rounded-[24px] bg-white/5 border border-primary/20 backdrop-blur-xl relative group/card transition-all duration-500 hover:bg-white/10 hover:border-primary/50 shadow-xl">
                <div className="space-y-4 mb-6">
                  <a 
                    href="#projects" 
                    className="group/btn relative w-full h-12 rounded-full border-2 border-primary/50 flex items-center justify-center gap-2 overflow-hidden transition-all duration-500 hover:shadow-[0_0_15px_#00f3ff] hover:bg-primary text-white hover:text-darker"
                  >
                    <div className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                    <ChevronRight size={18} className="relative z-10" />
                    <span className="relative z-10 font-orbitron font-black tracking-widest text-[10px]">VIEW PROJECTS</span>
                  </a>
                  
                  <a 
                    href="/assets/pdf/L2.pdf" 
                    download
                    className="group/btn relative w-full h-12 rounded-full border-2 border-secondary/50 flex items-center justify-center gap-2 overflow-hidden transition-all duration-500 hover:shadow-[0_0_15px_#ff00ff] hover:bg-secondary text-white hover:text-darker"
                  >
                    <div className="absolute inset-0 bg-secondary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                    <Download size={18} className="relative z-10" />
                    <span className="relative z-10 font-orbitron font-black tracking-widest text-[10px]">DOWNLOAD CV</span>
                  </a>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <a href={`mailto:${contact?.email}`} className="bg-secondary/5 border border-secondary/30 text-secondary text-[9px] font-black py-2 rounded-full text-center hover:bg-secondary hover:text-darker transition-all uppercase tracking-tighter">
                    <Mail size={12} className="inline mr-1" /> CONTACT
                  </a>
                  <a href={contact?.socials?.github} target="_blank" rel="noopener noreferrer" className="bg-primary/5 border border-primary/30 text-primary text-[9px] font-black py-2 rounded-full text-center hover:bg-primary hover:text-darker transition-all uppercase tracking-tighter">
                    <FaGithub size={12} className="inline mr-1" /> GITHUB
                  </a>
                </div>
                
                <div className="mt-auto relative rounded-2xl overflow-hidden border border-primary/20 group/img shadow-xl min-h-[140px] lg:max-h-[160px]">
                   <img src="https://picsum.photos/id/0/400/250" className="w-full h-full object-cover grayscale brightness-75 group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-700" alt="Showcase" />
                   <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent opacity-60" />
                   <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                      <div className="size-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-[8px] font-orbitron text-white/40 tracking-widest uppercase text-glow-primary">Live HUD Render</span>
                   </div>
                </div>
              </div>

            </div>

            <div className="text-center mt-10 lg:mt-8 pt-6 border-t border-white/10 relative">
               <span className="bg-primary/5 border border-primary/20 text-primary/70 px-6 py-2 rounded-full text-[9px] font-orbitron font-bold tracking-[0.2em] animate-avatar-pulse whitespace-nowrap overflow-hidden inline-block uppercase text-glow-primary">
                ⚡ BUILDING REACT, NODE.JS & FULL-STACK WEBSITES ⚡
               </span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}