import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Mail, Send, Phone, MapPin, ExternalLink, QrCode } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import SectionHeading from '../SectionHeading';

// Animated Border for QR Box
const RunningBorder = ({ w, h, radius = 24 }) => (
  <svg className="absolute inset-0 pointer-events-none overflow-visible" width="100%" height="100%">
    <motion.rect
      x="0" y="0" width="100%" height="100%"
      rx={radius} ry={radius}
      fill="none"
      stroke="#00f3ff"
      strokeWidth="2"
      strokeDasharray="80 150"
      animate={{ strokeDashoffset: [0, -400] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="opacity-40"
    />
  </svg>
);

const ContactCard = ({ children, title, icon: Icon, colorClass, delay = 0, hasRunningBorder = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative h-full"
  >
    <div className={`absolute -inset-0.5 bg-gradient-to-br ${colorClass} rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500`}></div>
    <div className="relative h-full bg-[#0a0f1a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col hover:border-white/20 transition-all duration-300">
      {hasRunningBorder && <RunningBorder />}
      
      <div className="flex items-center gap-4 mb-5">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="p-3 rounded-xl bg-white/5 border border-white/10 text-white"
        >
          <Icon size={20} />
        </motion.div>
        <h3 className="text-lg font-bold font-orbitron text-white tracking-widest uppercase">{title}</h3>
      </div>
      {children}
    </div>
  </motion.div>
);

const AnimatedInput = ({ type = "text", name, placeholder, required = true }) => (
  <div className="relative group/input w-full">
    <input 
      type={type} 
      name={name} 
      required={required} 
      placeholder={placeholder}
      className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-xs text-white placeholder:text-gray-500/50 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/20 transition-all"
    />
  </div>
);

const AnimatedTextArea = ({ name, placeholder, required = true }) => (
  <div className="relative group/input w-full">
    <textarea 
      name={name} 
      required={required} 
      placeholder={placeholder}
      className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-xs text-white placeholder:text-gray-500/50 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/20 transition-all h-24 resize-none"
    ></textarea>
  </div>
);

export default function Contact() {
  const { contact } = portfolioData;
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    const formData = new FormData(e.target);
    formData.append("access_key", contact.accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-transparent">
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading title="Get In Touch" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Box 1: Quick Contact */}
          <ContactCard title="Quick Contact" icon={Mail} colorClass="from-primary to-blue-600" delay={0.1}>
            <div className="space-y-3 flex-1">
              <a href={`mailto:${contact.email}`} className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 hover:bg-primary/10 transition-all group/item">
                <div className="flex items-center gap-3">
                  <motion.div whileHover={{ scale: 1.2 }}><Mail className="text-primary" size={18} /></motion.div>
                  <span className="text-xs font-medium text-gray-400 group-hover/item:text-white transition-colors">{contact.email}</span>
                </div>
                <ExternalLink size={12} className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
              </a>
              <a href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 hover:bg-secondary/10 transition-all group/item">
                <div className="flex items-center gap-3">
                  <motion.div whileHover={{ scale: 1.2 }}><Phone className="text-secondary" size={18} /></motion.div>
                  <span className="text-xs font-medium text-gray-400 group-hover/item:text-white transition-colors">{contact.phone}</span>
                </div>
                <ExternalLink size={12} className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
              </a>
              <a href={contact.mapLink} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 hover:bg-accent1/10 transition-all group/item">
                <div className="flex items-center gap-3">
                  <motion.div whileHover={{ scale: 1.2 }}><MapPin className="text-accent1" size={18} /></motion.div>
                  <span className="text-xs font-medium text-gray-400 group-hover/item:text-white transition-colors">{contact.location}</span>
                </div>
                <ExternalLink size={12} className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
              </a>
            </div>
          </ContactCard>

          {/* Box 2: Social Media */}
          <ContactCard title="Social Media" icon={FaLinkedin} colorClass="from-secondary to-purple-800" delay={0.2}>
            <div className="grid grid-cols-1 gap-3">
              <a href={contact.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-blue-600/10 border border-blue-500/20 hover:border-blue-500/50 transition-all group/item">
                <div className="flex items-center gap-3">
                  <motion.div whileHover={{ rotate: 15 }}><FaLinkedin size={20} className="text-[#0077b5]" /></motion.div>
                  <span className="font-orbitron font-bold tracking-widest text-[10px]">LinkedIn</span>
                </div>
                <span className="text-[9px] text-gray-500">Profile</span>
              </a>
              <a href={contact.socials.whatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-green-600/10 border border-green-500/20 hover:border-green-500/50 transition-all group/item">
                <div className="flex items-center gap-3">
                  <motion.div whileHover={{ rotate: 15 }}><FaWhatsapp size={20} className="text-[#25d366]" /></motion.div>
                  <span className="font-orbitron font-bold tracking-widest text-[10px]">WhatsApp</span>
                </div>
                <span className="text-[9px] text-gray-500">Chat</span>
              </a>
              <a href={contact.socials.github} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all group/item">
                <div className="flex items-center gap-3">
                  <motion.div whileHover={{ rotate: 15 }}><FaGithub size={20} className="text-white" /></motion.div>
                  <span className="font-orbitron font-bold tracking-widest text-[10px]">GitHub</span>
                </div>
                <span className="text-[9px] text-gray-500">Code</span>
              </a>
            </div>
          </ContactCard>

          {/* Box 3: Message Me */}
          <ContactCard title="Message Me" icon={Send} colorClass="from-accent1 to-green-700" delay={0.3}>
            <form className="space-y-6 pt-2" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AnimatedInput name="name" placeholder="YOUR NAME" />
                <AnimatedInput type="email" name="email" placeholder="YOUR EMAIL" />
              </div>
              <AnimatedTextArea name="message" placeholder="YOUR MESSAGE" />
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={formStatus === 'sending'}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white font-black font-orbitron text-[9px] tracking-[0.2em] uppercase transition-all disabled:opacity-50 overflow-hidden relative group/btn"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                {formStatus === 'sending' ? 'Transmitting...' : 'Send Signal'}
              </motion.button>
              {formStatus === 'success' && <p className="text-[9px] text-red-500 text-center font-bold font-orbitron animate-pulse">SIGNAL DELIVERED!</p>}
            </form>
          </ContactCard>

          {/* Box 4: Scan QR */}
          <ContactCard title="Scan QR" icon={QrCode} colorClass="from-green-500 to-primary" delay={0.4} hasRunningBorder={true}>
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <div className="relative group/qr p-1 rounded-2xl overflow-hidden">
                {/* Rotating Red Border Effect */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-transparent opacity-100"
                  style={{ borderRadius: '1rem' }}
                />
                
                <div className="relative z-10 p-3 rounded-2xl bg-white shadow-2xl transition-transform duration-500 hover:scale-105">
                   <img 
                      src="/assets/img/whatsapp.png" 
                      alt="WhatsApp QR Code" 
                      className="w-32 h-32 object-contain"
                      onError={(e) => {
                        e.target.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/917355338964";
                      }}
                   />
                </div>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-black text-white font-orbitron tracking-widest uppercase mb-1">Direct Chat</p>
                <p className="text-[8px] text-gray-500 font-medium">Scan code to message</p>
              </div>
            </div>
          </ContactCard>

        </div>
      </div>
    </section>
  );
}