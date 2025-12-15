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
    <div id={id} className="w-full bg-neutral">
      {/* Header */}
      <div className="bg-white py-24 border-b border-gray-200 text-center">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-accent text-lg font-bold tracking-widest uppercase mb-2">أعمالنا</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            قمنا بتنفيذ العديد من المشاريع السكنية والتجارية والإدارية التي تميزت بالجمع بين الجمال والوظيفة، مع التركيز على التفاصيل الدقيقة التي تجعل كل مشروع فريدًا.
          </p>
        </motion.div>
      </div>

      {/* Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="group bg-white rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-96">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Subtle overlay removed on hover */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
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