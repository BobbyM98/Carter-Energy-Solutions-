import React from 'react';
import { Wrench, Gauge, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const SERVICES = [
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Maintenance",
    description: "Comprehensive system health checks, loose connection tightening, and thermal imaging inspections to prevent failures before they happen."
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    title: "System Tuning",
    description: "Inverter firmware updates, load balancing analysis, and string performance tuning to ensure your system operates at peak theoretical efficiency."
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    title: "Certified Optimization",
    description: "We specialize in restoring energy yield through deionized cleaning and technical health audits, ensuring your system remains insurance-compliant and fire-safe."
  }
];

export const SideServices: React.FC = () => {
  return (
    <section className="py-24 dark:bg-brand-charcoal/30 bg-slate-50 border-y dark:border-white/5 border-slate-200 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 dark:text-white text-slate-900">Complete Lifecycle Care</h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mb-4"></div>
          <p className="text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto">
            We don't just install; we sustain. Maximise the lifespan and ROI of your solar assets with our dedicated support services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <MotionDiv 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-brand-black p-8 rounded-sm border border-slate-200 dark:border-white/10 hover:border-brand-gold dark:hover:border-brand-gold transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                 {React.cloneElement(service.icon, { className: "w-24 h-24 text-brand-gold" })}
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors duration-300">
                    {React.cloneElement(service.icon, { className: "w-6 h-6 text-brand-gold-dark dark:text-brand-gold group-hover:text-brand-black transition-colors" })}
                </div>
                <h3 className="text-xl font-serif font-bold dark:text-white text-brand-black mb-4">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed text-sm">
                    {service.description}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};