'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaQuoteRight } from 'react-icons/fa';

interface ImageItem {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  hasQuote?: boolean;
  quote?: string;
}

const AtmosphereSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const images: ImageItem[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "פינת ישיבה נוחה בבית קפה ביתא",
      width: 600,
      height: 400,
      hasQuote: true,
      quote: "המקום המושלם לעבודה ויצירתיות בסביבה טכנולוגית"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "פינת קפה מעוצבת בבית קפה ביתא",
      width: 400,
      height: 600
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "אווירה טכנולוגית בבית קפה ביתא",
      width: 600,
      height: 400,
      hasQuote: true,
      quote: "מקום שבו טכנולוגיה ואופנה נפגשים"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "עיצוב פנים מודרני בבית קפה ביתא",
      width: 400,
      height: 600
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "אווירה ייחודית בבית קפה ביתא",
      width: 600,
      height: 400
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "פינת עבודה בבית קפה ביתא",
      width: 400,
      height: 600,
      hasQuote: true,
      quote: "חווית קפה מתקדמת בסביבה מעוררת השראה"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="atmosphere-section" className="py-16 px-4 md:px-8 lg:px-16" dir="rtl" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-right mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#588C7E]">האווירה שלנו</h2>
          <div className="w-24 h-1 bg-[#FF6B6B] mr-0 ml-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mr-0 ml-auto">
            בית קפה ביתא מציע חוויה ייחודית המשלבת טכנולוגיה, אופנה וקפה איכותי. האווירה המיוחדת שלנו נוצרה כדי לאפשר לכם ליהנות מסביבה מעוררת השראה, בין אם אתם מגיעים לפגישת עבודה, לעבוד על הפרויקט הבא שלכם או פשוט ליהנות מקפה טוב.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {images.map((image) => (
            <motion.div 
              key={image.id}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
              variants={itemVariants}
              style={{
                height: image.height > image.width ? '500px' : '350px',
                boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.7)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={image.id <= 3}
              />
              
              {image.hasQuote && (
                <div className="absolute inset-0 flex items-center justify-center p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl text-right max-w-xs border border-white/30 shadow-lg">
                    <FaQuoteRight className="text-[#FF6B6B] text-2xl mb-2 mr-0 ml-auto" />
                    <p className="text-gray-800 font-medium">{image.quote}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-right">
          <div className="bg-[#588C7E]/10 backdrop-blur-md p-8 rounded-3xl border border-[#588C7E]/20 shadow-lg">
            <h3 className="text-2xl font-bold text-[#588C7E] mb-4">מה מיוחד באווירה שלנו?</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FF6B6B] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <p>סביבת עבודה מעוצבת עם תשתית טכנולוגית מתקדמת - חיבור אינטרנט מהיר, שקעי חשמל בכל פינה, ומסכים משותפים לפגישות.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FF6B6B] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <p>עיצוב פנים מודרני המשלב אלמנטים של אופנה וטכנולוגיה - מנורות בעיצוב ייחודי, ריהוט נוח ופונקציונלי, ואמנות דיגיטלית.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FF6B6B] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <p>אווירה שקטה ונעימה המאפשרת ריכוז לצד אזורים חברתיים לשיחות ומפגשים - האיזון המושלם בין עבודה לפנאי.</p>
              </li>
            </ul>
          </div>
        </div>

        <motion.div 
          className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-[#FF6B6B]/10 to-[#588C7E]/10 backdrop-blur-sm border border-white/20 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#FF6B6B] to-[#588C7E] inline-block text-transparent bg-clip-text">בואו לחוות את האווירה הייחודית שלנו</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              אנחנו מזמינים אתכם להגיע ולהתרשם מהאווירה המיוחדת של בית קפה ביתא. בין אם אתם מחפשים מקום לעבוד בו, לקיים פגישות או פשוט ליהנות מקפה איכותי בסביבה מעוצבת - המקום שלנו נוצר במיוחד בשבילכם.
            </p>
            <button className="mt-8 px-8 py-3 bg-[#FF6B6B] text-white rounded-full font-medium hover:bg-[#FF6B6B]/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
              בקרו אותנו
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AtmosphereSection;