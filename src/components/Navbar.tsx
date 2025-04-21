'use client';

import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  id: string;
  title: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks: NavLink[] = [
    { id: 'about', title: 'אודות' },
    { id: 'services', title: 'שירותים' },
    { id: 'testimonials', title: 'המלצות' },
    { id: 'faq', title: 'שאלות נפוצות' },
    { id: 'contact', title: 'צור קשר' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav
      id="navbar"
      dir="rtl"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md'
          : 'bg-white/50 backdrop-blur-sm'
      }`}
      aria-label="תפריט ניווט ראשי"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#"
              className="text-xl md:text-2xl font-bold text-right"
              style={{ color: '#FF6B6B' }}
              aria-label="דף הבית של בית קפה ביתא"
            >
              בית קפה ביתא
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4 space-x-reverse">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="relative px-4 py-2 text-gray-700 hover:text-gray-900 rounded-lg text-right transition-all duration-300 overflow-hidden group"
                  aria-label={`ניווט אל ${link.title}`}
                >
                  <span className="relative z-10">{link.title}</span>
                  <span className="absolute bottom-0 right-0 w-0 h-1 bg-gradient-to-r from-[#FF6B6B] to-[#588C7E] group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#588C7E] transition-all duration-300"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
              style={{
                boxShadow: isOpen
                  ? 'inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.5)'
                  : '2px 2px 5px rgba(0, 0, 0, 0.1), -2px -2px 5px rgba(255, 255, 255, 0.5)',
                borderRadius: '8px',
                padding: '8px',
                backgroundColor: isOpen ? '#f0f0f0' : 'white',
              }}
            >
              {isOpen ? (
                <FiX className="h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md rounded-b-2xl shadow-lg border border-gray-100">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-right px-3 py-3 text-base font-medium text-gray-700 hover:text-[#FF6B6B] hover:bg-gray-50 rounded-lg transition-all duration-300"
                  style={{
                    boxShadow:
                      '2px 2px 5px rgba(0, 0, 0, 0.05), -2px -2px 5px rgba(255, 255, 255, 0.5)',
                    marginBottom: '8px',
                  }}
                  aria-label={`ניווט אל ${link.title}`}
                >
                  {link.title}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;