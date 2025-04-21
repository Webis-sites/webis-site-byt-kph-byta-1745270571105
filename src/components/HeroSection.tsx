'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCoffee, FaArrowLeft } from 'react-icons/fa';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="hero-section" 
      dir="rtl" 
      className="relative h-screen w-full overflow-hidden"
      aria-label="אזור כותרת ראשית"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="בית קפה ביתא - אווירה"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"
          style={{ backgroundColor: 'rgba(255, 107, 107, 0.4)' }}
        ></div>
      </div>

      {/* Glassmorphism Container */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-4xl rounded-2xl backdrop-blur-md bg-white/10 p-8 sm:p-12 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
        >
          <div className="text-right">
            {/* Logo/Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isLoaded ? { scale: 1, rotate: 360 } : {}}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6B6B] p-3 shadow-[5px_5px_15px_rgba(0,0,0,0.2),-5px_-5px_15px_rgba(255,255,255,0.1)]"
            >
              <FaCoffee className="h-8 w-8 text-white" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl"
            >
              בית קפה מוביל בישראל
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mb-8 text-lg text-white/90 sm:text-xl md:text-2xl"
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>

            {/* CTA Button - Neumorphic Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-[#588C7E] px-8 py-4 text-lg font-medium text-white transition-all duration-300 shadow-[5px_5px_10px_rgba(0,0,0,0.2),-5px_-5px_10px_rgba(255,255,255,0.05)] hover:shadow-[3px_3px_6px_rgba(0,0,0,0.3),-3px_-3px_6px_rgba(255,255,255,0.1)] active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.05)]"
                aria-label="קבע תור עכשיו"
              >
                <span>קבע תור עכשיו</span>
                <FaArrowLeft className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
              </button>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 rounded-xl bg-white/5 p-4 backdrop-blur-sm border border-white/10"
            >
              <p className="text-sm text-white/80">
                אנחנו בית קפה מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 0.7 } : {}}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-[#588C7E]/30 backdrop-blur-md"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 0.7 } : {}}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute top-20 right-20 h-16 w-16 rounded-full bg-[#FF6B6B]/30 backdrop-blur-md"
      />
    </section>
  );
};

export default Hero;