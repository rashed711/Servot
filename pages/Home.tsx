import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { STATS } from '../constants';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

interface HomeProps {
  id?: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <div id={id} className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/1200x/6f/76/ad/6f76adf3395e2e94eb92fc7e6c6fad14.jpg" 
            alt="Interior Architecture" 
            className="w-full h-full object-cover scale-110"
          />
          {/* Gradient overlay specifically tuned for mobile text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/30 md:bg-gradient-to-r md:from-primary/90 md:via-primary/70 md:to-transparent"></div>
        </motion.div>

        <motion.div 
          style={{ opacity: opacityHero }}
          className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center md:text-start w-full pt-12 md:pt-0"
        >
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
            }}
            className="max-w-3xl mx-auto md:mx-0"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1.5 border border-accent/40 rounded-full bg-black/30 backdrop-blur-md">
              <span className="text-accent text-xs md:text-sm font-bold tracking-wider uppercase">إبداع وظيفي</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-5 leading-snug drop-shadow-lg">
              نحول المساحات إلى<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">بيئات عصرية ملهمة</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-gray-300 text-sm sm:text-lg md:text-xl mb-8 leading-loose max-w-xl mx-auto md:mx-0 drop-shadow-md font-light">
              شركة Servot متخصصة في التصميم الداخلي، التشطيبات، والمقاولات العامة. نجمع بين الجمال والوظيفة، مع الالتزام بأعلى معايير الجودة.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full sm:w-auto px-4 sm:px-0">
              <a 
                href="#services"
                onClick={(e) => scrollToSection(e, 'services')}
                className="group w-full sm:w-auto px-8 py-3.5 bg-accent text-white font-bold text-base md:text-lg hover:bg-yellow-500 transition-all duration-300 rounded-sm shadow-lg hover:shadow-glow flex items-center justify-center gap-2"
              >
                استكشف خدماتنا
                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              </a>
              <a 
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="w-full sm:w-auto px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-base md:text-lg hover:bg-white hover:text-primary transition-all rounded-sm flex items-center justify-center"
              >
                تواصل معنا
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.div variants={fadeInUp} className="w-12 h-1 bg-accent mb-6 rounded-full"></motion.div>
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-5xl font-bold text-primary mb-5 leading-tight">
                لماذا تختار <span className="text-accent">سيرفوت</span>؟
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 leading-loose mb-8 text-sm md:text-lg font-medium">
                نحن ندرك أن نجاح المشروع يكمن في التفاصيل. منذ انطلاقنا في عام 2020، التزمنا بمعايير صارمة في الجودة والتنفيذ لتحقيق رؤى عملائنا.
              </motion.p>
              
              <motion.ul variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="space-y-4 mb-8">
                {[
                  'فريق عمل محترف يجمع بين الإبداع والدقة',
                  'استخدام أحدث المواد والتقنيات لضمان الجودة',
                  'أسعار تنافسية توازن بين الجودة والتكلفة',
                  'التزام بالمواعيد مع شفافية ومصداقية تامة'
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    variants={fadeInUp}
                    className="flex items-start text-gray-700 text-sm md:text-base font-medium"
                  >
                    <div className="bg-neutral p-1 rounded-full ml-3 mt-0.5">
                      <CheckCircle2 className="text-accent w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mt-4 lg:mt-0"
            >
              <div className="absolute top-[-20px] left-[-20px] w-full h-full border-2 border-accent/20 z-0 hidden md:block rounded-sm"></div>
              <img 
                src="https://i.pinimg.com/1200x/6d/3d/eb/6d3deb788e8f135a0f11a34f413218de.jpg" 
                alt="About Servot" 
                className="relative z-10 w-full h-auto shadow-xl rounded-sm object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-14 md:py-20 bg-primary text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-800"
          >
            {STATS.map((stat, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="pt-8 md:pt-0 px-4"
              >
                <div className="text-4xl md:text-6xl font-bold text-accent mb-2 md:mb-3">{stat.value}</div>
                <div className="text-gray-400 font-medium text-base md:text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;