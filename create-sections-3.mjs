import fs from 'fs';

const Resume = `import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-24 w-full px-6">
      <div className="container max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-black mb-8 text-center font-orbitron uppercase tracking-widest text-glow-primary">System_Blueprint</h2>
        <p className="text-gray-400 mb-12 text-center max-w-2xl">Access full schematics and operational history data file.</p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full glass-card p-4 md:p-8 flex flex-col items-center border border-white/10"
        >
          <div className="w-full h-[600px] bg-darker rounded-xl overflow-hidden mb-8 border border-white/10 relative">
            <embed src="/assets/pdf/Resume.pdf" type="application/pdf" className="w-full h-full" />
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]"></div>
          </div>
          
          <a href="/assets/pdf/Resume.pdf" download className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold tracking-widest uppercase rounded-full hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] transition-all flex items-center justify-center gap-3">
             <FileText size={20} /> Extract Full Data <Download size={20} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}`;

const Contact = `import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 w-full px-6">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center font-orbitron uppercase tracking-widest text-glow-secondary text-secondary">Establish_Connection</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white font-orbitron">Initialize Handshake</h3>
            <p className="text-gray-400 mb-10 text-lg">Looking to collaborate on a new module or deploy a new system? Open a communication channel.</p>
            
            <div className="space-y-6">
              <a href={\`mailto:\${portfolioData.socials.email}\`} className="flex items-center gap-4 p-4 glass-card hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center group-hover:scale-110 transition-transform"><Mail /></div>
                <div>
                  <h4 className="text-white font-bold opacity-70 text-sm">TRANSMIT_EMAIL</h4>
                  <p className="text-primary group-hover:text-white transition-colors">{portfolioData.socials.email}</p>
                </div>
              </a>
              <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 glass-card hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:scale-110 transition-transform"><Github /></div>
                <div>
                  <h4 className="text-white font-bold opacity-70 text-sm">SOURCE_CODE</h4>
                  <p className="text-gray-300 group-hover:text-primary transition-colors">GitHub Profile</p>
                </div>
              </a>
              <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 glass-card hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center group-hover:scale-110 transition-transform"><Linkedin /></div>
                <div>
                  <h4 className="text-white font-bold opacity-70 text-sm">PROFESSIONAL_NETWORK</h4>
                  <p className="text-gray-300 group-hover:text-secondary transition-colors">LinkedIn Profile</p>
                </div>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 border border-white/10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2 font-orbitron">IDENTIFIER</label>
                <input type="text" className="w-full bg-darker/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Name" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2 font-orbitron">RETURN_ADDRESS</label>
                <input type="email" className="w-full bg-darker/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-secondary transition-colors" placeholder="Email" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2 font-orbitron">PAYLOAD</label>
                <textarea className="w-full bg-darker/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors h-32 resize-none" placeholder="Message content..." required></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-white/10 hover:bg-primary text-white hover:text-darker border border-white/20 hover:border-primary font-bold tracking-widest rounded-lg transition-all flex items-center justify-center gap-2 group">
                TRANSMIT DATA <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}`;

const Footer = `import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/10 mt-20 relative z-20 bg-darker">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-500 font-code text-sm">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All systems operational.
        </p>
      </div>
    </footer>
  );
}`;

const ParticlesBackground = `import React from 'react';

export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-darker">
      <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-primary opacity-5 blur-[120px] mix-blend-screen animate-pulse"></div>
      <div className="absolute top-[60%] left-[60%] w-[35vw] h-[35vw] rounded-full bg-secondary opacity-5 blur-[100px] mix-blend-screen" style={{ animation: 'pulse 4s infinite alternate' }}></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIi8+Cjwvc3ZnPg==')] opacity-30"></div>
    </div>
  );
}`;

const Sections3 = { Resume, Contact };

Object.entries(Sections3).forEach(([name, content]) => {
  fs.writeFileSync('src/components/sections/' + name + '.jsx', content);
});

fs.writeFileSync('src/components/Footer.jsx', Footer);
fs.writeFileSync('src/components/ParticlesBackground.jsx', ParticlesBackground);

console.log("Sections 3 generated");
