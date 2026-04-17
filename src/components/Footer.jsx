import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/5 mt-20 relative z-20 bg-[#05050F]">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.p 
            animate={{ 
              color: ['#00f3ff', '#a855f7', '#ff00ff', '#00f3ff'],
              filter: [
                'drop-shadow(0 0 2px rgba(0,243,255,0.3))',
                'drop-shadow(0 0 8px rgba(168,85,247,0.5))',
                'drop-shadow(0 0 2px rgba(255,0,255,0.3))',
                'drop-shadow(0 0 2px rgba(0,243,255,0.3))'
              ],
              y: [0, -8, 0],
              scale: [1, 1.03, 1]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="text-sm md:text-base font-orbitron font-black tracking-widest leading-relaxed uppercase"
          >
            &copy; 2026 LOMASH.DEV — Designed & Developed by Lomash Srivastava
          </motion.p>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-primary/50" />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_#00f3ff]" 
            />
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}