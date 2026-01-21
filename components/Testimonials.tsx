import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  imageUrl: string;
}

const TESTIMONIAL_DATA: Testimonial[] = [
    {
      name: "Johan De Villiers",
      location: "Stellenbosch, WC",
      quote: "The craftsmanship is impeccable. Carter Energy didn't just install solar; they upgraded our entire home's energy infrastructure. Truly world-class.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Lindiwe Mazibuko",
      location: "Hyde Park, JHB",
      quote: "I was skeptical about the aesthetic impact, but the all-black panels actually improved our roof's look. No more load shedding anxiety.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "David Cohen",
      location: "Camps Bay, Cape Town",
      quote: "Efficient, polite, and incredibly tidy. The team worked around our schedule and the system has paid for itself in peace of mind alone.",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIAL_DATA.length);
  };
  
  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIAL_DATA.length) % TESTIMONIAL_DATA.length);
  };

  return (
    <section className="py-24 border-t dark:border-white/5 border-slate-100 transition-colors duration-500 dark:bg-brand-black bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-gold opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 dark:text-white text-slate-900">Voices of Independence</h2>
           <div className="h-0.5 w-16 bg-brand-gold mx-auto mb-4"></div>
           <p className="text-slate-500 dark:text-slate-400 font-light">Join the families who have already secured their power.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
            <div className="relative min-h-[400px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="w-full"
                >
                  <div className="flex flex-col items-center text-center">
                     <div className="relative mb-8 group">
                        <div className="absolute inset-0 bg-brand-gold blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
                        <div className="w-24 h-24 rounded-full p-1 border border-brand-gold/30 relative z-10 bg-brand-black">
                           <img 
                             src={TESTIMONIAL_DATA[currentIndex].imageUrl} 
                             alt={TESTIMONIAL_DATA[currentIndex].name} 
                             className="w-full h-full rounded-full object-cover"
                           />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-brand-gold text-brand-black p-1.5 rounded-full">
                           <Quote className="w-3 h-3 fill-current" />
                        </div>
                     </div>

                     <div className="flex gap-1 text-brand-gold mb-6">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                     </div>

                     <blockquote className="text-xl md:text-2xl font-serif italic leading-relaxed mb-8 dark:text-slate-200 text-slate-700 max-w-2xl">
                       "{TESTIMONIAL_DATA[currentIndex].quote}"
                     </blockquote>

                     <div>
                       <h4 className="text-lg font-bold dark:text-white text-brand-black tracking-wide">{TESTIMONIAL_DATA[currentIndex].name}</h4>
                       <p className="text-sm dark:text-brand-gold text-brand-gold-dark uppercase tracking-widest mt-1">{TESTIMONIAL_DATA[currentIndex].location}</p>
                     </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-200 dark:border-white/10 text-slate-400 hover:text-brand-gold hover:border-brand-gold transition-all dark:bg-brand-charcoal bg-white shadow-lg z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-200 dark:border-white/10 text-slate-400 hover:text-brand-gold hover:border-brand-gold transition-all dark:bg-brand-charcoal bg-white shadow-lg z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIAL_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-brand-gold' : 'bg-slate-300 dark:bg-slate-700 hover:bg-brand-gold/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};