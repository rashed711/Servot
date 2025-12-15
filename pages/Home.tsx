import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { STATS } from '../constants';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

interface HomeProps {
  id?: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
  const { scrollY } = useScroll();
  // Parallax effect for hero background
  const yBg = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div id={id} className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay & Parallax */}
        <motion.div 
          style={{ y: yBg }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://i.pinimg.com/1200x/6f/76/ad/6f76adf3395e2e94eb92fc7e6c6fad14.jpg" 
            alt="Interior Architecture" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40"></div>
        </motion.div>

        {/* Content */}
        <motion.div 
          style={{ opacity: opacityHero }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-start w-full"
        >
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h2 variants={fadeInUp} className="text-accent text-lg font-bold tracking-widest uppercase mb-4">
              إبداع وظيفي
            </motion.h2>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              نحول المساحات إلى<br />
              بيئات عصرية ملهمة
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
              شركة Servot متخصصة في التصميم الداخلي، التشطيبات، والمقاولات العامة. نجمع بين الجمال والوظيفة، مع الالتزام بأعلى معايير الجودة والدقة في التنفيذ.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#services"
                onClick={(e) => scrollToSection(e, 'services')}
                className="group px-8 py-4 bg-accent text-white font-bold text-lg hover:bg-yellow-600 transition-all duration-300 rounded-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  استكشف خدماتنا
                  <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                </span>
              </a>
              <a 
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-primary transition-colors rounded-sm flex items-center justify-center cursor-pointer"
              >
                تواصل معنا
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Intro Section - Why Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="w-16 h-1 bg-accent mb-6"></motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-primary mb-6">
                لماذا تختار سيرفوت؟
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 leading-loose mb-6 text-lg">
                نحن ندرك أن نجاح المشروع يكمن في التفاصيل. منذ انطلاقنا في عام 2020، التزمنا بمعايير صارمة في الجودة والتنفيذ.
              </motion.p>
              
              <motion.ul variants={staggerContainer} className="space-y-4 mb-8">
                {[
                  'فريق عمل محترف يجمع بين الإبداع والدقة',
                  'استخدام أحدث المواد والتقنيات لضمان الجودة',
                  'أسعار تنافسية توازن بين الجودة والتكلفة',
                  'التزام بالمواعيد مع شفافية ومصداقية تامة',
                  'متابعة كاملة للمشروع من التصميم حتى التسليم'
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    variants={fadeInUp}
                    className="flex items-start text-gray-700 font-medium"
                  >
                    <CheckCircle2 className="text-accent ml-3 w-5 h-5 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.a 
                variants={fadeInUp}
                href="#about" 
                onClick={(e) => scrollToSection(e, 'about')} 
                className="text-accent font-bold hover:text-primary transition-colors inline-flex items-center border-b-2 border-accent pb-1 cursor-pointer group"
              >
                اقرأ المزيد عنا
                <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
              </motion.a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute top-[-20px] left-[-20px] w-full h-full border-4 border-gray-100 z-0 hidden md:block"></div>
              <motion.img 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                src="https://i.pinimg.com/1200x/6d/3d/eb/6d3deb788e8f135a0f11a34f413218de.jpg" 
                alt="About Servot" 
                className="relative z-10 w-full h-auto shadow-xl rounded-sm object-cover aspect-square"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-700"
          >
            {STATS.map((stat, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
                }}
                className="pt-8 md:pt-0 px-4"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;