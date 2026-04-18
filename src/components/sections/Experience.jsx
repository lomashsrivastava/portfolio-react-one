import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Globe, CheckCircle2, ChevronDown, ChevronUp, Star, Zap, Award } from 'lucide-react';
import SectionHeading from '../SectionHeading';

const EXPERIENCES = [
  {
    id: 'intern',
    type: 'internship',
    title: 'Full-Stack Developer Intern',
    company: 'QSpiders, Noida',
    date: 'Jan 2025 To Jan 2026',
    duration: '1 Year',
    accent: '#00f3ff',
    accent2: '#00ff9d',
    icon: Briefcase,
    tag: 'INTERNSHIP',
    platforms: [],
    bullets: [
      'Built and put web apps online using React and Node.js, making them faster.',
      'Created secure APIs for web applications.',
      'Designed web pages that look good and work well on all screen sizes.',
      'Simplified how code is put online and made sure it has fewer bugs.',
      'Helped other interns learn about React and how to manage their code.',
    ],
    stats: [
      { label: 'Apps Made', value: '4+' },
      { label: 'Speed Boost', value: '20%' },
      { label: 'Reliability', value: '95%' },
    ],
  },
  {
    id: 'freelance',
    type: 'freelance',
    title: 'Freelance Full-Stack Developer',
    company: 'Remote — Independent',
    date: '2024 to Present',
    duration: '2+ Years',
    accent: '#a855f7',
    accent2: '#ff00ff',
    icon: Globe,
    tag: 'FREELANCE',
    platforms: [
      { name: 'Upwork',     color: '#6fda44' },
      { name: 'Fiverr',     color: '#1dbf73' },
      { name: 'Toptal',     color: '#204ecf' },
      { name: 'Freelancer', color: '#0e84c2' },
    ],
    bullets: [
      'Finished 20+ web projects for clients around the world, like online stores and apps.',
      'Built custom APIs using Node.js and Python.',
      'Created beautiful web pages using React and Tailwind CSS.',
      'Added features like payments, notifications, and file storage to apps.',
      'Maintained a 5-star rating on all projects for being reliable and doing good work.',
    ],
    stats: [
      { label: 'Projects', value: '20+' },
      { label: 'Rating',   value: '5.0★' },
      { label: 'Success',  value: '100%' },
    ],
  },
];

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(true);
  const IconComp = exp.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.18, ease: 'easeOut' }}
      className="relative flex flex-col h-full"
    >
      {/* Outer glow ring on hover */}
      <motion.div
        whileHover={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="absolute -inset-[1px] rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${exp.accent}40, ${exp.accent2}20, transparent)`, borderRadius: 18 }}
      />

      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="relative rounded-2xl overflow-hidden flex flex-col h-full"
        style={{
          background: `linear-gradient(160deg, rgba(12,20,40,0.96), rgba(5,8,18,0.99))`,
          border: `1.5px solid ${exp.accent}35`,
        }}
      >
        {/* Animated top gradient bar */}
        <motion.div
          className="h-[3px] w-full flex-shrink-0"
          style={{ background: `linear-gradient(90deg, ${exp.accent}, ${exp.accent2}, ${exp.accent})`, backgroundSize: '200% 100%' }}
          animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />

        <div className="p-5 flex flex-col flex-1">
          {/* ── Header ── */}
          <div className="flex items-start gap-3 mb-4">
            {/* Pulsing icon badge */}
            <motion.div
              animate={{ boxShadow: [`0 0 0px ${exp.accent}00`, `0 0 16px ${exp.accent}50`, `0 0 0px ${exp.accent}00`] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: `${exp.accent}18`, border: `1.5px solid ${exp.accent}45` }}
            >
              <IconComp className="w-5 h-5" style={{ color: exp.accent }} />
            </motion.div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                <span
                  className="text-[9px] font-orbitron font-black px-2 py-0.5 rounded-full tracking-widest"
                  style={{ background: `${exp.accent}20`, color: exp.accent, border: `1px solid ${exp.accent}40` }}
                >
                  {exp.tag}
                </span>
                <span
                  className="text-[9px] font-orbitron font-bold px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.05)', color: '#888', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  {exp.duration}
                </span>
              </div>
              <h3 className="text-base font-black font-orbitron text-white leading-tight">{exp.title}</h3>
              <p className="text-xs font-semibold mt-0.5" style={{ color: exp.accent }}>{exp.company}</p>
              <p className="text-[11px] text-gray-500 font-mono mt-0.5">{exp.date}</p>
            </div>

            <button
              onClick={() => setExpanded(e => !e)}
              className="flex-shrink-0 p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              style={{ color: exp.accent }}
            >
              {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>
          </div>

          {/* ── Stats row ── */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {exp.stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.18 + i * 0.08 + 0.3 }}
                className="rounded-xl text-center py-2 px-1"
                style={{ background: `${exp.accent}0e`, border: `1px solid ${exp.accent}25` }}
              >
                <div className="text-sm font-black font-orbitron" style={{ color: exp.accent }}>{s.value}</div>
                <div className="text-[9px] text-gray-500 font-exo mt-0.5 uppercase tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* ── Platform badges (freelance only) ── */}
          {exp.platforms.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {exp.platforms.map((p, i) => (
                <motion.span
                  key={p.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.18 + i * 0.06 + 0.4 }}
                  className="text-[9px] font-orbitron font-bold px-2.5 py-1 rounded-full"
                  style={{ background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}40` }}
                >
                  {p.name}
                </motion.span>
              ))}
            </div>
          )}

          {/* ── Bullet points ── */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="space-y-2 overflow-hidden flex-1"
              >
                {exp.bullets.map((b, i) => {
                  const keywords = [
                    'React', 'Node.js', 'Python', 'APIs', 'web apps', 'user interface', 
                    'full-stack', 'MERN', 'databases', 'cloud', 'AWS', 'Tailwind CSS',
                    'payments', 'notifications', 'file storage', 'secure'
                  ];
                  
                  const parts = b.split(new RegExp(`(${keywords.join('|')})`, 'gi'));

                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-start gap-2 text-gray-300 text-[11px] leading-relaxed font-exo"
                    >
                      <Zap className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: exp.accent }} />
                      <span>
                        {parts.map((part, index) => {
                          const isKeyword = keywords.some(k => k.toLowerCase() === part.toLowerCase());
                          return isKeyword ? (
                            <span key={index} style={{ color: exp.accent, fontWeight: 700 }} className="text-glow-primary">
                              {part}
                            </span>
                          ) : part;
                        })}
                      </span>
                    </motion.li>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>

          {/* ── Footer ── */}
          <div className="mt-4 pt-3 border-t flex items-center justify-between" style={{ borderColor: `${exp.accent}18` }}>
            {exp.type === 'freelance' ? (
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" style={{ color: '#f59e0b' }} />
                ))}
                <span className="text-[10px] text-gray-500 font-mono ml-1">5.0 · 100% JSS</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" style={{ color: exp.accent }} />
                <span className="text-[10px] text-gray-400 font-mono">Verified Internship</span>
              </div>
            )}
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-1"
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: exp.type === 'freelance' ? '#00ff9d' : exp.accent }} />
              <span className="text-[9px] font-mono" style={{ color: exp.type === 'freelance' ? '#00ff9d' : exp.accent }}>
                {exp.type === 'freelance' ? 'ACTIVE' : 'COMPLETED'}
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 w-full px-6 relative bg-transparent">
      <div className="container max-w-4xl mx-auto">
        <SectionHeading title="Professional Experience" />

        {/* ── Parallel 2-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>

        {/* ── Bottom total timeline badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <div
            className="flex items-center gap-3 px-6 py-3 rounded-full"
            style={{ background: 'rgba(0,243,255,0.06)', border: '1px solid rgba(0,243,255,0.2)' }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <Award className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-xs font-orbitron font-bold text-white tracking-widest">3+ YEARS TOTAL EXPERIENCE</span>
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}