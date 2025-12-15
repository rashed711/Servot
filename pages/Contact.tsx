import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { CONTACT_DETAILS } from '../constants';
import { motion } from 'framer-motion';

interface ContactProps {
  id?: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <div id={id} className="w-full bg-neutral">
      
      {/* Header */}
      <div className="bg-primary py-24">
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
           <h2 className="text-accent text-lg font-bold tracking-widest uppercase mb-2">اتصل بنا</h2>
          <h1 className="text-4xl font-bold text-white mb-4">ابدأ مشروعك اليوم</h1>
          <p className="text-gray-300">
            فريق سيرفوت جاهز للإجابة على استفساراتكم ومناقشة مشاريعكم القادمة.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Centered Content Layout */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 shadow-sm rounded-sm h-full hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-primary mb-6 border-b pb-4">بيانات الاتصال</h3>
            
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="bg-neutral p-3 rounded-full ml-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="block text-gray-500 text-sm mb-1">الهاتف / واتساب</span>
                  <a href={`tel:${CONTACT_DETAILS.phone}`} dir="ltr" className="text-lg font-bold text-primary hover:text-accent transition-colors block">
                    {CONTACT_DETAILS.phone}
                  </a>
                  <a 
                    href={`https://wa.me/${CONTACT_DETAILS.whatsapp.replace('+', '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-green-600 font-medium mt-1 inline-flex items-center hover:underline"
                  >
                    <MessageSquare className="w-4 h-4 ml-1" />
                    محادثة واتساب مباشرة
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                  <div className="bg-neutral p-3 rounded-full ml-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="block text-gray-500 text-sm mb-1">البريد الإلكتروني</span>
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-lg font-bold text-primary hover:text-accent transition-colors">
                    {CONTACT_DETAILS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                  <div className="bg-neutral p-3 rounded-full ml-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="block text-gray-500 text-sm mb-1">المقر الرئيسي</span>
                  <a href={CONTACT_DETAILS.mapUrl} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-accent transition-colors">
                    {CONTACT_DETAILS.address}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Working Hours Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary text-white p-8 shadow-sm rounded-sm h-full flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent/20 rounded-bl-full"></div>
            <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-4 relative z-10">ساعات العمل</h3>
            <ul className="space-y-4 text-gray-300 text-lg relative z-10">
              <li className="flex justify-between items-center">
                <span>الأحد - الخميس:</span>
                <span className="font-bold text-white" dir="ltr">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between items-center">
                <span>الجمعة:</span>
                <span className="text-accent font-bold">مغلق</span>
              </li>
              <li className="flex justify-between items-center">
                <span>السبت:</span>
                <span>بموعد مسبق</span>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-gray-700 relative z-10">
              <p className="text-sm text-gray-400 mb-4">
                نسعد باستقبالكم في مقرنا لمناقشة تفاصيل مشروعكم، يفضل حجز موعد مسبق لضمان تقديم أفضل خدمة.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;