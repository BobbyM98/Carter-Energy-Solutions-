import React from 'react';
import { TrendingUp, Zap, Droplets, ShieldCheck, HardHat } from 'lucide-react';
import { motion } from 'framer-motion';
import { optimizeImage } from '../src/utils/image';

const MotionDiv = motion.div as any;

export const TrustSignals: React.FC = () => {
  const signals = [
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-gold" strokeWidth={1.5} />,
      title: "Dual Peak Output",
      description: "Standard solar peaks at noon. Vert-X delivers two peak production cycles (AM & PM), generating up to 30% more energy than flat panels."
    },
    {
      icon: <Droplets className="h-8 w-8 text-brand-gold" strokeWidth={1.5} />,
      title: "Zero Land Loss",
      description: "Mounts upright on fence lines and perimeters. Livestock-safe clearance means you don't sacrifice a single hectare of productive farmland."
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-gold" strokeWidth={1.5} />,
      title: "Weak Roof Solution",
      description: "Ultra-lightweight racking (<10kg/m²) requires no ballast. Perfect for older industrial and commercial buildings that cannot support traditional solar weight."
    }
  ];

  return (
    <section id="benefits" className="dark:bg-brand-black bg-white py-24 border-y dark:border-white/5 border-slate-100 transition-colors duration-500 overflow-hidden relative">
      {/* Decorative background element - Optimized: Replaced expensive blur filter with radial gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* The Problem & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <MotionDiv 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <div className="flex items-center gap-2 mb-4">
                <span className="p-1 px-3 rounded-sm bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck className="w-3 h-3" /> The Vert-X Solution
                </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif dark:text-white text-brand-black mb-6 leading-tight">
              Energy Security Without <span className="text-brand-gold italic">Compromise.</span>
            </h2>
            <div className="h-1 w-24 bg-brand-gold mb-8"></div>
            <p className="text-lg dark:text-slate-300 text-slate-700 font-light leading-relaxed mb-6">
              South African businesses and farms are crippled by load shedding, but traditional solar demands vast tracts of productive land or expensive roof reinforcements.
            </p>
            <p className="text-lg dark:text-slate-300 text-slate-700 font-light leading-relaxed mb-6">
              <strong>Carter Energy Solutions</strong> is South Africa's first and only vertical bifacial solar installer. We mount panels upright on existing perimeters—solving the energy crisis without consuming your most valuable asset: land.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-8 border-t border-slate-200 dark:border-white/10 pt-6">
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 dark:bg-white/5 rounded-full">
                        <HardHat className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                    </div>
                    <div className="text-xs">
                        <div className="font-bold dark:text-white text-brand-black uppercase">CETA Accredited</div>
                        <div className="text-slate-500">Cert No: PSBE/ROY/20/100</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 dark:bg-white/5 rounded-full">
                        <ShieldCheck className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                    </div>
                    <div className="text-xs">
                        <div className="font-bold dark:text-white text-brand-black uppercase">SANS 10142-1</div>
                        <div className="text-slate-500">COC on all installations</div>
                    </div>
                 </div>
            </div>
          </MotionDiv>
          
          <MotionDiv 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-sm overflow-hidden border border-brand-gold/20 shadow-2xl relative group">
              <img 
                src={optimizeImage("https://i.ibb.co/7xh2RMMY/Gemini-Generated-Image-xhsictxhsictxhsi.png", 800)}
                alt="Vertical Solar on Farm" 
                className="w-full h-full object-cover transition-all duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white max-w-sm">
                <p className="font-serif text-2xl italic mb-2">"Zero productive land consumed."</p>
                <p className="text-xs text-brand-gold uppercase tracking-widest font-bold">Carter Vert-X System</p>
              </div>
            </div>
          </MotionDiv>
        </div>

        {/* The Signals Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signals.map((signal, index) => (
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              key={index} 
              className="group p-8 rounded-sm border dark:border-white/5 border-slate-200 dark:hover:border-brand-gold/30 hover:border-brand-gold/50 dark:bg-brand-charcoal/50 bg-slate-50 hover:shadow-2xl hover:shadow-brand-gold/5 transition-all duration-500 flex flex-col items-start"
            >
              <div className="mb-6 bg-transparent w-fit p-0 group-hover:scale-110 transition-transform duration-500">
                {signal.icon}
              </div>
              <h3 className="text-2xl font-serif dark:text-white text-brand-black mb-3">{signal.title}</h3>
              <p className="dark:text-slate-400 text-slate-700 leading-relaxed font-light">{signal.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};