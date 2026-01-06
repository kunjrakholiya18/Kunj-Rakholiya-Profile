
import React from 'react';
// Fix for react-router-dom and framer-motion exports/properties issues
import * as ReactRouterDOM from 'react-router-dom';
import { motion as motionBase } from 'framer-motion';
import { Mail, Phone, ArrowLeft, Send, Linkedin, Github, ExternalLink, Sparkles } from 'lucide-react';
import profileImg from "/assets/kunj.png";

const { Link } = ReactRouterDOM as any;
const motion = motionBase as any;

const BlinkingStar: React.FC = () => {
  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <style>
        {`
          @keyframes star-blink {
            0%, 100% { opacity: 0.3; filter: drop-shadow(0 0 0px rgba(59, 130, 246, 0)); transform: scale(0.95); }
            50% { opacity: 1; filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.8)); transform: scale(1.05); }
          }
          .star-segment {
            animation: star-blink 3s infinite ease-in-out;
            fill: currentColor;
          }
          .delay-1 { animation-delay: 0s; }
          .delay-2 { animation-delay: 0.6s; }
          .delay-3 { animation-delay: 1.2s; }
          .delay-4 { animation-delay: 1.8s; }
          .delay-5 { animation-delay: 2.4s; }
        `}
      </style>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-blue-500 dark:text-blue-400 overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 
          Each path represents one of the five "arms" of the star, 
          composed of triangles meeting at the center (50,50).
        */}
        {/* Top Point */}
        <path 
          className="star-segment delay-1" 
          d="M50 50 L38 38 L50 5 L62 38 Z" 
        />
        {/* Right Top Point */}
        <path 
          className="star-segment delay-2" 
          d="M50 50 L62 38 L95 50 L62 62 Z" 
        />
        {/* Right Bottom Point */}
        <path 
          className="star-segment delay-3" 
          d="M50 50 L62 62 L75 95 L50 75 Z" 
        />
        {/* Left Bottom Point */}
        <path 
          className="star-segment delay-4" 
          d="M50 50 L50 75 L25 95 L38 62 Z" 
        />
        {/* Left Top Point */}
        <path 
          className="star-segment delay-5" 
          d="M50 50 L38 62 L5 50 L38 38 Z" 
        />
        
        {/* Center Glow Core */}
        <circle cx="50" cy="50" r="4" className="fill-blue-600 dark:fill-blue-300 animate-pulse" />
      </svg>
    </div>
  );
};

const Contact: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  const professionalIntentText = "As a dedicated professional seeking my first entry-level position in Web Development, I bring a strong foundation of theoretical knowledge combined with hands-on project experience. I have worked on real-world projects that strengthened my skills in building responsive, user-focused web applications using modern technologies. My approach is defined by accountability, professionalism, and long-term loyalty to the organization I work with. I am a quick learner who adapts easily to new environments, embraces challenges, and continuously strives to improve my technical and problem-solving abilities.";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center py-20 px-6 theme-transition relative overflow-hidden"
    >
      {/* Background Decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 text-blue-500/10 dark:text-blue-500/5 pointer-events-none hidden md:block"
      >
        <Sparkles size={400} />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 text-indigo-500/10 dark:text-indigo-500/5 pointer-events-none hidden md:block"
      >
        <Sparkles size={350} />
      </motion.div>

      {/* 
          PRINT ONLY VERSION 
      */}
      <div className="hidden print:block w-full max-w-4xl mx-auto p-12 text-slate-900 bg-white border-2 border-slate-200 rounded-lg">
        <div className="flex justify-between items-start border-b-2 border-slate-900 pb-8 mb-8">
          <div>
            <h1 className="text-5xl font-black uppercase tracking-tighter mb-2">Kunj Rakholiya</h1>
            <p className="text-2xl font-bold text-blue-700">Web Designer & Developer</p>
          </div>
          <div className="text-right space-y-2">
            <div className="flex items-center justify-end gap-2 text-slate-700">
              <span className="font-semibold">kunjrakholiya4@gmail.com</span>
              <Mail size={18} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-12">
          <div className="col-span-1 space-y-8">
            <section>
              <h2 className="text-xl font-black uppercase tracking-widest border-b border-slate-300 mb-4 pb-1">Education</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-slate-900">BCA Graduate</p>
                  <p className="text-sm text-slate-600 italic">Veer Narmad South Gujarat University</p>
                  <p className="text-xs font-bold text-blue-700 mt-1">Score: 69.80%</p>
                </div>
                <div>
                  <p className="font-bold text-slate-900">MCA (Pursuing)</p>
                  <p className="text-sm text-slate-600 italic">IGNOU</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-black uppercase tracking-widest border-b border-slate-300 mb-4 pb-1">Contact</h2>
              <p className="text-sm text-slate-800 font-medium">+91 8758651126</p>
              <p className="text-sm text-slate-800 font-medium">github.com/kunjrakholiya18</p>
            </section>
          </div>

          <div className="col-span-2">
            <section className="mb-8">
              <h2 className="text-xl font-black uppercase tracking-widest border-b border-slate-300 mb-4 pb-1">Professional Intent</h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                {professionalIntentText}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black uppercase tracking-widest border-b border-slate-300 mb-4 pb-1">Core Competencies</h2>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-800 font-bold">
                <span>• Web Design</span>
                <span>• PHP & MySQL</span>
                <span>• JavaScript</span>
                <span>• Responsive UI</span>
                <span>• React.js</span>
              </div>
            </section>
          </div>
        </div>
        
        <footer className="mt-20 pt-8 border-t border-slate-200 text-center text-slate-400 text-xs uppercase tracking-[0.3em]">
          Portfolio Summary • Kunj Rakholiya
        </footer>
      </div>

      {/* 
          SCREEN ONLY VERSION 
      */}
      <div className="max-w-4xl w-full print:hidden z-10">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white mb-12 group transition-colors"
        >
          <motion.span whileHover={{ x: -5 }}>
            <ArrowLeft size={20} />
          </motion.span>
          Go Back
        </Link>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info Sidebar */}
          <div className="md:col-span-2 flex flex-col items-center text-center">
             <motion.div 
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ type: "spring", damping: 15 }}
               className="mb-8 relative group"
             >
                {/* Big Rotating Star behind profile image */}
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ 
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -inset-10 text-blue-500/20 dark:text-blue-400/20 flex items-center justify-center pointer-events-none"
                >
                  <Sparkles size={280} fill="currentColor" fillOpacity={0.1} />
                </motion.div>

                <div className="absolute inset-0 bg-blue-600 blur-3xl opacity-10 dark:opacity-20 rounded-full" />
                <div className="relative w-44 h-64 md:w-52 md:h-72 rounded-t-full overflow-hidden border-2 border-slate-200 dark:border-blue-500/50 shadow-xl dark:shadow-2xl bg-white dark:bg-slate-800 theme-transition">
                  <img 
                     src={profileImg}                     alt="Kunj Rakholiya"  
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
             </motion.div>
             
             <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Kunj Rakholiya</h1>
             <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg tracking-tight mb-2">Web Designer & Developer</p>

             {/* Decorative Animated Star between text and direct email cards */}
             <div className="mt-8 mb-12 flex justify-center items-center">
               <BlinkingStar />
             </div>
             
             {/* Styled Contact Cards - Refined Capsule Look */}
             <div className="w-full space-y-6">
                <a 
                  href="mailto:kunjrakholiya4@gmail.com"
                  className="group relative flex items-center gap-5 p-4 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-blue-500/30 rounded-[2.5rem] transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] theme-transition"
                >
                  <div className="flex-shrink-0 p-4 bg-blue-100 dark:bg-blue-500/15 rounded-3xl dark:shadow-[0_0_15px_rgba(59,130,246,0.25)] group-hover:scale-110 transition-transform duration-500">
                    <Mail size={28} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-left flex flex-col">
                    <span className="text-[11px] uppercase tracking-[0.25em] font-black text-blue-600 dark:text-blue-400 leading-none mb-1.5">Direct Mail</span>
                    <p className="text-sm text-slate-700 dark:text-slate-100 break-all font-bold tracking-tight">kunjrakholiya4@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+918758651126"
                  className="group relative flex items-center gap-5 p-4 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-emerald-500/30 rounded-[2.5rem] transition-all duration-300 hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] theme-transition"
                >
                  <div className="flex-shrink-0 p-4 bg-emerald-100 dark:bg-emerald-500/15 rounded-3xl dark:shadow-[0_0_15px_rgba(16,185,129,0.25)] group-hover:scale-110 transition-transform duration-500">
                    <Phone size={28} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="text-left flex flex-col">
                    <span className="text-[11px] uppercase tracking-[0.25em] font-black text-emerald-600 dark:text-emerald-400 leading-none mb-1.5">Mobile</span>
                    <p className="text-sm text-slate-700 dark:text-slate-100 font-bold tracking-tight">+91 8758651126</p>
                  </div>
                </a>
             </div>

             <div className="flex gap-4 mt-12">
                <a href="https://www.linkedin.com/in/kunj-rakholiya-719671357/" target="_blank" rel="noreferrer" className="p-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 rounded-2xl hover:text-blue-600 dark:hover:text-white transition-all shadow-sm dark:shadow-lg theme-transition"><Linkedin size={22}/></a>
                <a href="https://github.com/kunjrakholiya18" target="_blank" rel="noreferrer" className="p-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 rounded-2xl hover:text-blue-600 dark:hover:text-white transition-all shadow-sm dark:shadow-lg theme-transition"><Github size={22}/></a>
             </div>
          </div>

          <div className="md:col-span-3">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-8 md:p-10 rounded-3xl h-full flex flex-col shadow-xl dark:shadow-2xl backdrop-blur-sm theme-transition"
             >
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                  <span className="p-2 bg-blue-500/10 rounded-lg"><Send className="text-blue-600 dark:text-blue-400" size={24} /></span> 
                  Professional Intent
                </h2>
                <div className="prose dark:prose-invert max-w-none space-y-6">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    As a dedicated professional seeking my first entry-level position in <span className="text-slate-900 dark:text-white font-semibold">Web Development</span>, I bring a strong foundation of theoretical knowledge combined with hands-on project experience.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    I have worked on real-world projects that strengthened my skills in building responsive, user-focused web applications using modern technologies.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    My approach is defined by <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider text-sm">accountability</span>, <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider text-sm">professionalism</span>, and long-term <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider text-sm">loyalty</span> to the organization I work with.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg italic border-l-4 border-blue-600 pl-4 py-2 bg-blue-600/5">
                    "I am a quick learner who adapts easily to new environments, embraces challenges, and continuously strives to improve my technical and problem-solving abilities."
                  </p>
                </div>
                
                <div className="mt-12 flex-1 flex items-end">
                   <div className="w-full">
                     <p className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">Quick Actions</p>
                     <div className="grid sm:grid-cols-2 gap-4">
                        <a 
                          href="mailto:kunjrakholiya4@gmail.com"
                          className="group relative flex items-center gap-3 p-4 bg-blue-600 text-white rounded-3xl font-bold transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] overflow-hidden"
                        >
                          <div className="p-2 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                            <Mail size={18} />
                          </div>
                          <span className="text-[10px] uppercase tracking-widest leading-none">Connect Now</span>
                        </a>
                        <button 
                          onClick={handlePrint}
                          className="group relative flex items-center gap-3 p-4 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white rounded-3xl font-bold transition-all hover:bg-slate-200 dark:hover:bg-slate-600 overflow-hidden"
                        >
                          <div className="p-2 bg-slate-200 dark:bg-slate-800 rounded-xl group-hover:scale-110 transition-transform">
                            <ExternalLink size={18} />
                          </div>
                          <span className="text-[10px] uppercase tracking-widest leading-none">Save Profile</span>
                        </button>
                     </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
