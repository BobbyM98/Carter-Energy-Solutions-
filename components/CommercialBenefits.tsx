import React from 'react';
import { Footprints, Feather, Clock, Sprout, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const BENEFITS = [
  {
    icon: <Footprints className="w-6 h-6" />,
    title: "The 'HVAC Alley' Access",
    description: "Standard solar blocks walking paths. Vert-X systems create clear corridors, allowing maintenance crews to service AC units without stepping on panels."
  },
  {
    icon: <Feather className="w-6 h-6" />,
    title: "Safe for Big Box Roofs",
    description: "Malls often can't support the 25kg/m² of ballasted solar. Our aerodynamic Vert-X systems weigh just 11kg/m², unlocking roof real estate you thought was unusable."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "The 6 PM Shopping Rush",
    description: "Malls peak in energy use during late afternoon. West-facing Vert-X panels generate their maximum power exactly when you need it most—matching the evening shopper footfall."
  },
  {
    icon: <Sprout className="w-6 h-6" />,
    title: "Green Roof Compatible",
    description: "Don't kill your eco-friendly aesthetics. Vert-X units allow sunlight and rain to reach the soil, keeping your green roof alive while generating power."
  }
];

export const CommercialBenefits: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-brand-charcoal/20 border-y border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left Column: Text & Context */}
            <div className="lg:w-1/3 sticky top-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold tracking-widest uppercase mb-6">
                   <ShoppingBag className="w-4 h-4" />
                   Retail & Commercial
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 dark:text-white text-slate-900 leading-tight">
                    The Mall <span className="text-brand-gold italic">Advantage.</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-light">
                    Vertical PV solves three specific headaches facility managers struggle with. We don't just sell solar; we sell accessible roof real estate.
                </p>
                
                <div className="p-8 bg-white dark:bg-brand-black border-l-4 border-brand-gold rounded-r-sm shadow-xl">
                    <p className="italic text-slate-700 dark:text-slate-300 font-serif text-lg mb-6 leading-relaxed">
                        "We structure assets to maximize <strong className="text-brand-gold-dark dark:text-brand-gold not-italic">Section 12B</strong> (100% Year 1 write-off) and the extended <strong className="text-brand-gold-dark dark:text-brand-gold not-italic">Section 12L</strong> (2030). The fiscal framework for renewables is stable and aggressive."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center font-bold text-brand-gold">
                            CE
                        </div>
                        <div className="text-xs">
                            <span className="block font-bold dark:text-white text-slate-900 uppercase tracking-wide">Carter Strategy</span>
                            <span className="text-brand-gold">Financial Insight</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Grid of Benefits */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {BENEFITS.map((benefit, idx) => (
                    <MotionDiv
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="p-8 rounded-sm border border-slate-200 dark:border-white/10 hover:border-brand-gold dark:hover:border-brand-gold/50 bg-white dark:bg-brand-black transition-all group hover:shadow-2xl hover:shadow-brand-gold/5"
                    >
                        <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-brand-black transition-colors duration-300">
                            {benefit.icon}
                        </div>
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-3 font-serif group-hover:text-brand-gold transition-colors">{benefit.title}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                            {benefit.description}
                        </p>
                    </MotionDiv>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};