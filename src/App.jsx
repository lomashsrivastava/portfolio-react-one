import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import ProfessionalCertifications from './components/sections/ProfessionalCertifications';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-darker text-light' : 'bg-gray-50 text-gray-900'} transition-colors duration-300 relative`}>
      {theme === 'dark' && <ParticlesBackground />}
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <ProfessionalCertifications />
        <Resume />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
