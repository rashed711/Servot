import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, COMPANY_NAME, LOGO_URL } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = NAV_ITEMS.map(item => item.path.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -150 && rect.top <= 150) {
            setActiveSection('#' + section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(path);
    if (element) {
      const headerOffset = 55;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition >= 0 ? offsetPosition : 0,
        behavior: "smooth"
      });
      setActiveSection(path);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Logic for the Toggle Button Color
  // 1. If Menu is Open -> Always White (because menu bg is dark)
  // 2. If Scrolled -> Dark (because navbar bg is white)
  // 3. If Top & Closed -> White (because hero bg is dark)
  const toggleButtonClass = isOpen 
    ? 'text-white hover:bg-white/10 hover:text-accent'
    : isScrolled 
      ? 'text-primary hover:bg-gray-100' 
      : 'text-white hover:bg-white/10';

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-2' 
          : 'bg-gradient-to-b from-black/60 to-transparent border-none py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')} 
              className="flex items-center group cursor-pointer z-50 relative select-none"
            >
              <img 
                src={LOGO_URL} 
                alt={COMPANY_NAME} 
                className={`w-auto object-contain transition-all duration-500 drop-shadow-sm
                  ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'}
                `} 
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`text-sm font-bold transition-all duration-300 relative py-1
                    ${activeSection === item.path 
                      ? 'text-accent' 
                      : (isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-white/80 drop-shadow-md')
                    }
                  `}
                >
                  {item.label}
                  {activeSection === item.path && (
                    <motion.span layoutId="underline" className="absolute bottom-0 right-0 w-full h-0.5 bg-accent rounded-full" />
                  )}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mr-6 px-6 py-2.5 text-sm font-bold rounded-sm border-2 transition-all duration-300 shadow-lg hover:shadow-glow bg-accent text-white border-accent hover:bg-white hover:text-accent"
              >
                ابدأ مشروعك
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`focus:outline-none transition-colors duration-300 p-2 rounded-full ${toggleButtonClass}`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            // CHANGED: Removed /98 opacity and backdrop-blur. 
            // Now using solid 'bg-primary' to ensure 100% opacity against any background.
            className="fixed inset-0 z-40 bg-primary md:hidden flex flex-col justify-center items-center h-[100dvh]"
          >
            {/* Subtle Texture Overlay - Kept but ensures it doesn't affect readability */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

            <div className="flex flex-col space-y-6 text-center w-full px-8 relative z-10">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.path}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`text-xl font-bold py-4 border-b border-white/10 hover:border-accent/50 transition-all ${
                    activeSection === item.path ? 'text-accent' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full bg-accent text-white text-lg font-bold py-3.5 rounded-sm mt-8 shadow-lg active:scale-95 transition-transform hover:bg-yellow-500"
              >
                تواصل معنا
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;