'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaStarHalfAlt, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "רונית לוי",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    quote: "הקפה הטוב ביותר שטעמתי! האווירה מושלמת לפגישות עבודה או סתם לשבת עם חברים. אני מגיעה לכאן כמעט כל יום."
  },
  {
    id: 2,
    name: "אבי כהן",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 4.5,
    quote: "המאפים הטריים והקפה האיכותי הם שילוב מנצח. השירות תמיד אדיב ומהיר. ממליץ בחום!"
  },
  {
    id: 3,
    name: "מיכל גולן",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    quote: "המקום האהוב עליי לעבוד ממנו. הוויפי מהיר, האווירה נעימה והקפה מעולה. פשוט מושלם!"
  },
  {
    id: 4,
    name: "יוסי אברהם",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 4,
    quote: "אני מגיע לכאן באופן קבוע עם הצוות שלי. המקום מושלם לפגישות עסקיות והקפה פשוט מעולה."
  },
  {
    id: 5,
    name: "שירה לוינסון",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    quote: "האווירה, העיצוב והקפה - הכל מושלם! אני אוהבת במיוחד את המאפים הטריים שמכינים במקום."
  },
  {
    id: 6,
    name: "דניאל ברק",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 4.5,
    quote: "מקום מושלם לפגישות עסקיות או לעבודה שקטה. הקפה מעולה והצוות תמיד מסביר פנים ומקצועי."
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayInterval = 5000;

  // Check if mobile on mount and on resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, autoplayInterval);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  // Navigation functions
  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  }, []);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToNext(); // In RTL, left arrow moves to next
      } else if (e.key === 'ArrowRight') {
        goToPrevious(); // In RTL, right arrow moves to previous
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNext, goToPrevious]);

  // Render star ratings
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-yellow-400" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-star-${i}`} className="text-gray-300" />);
    }

    return stars;
  };

  // Variants for animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Determine how many testimonials to show based on screen size
  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentIndex]];
    } else {
      // For desktop, show 3 testimonials at once
      const indices = [
        currentIndex,
        (currentIndex + 1) % testimonials.length,
        (currentIndex + 2) % testimonials.length
      ];
      return indices.map(index => testimonials[index]);
    }
  };

  return (
    <section 
      id="testimonials-section" 
      dir="rtl" 
      className="py-16 px-4 md:px-8 bg-gray-50 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-right">מה הלקוחות שלנו אומרים</h2>
          <div className="h-1 w-24 bg-[#588C7E] mx-auto mr-0"></div>
        </div>

        <div className="relative">
          {/* Testimonials Carousel */}
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {getVisibleTestimonials().map((testimonial, index) => (
                    <motion.div
                      key={`${testimonial.id}-${index}`}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl overflow-hidden shadow-lg p-6 relative"
                      style={{
                        backdropFilter: 'blur(10px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                      }}
                    >
                      <div className="flex items-start mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#FF6B6B]">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-right">{testimonial.name}</h3>
                          <div className="flex justify-end mt-1">
                            {renderRating(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-right leading-relaxed">"{testimonial.quote}"</p>
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-l from-[#FF6B6B] to-[#588C7E]"
                      ></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 -mt-6 px-4">
            <button
              onClick={goToPrevious}
              className="bg-white bg-opacity-80 backdrop-blur-sm p-3 rounded-full shadow-neumorphic focus:outline-none focus:ring-2 focus:ring-[#588C7E] transform transition hover:scale-105 active:scale-95"
              aria-label="הקודם"
              style={{
                boxShadow: '5px 5px 15px rgba(0,0,0,0.1), -5px -5px 15px rgba(255,255,255,0.8)',
              }}
            >
              <FaChevronRight className="text-[#588C7E]" />
            </button>
            <button
              onClick={goToNext}
              className="bg-white bg-opacity-80 backdrop-blur-sm p-3 rounded-full shadow-neumorphic focus:outline-none focus:ring-2 focus:ring-[#588C7E] transform transition hover:scale-105 active:scale-95"
              aria-label="הבא"
              style={{
                boxShadow: '5px 5px 15px rgba(0,0,0,0.1), -5px -5px 15px rgba(255,255,255,0.8)',
              }}
            >
              <FaChevronLeft className="text-[#588C7E]" />
            </button>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`mx-1 w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#588C7E] transition-all duration-300 ${
                currentIndex === index ? 'bg-[#FF6B6B] w-6' : 'bg-[#588C7E] bg-opacity-40'
              }`}
              aria-label={`עבור לעדות ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;