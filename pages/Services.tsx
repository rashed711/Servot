import React from 'react';
import { SERVICES } from '../constants';
import { ArrowLeft, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesProps {
  id?: string;
}

const Services: React.FC<ServicesProps> = ({ id }) => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  return (
    <div id={id} className="w-full overflow-hidden">
      {/* Header */}
      <div className="bg-secondary py-24 text-white text-center relative">
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
        >
          <h2 className="text-accent text-lg font-bold tracking-widest uppercase mb-2">خدماتنا</h2>
          <h1 className="text-4xl font-bold mb-4">حلول هندسية متكاملة</h1>
          <p className="text-gray-300 max-w-2xl mx-auto px-4">
            نقدم مجموعة متناغمة من الخدمات الهندسية لتغطية كافة احتياجات مشروعك تحت سقف واحد وبإدارة موحدة.
          </p>
        </motion.div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
              key={service.id} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={{
                hidden: { opacity: 0, x: 0 }, // Handled by children
                visible: { opacity: 1, x: 0 }
              }}
              className={`flex flex-col md:flex-row gap-12 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}
            >
              
              {/* Image Side */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: isEven ? -50 : 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                }}
                className="w-full md:w-1/2 relative group"
              >
                <div className={`absolute top-4 ${!isEven ? 'right-4' : 'left-4'} w-full h-full border-2 border-accent z-0 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3 hidden md:block`}></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="relative z-10 w-full h-[400px] object-cover shadow-lg rounded-sm bg-gray-200 transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </motion.div>

              {/* Content Side */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: isEven ? 50 : -50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
                }}
                className="w-full md:w-1/2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-neutral rounded-lg">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="bg-neutral p-6 rounded-sm border-r-4 border-primary hover:bg-white hover:shadow-md transition-all duration-300">
                  <h4 className="font-bold text-primary mb-4">نطاق العمل يشمل:</h4>
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <Check className="w-5 h-5 text-accent ml-3 mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

            </motion.div>
          );
        })}
      </div>

      {/* CTA Footer */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-primary text-white py-16 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6">دعنا نحقق رؤيتك على أرض الواقع</h2>
        <a 
          href="#contact"
          onClick={scrollToContact}
          className="inline-flex items-center px-8 py-3 bg-accent text-white font-bold hover:bg-white hover:text-primary transition-all duration-300 rounded-sm cursor-pointer group"
        >
          اطلب عرض سعر
          <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
        </a>
      </motion.div>
    </div>
  );
};

export default Services;