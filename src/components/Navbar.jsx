import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun, Code2, Home, User, Cpu, Briefcase, History, GraduationCap, Award, FileText, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Cpu },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Experience', href: '#experience', icon: History },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Certifications', href: '#certifications', icon: Award },
  { name: 'Resume', href: '#resume', icon: FileText },
  { name: 'Contact', href: '#contact', icon: Mail },
];

/* ── Red glowing animated border SVG ── */
function NavBorderSVG({ w, h, radius = 18 }) {
  if (!w || !h) return null;
  const perimeter = 2 * (w + h) - (8 - 2 * Math.PI) * radius;
  const DASH = 360;
  const GAP  = perimeter - DASH;

  return (
    <svg
      className="absolute inset-0 pointer-events-none overflow-visible"
      width={w} height={h}
      style={{ zIndex: 20, borderRadius: radius }}
    >
      <defs>
      </defs>

      {/* Line 1 — CW, bright red */}
      <motion.rect
        x={1} y={1} width={w - 2} height={h - 2}
        rx={radius} ry={radius}
        fill="none"
        stroke="#ff2020"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray={`${DASH} ${GAP}`}
        animate={{ strokeDashoffset: [0, -perimeter] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />

      {/* Line 2 — CCW, deeper red */}
      <motion.rect
        x={1} y={1} width={w - 2} height={h - 2}
        rx={radius} ry={radius}
        fill="none"
        stroke="#ff6060"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray={`${DASH} ${GAP}`}
        animate={{ strokeDashoffset: [0, perimeter] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'linear', delay: 1.5 }}
      />
    </svg>
  );
}

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState('home');
  const navRef = useRef(null);
  const [navSize, setNavSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const measure = () => {
      setNavSize({ w: el.offsetWidth, h: el.offsetHeight });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.name.toLowerCase());
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSegment(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] flex justify-center py-2 md:py-4 bg-darker/80 md:bg-darker/50 md:backdrop-blur-md border-b border-white/5">
      <div
        ref={navRef}
        className="relative bg-darker/60 backdrop-blur-xl md:backdrop-blur-none border border-white/10 shadow-[0_4px_30px_rgba(255,32,32,0.12)] rounded-2xl px-4 py-2 w-full max-w-7xl mx-4 flex items-center justify-between transition-all duration-300"
      >
        {/* Animated red border */}
        <NavBorderSVG w={navSize.w} h={navSize.h} radius={18} />

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group overflow-hidden relative z-[50]">
          <motion.span
            className="font-orbitron font-bold text-lg md:text-xl tracking-wider text-white inline-block whitespace-nowrap hidden lg:inline-block"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ duration: 1.5 }}
            style={{ overflow: 'hidden' }}
          >
            LOMASH<span className="text-secondary">.DEV</span>
          </motion.span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5">
          <ul className="flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <motion.a
                  href={link.href}
                  animate={{ 
                    color: ['#00f3ff', '#fff700', '#ff00ee', '#00ff9d', '#ffffff', '#00f3ff'],
                    textShadow: activeSegment === link.name.toLowerCase()
                      ? [
                          '0 0 8px rgba(0,243,255,0.6)',
                          '0 0 12px rgba(255,247,0,0.6)',
                          '0 0 8px rgba(255,0,238,0.6)',
                          '0 0 12px rgba(0,255,157,0.6)',
                          '0 0 8px rgba(255,255,255,0.6)',
                          '0 0 8px rgba(0,243,255,0.6)'
                        ]
                      : 'none'
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: navLinks.indexOf(link) * 0.4
                  }}
                  className={`flex flex-col items-center gap-0.5 font-sans font-black text-[12px] tracking-wide relative px-2 py-1 ${activeSegment === link.name.toLowerCase() ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                >
                  <motion.div
                    animate={{ 
                      opacity: [0.7, 1, 0.7],
                      scale: [1, 1.1, 1],
                      color: ['#00f3ff', '#a855f7', '#f59e0b', '#00ff9d', '#ff4444', '#00f3ff'],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "linear",
                      delay: navLinks.indexOf(link) * 0.3
                    }}
                    style={{ filter: activeSegment === link.name.toLowerCase() ? 'drop-shadow(0 0 8px currentColor)' : 'none' }}
                  >
                    <link.icon size={16} />
                  </motion.div>
                  <span>{link.name}</span>
                  {activeSegment === link.name.toLowerCase() && (
                    <motion.div layoutId="underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_8px_#00f3ff]" />
                  )}
                </motion.a>
              </li>
            ))}
          </ul>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-white/10 transition-colors text-primary">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="#contact" className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-orbitron font-bold text-[12px] tracking-widest hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] transition-all whitespace-nowrap">
            HIRE ME
          </a>
        </nav>

        {/* Mobile Toggle - FORCED VISIBILITY */}
        <button 
          className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white relative z-[10001] shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:bg-white/10" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} className="text-secondary" /> : <Menu size={24} className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu — High-End Futuristic Holographic Design */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] md:hidden bg-darker/95 backdrop-blur-3xl flex flex-col items-center justify-center p-4 overflow-hidden"
          >
            {/* Holographic Menu Card */}
            <motion.div 
               initial={{ scale: 0.8, opacity: 0, rotateY: 20 }}
               animate={{ scale: 1, opacity: 1, rotateY: 0 }}
               exit={{ scale: 0.8, opacity: 0, rotateY: -20 }}
               className="relative w-[75vw] max-w-[380px] max-h-[85vh] rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-3xl p-6 sm:p-8 overflow-y-auto overflow-x-hidden flex flex-col items-center gap-6 shadow-[0_0_80px_rgba(0,243,255,0.15)] ring-1 ring-white/5"
            >
              {/* Magical Aura - Pulsing Prismatic Glow */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                  background: [
                    'radial-gradient(circle, rgba(0,243,255,0.15) 0%, transparent 70%)',
                    'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
                    'radial-gradient(circle, rgba(0,243,255,0.15) 0%, transparent 70%)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -inset-20 -z-10 pointer-events-none" 
              />
              
              {/* Scanning Laser Line */}
              <motion.div 
                animate={{ top: ['-10%', '110%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent z-20 pointer-events-none opacity-40"
              />

              {/* Header Box */}
              <div className="flex items-center justify-between w-full mb-1">
                 <div className="flex flex-col">
                    <span className="text-[10px] font-orbitron font-black text-primary tracking-[0.4em] uppercase">Control</span>
                    <span className="text-[8px] font-orbitron font-bold text-white/30 tracking-[0.2em] uppercase">V 5.2.0</span>
                 </div>
                 <motion.button 
                   whileHover={{ scale: 1.1, rotate: 90 }}
                   whileTap={{ scale: 0.9 }}
                   onClick={() => setIsOpen(false)}
                   className="p-3 rounded-2xl bg-white/5 border border-white/10 text-secondary hover:text-white hover:bg-white/10 transition-all shadow-lg"
                 >
                   <X size={20} />
                 </motion.button>
              </div>

              {/* Navigation Grid Centered */}
              <motion.div 
                 className="flex flex-col items-center gap-2.5 w-full"
                 initial="hidden"
                 animate="visible"
                 variants={{
                   visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
                   hidden: {}
                 }}
              >
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    variants={{
                      hidden: { y: 15, opacity: 0 },
                      visible: { y: 0, opacity: 1 }
                    }}
                    className={`group/pill relative flex items-center w-full px-5 py-3 rounded-[1.5rem] border transition-all duration-500 overflow-hidden ${activeSegment === link.name.toLowerCase() ? 'bg-gradient-to-r from-primary/20 via-primary/5 to-transparent border-primary/40 shadow-[inner_0_0_15px_rgba(0,243,255,0.1)]' : 'bg-white/5 border-white/5 hover:border-white/20'}`}
                    whileTap={{ scale: 0.96 }}
                  >
                    {/* Animated Shimmer on Hover */}
                    <div className="absolute inset-0 w-1/2 h-full bg-white/5 -skew-x-[30deg] -translate-x-full group-hover/pill:translate-x-[200%] transition-transform duration-700" />
                    
                    <div className="flex items-center gap-4 relative z-10 w-full">
                      <div className={`p-2.5 rounded-2xl transition-all duration-300 shadow-lg ${activeSegment === link.name.toLowerCase() ? 'bg-primary/20 text-primary scale-110' : 'bg-white/5 text-gray-500 group-hover/pill:text-primary group-hover/pill:scale-105'}`}>
                        <link.icon size={18} strokeWidth={activeSegment === link.name.toLowerCase() ? 2.5 : 2} />
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-[10px] font-orbitron font-black tracking-[0.2em] uppercase transition-all duration-300 ${activeSegment === link.name.toLowerCase() ? 'text-white' : 'text-gray-400 group-hover/pill:text-gray-100'}`}>
                          {link.name}
                        </span>
                        {activeSegment === link.name.toLowerCase() && (
                          <motion.span initial={{ width: 0 }} animate={{ width: '100%' }} className="h-[1px] bg-primary/50 mt-0.5" />
                        )}
                      </div>
                      
                      <div className="ml-auto">
                        <motion.div 
                          animate={activeSegment === link.name.toLowerCase() ? { opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] } : {}}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className={`w-1.5 h-1.5 rounded-full ${activeSegment === link.name.toLowerCase() ? 'bg-primary' : 'bg-white/10'}`} 
                        />
                      </div>
                    </div>
                  </motion.a>
                ))}

                {/* Return Button - High Contrast */}
                <motion.button 
                   variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                   onClick={() => setIsOpen(false)}
                   className="w-full mt-2 py-4 rounded-[1.5rem] bg-darker/50 border border-secondary/30 text-secondary font-orbitron font-black text-[9px] tracking-[0.4em] uppercase hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden shadow-lg group"
                >
                  <History size={16} className="group-hover:-rotate-90 transition-transform duration-500" />
                  Return To Terminal
                </motion.button>
              </motion.div>
              
              {/* Footer Actions Component */}
              <motion.div 
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                className="w-full mt-auto pt-6 border-t border-white/5 flex flex-col gap-4 items-center"
              >
                <div className="flex items-center justify-between w-full px-4">
                   <div className="flex flex-col">
                      <span className="text-[8px] font-orbitron font-black text-gray-500 uppercase tracking-[0.2em]">Theme Engine</span>
                      <span className="text-[7px] text-primary font-bold">Stable Alpha</span>
                   </div>
                   <button onClick={toggleTheme} className="p-3 bg-white/5 rounded-2xl text-primary border border-white/10 hover:bg-white/10 transition-all shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                   </button>
                </div>
                
                <a 
                   href="#contact" 
                   onClick={() => setIsOpen(false)} 
                   className="relative flex items-center justify-center w-full py-4 rounded-[1.5rem] bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient text-white font-orbitron font-black text-[9px] tracking-[0.5em] uppercase shadow-[0_15px_30px_rgba(0,243,255,0.2)] overflow-hidden group/btn"
                >
                  <div className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  Initialize Contact
                </a>
              </motion.div>

              {/* Cyber Grid Base Layer */}
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none rounded-[3rem] overflow-hidden" 
                   style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '16px 16px' }} 
              />
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
