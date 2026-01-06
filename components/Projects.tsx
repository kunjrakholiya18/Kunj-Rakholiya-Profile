
import React, { useState, useEffect } from 'react';
// Fix for framer-motion property issues
import { motion as motionBase, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Monitor, Hospital, ShoppingCart, Sparkles, X, Clock } from 'lucide-react';

const motion = motionBase as any;

const projects = [
  {
    title: "My AI",
    description: "An innovative AI-based application designed to assist users with daily tasks using natural language processing. Features a clean dashboard and seamless API integrations.",
    tags: ["React", "Python", "OpenAI API", "Tailwind CSS"],
    icon: <Monitor className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=450",
    liveLink: "https://sahayak-ai-hu1y.vercel.app/",
    githubLink: "https://github.com/kunjrakholiya18"
  },
  {
    title: "Hospital Management System",
    description: "Developed a basic Hospital system using PHP and MySQL. Implemented user interface and admin functionality with full frontend-backend connectivity.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    icon: <Hospital className="w-8 h-8 text-sky-600 dark:text-sky-400" />,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=450",
    liveLink: "#",
    githubLink: "https://github.com/kunjrakholiya18"
  },
  {
    title: "Online Shopping System",
    description: "Created an e-commerce website for selling products and managing customers. Includes an admin panel for inventory and user management.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    icon: <ShoppingCart className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800&h=450",
    liveLink: "#",
    githubLink: "https://github.com/kunjrakholiya18"
  }
];

const Projects: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  const handleDemoClick = (e: React.MouseEvent, link: string) => {
    if (link === "#") {
      e.preventDefault();
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden theme-transition">
      {/* Background Decorations */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 -left-20 text-blue-500/10 dark:text-blue-500/5 pointer-events-none hidden md:block"
      >
        <Sparkles size={500} />
      </motion.div>
      <div className="absolute top-1/2 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -z-10" />

      {/* Coming Soon Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-4 rounded-2xl shadow-2xl border border-white/10 dark:border-slate-200 min-w-[300px]"
          >
            <div className="p-2 bg-blue-600 dark:bg-blue-500 rounded-xl text-white">
              <Clock size={20} />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm tracking-tight">Preview Not Ready</p>
              <p className="text-xs opacity-70">Coming soon! Stay tuned.</p>
            </div>
            <button 
              onClick={() => setShowToast(false)}
              className="p-1 hover:bg-white/10 dark:hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-slate-800 dark:text-white mb-4"
            >
              My Projects
            </motion.h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl">
              Showcasing a selection of my recent work in web development and software engineering.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="h-1 bg-blue-600 w-32 rounded-full hidden md:block"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl overflow-hidden shadow-lg dark:shadow-2xl group flex flex-col theme-transition"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent opacity-60" />
                <div className="absolute top-4 right-4 p-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-700 theme-transition">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-1 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700/50 text-blue-600 dark:text-blue-300 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-200 dark:border-slate-600 theme-transition">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.liveLink} 
                    onClick={(e) => handleDemoClick(e, project.liveLink)}
                    target={project.liveLink !== "#" ? "_blank" : undefined}
                    rel={project.liveLink !== "#" ? "noopener noreferrer" : undefined}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-500 transition-colors"
                  >
                    <ExternalLink size={14} /> Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-white rounded-xl text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition-all theme-transition"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;