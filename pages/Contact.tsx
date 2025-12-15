import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock } from 'lucide-react';
import { CONTACT_DETAILS } from '../constants';
import { motion } from 'framer-motion';

interface ContactProps {
  id?: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <div id={id} className="w-full bg-neutral">
      
      {/* Header */}
      <div className="bg-primary py-14 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-800 to-transparent opacity-50"></div>
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10"
        >
           <h2 className="text-accent text-xs md:text-sm font-bold tracking-widest uppercase mb-2">اتصل بنا</h2>
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-3">ابدأ مشروعك اليوم</h1>
          <p className="text-gray-400 text-sm md:text-lg">
            فريق سيرفوت جاهز للإجابة على استفساراتكم.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-16 pb-16 relative z-20">
        {/* Centered Content Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          
          {/* Contact Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 md:p-10 shadow-lg rounded-sm hover:shadow-2xl transition-all duration-300 border-t-4 border-white"
          >
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 md:mb-8 pb-4 border-b border-gray-100">بيانات الاتصال</h3>
            
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start group">
                <div className="bg-neutral p-2.5 md:p-3 rounded-lg group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <div className="mr-4 md:mr-5">
                  <span className="block text-gray-400 text-xs md:text-sm font-medium mb-1">الهاتف / واتساب</span>
                  <a href={`tel:${CONTACT_DETAILS.phone}`} dir="ltr" className="text-lg md:text-xl font-bold text-primary hover:text-accent transition-colors block">
                    {CONTACT_DETAILS.phone}
                  </a>
                  <a 
                    href={`https://wa.me/${CONTACT_DETAILS.whatsapp.replace('+', '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs md:text-sm text-green-600 font-bold mt-2 inline-flex items-center hover:bg-green-50 px-3 py-1 rounded-full transition-colors border border-green-100"
                  >
                    <MessageSquare className="w-3.5 h-3.5 ml-1" />
                    تواصل واتساب مباشر
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-neutral p-2.5 md:p-3 rounded-lg group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <div className="mr-4 md:mr-5">
                  <span className="block text-gray-400 text-xs md:text-sm font-medium mb-1">البريد الإلكتروني</span>
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-base md:text-lg font-bold text-primary hover:text-accent transition-colors break-all">
                    {CONTACT_DETAILS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-neutral p-2.5 md:p-3 rounded-lg group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <div className="mr-4 md:mr-5">
                  <span className="block text-gray-400 text-xs md:text-sm font-medium mb-1">المقر الرئيسي</span>
                  <a href={CONTACT_DETAILS.mapUrl} target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:text-accent transition-colors text-base md:text-lg leading-tight">
                    {CONTACT_DETAILS.address}
                  </a>
                  <p className="text-[10px] md:text-xs text-gray-400 mt-2">انقر لفتح الموقع على الخريطة</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Working Hours Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary text-white p-6 md:p-10 shadow-lg rounded-sm relative overflow-hidden border-t-4 border-accent flex flex-col justify-center"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-tr-full pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 md:mb-8 border-b border-gray-700 pb-4">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                <h3 className="text-xl md:text-2xl font-bold">ساعات العمل</h3>
              </div>
              
              <ul className="space-y-4 md:space-y-6 text-base md:text-lg relative z-10">
                <li className="flex justify-between items-center bg-white/5 p-3 rounded hover:bg-white/10 transition-colors">
                  <span className="text-gray-300 text-sm md:text-base">الأحد - الخميس</span>
                  <span className="font-bold text-white dir-ltr text-sm md:text-base">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between items-center bg-white/5 p-3 rounded hover:bg-white/10 transition-colors">
                  <span className="text-gray-300 text-sm md:text-base">الجمعة</span>
                  <span className="text-accent font-bold px-3 py-1 bg-accent/10 rounded text-xs md:text-sm">مغلق</span>
                </li>
                <li className="flex justify-between items-center bg-white/5 p-3 rounded hover:bg-white/10 transition-colors">
                  <span className="text-gray-300 text-sm md:text-base">السبت</span>
                  <span className="text-white text-xs md:text-sm">بموعد مسبق</span>
                </li>
              </ul>
              
              <div className="mt-8 md:mt-10 pt-6 border-t border-gray-700">
                <p className="text-xs md:text-sm text-gray-400 leading-loose">
                  نقدر وقتكم الثمين. يفضل حجز موعد مسبق قبل الزيارة لضمان تواجد المهندس المختص لمناقشة مشروعكم بالتفصيل.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;