import React from 'react';
import { Footprints, Feather, Clock, Sprout } from 'lucide-react';
import { m as motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const BENEFITS = [
  {
    index: '01',
    icon: <Footprints className="w-5 h-5" />,
    title: 'Unobstructed HVAC Maintenance Corridors',
    description:
      'Conventional horizontal arrays blanket roof surfaces and block service walkways. Vert-X vertical rows create clear architectural corridors, enabling technicians to service chillers and HVAC plant safely.',
  },
  {
    index: '02',
    icon: <Feather className="w-5 h-5" />,
    title: 'Engineered for Big-Box & Warehouse Roofs',
    description:
      'Retail centers and older industrial roofs frequently cannot support 25 kg/m² of ballasted solar. Our aerodynamic Vert-X systems weigh under 10–11 kg/m², unlocking roof real estate without structural steel reinforcement.',
  },
  {
    index: '03',
    icon: <Clock className="w-5 h-5" />,
    title: 'Aligned with the 16:00–19:00 Retail Demand Peak',
    description:
      'Shopping centers experience high HVAC and lighting loads during late afternoon footfall. West-facing Vert-X bifacial faces generate their secondary power peak precisely when evening tariff rates spike.',
  },
  {
    index: '04',
    icon: <Sprout className="w-5 h-5" />,
    title: 'Living Green-Roof & Architectural Compatibility',
    description:
      'Preserve indigenous rooftop landscaping. Vertical row geometry allows overhead sunlight and rainfall to reach the substrate below while generating clean power above.',
  },
];

export const CommercialBenefits: React.FC = () => {
  return (
    <section className="py-24 bg-brand-ivory dark:bg-brand-charcoal/30 border-b border-brand-charcoal/10 dark:border-brand-sage/10 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column: Text & Fiscal Context */}
          <div className="lg:w-1/3 lg:sticky lg:top-28">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-brand-gold-dark dark:text-brand-gold mb-3">
              COMMERCIAL &amp; RETAIL INFRASTRUCTURE
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-brand-forest dark:text-brand-ivory leading-tight">
              The Commercial Roof <span className="text-brand-gold-dark dark:text-brand-gold italic">Advantage.</span>
            </h2>
            <p className="text-brand-charcoal/80 dark:text-brand-sage/85 leading-relaxed mb-8 font-light text-sm sm:text-base">
              Vertical photovoltaics resolve the core structural and operational constraints faced by commercial property portfolios, logistics hubs, and retail centers.
            </p>

            <div className="p-7 bg-white dark:bg-brand-black border border-brand-gold/35 rounded-sm shadow-sm">
              <p className="italic text-brand-forest dark:text-brand-ivory font-serif text-lg mb-5 leading-relaxed">
                &ldquo;We structure commercial solar assets to leverage <strong className="text-brand-gold-dark dark:text-brand-gold not-italic">SARS Section 12B</strong> (100% Year-1 capital allowance for systems &lt;1MW) and extended <strong className="text-brand-gold-dark dark:text-brand-gold not-italic">Section 12L</strong> energy-efficiency incentives.&rdquo;
              </p>
              <div className="pt-4 border-t border-brand-charcoal/10 dark:border-brand-sage/15 flex items-center justify-between text-xs font-mono">
                <span className="text-brand-forest dark:text-brand-ivory font-semibold uppercase tracking-wider">
                  Carter Energy Solutions
                </span>
                <span className="text-brand-gold-dark dark:text-brand-gold">
                  Commercial Structuring
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Grid of Benefits */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {BENEFITS.map((benefit, idx) => (
              <MotionDiv
                key={benefit.index}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-8 rounded-sm border border-brand-charcoal/10 dark:border-brand-sage/15 hover:border-brand-gold/60 bg-white dark:bg-brand-black transition-colors group"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-brand-gold-dark dark:text-brand-gold tracking-widest">
                    {benefit.index} · APPLICATION
                  </span>
                  <div className="text-brand-gold-dark dark:text-brand-gold">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-brand-forest dark:text-brand-ivory mb-3 font-serif">
                  {benefit.title}
                </h3>
                <p className="text-sm text-brand-charcoal/75 dark:text-brand-sage/85 leading-relaxed font-light">
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