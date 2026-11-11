import React, { useState } from 'react';
import { TrendingUp, Zap, Droplets, ShieldCheck, HardHat } from 'lucide-react';
import { m as motion } from 'framer-motion';
import { optimizeImage } from '../src/utils/image';

const MotionDiv = motion.div as any;

export const TrustSignals: React.FC = () => {
  const [activeCurve, setActiveCurve] = useState<'both' | 'vertx' | 'conventional'>('both');
  const [imgFailed, setImgFailed] = useState(false);

  const signals = [
    {
      index: '01',
      icon: <TrendingUp className="h-6 w-6 text-brand-gold" strokeWidth={1.5} />,
      title: 'Dual-Peak Irradiance Harvesting',
      metric: 'AM & PM Generation Peaks',
      description:
        'Conventional north-facing tilted solar peaks exclusively at solar noon when industrial and residential tariff rates are lowest. East-West 90° Vertical Bifacial arrays capture low-angle morning (06:30–10:00) and late-afternoon (15:00–18:30) solar vectors, aligning generation directly with peak municipal demand windows.',
    },
    {
      index: '02',
      icon: <Droplets className="h-6 w-6 text-brand-gold" strokeWidth={1.5} />,
      title: 'Zero Productive Land Loss & Passive Soiling Resistance',
      metric: '90° Self-Shedding Geometry',
      description:
        'Vert-X Walls mount vertically along boundary lines and agricultural paddocks with 600mm to 1.2m+ ground clearance. Livestock and farm implements operate freely beneath and alongside the array while gravity naturally prevents dust accumulation in high-particulate zones.',
    },
    {
      index: '03',
      icon: <Zap className="h-6 w-6 text-brand-gold" strokeWidth={1.5} />,
      title: 'Sub-10 kg/m² Structural Roof Engineering',
      metric: 'Zero Ballast · Zero Penetrations',
      description:
        'Older commercial warehouses and retail centers frequently lack the structural reserve for 25 kg/m² ballasted arrays. Carter Vert-X Industrial racking weighs under 10 kg/m² and bonds chemically via Sika® structural adhesive—preserving roof waterproofing warranties intact.',
    },
  ];

  return (
    <section
      id="benefits"
      className="bg-brand-ivory dark:bg-brand-black py-24 md:py-32 border-b border-brand-charcoal/10 dark:border-brand-sage/10 transition-colors duration-500 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch mb-20">
          <MotionDiv
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-brand-gold-dark dark:text-brand-gold mb-4">
                01 · WHY VERTICAL BIFACIAL SOLAR
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-brand-forest dark:text-brand-ivory mb-6 leading-[1.12]">
                Precision Engineering for <span className="text-brand-gold-dark dark:text-brand-gold italic">South African Infrastructure.</span>
              </h2>
              <div className="h-px w-20 bg-brand-gold mb-8" />
              <p className="text-base sm:text-lg text-brand-charcoal/85 dark:text-brand-sage/90 font-light leading-relaxed mb-6">
                South African enterprises, logistics facilities, and agricultural estates require resilient power generation during morning ramp-up and late-afternoon peak tariffs—without sacrificing productive arable land or overloading lightweight industrial steel roofs.
              </p>
              <p className="text-base sm:text-lg text-brand-charcoal/85 dark:text-brand-sage/90 font-light leading-relaxed mb-8">
                <strong className="font-semibold text-brand-forest dark:text-brand-ivory">Carter Energy Solutions (Pty) Ltd</strong>—operating digitally as <strong className="font-semibold text-brand-forest dark:text-brand-ivory">Cenergys</strong>—engineers both high-density <strong className="font-semibold text-brand-forest dark:text-brand-ivory">Standard Tilted Monocrystalline arrays</strong> and South Africa&apos;s signature <strong className="font-semibold text-brand-forest dark:text-brand-ivory">Vert-X 90° Vertical Bifacial systems</strong>. Every system is sized according to verified roof load limits, azimuth orientation, and surface albedo.
              </p>
            </div>

            {/* Verified Engineering Accreditations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-brand-charcoal/10 dark:border-brand-sage/15">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-brand-forest/5 dark:bg-brand-charcoal rounded-sm border border-brand-charcoal/10 dark:border-brand-sage/15 shrink-0">
                  <HardHat className="w-5 h-5 text-brand-gold-dark dark:text-brand-gold" />
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold text-brand-forest dark:text-brand-ivory uppercase tracking-wider">
                    CETA Accredited
                  </div>
                  <div className="text-xs text-brand-charcoal/70 dark:text-brand-sage/75 mt-0.5 tabular-nums">
                    Cert No: PSBE/ROY/20/100 · ACC/20/07/00029
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-brand-forest/5 dark:bg-brand-charcoal rounded-sm border border-brand-charcoal/10 dark:border-brand-sage/15 shrink-0">
                  <ShieldCheck className="w-5 h-5 text-brand-gold-dark dark:text-brand-gold" />
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold text-brand-forest dark:text-brand-ivory uppercase tracking-wider">
                    SANS 10142-1 Compliant
                  </div>
                  <div className="text-xs text-brand-charcoal/70 dark:text-brand-sage/75 mt-0.5">
                    ECB Registered Electrical COC Issued
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>

          {/* Right Column: Interactive Dual-Peak Irradiance & Albedo Diagram + Approved Visual */}
          <MotionDiv
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-between gap-6"
          >
            {/* Interactive Technical Diagram: Dual-Peak Generation Profile */}
            <div className="bg-white dark:bg-brand-charcoal p-6 sm:p-8 rounded-sm border border-brand-charcoal/10 dark:border-brand-sage/15 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-brand-charcoal/10 dark:border-brand-sage/10">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-brand-gold-dark dark:text-brand-gold">
                    PHOTOVOLTAIC GENERATION PROFILE
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-brand-forest dark:text-brand-ivory mt-0.5">
                    90° Bifacial East-West vs. Conventional Tilted Array
                  </h3>
                </div>
                {/* Interactive Filter Control */}
                <div className="inline-flex p-1 bg-brand-ivory dark:bg-brand-black rounded-sm border border-brand-charcoal/10 dark:border-brand-sage/15 shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveCurve('both')}
                    className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      activeCurve === 'both'
                        ? 'bg-brand-gold text-brand-forest font-semibold'
                        : 'text-brand-charcoal/70 dark:text-brand-sage/75 hover:text-brand-forest dark:hover:text-brand-ivory'
                    }`}
                  >
                    Compare
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCurve('vertx')}
                    className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      activeCurve === 'vertx'
                        ? 'bg-brand-gold text-brand-forest font-semibold'
                        : 'text-brand-charcoal/70 dark:text-brand-sage/75 hover:text-brand-forest dark:hover:text-brand-ivory'
                    }`}
                  >
                    Vert-X 90°
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCurve('conventional')}
                    className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      activeCurve === 'conventional'
                        ? 'bg-brand-gold text-brand-forest font-semibold'
                        : 'text-brand-charcoal/70 dark:text-brand-sage/75 hover:text-brand-forest dark:hover:text-brand-ivory'
                    }`}
                  >
                    Standard 25°
                  </button>
                </div>
              </div>

              {/* SVG Engineering Curve */}
              <div className="relative w-full aspect-[16/8] min-h-[175px]">
                <svg viewBox="0 0 500 200" className="w-full h-full overflow-visible" aria-label="Solar generation curve comparing Vertical Bifacial AM and PM peaks against conventional midday peak">
                  <defs>
                    <linearGradient id="vertxGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D6BE82" stopOpacity="0.32" />
                      <stop offset="100%" stopColor="#D6BE82" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="convGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#BBC9C1" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#BBC9C1" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Reference Lines */}
                  <line x1="40" y1="30" x2="480" y2="30" stroke="currentColor" className="text-brand-charcoal/10 dark:text-brand-sage/10" strokeDasharray="3 3" />
                  <line x1="40" y1="95" x2="480" y2="95" stroke="currentColor" className="text-brand-charcoal/10 dark:text-brand-sage/10" strokeDasharray="3 3" />
                  <line x1="40" y1="160" x2="480" y2="160" stroke="currentColor" className="text-brand-charcoal/20 dark:text-brand-sage/25" />

                  {/* Peak Tariff Shaded Zones (AM & PM) */}
                  <rect x="85" y="20" width="85" height="140" fill="#D6BE82" fillOpacity="0.06" />
                  <rect x="345" y="20" width="90" height="140" fill="#D6BE82" fillOpacity="0.06" />
                  <text x="127" y="16" textAnchor="middle" className="fill-brand-gold-dark dark:fill-brand-gold text-[8px] font-mono uppercase">
                    AM Peak Demand
                  </text>
                  <text x="390" y="16" textAnchor="middle" className="fill-brand-gold-dark dark:fill-brand-gold text-[8px] font-mono uppercase">
                    PM Peak Demand
                  </text>

                  {/* Conventional Single-Peak Curve */}
                  {(activeCurve === 'both' || activeCurve === 'conventional') && (
                    <g>
                      <path
                        d="M 55 160 C 140 160, 195 32, 260 32 C 325 32, 380 160, 465 160 L 465 160 L 55 160 Z"
                        fill="url(#convGrad)"
                      />
                      <path
                        d="M 55 160 C 140 160, 195 32, 260 32 C 325 32, 380 160, 465 160"
                        fill="none"
                        stroke="#94A3B8"
                        strokeWidth="2"
                        strokeDasharray="5 4"
                      />
                    </g>
                  )}

                  {/* Vert-X Dual-Peak Curve (East-West 90 deg Bifacial) */}
                  {(activeCurve === 'both' || activeCurve === 'vertx') && (
                    <g>
                      <path
                        d="M 50 160 C 80 140, 105 42, 138 42 C 185 42, 220 112, 260 112 C 300 112, 335 40, 382 40 C 415 40, 440 140, 470 160 L 470 160 L 50 160 Z"
                        fill="url(#vertxGrad)"
                      />
                      <path
                        d="M 50 160 C 80 140, 105 42, 138 42 C 185 42, 220 112, 260 112 C 300 112, 335 40, 382 40 C 415 40, 440 140, 470 160"
                        fill="none"
                        stroke="#D6BE82"
                        strokeWidth="3"
                      />
                      <circle cx="138" cy="42" r="4" fill="#D6BE82" />
                      <circle cx="382" cy="40" r="4" fill="#D6BE82" />
                    </g>
                  )}

                  {/* Time Axis Labels */}
                  <text x="60" y="180" textAnchor="middle" className="fill-brand-charcoal/60 dark:fill-brand-sage/60 text-[9px] font-mono">06:00</text>
                  <text x="140" y="180" textAnchor="middle" className="fill-brand-charcoal/80 dark:fill-brand-ivory text-[9px] font-mono font-semibold">08:30</text>
                  <text x="260" y="180" textAnchor="middle" className="fill-brand-charcoal/60 dark:fill-brand-sage/60 text-[9px] font-mono">12:00</text>
                  <text x="382" y="180" textAnchor="middle" className="fill-brand-charcoal/80 dark:fill-brand-ivory text-[9px] font-mono font-semibold">16:30</text>
                  <text x="460" y="180" textAnchor="middle" className="fill-brand-charcoal/60 dark:fill-brand-sage/60 text-[9px] font-mono">18:30</text>
                </svg>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 text-xs text-brand-charcoal/70 dark:text-brand-sage/75 border-t border-brand-charcoal/10 dark:border-brand-sage/10">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-2 font-mono">
                    <span className="w-3 h-0.5 bg-brand-gold inline-block" />
                    Vert-X 90° Bifacial (East-West)
                  </span>
                  <span className="inline-flex items-center gap-2 font-mono">
                    <span className="w-3 h-0.5 bg-slate-400 inline-block border-b border-dashed" />
                    Conventional Tilted (Noon Peak)
                  </span>
                </div>
                <span className="text-[11px] italic">
                  *Illustrative irradiance profile; site yield depends on azimuth &amp; surface albedo.
                </span>
              </div>
            </div>

            {/* 4K UHD Engineering Visual Assets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-[16/10] rounded-sm overflow-hidden border border-brand-charcoal/10 dark:border-brand-sage/15 relative group bg-brand-forest">
                {!imgFailed ? (
                  <img
                    src="images/vertx-dual-peak-4k.jpg"
                    alt="4K close-up of 90-degree vertical N-Type bifacial solar cells and Sika chemical-bond rail"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    onError={() => setImgFailed(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-brand-forest to-brand-charcoal" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4 text-brand-ivory">
                  <p className="text-[10px] font-mono text-brand-gold uppercase tracking-widest">
                    4K DETAIL · SIKA® CHEMICAL-BOND RAIL
                  </p>
                  <p className="font-serif text-base italic mt-0.5">
                    Double-Glass 90° East-West Bifacial Array
                  </p>
                </div>
              </div>

              <div className="aspect-[16/10] rounded-sm overflow-hidden border border-brand-charcoal/10 dark:border-brand-sage/15 relative group bg-brand-forest">
                <img
                  src="images/vertx-agri-fence-4k.jpg"
                  alt="4K view of Carter Vert-X Walls agrivoltaic perimeter fence with grazing livestock"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4 text-brand-ivory">
                  <p className="text-[10px] font-mono text-brand-gold uppercase tracking-widest">
                    4K DETAIL · ZERO ARABLE LAND LOSS
                  </p>
                  <p className="font-serif text-base italic mt-0.5">
                    Elevated 1.2m+ Agrivoltaic Grazing Clearance
                  </p>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>

        {/* 3 Architectural Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signals.map((signal, index) => (
            <MotionDiv
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              key={signal.index}
              className="p-8 rounded-sm border border-brand-charcoal/10 dark:border-brand-sage/15 bg-white dark:bg-brand-charcoal hover:border-brand-gold/60 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-brand-gold-dark dark:text-brand-gold tracking-widest">
                    {signal.index} · {signal.metric}
                  </span>
                  {signal.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-brand-forest dark:text-brand-ivory mb-3">
                  {signal.title}
                </h3>
                <p className="text-sm text-brand-charcoal/80 dark:text-brand-sage/85 leading-relaxed font-light">
                  {signal.description}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};