
import React from 'react';
// Fix for framer-motion property issues
import { motion as motionBase } from 'framer-motion';
import { User, GraduationCap, Award, Sparkles } from 'lucide-react';
import profileImg from "/assets/kunj.png";

const motion = motionBase as any;

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden theme-transition">
      {/* Background glow and Sparkles */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 text-blue-500/10 dark:text-blue-500/5 pointer-events-none hidden md:block"
      >
        <Sparkles size={600} />
      </motion.div>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8 md:p-16 backdrop-blur-sm shadow-xl dark:shadow-2xl relative theme-transition"
        >
          {/* Section Header with Icon */}
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-blue-600/10 text-blue-600 dark:text-blue-400 rounded-2xl border border-blue-500/20 shadow-lg shadow-blue-500/5">
              <User size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white inline-block border-b-4 border-blue-600 pb-2">
              About Me
            </h2>
          </div>
          
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Image Column */}
            <div className="md:col-span-2 flex justify-center">
               <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-t from-blue-600/20 to-transparent rounded-t-full blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                  
                  <div className="relative w-56 h-80 md:w-64 md:h-96 overflow-hidden rounded-t-full border-4 border-slate-100 dark:border-slate-700 group-hover:border-blue-500/50 transition-all duration-500 shadow-2xl bg-slate-200 dark:bg-slate-900">
                   <img 
                      src={profileImg} 
                      alt="Kunj Rakholiya"  
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 origin-bottom"
                    />
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3 rounded-2xl shadow-xl flex items-center gap-2 group-hover:translate-y-[-5px] transition-transform theme-transition">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                      <Award size={16} />
                    </div>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300 pr-2 uppercase tracking-tighter">BCA Graduate</span>
                  </div>
               </div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-3">
              <div className="mb-6">
                <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-xs mb-2 block">Professional Summary</span>
                <p className="text-xl text-slate-800 dark:text-white font-semibold mb-4">Hello! I'm Kunj Rakholiya</p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  I am a motivated and detail-oriented <span className="text-slate-900 dark:text-white font-medium">BCA Graduate</span> with practical experience in PHP and MySQL projects. 
                  Currently, I am expanding my technical horizons by pursuing an <span className="text-blue-600 dark:text-blue-400 font-bold">MCA</span> from IGNOU.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  My journey is defined by a passion for solving complex problems through clean and efficient code. 
                  I specialize in bridging frontend aesthetics with robust backend functionality.
                </p>
              </div>
              
              {/* Horizontal Cyber Styled Status Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="group flex items-center gap-4 p-5 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-blue-500/20 hover:border-blue-500 dark:hover:border-blue-500 transition-all theme-transition hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                >
                  <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-500/20 rounded-2xl dark:shadow-[0_0_10px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform">
                    <GraduationCap size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-black text-blue-600 dark:text-blue-400 leading-none mb-1">Status</span>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200">MCA Pursuing</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="group flex items-center gap-4 p-5 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-emerald-500/20 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all theme-transition hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                >
                  <div className="flex-shrink-0 p-3 bg-emerald-100 dark:bg-emerald-500/20 rounded-2xl dark:shadow-[0_0_10px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform">
                    <Award size={24} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-black text-emerald-600 dark:text-emerald-400 leading-none mb-1">Academic</span>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200">69.80% in BCA</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;