'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCoffee, FaUtensils, FaLaptop, FaCalendarAlt, FaShoppingBag, FaGlassCheers } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const services: Service[] = [
    {
      id: 1,
      icon: <FaCoffee size={32} />,
      title: "קפה מיוחד",
      description: "מבחר קפה איכותי מרחבי העולם, נטחן טרי במקום",
      imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      icon: <FaUtensils size={32} />,
      title: "ארוחות בוקר וצהריים",
      description: "תפריט עשיר של מנות טריות המוכנות במקום מחומרי גלם איכותיים",
      imageUrl: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      icon: <FaLaptop size={32} />,
      title: "מרחב עבודה",
      description: "סביבת עבודה נוחה עם חיבור אינטרנט מהיר ושקעי חשמל בכל שולחן",
      imageUrl: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      icon: <FaCalendarAlt size={32} />,
      title: "אירועים מיוחדים",
      description: "אירוח אירועים פרטיים ועסקיים בחלל מעוצב ואינטימי",
      imageUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 5,
      icon: <FaShoppingBag size={32} />,
      title: "מוצרי קפה למכירה",
      description: "פולי קפה, כלי הכנה ואביזרים נלווים לחוויית קפה ביתית מושלמת",
      imageUrl: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 6,
      icon: <FaGlassCheers size={32} />,
      title: "משקאות מיוחדים",
      description: "מבחר משקאות אלכוהוליים ולא אלכוהוליים בהכנה ייחודית",
      imageUrl: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" dir="rtl" className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            השירותים שלנו
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            בבית קפה ביתא אנו מציעים מגוון שירותים איכותיים לחוויה מושלמת
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
              className="relative overflow-hidden rounded-2xl group"
            >
              <div className="relative h-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-md border border-white border-opacity-30 shadow-inner mb-4 text-[#FF6B6B] transform transition-transform duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-200 text-right">{service.description}</p>
                  </div>
                  
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={activeService === service.id || isMobile ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <button className="inline-flex items-center justify-center px-5 py-2 bg-[#FF6B6B] bg-opacity-90 hover:bg-opacity-100 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                      <span className="ml-2">למידע נוסף</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;