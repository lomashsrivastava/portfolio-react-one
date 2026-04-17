import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex items-center justify-center gap-4 mb-16"
    >
      <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/20"></div>
      <h2 className="text-sm md:text-base font-orbitron font-bold tracking-[0.5em] text-gray-400 uppercase flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#00f3ff]"></span>
        {title}
      </h2>
      <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/20"></div>
    </motion.div>
  );
};

export default SectionHeading;
