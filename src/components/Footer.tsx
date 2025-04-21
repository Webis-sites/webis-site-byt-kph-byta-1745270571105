'use client';

import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface QuickLink {
  text: string;
  href: string;
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const socialLinks: SocialLink[] = [
    { icon: <FaFacebook />, href: '#', label: 'פייסבוק' },
    { icon: <FaInstagram />, href: '#', label: 'אינסטגרם' },
    { icon: <FaTwitter />, href: '#', label: 'טוויטר' },
  ];

  const quickLinks: QuickLink[] = [
    { text: 'דף הבית', href: '#' },
    { text: 'התפריט שלנו', href: '#menu' },
    { text: 'אודות', href: '#about' },
    { text: 'אירועים', href: '#events' },
    { text: 'צור קשר', href: '#contact' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      // Here you would typically send the email to your API
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer id="footer" dir="rtl" className="w-full bg-gray-50 text-right">
      {/* Glassmorphism top decoration */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-[#FF6B6B]/30 to-[#588C7E]/30 backdrop-blur-md"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full h-16 bg-white rounded-t-[50%]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Business Info */}
          <div className="mb-6 lg:mb-0">
            <motion.h2 
              className="text-2xl font-bold mb-4 text-[#FF6B6B]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              בית קפה ביתא
            </motion.h2>
            <p className="text-gray-600 mb-4">
              אנחנו בית קפה מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            <div className="flex justify-start space-x-reverse space-x-4 rtl:space-x-reverse">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-[#588C7E] hover:text-[#FF6B6B] transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6 lg:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-[#588C7E]">ניווט מהיר</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-600 hover:text-[#FF6B6B] transition-colors duration-300 block"
                    whileHover={{ x: 5 }}
                  >
                    {link.text}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6 lg:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-[#588C7E]">צור קשר</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <FaPhone className="text-[#FF6B6B]" />
                <span className="text-gray-600">03-1234567</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <FaEnvelope className="text-[#FF6B6B]" />
                <span className="text-gray-600">info@betacafe.co.il</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <FaMapMarkerAlt className="text-[#FF6B6B]" />
                <span className="text-gray-600">רחוב הרצל 123, תל אביב</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mb-6 lg:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-[#588C7E]">הירשמו לעדכונים</h3>
            <p className="text-gray-600 mb-4">קבלו עדכונים על מבצעים ואירועים מיוחדים</p>
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative neumorphic-input mb-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="הכנס את האימייל שלך"
                  aria-label="כתובת אימייל"
                  className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] shadow-inner"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-4 py-2 bg-[#FF6B6B] text-white rounded-lg shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.8)] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),inset_-5px_-5px_10px_rgba(255,255,255,0.8)] transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                הרשמה
              </motion.button>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 mt-2 text-sm"
                >
                  תודה שנרשמת! נשלח לך עדכונים בקרוב.
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* Coffee Image */}
        <div className="mt-12 mb-8 flex justify-center">
          <div className="relative w-full max-w-3xl h-48 rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="קפה טעים בבית קפה ביתא" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <p className="text-white text-lg font-medium p-6">חוויית קפה מושלמת בכל יום</p>
            </div>
          </div>
        </div>

        {/* Divider with glassmorphism effect */}
        <div className="relative h-px w-full my-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF6B6B]/30 to-transparent backdrop-blur-sm"></div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm py-4">
          <p>© {new Date().getFullYear()} בית קפה ביתא. כל הזכויות שמורות.</p>
        </div>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        .neumorphic-input {
          border-radius: 10px;
          background: #f0f0f0;
          box-shadow: inset 5px 5px 10px rgba(0,0,0,0.1), 
                      inset -5px -5px 10px rgba(255,255,255,0.8);
        }
      `}</style>
    </footer>
  );
};

export default Footer;