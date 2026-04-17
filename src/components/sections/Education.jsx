import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { GraduationCap, Code2, Cpu, BookOpen, MapPin, CalendarDays, Award, Zap, BadgeCheck } from 'lucide-react';
import SectionHeading from '../SectionHeading';

const EDUCATION = [
  {
    id: 'fullstack',
    year: '2026',
    degree: 'Full-Stack Developer',
    sub: '1-Year Diploma & Internship',
    institute: 'Test Yantra Software Training / QSpiders',
    board: 'Industry Certification',
    location: 'Noida, Uttar Pradesh',
    stream: 'Full-Stack Web Development',
    accent: '#00f3ff',
    icon: Code2,
    tag: 'CERTIFIED',
    highlights: ['React.js', 'Node.js', 'MongoDB', 'REST APIs', 'CI/CD', 'Docker'],
    summary: 'A full-stack developer training course covering React, Node.js, and databases. I learned how to build and deploy web applications.',
    relevance: 'CORE SKILLS',
    relColor: '#00f3ff',
    isCurrent: true,
  },
  {
    id: 'btech',
    year: '2022',
    degree: 'B.Tech — Mechanical Engineering',
    sub: 'Bachelor of Technology (Production)',
    institute: 'Kali Charan Nigam Institute Of Technology',
    board: 'Dr. APJ Abdul Kalam Technical University (AKTU), Lucknow',
    location: 'Banda, Uttar Pradesh',
    stream: 'Mechanical Engineering (Production)',
    accent: '#a855f7',
    icon: GraduationCap,
    tag: 'B.TECH',
    highlights: ['Engineering Math', 'CAD/CAM', 'Project Management', 'Analytical Thinking'],
    summary: 'A degree that taught me how to solve complex engineering problems.',
    relevance: 'STRENGTH',
    relColor: '#a855f7',
    isCurrent: false,
  },
  {
    id: 'polytechnic',
    year: '2019',
    degree: 'Polytechnic Diploma',
    sub: 'Diploma in Engineering',
    institute: 'Kali Charan Nigam Institute Of Technology',
    board: 'Board of Technical Education, Uttar Pradesh',
    location: 'Banda, Uttar Pradesh',
    stream: 'Mechanical Engineering (Production)',
    accent: '#f59e0b',
    icon: Cpu,
    tag: 'DIPLOMA',
    highlights: ['Technical Drawing', 'Workshop Tech', 'Quality Control', 'Manufacturing'],
    summary: 'A hands-on course that focused on technical skills and problem-solving.',
    relevance: 'BASICS',
    relColor: '#f59e0b',
    isCurrent: false,
  },
  {
    id: 'highschool',
    year: '2013',
    degree: 'Higher Secondary (Class XII)',
    sub: 'High School — Science Stream',
    institute: 'Surrendra Paul Gramodaya Vidyalaya',
    board: 'Board of Secondary Education, Madhya Pradesh (Bhopal)',
    location: 'Chitrkoot, Satna, Madhya Pradesh',
    stream: 'Science (Physics · Chemistry · Mathematics)',
    accent: '#00ff9d',
    icon: BookOpen,
    tag: 'CLASS XII',
    highlights: ['Physics', 'Chemistry', 'Mathematics', 'Science Foundation'],
    summary: 'Science stream schooling that seeded a passion for logic, numbers, and problem-solving.',
    relevance: 'FOUNDATION',
    relColor: '#00ff9d',
    isCurrent: false,
  },
];

function EducationCard({ edu, index }) {
  const IconComp = edu.icon;
  const cardRef = useRef(null);

  // Mouse position relative to the card for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  // Glare position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareOpacity = useTransform(mouseXSpring, [-0.5, 0, 0.5], [0.4, 0, 0.4]);

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
      className="h-full"
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          rotateX: isMobile ? 0 : rotateX, 
          rotateY: isMobile ? 0 : rotateY, 
          transformStyle: 'preserve-3d',
          background: 'linear-gradient(160deg, rgba(10,18,35,0.97), rgba(4,7,16,0.99))',
          border: `1.5px solid ${edu.accent}35`,
          boxShadow: `0 4px 30px ${edu.accent}0e`,
          touchAction: 'pan-y'
        }}
        className="relative rounded-2xl overflow-hidden h-full"
      >
        {/* Static Animated top stripe from original design */}
        <motion.div
          className="h-[3px] w-full"
          style={{ background: `linear-gradient(90deg, transparent, ${edu.accent}, transparent)`, backgroundSize: '200% 100%' }}
          animate={{ backgroundPosition: ['-100% 0%', '200% 0%'] }}
          transition={{ duration: 4 + index * 0.6, repeat: Infinity, ease: 'linear' }}
        />

        {/* 3D Glare Overlay */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.06), transparent 75%)`,
            opacity: glareOpacity,
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        <div className="p-3 relative z-10" style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}>
          {/* ── Top row ── */}
          <div className="flex items-start gap-2 mb-2">
            <motion.div
              animate={{ boxShadow: [`0 0 0px ${edu.accent}00`, `0 0 18px ${edu.accent}55`, `0 0 0px ${edu.accent}00`] }}
              transition={{ duration: 3 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
              className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: `${edu.accent}18`, border: `1.5px solid ${edu.accent}50`, transform: 'translateZ(20px)' }}
            >
              <IconComp className="w-5 h-5" style={{ color: edu.accent }} />
            </motion.div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span
                  className="text-[10px] font-orbitron font-black px-2.5 py-0.5 rounded-full tracking-widest"
                  style={{ background: `${edu.accent}20`, color: edu.accent, border: `1px solid ${edu.accent}40` }}
                >
                  {edu.tag}
                </span>
                <span
                  className="text-[10px] font-orbitron font-bold px-2.5 py-0.5 rounded-full"
                  style={{ background: `${edu.relColor}12`, color: edu.relColor, border: `1px solid ${edu.relColor}35` }}
                >
                  {edu.relevance}
                </span>
                {edu.isCurrent && (
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                    className="text-[10px] font-orbitron font-black px-2.5 py-0.5 rounded-full"
                    style={{ background: 'rgba(0,243,255,0.18)', color: '#00f3ff', border: '1px solid rgba(0,243,255,0.5)' }}
                  >
                    ● ONGOING
                  </motion.span>
                )}
              </div>
              <h3 className="text-sm font-black font-orbitron text-white leading-tight">{edu.degree}</h3>
              <p className="text-xs text-gray-400 font-exo mt-0.5">{edu.sub}</p>
            </div>

            <div
              className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-orbitron font-black text-sm"
              style={{ background: `linear-gradient(135deg, ${edu.accent}20, ${edu.accent}08)`, border: `1.5px solid ${edu.accent}45`, color: edu.accent }}
            >
              {edu.year}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 mb-2 pl-1" style={{ transform: 'translateZ(15px)' }}>
            <div className="flex items-center gap-2">
              <Award className="w-3.5 h-3.5 flex-shrink-0" style={{ color: edu.accent }} />
              <span className="text-xs font-semibold text-white font-exo">{edu.institute}</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5 flex-shrink-0 text-gray-500" />
              <span className="text-xs text-gray-400 font-exo">{edu.board}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-gray-500" />
              <span className="text-xs text-gray-500 font-exo">{edu.location}</span>
            </div>
          </div>

          <div
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md mb-2 text-[9px] font-orbitron font-bold"
            style={{ background: `${edu.accent}0e`, color: edu.accent, border: `1px solid ${edu.accent}30`, transform: 'translateZ(20px)' }}
          >
            <BadgeCheck className="w-3 h-3" />
            {edu.stream}
          </div>

          <div className="flex flex-wrap gap-2" style={{ transform: 'translateZ(25px)' }}>
            {edu.highlights.map((h, i) => (
              <motion.span
                key={h}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.06 + 0.3 }}
                className="text-[9px] font-orbitron font-bold px-2 py-0.5 rounded-full"
                style={{ background: `${edu.accent}14`, color: edu.accent, border: `1px solid ${edu.accent}35` }}
              >
                {h}
              </motion.span>
            ))}
          </div>

          <div className="mt-2 pt-2 border-t flex items-center gap-2" style={{ borderColor: `${edu.accent}18`, transform: 'translateZ(10px)' }}>
            <CalendarDays className="w-3.5 h-3.5" style={{ color: edu.accent }} />
            <span className="text-xs font-mono text-gray-500">Class of {edu.year}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-8 w-full px-6 relative bg-transparent">
      <div className="container max-w-4xl mx-auto">
        <SectionHeading title="Education" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {EDUCATION.map((edu, i) => (
            <EducationCard key={edu.id} edu={edu} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <div
            className="flex items-center gap-3 px-6 py-3 rounded-full"
            style={{ background: 'rgba(168,85,247,0.07)', border: '1px solid rgba(168,85,247,0.25)' }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
              <GraduationCap className="w-4 h-4 text-secondary" />
            </motion.div>
            <span className="text-sm font-orbitron font-bold text-white tracking-widest">
              13+ YEARS OF LEARNING JOURNEY
            </span>
            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.6, repeat: Infinity }}>
              <Zap className="w-4 h-4 text-primary" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}