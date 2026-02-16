import React from 'react';
import { TrendingUp, Zap, Droplets, ShieldCheck, HardHat } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

export const TrustSignals: React.FC = () => {
  const signals = [
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-gold" strokeWidth={1.5} />,
      title: "The Duck Curve Solution",
      description: "Standard solar peaks at noon. Vert-X delivers two peak production cycles (AM & PM), making it the superior choice for regions with pronounced duck curves."
    },
    {
      icon: <Droplets className="h-8 w-8 text-brand-gold" strokeWidth={1.5} />,
      title: "Winter & Dust Mastery",
      description: "Unmatched performance. The vertical angle captures the low-hanging winter sun perfectly while gravity prevents dust buildup, ensuring consistent yield."
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-gold" strokeWidth={1.5} />,
      title: "Higher Capture Rate",
      description: "More productive hours during the year. Vert-X captures energy efficiently during critical evening hours, ensuring higher capture rates compared to conventional panels."
    }
  ];

  return (
    <section id="benefits" className="dark:bg-brand-black bg-white py-24 border-y dark:border-white/5 border-slate-100 transition-colors duration-500 overflow-hidden relative">
      {/* Decorative background element - Optimized: Replaced expensive blur filter with radial gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* The Founder's Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <MotionDiv 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <div className="flex items-center gap-2 mb-4">
                <span className="p-1 px-3 rounded-sm bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck className="w-3 h-3" /> Certified Specialist
                </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif dark:text-white text-brand-black mb-6 leading-tight">
              Safety, Standards, <span className="text-brand-gold italic">Compliance.</span>
            </h2>
            <div className="h-1 w-24 bg-brand-gold mb-8"></div>
            <p className="text-lg dark:text-slate-300 text-slate-700 font-light leading-relaxed mb-6">
              "Holding a <strong className="text-brand-gold">Certificate in Solar Installation and Maintenance</strong>, I founded Carter Energy because I saw how energy instability in South Africa and Botswana puts agricultural yields at risk."
            </p>
            <p className="text-lg dark:text-slate-300 text-slate-700 font-light leading-relaxed mb-6">
              "We don't just 'install and leave'. We design <strong>SANS/NDB Compliant</strong> systems that are Irrigation-Ready and built to the rigorous standards insurance companies require. With certifications in <strong>Working at Heights</strong> and Solar Installation & Maintenance, we ensure your asset is safe, insurable, and built to last."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-8 border-t border-slate-200 dark:border-white/10 pt-6">
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 dark:bg-white/5 rounded-full">
                        <HardHat className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                    </div>
                    <div className="text-xs">
                        <div className="font-bold dark:text-white text-brand-black uppercase">Certified</div>
                        <div className="text-slate-500">Working at Heights</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 dark:bg-white/5 rounded-full">
                        <ShieldCheck className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                    </div>
                    <div className="text-xs">
                        <div className="font-bold dark:text-white text-brand-black uppercase">Insurance Approved</div>
                        <div className="text-slate-500">Professional Standards</div>
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
                src="https://wsrv.nl/?url=https://i.ibb.co/F4H29r8L/Gemini-Generated-Image-ask7jyask7jyask7-1.png&w=800&output=webp&q=80" 
                alt="Solar Maintenance" 
                className="w-full h-full object-cover transition-all duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white max-w-sm">
                <p className="font-serif text-2xl italic mb-2">"Your yields are our priority."</p>
                <p className="text-xs text-brand-gold uppercase tracking-widest font-bold">Carter Energy Solutions</p>
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