import React from 'react';
import { ClipboardCheck, PencilRuler, Truck, Hammer, Power } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const STEPS = [
  {
    id: 1,
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "Feasibility Audit",
    description: "We analyze your roof structure or soil quality and run a vertical yield simulation to predict exact ROI."
  },
  {
    id: 2,
    icon: <PencilRuler className="w-8 h-8" />,
    title: "Custom Engineering",
    description: "Our engineers design a site-specific layout, optimizing for wind load aerodynamics and bifacial gain."
  },
  {
    id: 3,
    icon: <Truck className="w-8 h-8" />,
    title: "Procurement",
    description: "We source specialized high-bifaciality modules and our patented lightweight vertical racking systems."
  },
  {
    id: 4,
    icon: <Hammer className="w-8 h-8" />,
    title: "Precision Install",
    description: "Zero-penetration bonding for roofs or rapid pile-driving for farms. Fast, clean, and structurally safe."
  },
  {
    id: 5,
    icon: <Power className="w-8 h-8" />,
    title: "Commissioning",
    description: "Rigorous testing, grid connection, and COC issuance. We hand over the keys to your new power plant."
  }
];

export const InstallationSteps: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-brand-black border-t dark:border-white/5 border-slate-100 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 dark:text-white text-slate-900">Your Path to Power</h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mb-4"></div>
          <p className="text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto">
            From feasibility to full power, our specialized process ensures zero disruption to your operations.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 dark:bg-white/10 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {STEPS.map((step, index) => (
              <MotionDiv
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-white dark:bg-brand-charcoal border-4 border-slate-100 dark:border-brand-black group-hover:border-brand-gold transition-colors duration-500 flex items-center justify-center mb-6 relative shadow-xl">
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-brand-gold text-brand-black font-bold rounded-full flex items-center justify-center text-sm shadow-md z-20">
                    0{step.id}
                  </span>
                  <div className="text-slate-400 dark:text-slate-500 group-hover:text-brand-gold transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-lg font-serif font-bold dark:text-white text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm dark:text-slate-400 text-slate-500 leading-relaxed font-light">
                  {step.description}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};