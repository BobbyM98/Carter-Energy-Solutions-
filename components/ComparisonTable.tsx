import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

const MotionDiv = motion.div as any;

const COMPARISON_DATA = [
  {
    feature: "Energy Generation",
    standard: "Single Peak (Midday). Misses morning and evening demand.",
    standardIcon: <AlertTriangle className="w-4 h-4 text-orange-400" />,
    vertx: "Dual Peak Cycles (AM & PM). Generates up to 30% more energy.",
    vertxIcon: <CheckCircle2 className="w-4 h-4 text-brand-gold" />
  },
  {
    feature: "Productive Land Loss",
    standard: "100% loss under panels. Blocks ground completely.",
    standardIcon: <XCircle className="w-4 h-4 text-red-400" />,
    vertx: "0% Land Loss. Mounts on perimeters. Livestock-safe clearance.",
    vertxIcon: <CheckCircle2 className="w-4 h-4 text-brand-gold" />
  },
  {
    feature: "Roof Weight (Industrial)",
    standard: "Heavy. Requires concrete ballast or roof reinforcement.",
    standardIcon: <XCircle className="w-4 h-4 text-red-400" />,
    vertx: "Ultra-Light (<10kg/m²). No ballast required. Aerodynamic.",
    vertxIcon: <CheckCircle2 className="w-4 h-4 text-brand-gold" />
  },
  {
    feature: "Winter & Dust Performance",
    standard: "High loss. Poor winter angle & dust buildup on flat surface.",
    standardIcon: <XCircle className="w-4 h-4 text-red-400" />,
    vertx: "Unmatched. Captures low winter sun; gravity prevents dust.",
    vertxIcon: <CheckCircle2 className="w-4 h-4 text-brand-gold" />
  },
  {
    feature: "Agricultural Impact",
    standard: "Creates dead zones. Prevents tractor access.",
    standardIcon: <XCircle className="w-4 h-4 text-red-400" />,
    vertx: "Creates micro-climates. Wind protection for crops.",
    vertxIcon: <CheckCircle2 className="w-4 h-4 text-brand-gold" />
  }
];

export const ComparisonTable: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-brand-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 dark:text-white text-slate-900">The Vert-X Advantage</h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mb-4"></div>
          <p className="text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto">
            Why traditional horizontal solar is failing South African agriculture and industry.
          </p>
        </div>

        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-lg border border-slate-200 dark:border-white/10 shadow-xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10">
                  <th className="p-6 text-sm font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase w-1/4">Feature</th>
                  <th className="p-6 text-sm font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase w-1/3">Standard Horizontal <span className="hidden md:inline">(The Old Way)</span></th>
                  <th className="p-6 text-sm font-bold tracking-widest text-brand-black dark:text-brand-gold uppercase bg-brand-gold/10 dark:bg-brand-gold/10 w-1/3 border-l-2 border-brand-gold">
                    Carter "Vert-X" <span className="hidden md:inline">(The New Way)</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-white/5">
                {COMPARISON_DATA.map((row, index) => (
                  <tr 
                    key={index} 
                    className="group transition-colors hover:bg-slate-50 dark:hover:bg-white/5"
                  >
                    <td className="p-6 font-serif font-medium dark:text-white text-slate-900 bg-white dark:bg-brand-black group-hover:bg-slate-50 dark:group-hover:bg-white/5 transition-colors">
                      {row.feature}
                    </td>
                    <td className="p-6 dark:text-slate-400 text-slate-600 bg-white dark:bg-brand-black group-hover:bg-slate-50 dark:group-hover:bg-white/5 transition-colors">
                      <div className="flex items-start gap-3">
                        <span className="mt-1 flex-shrink-0">{row.standardIcon}</span>
                        <span>{row.standard}</span>
                      </div>
                    </td>
                    <td className="p-6 dark:text-white text-slate-900 font-medium bg-brand-gold/5 dark:bg-brand-gold/5 border-l-2 border-brand-gold relative">
                      <div className="absolute inset-0 bg-brand-gold opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
                      <div className="flex items-start gap-3 relative z-10">
                        <span className="mt-1 flex-shrink-0">{row.vertxIcon}</span>
                        <span>{row.vertx}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </MotionDiv>
        
        <div className="mt-8 text-center">
            <p className="text-xs text-slate-400 dark:text-slate-500 italic">
                *Data based on comparative studies in Gauteng region accounting for high dust precipitation and peak tariff structures.
            </p>
        </div>
      </div>
    </section>
  );
};