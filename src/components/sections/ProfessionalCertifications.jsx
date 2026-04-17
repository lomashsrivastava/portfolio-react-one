import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Download, Search, Terminal, X, Zap, BadgeCheck } from 'lucide-react';
import { 
  SiReact, 
  SiJavascript, 
  SiNodedotjs, 
  SiPython, 
  SiTypescript,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiNextdotjs,
  SiRedux,
  SiPrisma,
  SiSupabase,
  SiFirebase
} from 'react-icons/si';
import { portfolioData } from '../../data/portfolioData';
import SectionHeading from '../SectionHeading';

const GRADIENT_STOPS = ['#00f3ff', '#a855f7', '#ff00ff', '#00ff9d', '#00f3ff'];

function AnimatedBorderBox({ children, className = '', radius = 16, duration = 5, delay = 0 }) {
  const wrapRef = useRef(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => {
      setSize({ w: el.offsetWidth, h: el.offsetHeight });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { w, h } = size;
  const perimeter = w && h ? 2 * (w + h) - (8 - 2 * Math.PI) * radius : 0;

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      {children}
      {w > 0 && (
        <svg
          className="absolute inset-0 pointer-events-none overflow-visible"
          width={w} height={h}
          style={{ zIndex: 20 }}
        >
          <defs>
            <linearGradient id={`cert-grad-${delay}`} x1="0%" y1="0%" x2="100%" y2="0%">
              {GRADIENT_STOPS.map((c, i) => (
                <stop key={i} offset={`${(i / (GRADIENT_STOPS.length - 1)) * 100}%`} stopColor={c} stopOpacity="0.4" />
              ))}
            </linearGradient>
          </defs>
          {perimeter > 0 && (
            <motion.rect
              x={1} y={1} width={w - 2} height={h - 2}
              rx={radius} ry={radius}
              fill="none"
              stroke={`url(#cert-grad-${delay})`}
              strokeWidth={3}
              strokeLinecap="round"
              strokeDasharray={`200 ${perimeter - 200}`}
              animate={{ strokeDashoffset: [0, -perimeter] }}
              transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
            />
          )}
        </svg>
      )}
    </div>
  );
}

const Highlight = ({ children }) => (
  <motion.span
    animate={{ color: ['#00f3ff', '#ff00ff', '#f59e0b', '#00ff9d', '#00f3ff'] }}
    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    className="font-bold relative inline-block group/h"
  >
    {children}
    <motion.span 
      className="absolute bottom-0 left-0 w-full h-[1px] bg-current opacity-30"
      animate={{ opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.span>
);

const skillsLogos = [
  { icon: <SiReact />, color: "#61DAFB", name: "React" },
  { icon: <SiJavascript />, color: "#F7DF1E", name: "JS" },
  { icon: <SiNodedotjs />, color: "#339933", name: "Node" },
  { icon: <SiPython />, color: "#3776AB", name: "Python" },
  { icon: <SiTypescript />, color: "#3178C6", name: "TS" },
  { icon: <SiNextdotjs />, color: "#ffffff", name: "Next.js" },
  { icon: <SiDocker />, color: "#2496ED", name: "Docker" },
  { icon: <SiMongodb />, color: "#47A248", name: "Mongo" },
  { icon: <SiPostgresql />, color: "#4169E1", name: "Postgres" },
  { icon: <SiGit />, color: "#F05032", name: "Git" },
  { icon: <SiTailwindcss />, color: "#06B6D4", name: "Tailwind" },
  { icon: <SiRedux />, color: "#764ABC", name: "Redux" },
  { icon: <SiPrisma />, color: "#2D3748", name: "Prisma" },
  { icon: <SiSupabase />, color: "#3ECF8E", name: "Supabase" },
  { icon: <SiFirebase />, color: "#FFCA28", name: "Firebase" }
];

const ProfessionalCertifications = () => {
  const { certifications } = portfolioData;
  const [zoomImg, setZoomImg] = useState(null);

  return (
    <section id="certifications" className="py-16 relative bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <SectionHeading title={certifications.title} />

        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Main Certificate Card */}
          {certifications.items.map((cert, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-primary to-secondary rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
              
              <div className="relative flex flex-col lg:flex-row items-center gap-8 bg-[#0a0a10]/90 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl" style={{ touchAction: 'pan-y' }}>
                
                {/* Visual Preview Container */}
                <div className="w-full lg:w-[45%] flex-shrink-0">
                  <AnimatedBorderBox className="rounded-2xl" radius={20} duration={5} delay={index * 2}>
                    <motion.div
                      onClick={() => setZoomImg("/assets/img/cert-preview.jpg")}
                      whileHover={{ scale: 1.02 }}
                      className="aspect-[1.414/1] bg-darker/50 rounded-2xl overflow-hidden relative group/preview cursor-zoom-in border border-white/5"
                    >
                       <img 
                          src="/assets/img/cert-preview.jpg" 
                          alt={cert.degree} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/preview:scale-105" 
                       />
                       <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover/preview:opacity-100 flex flex-col items-center justify-center transition-all duration-300 backdrop-blur-sm">
                          <div className="p-4 rounded-full bg-darker/80 shadow-2xl mb-3">
                            <Search className="text-secondary w-8 h-8" />
                          </div>
                          <span className="text-white font-orbitron font-black text-[10px] tracking-[0.2em] uppercase">Expand Certificate</span>
                       </div>
                    </motion.div>
                  </AnimatedBorderBox>
                </div>

                {/* Details Side */}
                <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-secondary/10 border border-secondary/20 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                      <Award size={32} className="text-secondary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-black font-orbitron text-white leading-tight">{cert.degree}</h3>
                        <motion.div
                          animate={{ color: ['#a855f7', '#00f3ff', '#ff00ff', '#a855f7'] }}
                          transition={{ duration: 5, repeat: Infinity }}
                          className="text-[10px] font-orbitron font-black tracking-widest uppercase mt-1"
                        >
                          {cert.institution}
                        </motion.div>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 font-exo text-sm leading-relaxed mb-6 max-w-lg">
                    {cert.description.split(/(\b(?:full-stack|MERN|Django|deployment|4)\b)/gi).map((part, i) => {
                      const highlights = ["full-stack", "MERN", "Django", "deployment", "4"];
                      return highlights.some(h => part.toLowerCase() === h.toLowerCase()) 
                        ? <Highlight key={i}>{part}</Highlight> 
                        : part;
                    })}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
                    <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-orbitron font-bold text-gray-300 flex items-center gap-2">
                       <Zap size={12} className="text-secondary" />
                       DATE: {cert.date}
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-orbitron font-bold text-gray-300 flex items-center gap-2">
                       <BadgeCheck size={12} className="text-primary" />
                       VERIFIED
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto"
                  >
                     <a 
                        href="/Certificate.pdf" 
                        download="Lomash_Srivastava_Certificate.pdf"
                        className="flex items-center justify-center gap-4 px-10 py-4 rounded-2xl font-black font-orbitron text-[10px] tracking-[0.2em] transition-all text-white group relative overflow-hidden"
                        style={{
                          background: 'linear-gradient(90deg, #a855f7, #ff00ff, #00f3ff)',
                          boxShadow: '0 8px 30px -10px rgba(168,85,247,0.5)',
                        }}
                     >
                        <div className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-[30deg] -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
                        <Download className="w-4 h-4" />
                        GET CERTIFICATE.PDF
                     </a>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}

          {/* Tech Stack Ecosystem Wall */}
          <div className="relative group" style={{ touchAction: 'pan-y' }}>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl blur opacity-5"></div>
            <div className="relative bg-[#0a0a10]/60 backdrop-blur-xl p-8 rounded-3xl border border-white/5">
              <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                    <Terminal size={20} className="text-primary" />
                 </div>
                 <div>
                    <h3 className="text-lg font-black font-orbitron text-white tracking-widest uppercase">Technologies I Use</h3>
                    <p className="text-[10px] font-orbitron text-gray-500 font-bold uppercase mt-1">Tools and Frameworks</p>
                 </div>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-6 px-2">
                {skillsLogos.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center gap-2 group/skill"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                      animate={{ 
                        filter: window.innerWidth < 1024 
                          ? 'none' 
                          : [
                              `drop-shadow(0 0 0px ${skill.color}00)`,
                              `drop-shadow(0 0 10px ${skill.color}66)`,
                              `drop-shadow(0 0 0px ${skill.color}00)`
                            ],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ color: skill.color }}
                      className="text-4xl transition-all duration-300 cursor-pointer"
                    >
                      {skill.icon}
                    </motion.div>
                    <span className="text-[8px] font-orbitron font-black text-gray-600 uppercase tracking-tighter opacity-0 group-hover/skill:opacity-100 transition-opacity">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {zoomImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10005] flex items-center justify-center bg-darker/95 backdrop-blur-2xl p-6 md:p-10 cursor-zoom-out"
            onClick={() => setZoomImg(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={zoomImg}
                alt="Certificate Large"
                className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
              />
              <button
                onClick={() => setZoomImg(null)}
                className="absolute top-6 right-6 p-4 bg-secondary text-white rounded-full hover:scale-110 transition-transform shadow-2xl z-[10006]"
              >
                <X size={24} strokeWidth={3} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProfessionalCertifications;
