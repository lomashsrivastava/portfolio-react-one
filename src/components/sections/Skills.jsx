import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiJavascript, SiNodedotjs, SiPython, SiHtml5, SiCss,
  SiGit, SiDocker, SiPostgresql, SiMongodb, SiTypescript, SiTailwindcss
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import SectionHeading from '../SectionHeading';
import CentralChip from '../CentralChip';

const iconMap = {
  "React":      { icon: SiReact,      color: "#61DAFB" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "Node.js":    { icon: SiNodedotjs,  color: "#339933" },
  "Python":     { icon: SiPython,     color: "#3776AB" },
  "HTML5":      { icon: SiHtml5,      color: "#E34F26" },
  "CSS3":       { icon: SiCss,        color: "#1572B6" },
  "Git":        { icon: SiGit,        color: "#F05032" },
  "Docker":     { icon: SiDocker,     color: "#2496ED" },
  "AWS":        { icon: FaAws,        color: "#FF9900" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "MongoDB":    { icon: SiMongodb,    color: "#47A248" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
};

function getDimensions(vw, vh) {
  const available = Math.min(vh - 180, vw * 0.88);
  const capped = Math.max(360, Math.min(available, 560));
  const ORB     = Math.round(capped * 0.115);
  const INNER_R = Math.round(capped * 0.22);
  const OUTER_R = Math.round(capped * 0.36);
  const CANVAS  = (OUTER_R + ORB) * 2 + 20;
  return { ORB, INNER_R, OUTER_R, CANVAS };
}

const Skills = () => {
  const { skills } = portfolioData;
  const items      = skills.items;
  const innerItems = items.slice(0, 6);
  const outerItems = items.slice(6);

  const [dims, setDims] = useState(() => getDimensions(
    typeof window !== 'undefined' ? window.innerWidth  : 1280,
    typeof window !== 'undefined' ? window.innerHeight : 800,
  ));

  useEffect(() => {
    const update = () => setDims(getDimensions(window.innerWidth, window.innerHeight));
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const { ORB, INNER_R, OUTER_R, CANVAS } = dims;

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-start overflow-hidden bg-transparent"
      style={{ paddingTop: '1rem', paddingBottom: '1.5rem', touchAction: 'pan-y' }}
    >
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center w-full">
        <div style={{ marginBottom: '-3rem' }}>
          <SectionHeading title="Technical Skills" />
        </div>

        <div className="relative flex-shrink-0" style={{ width: CANVAS, height: CANVAS, maxWidth: '100%' }}>
          {/* Track rings */}
          <div className="absolute rounded-full border border-primary/[0.12] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ width: INNER_R * 2, height: INNER_R * 2 }} />
          <div className="absolute rounded-full border border-secondary/[0.08] border-dashed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ width: OUTER_R * 2, height: OUTER_R * 2 }} />

          {/* Inner ring CW */}
          <OrbitalRing items={innerItems} radius={INNER_R} orbSize={ORB} duration={36} canvasHalf={CANVAS/2} />
          {/* Outer ring CCW */}
          <OrbitalRing items={outerItems} radius={OUTER_R} orbSize={ORB} duration={52} canvasHalf={CANVAS/2} reverse />

          {/* Central chip */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <CentralChip />
          </div>
        </div>
      </div>
    </section>
  );
};

/* Orbital ring wrapper */
function OrbitalRing({ items, radius, orbSize, duration, reverse = false, canvasHalf }) {
  const ringSize = radius * 2;
  const offset   = canvasHalf - radius;
  return (
    <motion.div
      className="absolute"
      style={{ width: ringSize, height: ringSize, left: offset, top: offset, willChange: 'transform' }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      {items.map((skill, i) => {
        const angle = (360 / items.length) * i;
        const rad   = (angle * Math.PI) / 180;
        const x     = radius + Math.cos(rad) * radius - orbSize / 2;
        const y     = radius + Math.sin(rad) * radius - orbSize / 2;
        return (
          <div key={skill.name} className="absolute" style={{ left: x, top: y }}>
            <motion.div
              animate={{ rotate: reverse ? 360 : -360 }}
              transition={{ duration, repeat: Infinity, ease: 'linear' }}
              style={{ willChange: 'transform' }}
            >
              <SkillOrb skill={skill} size={orbSize} index={i} />
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}

/* Individual skill orb — no SVG filters, no backdropFilter */
function SkillOrb({ skill, size, index }) {
  const data     = iconMap[skill.name] || { icon: SiReact, color: '#fff' };
  const IconComp = data.icon;
  const iconPx   = Math.round(size * 0.44);
  const labelPx  = Math.max(9, Math.round(size * 0.14));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: 'backOut' }}
      whileHover={{ scale: 1.2, zIndex: 100 }}
      className="group relative cursor-pointer"
      style={{ width: size, height: size, zIndex: 40 }}
    >
      {/* Orb — static border, no animated boxShadow */}
      <div
        className="w-full h-full rounded-full flex flex-col items-center justify-center"
        style={{
          gap: Math.max(3, Math.round(size * 0.05)),
          background: 'radial-gradient(circle at 35% 35%, #141e33, #070b14)',
          border: `2px solid ${data.color}50`,
          boxShadow: `0 0 10px ${data.color}22`,
        }}
      >
        {/* Icon */}
        <div style={{ fontSize: iconPx, color: data.color, lineHeight: 1, display: 'flex' }}>
          <IconComp />
        </div>
        {/* Label */}
        <span
          className="font-orbitron font-bold text-white text-center leading-none tracking-wide"
          style={{ fontSize: labelPx, maxWidth: size * 0.82, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
        >
          {skill.name}
        </span>
      </div>

      {/* Level tooltip */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
        <div className="px-2 py-0.5 rounded text-[8px] font-orbitron whitespace-nowrap"
          style={{ background: '#070b14', border: `1px solid ${data.color}40`, color: data.color }}>
          {skill.level}%
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;