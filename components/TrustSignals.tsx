import React from 'react';
import { TrendingUp, Wind, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

export const TrustSignals: React.FC = () => {
  const signals = [
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-gold" strokeWidth={1.5} />,
      title: "The Camel Curve",
      description: "Standard solar peaks at noon when power is cheap. Vertical bifacial panels peak at 8 AM and 4 PM—capturing the high-tariff morning and evening sun."
    },
    {
      icon: <Droplets className="h-8 w-8 text-brand-gold" strokeWidth={1.5} />,
      title: "The Dust Solution",
      description: "Gauteng dust kills horizontal efficiency by up to 15%. Vertical panels use gravity to self-clean, maintaining 98% efficiency year-round."
    },
    {
      icon: <Wind className="h-8 w-8 text-brand-gold" strokeWidth={1.5} />,
      title: "Aerodynamic Cooling",
      description: "Heat degrades solar voltage. Vertical racking allows unrestricted airflow, keeping panels cooler and voltage higher during the SA summer."
    }
  ];

  return (
    <section id="benefits" className="dark:bg-brand-black bg-white py-24 border-y dark:border-white/5 border-slate-100 transition-colors duration-500 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* The Back Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif dark:text-white text-brand-black mb-6 leading-tight">
              Why <span className="text-brand-gold italic">Vertical?</span>
            </h2>
            <div className="h-1 w-24 bg-brand-gold mb-8"></div>
            <p className="text-lg dark:text-slate-300 text-slate-700 font-light leading-relaxed mb-6">
              We started as a standard maintenance company, but we saw a massive problem. In Gauteng, roofs were too weak for heavy ballasted solar, and dust was killing efficiency within weeks.
            </p>
            <p className="text-lg dark:text-slate-300 text-slate-700 font-light leading-relaxed">
              We refused to offer sub-par solutions. We scoured the globe—from Norway to Germany—to bring <strong>Vertical Bifacial Technology</strong> to South Africa. We are the pioneers of the 'Vertical Revolution'.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-sm overflow-hidden border border-brand-gold/20 shadow-2xl">
              <img 
                src="https://i.ibb.co/F4H29r8L/Gemini-Generated-Image-ask7jyask7jyask7-1.png" 
                alt="Solar Maintenance" 
                className="w-full h-full object-cover transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-serif text-2xl italic">"Efficiency is an angle."</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Signals Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signals.map((signal, index) => (
            <motion.div 
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};