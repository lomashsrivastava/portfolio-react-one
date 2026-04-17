import React from 'react';
import { motion } from 'framer-motion';

const CentralChip = () => {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 100, height: 100 }}>

      {/* Outer pulse ring */}
      <motion.div
        className="absolute rounded-full border border-primary/20"
        style={{ width: 100, height: 100 }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Outer dashed ring — CW */}
      <motion.div
        className="absolute rounded-full"
        style={{ width: 88, height: 88, border: '1.5px dashed rgba(0,243,255,0.3)' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      />

      {/* Inner split arc — CCW */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 70, height: 70,
          borderTop:    '2px solid #00f3ff',
          borderRight:  '2px solid transparent',
          borderBottom: '2px solid #ff00ff',
          borderLeft:   '2px solid transparent',
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Core box */}
      <div
        className="absolute rounded-xl flex flex-col items-center justify-center overflow-hidden"
        style={{
          width: 50, height: 50,
          background: 'linear-gradient(135deg, #0a1628, #070b14)',
          border: '1.5px solid rgba(0,243,255,0.35)',
          boxShadow: '0 0 16px rgba(0,243,255,0.2)',
        }}
      >
        {/* Corner notches */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/60" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/60" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/60" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/60" />

        {/* 3×3 dot grid — single shared animation */}
        <div className="grid grid-cols-3 gap-[2px] z-10">
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.div
              key={i}
              className="rounded-[1px]"
              style={{ width: 4, height: 4, background: '#00f3ff' }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.12 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CentralChip;
