import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShieldCheck, Building2, Sprout, Factory, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { m as motion, AnimatePresence } from 'framer-motion';
import { optimizeImage } from '../src/utils/image';

const MotionDiv = motion.div as any;

interface EngineeringProfile {
  id: string;
  category: string;
  title: string;
  locationOrEntity: string;
  verificationBadge: string;
  summary: string;
  specifications: { label: string; value: string }[];
  imageUrl: string;
}

const VERIFIED_PROFILES: EngineeringProfile[] = [
  {
    id: 'agrivoltaic-profile',
    category: 'APPLICATION ARCHITECTURE 01',
    title: 'Vert-X Walls — Agrivoltaic Perimeter & Solar VFD Borehole Systems',
    locationOrEntity: 'Gauteng · Vaal Region · Kalahari Agricultural Belt',
    verificationBadge: 'Verified Engineering Specification',
    summary:
      'Engineered for commercial agriculture and livestock perimeters. Vertical 90° bifacial arrays integrate directly along farm boundaries and irrigation lines with 600 mm to 1.2 m+ ground clearance—preserving 100% of grazing and arable land while driving 0.5 HP to 1.5 HP+ Three-Phase Solar VFD borehole pumps.',
    specifications: [
      { label: 'Arable Land Loss', value: '0% (Boundary-Integrated)' },
      { label: 'Ground Clearance', value: '600 mm – 1.2 m+ Livestock Safe' },
      { label: 'Irrigation Drive', value: '0.5 HP – 1.5 HP+ Solar VFD' },
      { label: 'Soiling Mitigation', value: 'Gravity-Assisted Dry Shedding' }
    ],
    imageUrl: '/images/vertx-industrial-roof.webp'
  },
  {
    id: 'industrial-roof-profile',
    category: 'APPLICATION ARCHITECTURE 02',
    title: 'Vert-X Industrial — Load-Limited Warehouse & Logistics Roofs',
    locationOrEntity: 'Commercial & Industrial Corridors, South Africa',
    verificationBadge: 'Verified Structural Specification',
    summary:
      'Designed specifically for South African steel IBR and Klip-Lok factory roofs that cannot carry standard 25 kg/m² ballasted arrays. Using an ultra-lightweight (< 10 kg/m²) aerodynamic sub-frame and Sika® structural chemical bonding, the array eliminates roof penetrations while capturing morning and late-afternoon peak tariffs.',
    specifications: [
      { label: 'Distributed Dead Load', value: '< 10 kg/m² (Ultra-Lightweight)' },
      { label: 'Roof Attachment', value: 'Sika® Chemical Bond / Non-Penetrating' },
      { label: 'Wind Load Rating', value: 'Up to 160 km/h (Aerodynamic)' },
      { label: 'Capital Allowance', value: '100% SARS Section 12B (< 1 MW)' }
    ],
    imageUrl: '/images/vertx-warehouse-roof.jpg'
  },
  {
    id: 'commercial-hybrid-profile',
    category: 'APPLICATION ARCHITECTURE 03',
    title: 'Vert-X Estate & Commercial — Dual-Peak Hybrid Storage Architecture',
    locationOrEntity: 'Residential Estates & Commercial Precincts, SA',
    verificationBadge: 'SANS 10142-1 Compliant Architecture',
    summary:
      'Combines East-West vertical bifacial boundary walls or high-efficiency monocrystalline roof arrays with LiFePO4 battery storage (5 kWh to 60 kWh+). Engineered to offset expensive morning and evening Time-of-Use (TOU) utility peaks while delivering seamless sub-10ms switchover during grid interruptions.',
    specifications: [
      { label: 'Generation Profile', value: 'Dual-Peak (Morning & Evening)' },
      { label: 'Storage Chemistry', value: 'Tier-1 LiFePO4 (6,000+ Cycles)' },
      { label: 'Safety Governance', value: 'CETA ID: PSBE/ROY/20/100' },
      { label: 'Electrical Sign-Off', value: 'SANS 10142-1 COC Issued' }
    ],
    imageUrl: '/images/vertx-commercial-estate.jpg'
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % VERIFIED_PROFILES.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + VERIFIED_PROFILES.length) % VERIFIED_PROFILES.length);
  };

  const activeProfile = VERIFIED_PROFILES[currentIndex];

  const getCategoryIcon = (id: string) => {
    if (id === 'agrivoltaic-profile') return <Sprout className="w-5 h-5 text-brand-gold" />;
    if (id === 'industrial-roof-profile') return <Factory className="w-5 h-5 text-brand-gold" />;
    return <Building2 className="w-5 h-5 text-brand-gold" />;
  };

  return (
    <section
      id="projects"
      className="py-24 border-t dark:border-white/10 border-brand-forest/10 transition-colors duration-500 dark:bg-brand-black bg-brand-ivory relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 border-b border-brand-forest/10 dark:border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-gold-dark dark:text-brand-gold block mb-3">
              FIELD ARCHITECTURE &amp; DEPLOYMENT PROFILES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium dark:text-brand-ivory text-brand-forest tracking-tight">
              Engineered Deployment Configurations
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-brand-sage max-w-md font-light leading-relaxed">
            Explore documented structural and electrical configurations for agricultural perimeters, load-limited industrial roofs, and commercial hybrid estates.
          </p>
        </div>

        {/* Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {VERIFIED_PROFILES.map((profile, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={profile.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`text-left p-5 rounded-sm border transition-all ${
                  isActive
                    ? 'bg-brand-forest text-brand-ivory border-brand-gold shadow-lg'
                    : 'bg-white dark:bg-brand-charcoal/50 text-slate-700 dark:text-brand-sage border-brand-forest/10 dark:border-white/10 hover:border-brand-gold/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-gold">
                    {profile.category}
                  </span>
                  {getCategoryIcon(profile.id)}
                </div>
                <p className={`font-serif text-base font-medium line-clamp-1 ${isActive ? 'text-brand-ivory' : 'text-brand-forest dark:text-white'}`}>
                  {profile.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Main Showcase Card */}
        <div className="relative bg-white dark:bg-brand-charcoal/60 border border-brand-forest/10 dark:border-white/10 rounded-sm overflow-hidden shadow-xl">
          <AnimatePresence mode="wait">
            <MotionDiv
              key={activeProfile.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Visual Column */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[440px] bg-brand-forest overflow-hidden">
                {!failedImages[activeProfile.id] ? (
                  <img
                    src={activeProfile.imageUrl}
                    alt={activeProfile.title}
                    className="w-full h-full object-cover opacity-90"
                    loading="lazy"
                    onError={() =>
                      setFailedImages((prev) => ({ ...prev, [activeProfile.id]: true }))
                    }
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-brand-forest to-brand-charcoal flex items-center justify-center p-8 text-brand-ivory font-serif text-xl text-center">
                    {activeProfile.title}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-gold mb-2">
                    <ShieldCheck className="w-4 h-4" />
                    {activeProfile.verificationBadge}
                  </div>
                  <p className="text-sm text-brand-ivory/90 font-medium">
                    {activeProfile.locationOrEntity}
                  </p>
                </div>
              </div>

              {/* Specification & Narrative Column */}
              <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold-dark dark:text-brand-gold">
                      {activeProfile.category}
                    </span>
                    <span className="font-mono text-xs text-slate-400 dark:text-brand-sage/60 tabular-nums">
                      0{currentIndex + 1} / 0{VERIFIED_PROFILES.length}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif font-medium text-brand-forest dark:text-brand-ivory mb-4 leading-snug">
                    {activeProfile.title}
                  </h3>

                  <p className="text-slate-600 dark:text-brand-sage font-light leading-relaxed mb-8 text-base">
                    {activeProfile.summary}
                  </p>

                  {/* Spec Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-brand-forest/10 dark:border-white/10">
                    {activeProfile.specifications.map((spec) => (
                      <div
                        key={spec.label}
                        className="p-3.5 bg-brand-ivory/60 dark:bg-brand-black/50 border border-brand-forest/10 dark:border-white/5 rounded-sm"
                      >
                        <span className="block font-mono text-[10px] uppercase tracking-widest text-slate-500 dark:text-brand-sage/70 mb-1">
                          {spec.label}
                        </span>
                        <span className="font-mono text-xs sm:text-sm font-semibold text-brand-forest dark:text-brand-ivory flex items-center gap-1.5 tabular-nums">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="mt-8 pt-6 border-t border-brand-forest/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <a
                      href="#get-quote"
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-brand-forest dark:text-brand-gold hover:underline"
                    >
                      Request Site-Specific Engineering Pack
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button
                      type="button"
                      onClick={prev}
                      className="p-2.5 rounded-sm border border-brand-forest/15 dark:border-white/15 text-brand-forest dark:text-brand-ivory hover:border-brand-gold hover:text-brand-gold transition-colors min-w-[42px] min-h-[42px] flex items-center justify-center"
                      aria-label="Previous profile"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      className="p-2.5 rounded-sm border border-brand-forest/15 dark:border-white/15 text-brand-forest dark:text-brand-ivory hover:border-brand-gold hover:text-brand-gold transition-colors min-w-[42px] min-h-[42px] flex items-center justify-center"
                      aria-label="Next profile"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};