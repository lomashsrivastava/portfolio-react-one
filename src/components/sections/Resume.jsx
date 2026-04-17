import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, Search, X, ZoomIn, Award, MapPin, Zap, GraduationCap } from 'lucide-react';
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
            <linearGradient id={`grad-${delay}`} x1="0%" y1="0%" x2="100%" y2="0%">
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
              stroke={`url(#grad-${delay})`}
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

const Resume = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="resume" className="py-24 relative bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <SectionHeading title="My Resume" />

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Visual Preview Side */}
            <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
              <AnimatedBorderBox className="rounded-2xl group cursor-zoom-in" radius={20} duration={6} delay={0}>
                <motion.div
                  onClick={() => setIsZoomed(true)}
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[1/1.414] w-full max-w-[400px] bg-[#0a0f1a] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                  style={{ touchAction: 'pan-y' }}
                >
                  <img
                    src="/assets/img/resume-preview.jpg"
                    alt="Lomash Srivastava Resume"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent opacity-60" />

                  {/* Expansion UI */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-300 backdrop-blur-[2px]">
                    <div className="bg-darker/80 p-4 rounded-full shadow-2xl mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="text-primary w-10 h-10" />
                    </div>
                    <span className="text-white font-orbitron font-black text-xs tracking-[0.3em] uppercase">Click to Verify Details</span>
                  </div>

                </motion.div>
              </AnimatedBorderBox>
            </div>

            {/* Info Side */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
                   <div className="w-12 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
                   <span className="text-primary font-orbitron font-black text-[10px] tracking-[0.5em] uppercase">Credentials</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white font-orbitron mb-6 leading-tight">
                  Building <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient">Modern</span> Applications
                </h3>
                
                <p className="text-gray-400 font-exo text-sm md:text-base leading-relaxed mb-10 text-center lg:text-left max-w-xl">
                  Download my full resume for a <Highlight>detailed look</Highlight> at my <Highlight>coding skills</Highlight>, <Highlight>projects</Highlight>, and <Highlight>how I work</Highlight>. Ready for a new role in <Highlight>2026</Highlight>.
                </p>

                {/* Expertise Grid */}
                <div className="grid grid-cols-2 gap-4 mb-10 w-full max-w-md">
                  {[
                    { icon: Award, text: "Certified Full-Stack" },
                    { icon: MapPin, text: "Open to Relocation" },
                    { icon: Zap, text: "Mechanical Architecture" },
                    { icon: GraduationCap, text: "B.Tech Engineering" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
                      <item.icon className="text-primary w-4 h-4" />
                      <span className="text-xs font-semibold text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* DOWNLOAD BUTTON */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <a
                    href="/Resume.pdf"
                    download="Lomash_Srivastava_Resume.pdf"
                    className="flex items-center justify-center gap-6 px-12 py-5 rounded-2xl font-black font-orbitron text-[12px] tracking-[0.2em] transition-all text-white group relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(90deg, #00f3ff, #a855f7, #ff00ff)',
                      boxShadow: '0 10px 40px -10px rgba(0,243,255,0.5)',
                    }}
                  >
                    {/* Shimmer Scanline */}
                    <div className="absolute inset-0 w-1/4 h-full bg-white/20 -skew-x-[30deg] -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
                    
                    <FileText className="w-5 h-5" />
                    DOWNLOAD CV.PDF
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10005] flex items-center justify-center bg-darker/95 backdrop-blur-2xl p-6 cursor-zoom-out"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotateX: 20 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateX: -20 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/assets/img/resume-preview.jpg"
                alt="Full Resume"
                className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(0,243,255,0.2)]"
              />
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-6 right-6 p-4 bg-primary text-darker rounded-full hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,243,255,0.5)] z-[10006]"
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

export default Resume;