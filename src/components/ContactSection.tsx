'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  
  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dir-rtl" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">צור קשר</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            אנחנו תמיד שמחים לשמוע מכם. מלאו את הטופס או השתמשו בפרטי הקשר שלנו כדי ליצור איתנו קשר.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <div className="bg-white rounded-xl p-8 shadow-neumorphic relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm z-0"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-right">שלח לנו הודעה</h3>
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg text-right"
                  >
                    <p className="font-medium">תודה על פנייתך!</p>
                    <p>ההודעה נשלחה בהצלחה, ניצור איתך קשר בהקדם.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-gray-700 font-medium text-right">
                        שם מלא
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name", { required: "שדה זה הוא חובה" })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#588C7E] text-right shadow-inner"
                        placeholder="הכנס את שמך המלא"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm text-right">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-gray-700 font-medium text-right">
                        טלפון
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register("phone", { 
                          required: "שדה זה הוא חובה",
                          pattern: {
                            value: /^[0-9]{9,10}$/,
                            message: "אנא הכנס מספר טלפון תקין"
                          }
                        })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#588C7E] text-right shadow-inner"
                        placeholder="הכנס את מספר הטלפון שלך"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm text-right">{errors.phone.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-gray-700 font-medium text-right">
                        דוא"ל
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email", { 
                          required: "שדה זה הוא חובה",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "אנא הכנס כתובת דוא\"ל תקינה"
                          }
                        })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#588C7E] text-right shadow-inner"
                        placeholder="הכנס את כתובת הדוא\"ל שלך"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm text-right">{errors.email.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-gray-700 font-medium text-right">
                        הודעה
                      </label>
                      <textarea
                        id="message"
                        {...register("message", { required: "שדה זה הוא חובה" })}
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#588C7E] text-right shadow-inner"
                        placeholder="כתוב את הודעתך כאן"
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500 text-sm text-right">{errors.message.message}</p>
                      )}
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="w-full py-3 px-6 bg-[#588C7E] text-white font-medium rounded-lg shadow-neumorphic-button hover:bg-[#4a7a6d] transition-all duration-300 relative overflow-hidden"
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">שלח הודעה</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-[#588C7E]/80 to-[#588C7E] opacity-80 z-0"></span>
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-white rounded-xl p-8 shadow-neumorphic mb-8 relative overflow-hidden h-[250px]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm z-0"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-right">המיקום שלנו</h3>
                <div className="rounded-lg overflow-hidden h-[150px] shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1577037834645-a929d0a8b6b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="מפת בית קפה ביתא" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-neumorphic relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm z-0"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-right">פרטי התקשרות</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-end space-x-4 space-x-reverse">
                    <div className="text-right">
                      <p className="font-medium text-gray-800">טלפון</p>
                      <p className="text-gray-600 mt-1">03-1234567</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#FF6B6B]/10 flex items-center justify-center text-[#FF6B6B]">
                      <FaPhone />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-end space-x-4 space-x-reverse">
                    <div className="text-right">
                      <p className="font-medium text-gray-800">דוא"ל</p>
                      <p className="text-gray-600 mt-1">info@betacafe.co.il</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#FF6B6B]/10 flex items-center justify-center text-[#FF6B6B]">
                      <FaEnvelope />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-end space-x-4 space-x-reverse">
                    <div className="text-right">
                      <p className="font-medium text-gray-800">כתובת</p>
                      <p className="text-gray-600 mt-1">רחוב הרצל 123, תל אביב</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#FF6B6B]/10 flex items-center justify-center text-[#FF6B6B]">
                      <FaMapMarkerAlt />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-end space-x-4 space-x-reverse">
                    <div className="text-right">
                      <p className="font-medium text-gray-800">שעות פעילות</p>
                      <p className="text-gray-600 mt-1">ראשון-חמישי: 08:00-22:00</p>
                      <p className="text-gray-600">שישי: 08:00-15:00</p>
                      <p className="text-gray-600">שבת: סגור</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#FF6B6B]/10 flex items-center justify-center text-[#FF6B6B]">
                      <FaClock />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .shadow-neumorphic {
          box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.05), 
                      -8px -8px 16px rgba(255, 255, 255, 0.8);
        }
        
        .shadow-neumorphic-button {
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1), 
                      -4px -4px 8px rgba(255, 255, 255, 0.1);
        }
        
        .shadow-inner {
          box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.05), 
                      inset -2px -2px 5px rgba(255, 255, 255, 0.5);
        }
        
        .dir-rtl {
          direction: rtl;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;