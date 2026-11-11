import React from 'react';
import { m as motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const COMPARISON_DATA = [
  {
    feature: 'Daily Irradiance Profile',
    standard: 'Single midday bell-curve peak (11:30–13:30); misses morning and evening demand windows.',
    vertx: 'Dual generation peaks (06:30–10:00 AM & 15:00–18:30 PM); up to 30% higher effective self-consumption.',
  },
  {
    feature: 'Productive Land Footprint',
    standard: '100% ground exclusion beneath low-tilt tables; obstructs livestock and farm machinery.',
    vertx: '0% arable land loss; mounts along fence lines and perimeters with 600mm–1.2m+ clearance.',
  },
  {
    feature: 'Industrial Roof Dead Load',
    standard: '18–25 kg/m² with concrete ballast blocks; frequently requires structural steel reinforcement.',
    vertx: '< 10 kg/m² aerodynamic vertical profile; Sika® chemical bond with zero penetrations or ballast.',
  },
  {
    feature: 'Winter & Soiling Performance',
    standard: 'High dust accumulation on 10°–25° surfaces; requires frequent deionized water washing.',
    vertx: '90° vertical gravity self-shedding; captures low-angle winter sun with minimal dust retention.',
  },
  {
    feature: 'Agrivoltaic Microclimate Impact',
    standard: 'Creates shaded dead zones and uneven water runoff beneath large horizontal arrays.',
    vertx: 'Acts as a windbreak barrier that reduces crop evapotranspiration and soil moisture loss.',
  },
];

export const ComparisonTable: React.FC = () => {
  return (
    <section className="py-24 bg-brand-ivory dark:bg-brand-black border-b border-brand-charcoal/10 dark:border-brand-sage/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-brand-gold-dark dark:text-brand-gold mb-3">
            TECHNICAL COMPARISON
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-4 text-brand-forest dark:text-brand-ivory">
            The Vert-X Engineering Advantage
          </h2>
          <div className="h-px w-16 bg-brand-gold mx-auto mb-4" />
          <p className="text-brand-charcoal/75 dark:text-brand-sage/80 font-light max-w-2xl mx-auto">
            A comparative evaluation of 90° Vertical Bifacial architecture against conventional horizontal tilted installations across South African industrial and agricultural conditions.
          </p>
        </div>

        <MotionDiv
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-sm border border-brand-charcoal/15 dark:border-brand-sage/15 bg-white dark:bg-brand-charcoal"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse tabular-nums">
              <thead>
                <tr className="bg-brand-ivory/70 dark:bg-brand-black/60 border-b border-brand-charcoal/15 dark:border-brand-sage/15">
                  <th className="p-5 sm:p-6 text-xs font-mono font-semibold tracking-widest text-brand-charcoal/70 dark:text-brand-sage/75 uppercase w-1/4">
                    Engineering Parameter
                  </th>
                  <th className="p-5 sm:p-6 text-xs font-mono font-semibold tracking-widest text-brand-charcoal/70 dark:text-brand-sage/75 uppercase w-1/3 border-l border-brand-charcoal/10 dark:border-brand-sage/10">
                    Conventional Tilted Solar (15°–25°)
                  </th>
                  <th className="p-5 sm:p-6 text-xs font-mono font-semibold tracking-widest text-brand-forest dark:text-brand-gold uppercase bg-brand-gold/10 w-1/3 border-l border-brand-gold/30">
                    Carter Vert-X System (90° Bifacial)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-charcoal/10 dark:divide-brand-sage/10 text-sm">
                {COMPARISON_DATA.map((row) => (
                  <tr
                    key={row.feature}
                    className="transition-colors hover:bg-brand-ivory/40 dark:hover:bg-white/[0.02]"
                  >
                    <td className="p-5 sm:p-6 font-serif text-lg font-semibold text-brand-forest dark:text-brand-ivory">
                      {row.feature}
                    </td>
                    <td className="p-5 sm:p-6 text-brand-charcoal/75 dark:text-brand-sage/80 font-light border-l border-brand-charcoal/10 dark:border-brand-sage/10 leading-relaxed">
                      {row.standard}
                    </td>
                    <td className="p-5 sm:p-6 text-brand-forest dark:text-brand-ivory font-medium bg-brand-gold/[0.06] border-l border-brand-gold/30 leading-relaxed">
                      {row.vertx}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </MotionDiv>

        <div className="mt-6 text-center">
          <p className="text-xs text-brand-charcoal/60 dark:text-brand-sage/60 italic">
            *Comparative parameters reflect Gauteng and Vaal-Region irradiance profiles, particulate fallout conditions, and municipal time-of-use tariff structures. Actual site performance depends on azimuth, shading, and surface albedo.
          </p>
        </div>
      </div>
    </section>
  );
};