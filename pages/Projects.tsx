import React from 'react';
import { PROJECTS } from '../constants';
import { motion, Variants } from 'framer-motion';

interface ProjectsProps {
  id?: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <div id={id} className="w-full bg-white overflow-hidden">
      {/* Header */}
      <div className="bg-neutral py-14 md:py-24 border-b border-gray-200 text-center">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8"
        >
          <h2 className="text-accent text-xs md:text-sm font-bold tracking-widest uppercase mb-2">معرض الأعمال</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-lg leading-loose">
            لقطات مختارة تعكس جودة التنفيذ والاهتمام بأدق التفاصيل.
          </p>
        </motion.div>
      </div>

      {/* Grid */}
      <section className="py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PROJECTS.map((project) => (
              <motion.div 
                key={project.id} 
                variants={item}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-sm overflow-hidden cursor-pointer bg-white"
              >
                {/* 
                  Visual Effects Container:
                  1. Shadow Glow on Hover
                  2. Border radius handling
                */}
                <div className="relative overflow-hidden h-[300px] md:h-[450px] shadow-md transition-all duration-700 hover:shadow-[0_15px_45px_-10px_rgba(202,138,4,0.3)]">
                  
                  {/* The Image: Starts slightly desaturated and dimmed, becomes vibrant on hover */}
                  <img 
                    src={project.image} 
                    alt="Servot Project" 
                    loading="lazy"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.2s] ease-in-out will-change-transform filter grayscale-[30%] brightness-95 group-hover:grayscale-0 group-hover:brightness-105"
                  />
                  
                  {/* Glassy Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-700"></div>
                  
                  {/* Subtle Border Inner Highlight */}
                  <div className="absolute inset-0 border border-white/10 group-hover:border-accent/40 transition-colors duration-700 pointer-events-none z-10"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;