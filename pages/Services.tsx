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
      const headerOffset = 55;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ 
        top: offsetPosition >= 0 ? offsetPosition : 0, 
        behavior: "smooth" 
      });
    }
  }

  return (
    <div id={id} className="w-full overflow-hidden bg-neutral">
      {/* Header */}
      <div className="bg-white py-14 md:py-24 text-center relative border-b border-gray-100">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
           className="max-w-4xl mx-auto px-5"
        >
          <span className="text-accent text-xs md:text-sm font-bold tracking-widest uppercase mb-2 block">خدماتنا</span>
          <h1 className="text-2xl md:text-5xl font-bold text-primary mb-3 md:mb-4">حلول هندسية متكاملة</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-lg leading-loose">
            نقدم مجموعة متناغمة من الخدمات الهندسية لتغطية كافة احتياجات مشروعك تحت سقف واحد وبإدارة موحدة.
          </p>
        </motion.div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-24 space-y-16 md:space-y-32">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
              key={service.id} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              className={`flex flex-col md:flex-row gap-6 md:gap-16 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}
            >
              
              {/* Image Side */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="w-full md:w-1/2 relative group"
              >
                <div className={`absolute top-4 ${!isEven ? 'right-4' : 'left-4'} w-full h-full border-2 border-accent/20 rounded-sm z-0 hidden md:block transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2`}></div>
                <div className="overflow-hidden rounded-sm shadow-md">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="relative z-10 w-full h-[220px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                }}
                className="w-full md:w-1/2"
              >
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="p-2.5 md:p-3 bg-white shadow-sm rounded-lg border border-gray-100">
                    <service.icon className="w-5 h-5 md:w-8 md:h-8 text-accent" />
                  </div>
                  <h2 className="text-xl md:text-4xl font-bold text-primary">{service.title}</h2>
                </div>
                
                <p className="text-gray-600 text-sm md:text-lg leading-loose mb-5 md:mb-8">
                  {service.description}
                </p>

                <div className="bg-white p-5 md:p-6 rounded-sm border-r-4 border-accent shadow-sm hover:shadow-md transition-all duration-300">
                  <h4 className="font-bold text-primary mb-3 text-base md:text-lg">نطاق العمل يشمل:</h4>
                  <ul className="space-y-2.5 md:space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 text-sm md:text-base leading-relaxed">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-accent ml-3 mt-0.5 flex-shrink-0" />
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-primary text-white py-12 md:py-16 px-4 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-xl md:text-4xl font-bold mb-6 md:mb-8 leading-snug">دعنا نحقق رؤيتك على أرض الواقع</h2>
          <a 
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-3.5 bg-accent text-white font-bold text-base md:text-lg hover:bg-white hover:text-primary transition-all duration-300 rounded-sm shadow-lg hover:shadow-glow group"
          >
            اطلب عرض سعر
            <ArrowLeft size={18} className="mr-2 transition-transform group-hover:-translate-x-1" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;