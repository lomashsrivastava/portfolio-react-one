import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Code2, Zap, Users, Target } from 'lucide-react';
import SectionHeading from '../SectionHeading';

const BOX_THEMES = [
  { icon: Code2,  accent: '#00f3ff', bg: 'rgba(0,243,255,0.06)',  border: 'rgba(0,243,255,0.2)'  },
  { icon: Zap,    accent: '#a855f7', bg: 'rgba(168,85,247,0.06)', border: 'rgba(168,85,247,0.2)' },
  { icon: Users,  accent: '#f59e0b', bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.2)' },
  { icon: Target, accent: '#00ff9d', bg: 'rgba(0,255,157,0.06)',  border: 'rgba(0,255,157,0.2)'  },
];

/* Simple CSS-only animated border using box-shadow pulse — no SVG */
const SPEED_MS = [3500, 5000, 4200, 2800];

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-12 w-full px-6 relative overflow-hidden bg-transparent">
      <div className="container max-w-4xl mx-auto">
        <SectionHeading title={about.title} />

        {/* SUMMARY BOX */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-6 rounded-2xl p-6 md:p-7"
          style={{ background: 'rgba(0,20,40,0.85)', border: '1.5px solid rgba(0,243,255,0.2)' }}
        >
          {/* Top accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] rounded-full"
            style={{ background: 'linear-gradient(90deg,transparent,#00f3ff,transparent)' }} />

          <p className="text-base md:text-lg text-gray-200 leading-relaxed font-exo font-light text-center relative z-10">
            {about.bio1.split(/(React\.js|Node\.js|Python|REST APIs?|Docker|AWS|CI\/CD|MERN|TypeScript|PostgreSQL)/g).map((part, i) => {
              const techColors = { 'React.js':'#61DAFB','Node.js':'#339933','Python':'#3776AB','REST APIs':'#FF9900','REST API':'#FF9900','Docker':'#2496ED','AWS':'#FF9900','CI/CD':'#a855f7','MERN':'#61DAFB','TypeScript':'#3178C6','PostgreSQL':'#4169E1' };
              const color = techColors[part];
              return color
                ? <span key={i} style={{ color, fontWeight: 600, textShadow: `0 0 8px ${color}66` }}>{part}</span>
                : part;
            })}
          </p>
        </motion.div>

        {/* 4 HIGHLIGHT BOXES */}
        <div className="grid md:grid-cols-2 gap-5">
          {about.highlights.map((highlight, index) => {
            const theme = BOX_THEMES[index];
            const IconComp = theme.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -3 }}
                className="relative rounded-2xl p-5 flex items-center gap-5 overflow-hidden"
                style={{ background: theme.bg, border: `1.5px solid ${theme.border}` }}
              >
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: `${theme.accent}18`, border: `1.5px solid ${theme.accent}40` }}
                >
                  <IconComp className="w-6 h-6" style={{ color: theme.accent }} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-orbitron font-black" style={{ color: theme.accent }}>
                      {highlight.number}
                    </span>
                    <h3 className="text-sm font-bold text-gray-300 font-orbitron uppercase tracking-widest">
                      {highlight.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed font-exo">
                    {highlight.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-14 h-14 rounded-bl-full opacity-10"
                  style={{ background: theme.accent }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}