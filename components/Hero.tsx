
import React, { useState, useEffect } from 'react';
// Fix for framer-motion Variants and property issues
import { motion as motionBase, useScroll, useTransform } from 'framer-motion';
import { Mail, Download, Github, Linkedin, ChevronRight, Sparkles } from 'lucide-react';
import RotatingTriangle from './RotatingTriangle';

const motion = motionBase as any;

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  const [displayText, setDisplayText] = useState('');
  const fullText = "Building digital experiences with modern code.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative min-h-[100vh] flex items-center px-6 pt-32 pb-20 overflow-hidden theme-transition">
      {/* Dynamic Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 text-blue-500/10 dark:text-blue-500/5 pointer-events-none hidden md:block"
      >
        <Sparkles size={500} />
      </motion.div>

      <motion.div style={{ y: y1 }} className="absolute top-[10%] left-[5%] w-32 h-32 border-2 border-blue-500/20 rounded-full -z-10" />
      <motion.div style={{ y: y2, rotate }} className="absolute bottom-[20%] right-[10%] w-24 h-24 border-2 border-indigo-500/20 rounded-3xl -z-10" />
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-600/5 dark:bg-blue-600/10 blur-[160px] rounded-full -z-10 animate-pulse" />
      <div className="absolute top-[40%] right-[-5%] w-[600px] h-[600px] bg-indigo-600/5 dark:bg-indigo-600/10 blur-[140px] rounded-full -z-10" />

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10"
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-8 shadow-sm"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">Available for Projects</span>
            </motion.div>

            {/* Heading with Integrated Star */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center gap-4 mb-2">
                 <h2 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white leading-none tracking-tight">Hello, I'm</h2>
                 <RotatingTriangle />
              </div>
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-6">
                <span className="block text-slate-900 dark:text-white">Kunj</span>
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-500 dark:to-purple-400 bg-clip-text text-transparent">
                  Rakholiya
                </span>
              </h1>
              <div className="h-8">
                <p className="text-blue-600 dark:text-blue-400 font-mono font-bold">
                  {displayText}<span className="animate-pulse">_</span>
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mb-12"
            >
              A motivated <span className="text-slate-900 dark:text-white font-bold underline decoration-blue-500 decoration-2 underline-offset-4">BCA Graduate</span> currently elevating my craft through an <span className="text-slate-900 dark:text-white font-bold">MCA</span>. Specializing in high-performance web solutions.
            </motion.p>

            {/* Actions - Redesigned to match the requested capsule style */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 mb-16">
              <a 
                href="mailto:kunjrakholiya4@gmail.com"
                className="group flex items-center gap-4 p-4 pr-10 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-blue-500/40 rounded-full transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] theme-transition"
              >
                <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-500/20 rounded-2xl dark:shadow-[0_0_10px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform">
                  <Mail size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black text-blue-600 dark:text-blue-400 leading-none mb-1">Get In Touch</span>
                  <p className="text-sm font-bold text-slate-800 dark:text-white">Let's Connect</p>
                </div>
              </a>

              <a 
                href="/Resume/kunj Rakholiya resume.pdf" 
                download=''
                className="group flex items-center gap-4 p-4 pr-10 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-emerald-500/40 rounded-full transition-all duration-300 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] theme-transition"
              >
                <div className="flex-shrink-0 p-3 bg-emerald-100 dark:bg-emerald-500/20 rounded-2xl dark:shadow-[0_0_10px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform">
                  <Download size={24} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black text-emerald-600 dark:text-emerald-400 leading-none mb-1">Download CV</span>
                  <p className="text-sm font-bold text-slate-800 dark:text-white">Professional Resume</p>
                </div>
              </a>
            </motion.div>

            {/* Footer Row */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-8 pt-8 border-t border-slate-200 dark:border-slate-800/50">
              <div className="flex items-center gap-5">
                <a href="https://github.com/kunjrakholiya18" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-white transition-all transform hover:scale-125">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/kunj-rakholiya-719671357/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-white transition-all transform hover:scale-125">
                  <Linkedin size={24} />
                </a>
              </div>
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-800" />
              <div className="text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
                Crafting Excellence
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Enhanced Code Mockup */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-3xl rounded-full opacity-50" />
            
            <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-1 shadow-2xl overflow-hidden group theme-transition">
              <div className="bg-[#f8fafc] dark:bg-[#0b1221] rounded-[2.3rem] p-10 font-mono text-sm leading-relaxed">
                {/* Terminal Header */}
                <div className="flex gap-2 mb-12 items-center justify-between">
                  <div className="flex gap-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-400/80 shadow-inner" />
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-400/80 shadow-inner" />
                    <div className="w-3.5 h-3.5 rounded-full bg-green-400/80 shadow-inner" />
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-[10px] font-black tracking-[0.2em] uppercase">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    developer.config
                  </div>
                </div>

                {/* Code Content */}
                <div className="space-y-3 text-slate-700 dark:text-slate-300">
                  <div className="flex gap-6 group/line">
                    <span className="text-slate-300 dark:text-slate-700 w-4 text-right select-none opacity-50">1</span>
                    <p><span className="text-blue-600 dark:text-blue-400 font-bold italic">const</span> <span className="text-purple-600 dark:text-purple-400">developer</span> = &#123;</p>
                  </div>
                  <div className="flex gap-6 group/line">
                    <span className="text-slate-300 dark:text-slate-700 w-4 text-right select-none opacity-50">2</span>
                    <p className="pl-6"><span className="text-indigo-600 dark:text-indigo-400">name</span>: <span className="text-emerald-600 dark:text-emerald-400">'Kunj Rakholiya'</span>,</p>
                  </div>
                  <div className="flex gap-6 group/line">
                    <span className="text-slate-300 dark:text-slate-700 w-4 text-right select-none opacity-50">3</span>
                    <p className="pl-6"><span className="text-indigo-600 dark:text-indigo-400">role</span>: <span className="text-emerald-600 dark:text-emerald-400">'Web Architect'</span>,</p>
                  </div>
                  <div className="flex gap-6 group/line">
                    <span className="text-slate-300 dark:text-slate-700 w-4 text-right select-none opacity-50">4</span>
                    <p className="pl-6"><span className="text-indigo-600 dark:text-indigo-400">status</span>: <span className="text-emerald-600 dark:text-emerald-400">'Pursuing MCA'</span>,</p>
                  </div>
                  <div className="flex gap-6 group/line">
                    <span className="text-slate-300 dark:text-slate-700 w-4 text-right select-none opacity-50">5</span>
                    <p className="pl-6"><span className="text-indigo-600 dark:text-indigo-400">passionate_about</span>: [</p>
                  </div>
                  <div className="flex gap-6 group/line">
                    <span className="text-slate-300 dark:text-slate-700 w-4 text-right select-none opacity-50">6</span>
                    <p className="pl-12"><span className="text-emerald-600 dark:text-emerald-400">'Clean Code'</span>, <span className="text-emerald-600 dark:text-emerald-400">'UI Design'</span></p>
                  </div>
                  <div className="flex gap-6 group/line">
                    <span className="text-slate-300 dark:text-slate-700 w-4 text-right select-none opacity-50">7</span>
                    <p className="pl-6">],</p>
                  </div>
                  <div className="flex gap-6 group/line">
                    <span className="text-slate-300 dark:text-slate-700 w-4 text-right select-none opacity-50">8</span>
                    <p className="pl-6"><span className="text-blue-600 dark:text-blue-400">hireable</span>: <span className="text-amber-600 dark:text-amber-400">true</span></p>
                  </div>
                  <div className="flex gap-6 group/line">
                    <span className="text-slate-300 dark:text-slate-700 w-4 text-right select-none opacity-50">9</span>
                    <p>&#125;;</p>
                  </div>
                </div>

                {/* Simulated Cursor */}
                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <span className="text-xs text-slate-400">UTF-8</span>
                     <span className="text-xs text-slate-400">TypeScript</span>
                   </div>
                   <div className="flex items-center gap-1">
                      <ChevronRight size={14} className="text-blue-500" />
                      <span className="text-xs font-bold text-slate-600 dark:text-slate-400 animate-pulse">Waiting for connection...</span>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;