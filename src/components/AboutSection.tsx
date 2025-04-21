'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCoffee, FaUsers, FaLeaf, FaHeart } from 'react-icons/fa';
import Image from 'next/image';

interface ValueCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const valueCards: ValueCard[] = [
    {
      id: 1,
      title: "איכות ללא פשרות",
      description: "אנו בוחרים רק את פולי הקפה האיכותיים ביותר ומקפידים על תהליך קלייה מושלם.",
      icon: <FaCoffee className="text-2xl text-primary" />
    },
    {
      id: 2,
      title: "שירות אישי",
      description: "הצוות שלנו מחויב להעניק לכם חוויה אישית ומיוחדת בכל ביקור.",
      icon: <FaUsers className="text-2xl text-primary" />
    },
    {
      id: 3,
      title: "קיימות",
      description: "אנו מחויבים לעתיד ירוק יותר עם מוצרים אקולוגיים ותמיכה בחקלאים מקומיים.",
      icon: <FaLeaf className="text-2xl text-primary" />
    },
    {
      id: 4,
      title: "חדשנות",
      description: "אנו משלבים טכנולוגיה וחדשנות בכל היבט של בית הקפה שלנו.",
      icon: <FaHeart className="text-2xl text-primary" />
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
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" dir="rtl" className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">אודות בית קפה ביתא</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="lg:w-1/2 text-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="neumorphic-card p-8 rounded-2xl bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">הסיפור שלנו</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                אנחנו בית קפה מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                בית קפה ביתא נוסד בשנת 2015 מתוך אהבה לקפה איכותי וחזון לשלב את עולם הטכנולוגיה עם חוויית קפה מושלמת. המקום שלנו מציע לא רק משקאות קפה מעולים, אלא גם סביבת עבודה נוחה ומעוצבת לאנשי טכנולוגיה, יזמים ואוהבי קפה.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                אנו מאמינים שקפה טוב הוא יותר מסתם משקה - הוא חוויה שמחברת בין אנשים, רעיונות וטכנולוגיה. בבית קפה ביתא תמצאו את השילוב המושלם בין מסורת וחדשנות, עם דגש על איכות, קיימות ויצירתיות.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Images */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative h-[500px] w-full">
              <div className="absolute top-0 right-0 w-4/5 h-4/5 z-10">
                <div className="glassmorphic-card w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="פנים בית הקפה"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-4/5 h-4/5 z-0">
                <div className="glassmorphic-card w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="צוות בית הקפה"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="mt-20"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">הערכים שלנו</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueCards.map((card) => (
              <motion.div
                key={card.id}
                variants={itemVariants}
                className="neumorphic-card p-6 rounded-xl bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm border border-white border-opacity-20 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="glassmorphic-icon-container p-4 rounded-full mb-4 bg-opacity-20 backdrop-filter backdrop-blur-sm border border-white border-opacity-30 shadow-inner">
                  {card.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h4>
                <p className="text-gray-600">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="glassmorphic-card max-w-3xl mx-auto p-8 rounded-2xl bg-primary bg-opacity-10 backdrop-filter backdrop-blur-sm border border-primary border-opacity-20 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">המשימה שלנו</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              המשימה שלנו היא להציע חוויית קפה יוצאת דופן שמשלבת איכות, חדשנות וקהילה. אנו שואפים להיות יותר מסתם בית קפה - אנחנו מקום מפגש לרעיונות, יצירתיות וחיבורים אנושיים, תוך שמירה על ערכי קיימות ואחריות חברתית.
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .neumorphic-card {
          box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.05),
                     -8px -8px 16px rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
        }
        
        .neumorphic-card:hover {
          box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.07),
                     -10px -10px 20px rgba(255, 255, 255, 0.9);
        }
        
        .glassmorphic-card {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .glassmorphic-icon-container {
          background: rgba(255, 107, 107, 0.1);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;