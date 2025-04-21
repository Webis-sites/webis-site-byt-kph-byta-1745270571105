'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdAccessTime, MdCoffee, MdEvent, MdLocalCafe, MdLocationOn, MdMenuBook, MdPeople } from 'react-icons/md';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  const faqItems: FAQItem[] = [
    {
      id: 'opening-hours',
      question: 'מה שעות הפתיחה של בית קפה ביתא?',
      answer: 'אנחנו פתוחים בימים א׳-ה׳ בין השעות 07:00-22:00, בימי שישי בין השעות 07:00-16:00, ובשבת בין השעות 09:00-22:00. בחגים יתכנו שינויים בשעות הפעילות, אנא עקבו אחר העדכונים בדף הפייסבוק שלנו.',
      icon: <MdAccessTime />
    },
    {
      id: 'reservations',
      question: 'האם ניתן להזמין מקום מראש?',
      answer: 'בהחלט! ניתן להזמין מקום באמצעות הטלפון 03-1234567 או דרך האתר שלנו. אנו ממליצים להזמין מקום מראש בסופי שבוע ובשעות העומס. הזמנות לקבוצות של 6 אנשים ומעלה מחייבות הזמנה מראש.',
      icon: <MdPeople />
    },
    {
      id: 'specialty-coffee',
      question: 'אילו סוגי קפה מיוחדים אתם מציעים?',
      answer: 'אנו מציעים מגוון רחב של קפה איכותי מרחבי העולם. הקפה שלנו נקלה במקום ומגיע ממקורות אתיים. בין המיוחדים שלנו: אתיופי יירגצ׳ף, קולומביאני סופרמו, וקפה מיוחד מגואטמלה. בנוסף, אנו מציעים שיטות חליטה שונות כמו פילטר, אירופרס, וקמקס.',
      icon: <MdCoffee />
    },
    {
      id: 'food-menu',
      question: 'מה כולל התפריט שלכם מלבד קפה?',
      answer: 'התפריט שלנו כולל מבחר עשיר של מאפים טריים שנאפים במקום מדי יום, כריכים גורמה, סלטים טריים, ומנות בוקר מפנקות. יש לנו גם אפשרויות טבעוניות, ללא גלוטן, וללא לקטוז. התפריט משתנה עונתית כדי להשתמש במיטב המוצרים הטריים.',
      icon: <MdMenuBook />
    },
    {
      id: 'events',
      question: 'האם אתם מארחים אירועים מיוחדים?',
      answer: 'כן, אנחנו מארחים מגוון אירועים כמו ערבי טעימות קפה, סדנאות בריסטה, ערבי מוזיקה חיה, ותערוכות אמנות מקומית. ניתן גם להזמין את המקום לאירועים פרטיים בערב. עקבו אחר לוח האירועים שלנו באתר או בעמוד האינסטגרם.',
      icon: <MdEvent />
    },
    {
      id: 'location',
      question: 'היכן אתם ממוקמים ואיך מגיעים אליכם?',
      answer: 'אנחנו ממוקמים ברחוב הרצל 42, תל אביב. ניתן להגיע אלינו בקלות בתחבורה ציבורית - קווי אוטובוס 5, 18, ו-72 עוצרים ממש ליד. תחנת הרכבת הקרובה היא ״השלום״, במרחק הליכה של 10 דקות. יש חניון ציבורי במרחק של 2 דקות הליכה.',
      icon: <MdLocationOn />
    },
    {
      id: 'beans',
      question: 'האם ניתן לקנות פולי קפה לשימוש ביתי?',
      answer: 'בהחלט! אנו מוכרים את כל סוגי פולי הקפה שלנו לשימוש ביתי. ניתן לרכוש אותם טחונים או כפולים שלמים, בהתאם לשיטת ההכנה המועדפת עליכם. הצוות שלנו ישמח לייעץ לכם לגבי סוג הקפה המתאים ביותר ושיטת ההכנה האופטימלית.',
      icon: <MdLocalCafe />
    }
  ];

  return (
    <div id="faq-section" dir="rtl" className="w-full max-w-4xl mx-auto p-6 font-sans">
      <div className="text-right mb-10">
        <h2 className="text-3xl font-bold mb-3 text-right text-gray-800">שאלות נפוצות</h2>
        <p className="text-gray-600">
          כל מה שרצית לדעת על בית קפה ביתא - המקום המושלם לקפה איכותי ואווירה נעימה
        </p>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6B6B33] to-[#588C7E33] rounded-xl blur-xl opacity-50 -z-10"></div>
        <div className="backdrop-blur-sm bg-white/60 rounded-xl p-1 shadow-lg">
          {faqItems.map((item) => (
            <div 
              key={item.id}
              className="mb-4 overflow-hidden rounded-lg"
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className={`w-full p-5 flex items-center justify-between text-right rounded-lg transition-all duration-300 ${
                  activeIndex === item.id 
                    ? 'bg-gradient-to-l from-[#FF6B6B] to-[#FF6B6B]/80 text-white shadow-inner' 
                    : 'bg-white/80 text-gray-800 shadow-[5px_5px_10px_rgba(0,0,0,0.05),-5px_-5px_10px_rgba(255,255,255,0.8)]'
                }`}
                aria-expanded={activeIndex === item.id}
                aria-controls={`content-${item.id}`}
              >
                <div className="flex items-center gap-3 text-right">
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium text-lg">{item.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === item.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === item.id && (
                  <motion.div
                    id={`content-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-white/70 backdrop-blur-sm border-r-2 border-[#FF6B6B] text-right">
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 p-6 rounded-xl bg-white/60 backdrop-blur-sm shadow-lg border border-white/40 text-right">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/3 h-64 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="בית קפה ביתא" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold mb-3 text-[#588C7E]">יש לך שאלה נוספת?</h3>
            <p className="text-gray-700 mb-4">
              אנחנו כאן כדי לענות על כל שאלה. ניתן ליצור איתנו קשר בטלפון, באימייל או לבקר אותנו בבית הקפה.
            </p>
            <div className="flex flex-wrap gap-4 justify-end">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-[#FF6B6B] text-white rounded-full shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.7)] hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] transition-all duration-300"
              >
                צור קשר
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-white text-[#588C7E] border border-[#588C7E] rounded-full shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.7)] hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] transition-all duration-300"
              >
                התפריט שלנו
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;