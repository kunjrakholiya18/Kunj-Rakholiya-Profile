
import React from 'react';
// Fix for framer-motion property issues
import { motion as motionBase } from 'framer-motion';
import { Code2, Layout, Database, Sparkles } from 'lucide-react';
import { SkillCategory } from '../types';

const motion = motionBase as any;

const categories: SkillCategory[] = [
  {
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Responsive Design"]
  },
  {
    title: "Frameworks",
    skills: ["React.js", "Tailwind CSS", "Bootstrap", "Next.js", "Express"]
  },
  {
    title: "Tools & Databases",
    skills: ["MySQL", "MongoDB", "PHP", "Git/GitHub", "Node.js", "VS Code"]
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Teamwork", "Adaptability", "Time Management", "Leadership"]
  }
];

const Skills: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const getIcon = (title: string) => {
    switch (title) {
      case "Web Technologies": return <Layout className="text-blue-600 dark:text-blue-400" />;
      case "Frameworks": return <Code2 className="text-indigo-600 dark:text-indigo-400" />;
      case "Tools & Databases": return <Database className="text-sky-600 dark:text-sky-400" />;
      case "Soft Skills": return <Sparkles className="text-blue-600 dark:text-blue-300" />;
      default: return null;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-slate-900/50 relative overflow-hidden theme-transition">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 text-indigo-500/10 dark:text-indigo-500/5 pointer-events-none hidden md:block"
      >
        <Sparkles size={450} />
      </motion.div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-800 dark:text-white mb-4"
          >
            My Skills
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-md dark:shadow-xl group theme-transition"
            >
              <div className="mb-4 p-3 bg-white dark:bg-slate-900 rounded-xl inline-block group-hover:scale-110 transition-transform shadow-sm dark:shadow-lg shadow-blue-500/5 theme-transition">
                {getIcon(cat.title)}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.skills.map(skill => (
                  <li key={skill} className="flex items-center text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-slate-200 transition-colors">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;