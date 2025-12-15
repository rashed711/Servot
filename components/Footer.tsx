import React from 'react';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_NAME, NAV_ITEMS, CONTACT_DETAILS, LOGO_URL } from '../constants';

// TikTok Icon Component
const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const element = document.querySelector(path);
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

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex flex-col items-start">
              <img 
                src={LOGO_URL} 
                alt={COMPANY_NAME} 
                className="h-24 w-auto object-contain mb-4 brightness-0 invert" 
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              شريككم الموثوق في تقديم حلول معمارية وتشطيبات متكاملة. نلتزم بأعلى معايير الجودة لتنفيذ مشاريع تليق بطموحاتكم.
            </p>
            <div className="flex space-x-4 space-x-reverse pt-2">
              <a href={CONTACT_DETAILS.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary/30 rounded hover:bg-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href={CONTACT_DETAILS.tiktok} target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary/30 rounded hover:bg-accent transition-colors">
                <TikTokIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">روابط سريعة</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <a 
                    href={item.path} 
                    onClick={(e) => handleScroll(e, item.path)}
                    className="text-gray-300 hover:text-white hover:translate-x-[-4px] transition-all inline-block text-sm cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">معلومات التواصل</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-accent ml-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-gray-400 text-xs mb-1">الهاتف و واتساب</span>
                  <a href={`tel:${CONTACT_DETAILS.phone}`} dir="ltr" className="text-white hover:text-accent font-medium">
                    {CONTACT_DETAILS.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-accent ml-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-gray-400 text-xs mb-1">البريد الإلكتروني</span>
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-white hover:text-accent font-medium">
                    {CONTACT_DETAILS.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-accent ml-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-gray-400 text-xs mb-1">الموقع</span>
                  <a href={CONTACT_DETAILS.mapUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent font-medium leading-tight">
                    {CONTACT_DETAILS.address}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. جميع الحقوق محفوظة.</p>
          <p className="mt-2 md:mt-0">دقة في التنفيذ.. إبداع في التصميم</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;