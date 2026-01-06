
import React from 'react';
// Fix for framer-motion initial property issue
import { motion as motionBase } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';

const motion = motionBase as any;

const Home: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden theme-transition"
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-500 text-sm theme-transition">
        <p>© {new Date().getFullYear()} Kunj Rakholiya. Built with Passion.</p>
      </footer>
    </motion.main>
  );
};

export default Home;