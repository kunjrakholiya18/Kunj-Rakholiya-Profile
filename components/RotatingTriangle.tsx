
import React from 'react';
// Fix for framer-motion animate property issue
import { motion as motionBase } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const motion = motionBase as any;

const RotatingTriangle: React.FC = () => {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }}
      className="inline-flex items-center justify-center text-indigo-600 dark:text-indigo-400"
    >
      <Sparkles size={32} fill="currentColor" fillOpacity={0.2} />
    </motion.div>
  );
};

export default RotatingTriangle;