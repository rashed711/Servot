import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

interface ProjectsProps {
  id?: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div id={id} className="w-full bg-white">
      {/* Header */}
      <div className="bg-neutral py-14 md:py-24 border-b border-gray-200 text-center">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8"
        >
          <h2 className="text-accent text-xs md:text-sm font-bold tracking-widest uppercase mb-2">أعمالنا</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-lg leading-loose">
            لقطات مختارة تعكس جودة التنفيذ والاهتمام بأدق التفاصيل في مشاريعنا السابقة.
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {PROJECTS.map((project) => (
              <motion.div 
                key={project.id} 
                variants={item}
                className="group relative bg-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-[260px] md:h-[400px]">
                  <img 
                    src={project.image} 
                    alt="Project" 
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  {/* Glassy overlay effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                     <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</p>
                     <p className="text-accent text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.category}</p>
                  </div>
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