
import React from 'react';
// Fix for framer-motion property issues
import { motion as motionBase } from 'framer-motion';
import { GraduationCap, Calendar, Award, Sparkles } from 'lucide-react';

const motion = motionBase as any;

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  score?: string;
  status?: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Indira Gandhi National Open University",
    duration: "June 2025 – Present",
    status: "Pursuing"
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Veer Narmad South Gujarat University",
    duration: "June 2022 – March 2025",
    score: "69.80%"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Gujarat Secondary and Higher Secondary Education Board",
    duration: "April 2021 – March 2022",
    score: "72.74%"
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30 relative overflow-hidden theme-transition">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 -right-20 text-blue-500/10 dark:text-blue-500/5 pointer-events-none hidden md:block"
      >
        <Sparkles size={550} />
      </motion.div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4"
          >
            Education
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1.5 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600/50 via-slate-300 dark:via-slate-700 to-transparent theme-transition" />
          <div className="md:hidden absolute left-4 h-full w-0.5 bg-gradient-to-b from-blue-600/50 via-slate-300 dark:via-slate-700 to-transparent theme-transition" />

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center justify-between md:flex-row w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="hidden md:block w-[45%]" />

                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)] theme-transition" />
                  </div>

                  <div className="w-[calc(100%-40px)] ml-auto md:ml-0 md:w-[45%]">
                    <motion.div 
                      whileHover={{ y: -5, scale: 1.02 }}
                      className={`bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 p-6 md:p-8 rounded-3xl shadow-lg dark:shadow-2xl backdrop-blur-md hover:border-blue-600/40 dark:hover:border-blue-500/40 transition-all group theme-transition ${
                        !isEven ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      <div className={`flex items-center gap-4 mb-4 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className="p-3 bg-blue-600/10 text-blue-600 dark:text-blue-400 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                          <GraduationCap size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {item.degree}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-lg mb-4">
                        {item.institution}
                      </p>
                      
                      <div className={`flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 ${!isEven ? 'md:justify-end' : ''}`}>
                        <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700/50 theme-transition">
                          <Calendar size={16} className="text-blue-600 dark:text-blue-500" />
                          {item.duration}
                        </div>
                        
                        {/* Premium Styled Badges */}
                        {item.score && (
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-xl border border-emerald-500/30 dark:shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                            <Award size={16} className="text-emerald-600 dark:text-emerald-400" />
                            <span className="text-emerald-600 dark:text-emerald-400 font-black uppercase tracking-tighter text-[10px]">{item.score} SCORE</span>
                          </div>
                        )}
                        {item.status && (
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl border border-blue-500/30 dark:shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                            <Sparkles size={16} className="text-blue-600 dark:text-blue-400" />
                            <span className="text-blue-600 dark:text-blue-300 font-black uppercase tracking-widest text-[10px]">{item.status}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;