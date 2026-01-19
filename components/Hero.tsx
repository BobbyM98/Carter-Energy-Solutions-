import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const scrollToQuote = () => {
    document.getElementById('get-quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop" 
          alt="Solar Panels on Roof" 
          className="w-full h-full object-cover grayscale opacity-30 dark:opacity-20 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white dark:from-brand-black/60 dark:via-brand-black/90 dark:to-brand-black transition-colors duration-500"></div>
        {/* Gold glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold opacity-10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold-dark dark:text-brand-gold text-sm font-medium tracking-wide mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
              </span>
              ENERGY INDEPENDENCE
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif font-medium dark:text-white text-brand-black leading-tight mb-8"
          >
            Beat <span className="text-gold-gradient italic">Load Shedding</span> Forever.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl dark:text-slate-300 text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Experience the luxury of uninterrupted power. Carter Energy Solutions delivers premium solar engineering for South Africa's finest homes.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button 
              onClick={scrollToQuote}
              className="group relative inline-flex justify-center items-center gap-3 bg-brand-gold text-brand-black px-10 py-4 rounded-sm font-semibold text-lg overflow-hidden transition-all hover:pr-12"
            >
              <span className="relative z-10">Get a Quote</span>
              <ArrowRight className="h-5 w-5 absolute right-4 opacity-0 group-hover:opacity-100 group-hover:right-6 transition-all duration-300" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button className="group inline-flex justify-center items-center gap-2 px-10 py-4 rounded-sm font-semibold text-lg dark:text-white text-brand-black border dark:border-white/20 border-brand-black/20 hover:bg-brand-black/5 dark:hover:bg-white/5 transition-all">
              View Packages
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex justify-center items-center gap-6"
          >
             <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full dark:border-brand-black border-white border-2 overflow-hidden shadow-lg">
                   <img src={`https://picsum.photos/seed/${i + 88}/100`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex text-brand-gold text-xs">★★★★★</div>
              <p className="text-sm dark:text-slate-400 text-slate-500">Trusted by <span className="dark:text-white text-brand-black font-semibold">2,000+</span> Families</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};