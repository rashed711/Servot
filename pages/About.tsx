import React from 'react';
import { Target, Eye, Settings } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface AboutProps {
  id?: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
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
    <div id={id} className="w-full">
      {/* Header */}
      <div className="bg-neutral pt-24 pb-12 border-t border-gray-200">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-lg font-bold text-accent tracking-widest uppercase mb-2">من نحن</h2>
          <h1 className="text-4xl font-bold text-primary mb-4">قصتنا ورؤيتنا</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
             منذ عام 2020، ونحن نعمل بشغف لتحويل المساحات إلى واقع ملموس يجمع بين الإبداع والدقة.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8 text-lg leading-relaxed text-gray-700"
            >
              <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-primary">نجمع بين الجمال والوظيفة</motion.h3>
              <motion.p variants={fadeInUp}>
                شركة Servot متخصصة في التصميم الداخلي، التشطيبات، والمقاولات العامة. نعمل على تحويل المساحات إلى بيئات عصرية تجمع بين الجمال والوظيفة، مع الالتزام بأعلى معايير الجودة والدقة في التنفيذ.
              </motion.p>
              <motion.p variants={fadeInUp}>
                 نفخر بخدمة مجموعة متنوعة من العملاء، من الأفراد إلى الشركات، ونعتبر ثقتهم بنا أكبر دليل على نجاحنا واستمرارنا في السوق.
              </motion.p>
              <motion.p variants={fadeInUp}>
                سواء كنت تبحث عن تشطيب شقة فاخرة، تجهيز مقر شركة، أو تصميم واجهة مبنى، فإننا نضمن لك تجربة سلسة، أسعار تنافسية، ونتائج تفوق التوقعات.
              </motion.p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.img 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.03 }}
                src="https://i.pinimg.com/1200x/53/55/14/535514e21cb9a6ca8908977b561b83be.jpg" 
                alt="Office interior" 
                className="w-full h-full object-cover rounded-sm shadow-md mt-8 transition-transform duration-500" 
              />
              <motion.img 
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.03 }}
                src="https://i.pinimg.com/1200x/ab/0e/97/ab0e970f060c7f974d5d457f63739c29.jpg" 
                alt="Meeting room" 
                className="w-full h-full object-cover rounded-sm shadow-md mb-8 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Approach */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { 
                icon: Eye, 
                title: 'رؤيتنا', 
                desc: 'نسعى إلى تحقيق معادلة متوازنة ترضي عملائنا، تجمع بين جودة الخدمة، الالتزام بالمواعيد، والتكلفة المناسبة، لنقدم حلولًا عملية وواقعية تضيف قيمة حقيقية لكل مشروع.', 
                color: 'accent' 
              },
              { 
                icon: Target, 
                title: 'رسالتنا', 
                desc: 'نلتزم بتقديم خدمات متكاملة تبدأ من دراسة الفكرة وصولًا إلى التنفيذ والتسليم، مع الحرص على التفاصيل الدقيقة والشفافية في التعامل لضمان رضا عملائنا.', 
                color: 'secondary' 
              },
              { 
                icon: Settings, 
                title: 'منهجيتنا', 
                desc: 'استخدام أحدث المواد والتقنيات لضمان أعلى مستويات الجودة، مع توفير أسعار تنافسية ومتابعة كاملة للمشروع من التصميم حتى التسليم.', 
                color: 'primary' 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ 
                  y: -12, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className={`bg-white p-8 rounded-sm shadow-sm border-t-4 border-${item.color} transition-all duration-300 cursor-default`}
              >
                <div className={`bg-neutral w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`text-${item.color} w-7 h-7`} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;