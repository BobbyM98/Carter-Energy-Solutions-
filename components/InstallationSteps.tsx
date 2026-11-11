import React from 'react';
import { ClipboardCheck, PencilRuler, Truck, Hammer, Power } from 'lucide-react';
import { m as motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const STEPS = [
  {
    id: '01',
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: 'Feasibility & Structural Audit',
    description:
      'We evaluate roof load reserve or perimeter soil conditions, tariff structures, and shading geometry to model preliminary site yield.',
  },
  {
    id: '02',
    icon: <PencilRuler className="w-6 h-6" />,
    title: 'Bespoke PV Engineering',
    description:
      'Our engineers configure 90° vertical bifacial or tilted monocrystalline strings, inverter MPPT windows, and wind-load bonding layouts.',
  },
  {
    id: '03',
    icon: <Truck className="w-6 h-6" />,
    title: 'Tier-1 Procurement',
    description:
      'We supply N-Type double-glass bifacial modules, hybrid storage packs, and proprietary lightweight Vert-X racking hardware.',
  },
  {
    id: '04',
    icon: <Hammer className="w-6 h-6" />,
    title: 'CETA-Certified Installation',
    description:
      'Zero-penetration Sika® chemical bonding for industrial roofs or precision perimeter post installation by our CETA-accredited team.',
  },
  {
    id: '05',
    icon: <Power className="w-6 h-6" />,
    title: 'Commissioning & SANS COC',
    description:
      'Comprehensive string testing, grid synchronization, and issuance of a SANS 10142-1 Certificate of Compliance via our registered ECB electrician.',
  },
];

export const InstallationSteps: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-brand-black border-b border-brand-charcoal/10 dark:border-brand-sage/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-brand-gold-dark dark:text-brand-gold mb-3">
            EPC EXECUTION METHODOLOGY
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-4 text-brand-forest dark:text-brand-ivory">
            Engineering Delivery Protocol
          </h2>
          <div className="h-px w-16 bg-brand-gold mx-auto mb-4" />
          <p className="text-brand-charcoal/75 dark:text-brand-sage/80 font-light max-w-2xl mx-auto">
            From structural audit to SANS 10142-1 certification, our five-stage EPC methodology ensures zero disruption to your commercial or agricultural operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {STEPS.map((step, index) => (
            <MotionDiv
              key={step.id}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-sm bg-brand-ivory dark:bg-brand-charcoal border border-brand-charcoal/10 dark:border-brand-sage/15 hover:border-brand-gold/60 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-semibold text-brand-gold-dark dark:text-brand-gold tracking-widest">
                    STAGE {step.id}
                  </span>
                  <div className="text-brand-forest dark:text-brand-gold">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-brand-forest dark:text-brand-ivory mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-charcoal/80 dark:text-brand-sage/85 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};