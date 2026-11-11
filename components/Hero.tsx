import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, FileText, Calendar, Sun, Moon } from 'lucide-react';
import { m as motion, AnimatePresence, useInView } from 'framer-motion';
import { optimizeImage } from '../src/utils/image';

const MotionDiv = motion.div as any;
const MotionH1 = motion.h1 as any;
const MotionP = motion.p as any;

interface SlideData {
  id: number;
  kicker: string;
  title: React.ReactNode;
  description: string;
  cta: string;
  secondaryCta: string;
  image: string;
  imageAlt: string;
}

const SLIDES: SlideData[] = [
  {
    id: 0,
    kicker: 'CENERGYS · CARTER ENERGY SOLUTIONS (PTY) LTD · SOUTH AFRICA',
    title: (
      <span>
        The Future of Energy Has a <span className="text-gold-gradient italic">New Dimension.</span>
      </span>
    ),
    description:
      'Precision vertical bifacial solar architecture and high-yield monocrystalline engineering. Deploy Carter Vert-X Systems and Vert-X Walls designed for South African industry, commercial estates, and agriculture.',
    cta: 'Request Engineering Proposal',
    secondaryCta: 'Explore Vert-X Systems',
    image: '/images/vertx-hero-perimeter-4k.jpg',
    imageAlt: '4K architectural view of Carter Energy Solutions Vert-X vertical solar perimeter installation at sunrise',
  },
  {
    id: 1,
    kicker: 'VERT-X WALLS · AGRIVOLTAIC PERIMETER INFRASTRUCTURE',
    title: (
      <span>
        Zero Productive <span className="text-gold-gradient italic">Land Loss.</span>
      </span>
    ),
    description:
      'Vert-X Walls integrate 90° vertical N-Type bifacial arrays directly along farm boundaries and perimeter fence lines—preserving 100% of grazing and arable land while harvesting dual morning and afternoon peaks.',
    cta: 'Explore Vert-X Walls',
    secondaryCta: 'Calculate Site Yield',
    image: '/images/vertx-agri-fence-4k.jpg',
    imageAlt: '4K view of Carter Vert-X Walls vertical bifacial solar fence on South African cattle farm',
  },
  {
    id: 2,
    kicker: 'VERT-X INDUSTRIAL · LIGHTWEIGHT CHEMICAL-BOND RACKING',
    title: (
      <span>
        Engineered for <span className="text-gold-gradient italic">Load-Limited Roofs.</span>
      </span>
    ),
    description:
      'Ultra-lightweight aerodynamic vertical racking (<10 kg/m²) chemically bonded with Sika® structural adhesive. Zero concrete ballast and zero roof membrane penetrations for industrial warehouses and malls.',
    cta: 'Inspect Technical Datasheet',
    secondaryCta: 'Download Compliance Pack',
    image: '/images/vertx-warehouse-roof-4k.jpg',
    imageAlt: '4K view of Carter Vert-X Industrial lightweight vertical solar racking on warehouse roof',
  },
  {
    id: 3,
    kicker: 'VERT-X ESTATE · ARCHITECTURAL GREEN ROOFS & COMMERCIAL PRECINCTS',
    title: (
      <span>
        Architectural Harmony Meets <span className="text-gold-gradient italic">Peak Yield.</span>
      </span>
    ),
    description:
      'Matte-black anodized vertical bifacial arrays integrated into indigenous living green roofs and luxury estate boundary walls—combining evaporative botanical cooling with morning and evening peak generation.',
    cta: 'Request Site Assessment',
    secondaryCta: 'Explore Vert-X Systems',
    image: '/images/vertx-green-roof-4k.jpg',
    imageAlt: '4K view of Carter Vert-X Estate vertical solar array integrated into an indigenous South African green roof',
  },
];

interface HeroProps {
  onOpenTechSpecs: () => void;
  onBookAppointment?: () => void;
  isDark?: boolean;
  toggleTheme?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenTechSpecs,
  onBookAppointment,
  isDark,
  toggleTheme,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: '0px 0px -200px 0px' });

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [isInView]);

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handlePrimaryCta = () => {
    if (currentSlide === 0) {
      scrollToElement('get-quote');
    } else if (currentSlide === 1) {
      scrollToElement('service-pillars');
    } else {
      onOpenTechSpecs();
    }
  };

  const handleSecondaryCta = () => {
    if (currentSlide === 0) {
      scrollToElement('service-pillars');
    } else if (currentSlide === 1) {
      scrollToElement('calculator');
    } else {
      scrollToElement('tenders');
    }
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-brand-black text-brand-ivory"
    >
      {/* Cinematic Architectural Background */}
      <AnimatePresence mode="wait">
        <MotionDiv
          key={`bg-${currentSlide}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1 }}
          className="absolute inset-0 z-0"
        >
          {!failedImages[currentSlide] ? (
            <img
              src={SLIDES[currentSlide].image}
              alt={SLIDES[currentSlide].imageAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center opacity-50"
              loading={currentSlide === 0 ? 'eager' : 'lazy'}
              decoding="async"
              // @ts-ignore
              fetchpriority={currentSlide === 0 ? 'high' : 'auto'}
              onError={() =>
                setFailedImages((prev) => ({
                  ...prev,
                  [currentSlide]: true,
                }))
              }
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-brand-forest via-brand-charcoal to-brand-black" />
          )}

          {/* Measured Contrast Scrim for 4.5:1+ Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/75 to-brand-forest/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,190,130,0.12)_0%,transparent_60%)] pointer-events-none" />
        </MotionDiv>
      </AnimatePresence>

      {/* Main Editorial Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <MotionDiv
              key={currentSlide}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Unboxed Editorial Kicker (Zero-Pill Discipline) */}
              <div className="text-xs font-mono uppercase tracking-[0.22em] text-brand-gold mb-6 flex flex-wrap items-center gap-2">
                <span>{SLIDES[currentSlide].kicker}</span>
              </div>

              <MotionH1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-semibold text-brand-ivory leading-[1.08] tracking-tight mb-8 max-w-3xl">
                {SLIDES[currentSlide].title}
              </MotionH1>

              <MotionP className="text-base sm:text-xl text-brand-sage/95 mb-10 leading-relaxed max-w-2xl font-light">
                {SLIDES[currentSlide].description}
              </MotionP>

              {/* Action Row */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handlePrimaryCta}
                  className="inline-flex items-center justify-center gap-3 bg-brand-gold hover:bg-brand-gold-light text-brand-forest px-8 py-4 rounded-sm font-semibold text-xs uppercase tracking-widest transition-all min-h-[52px] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>{SLIDES[currentSlide].cta}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  onClick={handleSecondaryCta}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-sm font-semibold text-xs uppercase tracking-widest text-brand-ivory border border-brand-sage/35 hover:border-brand-gold hover:text-brand-gold transition-colors min-h-[52px] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <FileText className="w-4 h-4" aria-hidden="true" />
                  <span>{SLIDES[currentSlide].secondaryCta}</span>
                </button>

                {onBookAppointment && (
                  <button
                    onClick={onBookAppointment}
                    className="inline-flex items-center justify-center gap-2 px-5 py-4 text-xs uppercase tracking-widest text-brand-sage hover:text-brand-gold transition-colors min-h-[52px] whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-brand-gold" aria-hidden="true" />
                    <span>Schedule Consultation</span>
                  </button>
                )}
              </div>
            </MotionDiv>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Full-Width Architectural Proof & Controls Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 border-t border-brand-sage/15">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Verified Engineering Specifications Strip (Tabular Numerals, Unboxed) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-10 flex-grow">
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-semibold text-brand-gold tabular-nums">
                &lt; 10 kg/m²
              </div>
              <div className="text-xs text-brand-sage/80 mt-0.5">
                Vert-X Industrial Roof Load
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-semibold text-brand-ivory tabular-nums">
                90° Bifacial
              </div>
              <div className="text-xs text-brand-sage/80 mt-0.5">
                Dual AM &amp; PM Peak Harvest
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-semibold text-brand-ivory tabular-nums">
                Level 1 B-BBEE
              </div>
              <div className="text-xs text-brand-sage/80 mt-0.5">
                135% Procurement Recognition
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-semibold text-brand-gold tabular-nums">
                100% 12B
              </div>
              <div className="text-xs text-brand-sage/80 mt-0.5">
                SARS Year-1 Capital Allowance
              </div>
            </div>
          </div>

          {/* Slide Controls & Theme Switcher */}
          <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
            {toggleTheme && (
              <button
                onClick={toggleTheme}
                className="px-3.5 py-2.5 rounded-sm border border-brand-sage/20 hover:border-brand-gold text-brand-sage hover:text-brand-gold text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-colors min-h-[44px] whitespace-nowrap shrink-0 cursor-pointer"
                aria-label={isDark ? 'Switch to Warm Ivory light theme' : 'Switch to Deep Forest dark theme'}
              >
                {isDark ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Ivory Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Forest Mode</span>
                  </>
                )}
              </button>
            )}

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-sm border border-brand-sage/20 hover:border-brand-gold text-brand-ivory/70 hover:text-brand-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-1.5 px-2">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Select slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentSlide
                        ? 'w-7 bg-brand-gold'
                        : 'w-2 bg-brand-sage/30 hover:bg-brand-gold/60'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-2.5 rounded-sm border border-brand-sage/20 hover:border-brand-gold text-brand-ivory/70 hover:text-brand-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};