import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, Variants, useInView } from 'framer-motion';

interface SlideData {
  id: number;
  title: React.ReactNode;
  description: string;
  cta: string;
  image: string;
}

const SLIDES: SlideData[] = [
  {
    id: 0,
    title: <span>Power at the <span className="text-gold-gradient italic">Edge.</span></span>,
    description: "The future of solar is the Carter Vert-X System. Unlock the potential of weak roofs and farmland with South Africa's first high-yield Vertical Bifacial Technology.",
    cta: "Book Vertical Audit",
    // Optimized via wsrv.nl
    image: "https://wsrv.nl/?url=https://i.ibb.co/F4H29r8L/Gemini-Generated-Image-ask7jyask7jyask7-1.png&w=1200&output=webp&q=80"
  },
  {
    id: 1,
    title: <span>Zero <span className="text-gold-gradient italic">Land Loss.</span></span>,
    description: "Vert-X Walls allow for grazing, crops, and wind protection while generating power. Turn your fences into power plants.",
    cta: "Explore Vert-X Walls",
    image: "https://wsrv.nl/?url=https://i.ibb.co/7xh2RMMY/Gemini-Generated-Image-xhsictxhsictxhsi.png&w=1200&output=webp&q=80"
  },
  {
    id: 2,
    title: <span>The Solution for <span className="text-gold-gradient italic">Weak Roofs.</span></span>,
    description: "Ultra-lightweight Vert-X racking (<10kg/m²) for industrial sites. No ballast required. Aerodynamic and bond-mounted.",
    cta: "Industrial Specs",
    image: "https://wsrv.nl/?url=https://i.ibb.co/j98GM2hY/Gemini-Generated-Image-vapyvdvapyvdvapy.png&w=1200&output=webp&q=80"
  }
];

interface HeroProps {
  onOpenTechSpecs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTechSpecs }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  
  // Ref for intersection observer to pause carousel
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "0px 0px -200px 0px" });

  useEffect(() => {
    // Only run the timer if the hero is in view
    if (!isInView) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isInView]);

  // Primary Action Logic
  const handlePrimaryCta = () => {
    if (currentSlide === 0) {
        // Book Vertical Audit -> Scroll to Quote/Form
        const element = document.getElementById('get-quote');
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    } else if (currentSlide === 1) {
        // Explore Vert-X Walls -> Scroll to Service Pillars
        const element = document.getElementById('service-pillars');
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    } else if (currentSlide === 2) {
        // Industrial Specs -> Open Tech Specs Modal
        onOpenTechSpecs();
    }
  };

  const scrollToCalculator = () => {
    const element = document.getElementById('calculator');
    if (element) {
        // Offset for header
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
    }
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-brand-black">
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
            key={`bg-${currentSlide}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={{ y }}
            className="absolute inset-0 z-0"
        >
            <img 
                src={SLIDES[currentSlide].image} 
                alt="Vertical Solar Architecture" 
                className="w-full h-full object-cover opacity-60 dark:opacity-50"
                loading={currentSlide === 0 ? "eager" : "lazy"}
                decoding="async"
                // @ts-ignore
                fetchpriority={currentSlide === 0 ? "high" : "auto"}
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2070&auto=format&fit=crop";
                }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white dark:from-brand-black/30 dark:via-brand-black/70 dark:to-brand-black transition-colors duration-500"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold opacity-10 blur-[150px] rounded-full"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
            
          <AnimatePresence mode="wait">
             <motion.div 
               key={currentSlide}
               initial="hidden"
               animate="visible"
               exit="exit"
               variants={containerVariants}
             >
                <motion.div 
                  variants={childVariants}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold-dark dark:text-brand-gold text-sm font-medium tracking-wide mb-8"
                >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                </span>
                SOUTH AFRICA'S FIRST VERTICAL INSTALLERS
                </motion.div>
                
                <motion.h1 
                  variants={childVariants}
                  className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium dark:text-white text-brand-black leading-tight mb-8 min-h-[1.2em]"
                >
                    {SLIDES[currentSlide].title}
                </motion.h1>
                
                <motion.p 
                  variants={childVariants}
                  className="text-lg md:text-2xl dark:text-slate-300 text-slate-700 mb-12 leading-relaxed max-w-2xl mx-auto font-light min-h-[4em] md:min-h-[3em]"
                >
                    {SLIDES[currentSlide].description}
                </motion.p>
                
                <motion.div 
                  variants={childVariants}
                  className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                    <button 
                        onClick={handlePrimaryCta}
                        className="group relative inline-flex justify-center items-center gap-3 bg-brand-gold text-brand-black px-10 py-4 rounded-sm font-semibold text-lg overflow-hidden transition-all hover:pr-12 min-h-[56px]"
                    >
                        <span className="relative z-10">{SLIDES[currentSlide].cta}</span>
                        {currentSlide === 2 ? (
                            // Use a document/list icon for specs
                             <ArrowRight className="h-5 w-5 absolute right-4 opacity-0 group-hover:opacity-100 group-hover:right-6 transition-all duration-300" />
                        ) : (
                             <ArrowRight className="h-5 w-5 absolute right-4 opacity-0 group-hover:opacity-100 group-hover:right-6 transition-all duration-300" />
                        )}
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                    <button 
                        onClick={scrollToCalculator}
                        className="group inline-flex justify-center items-center gap-2 px-10 py-4 rounded-sm font-semibold text-lg dark:text-white text-brand-black border dark:border-white/20 border-brand-black/20 hover:bg-brand-black/5 dark:hover:bg-white/5 transition-all min-h-[56px]"
                    >
                        Yield Report
                    </button>
                </motion.div>
             </motion.div>
          </AnimatePresence>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex justify-center items-center gap-6"
          >
             <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full dark:border-brand-black border-white border-2 overflow-hidden shadow-lg">
                   <img 
                    src={`https://picsum.photos/seed/${i + 42}/100`} 
                    alt={`Satisfied customer ${i}`} 
                    loading="lazy"
                    className="w-full h-full object-cover" 
                   />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex text-brand-gold text-xs">★★★★★</div>
              <p className="text-sm dark:text-slate-400 text-slate-600">Experts in <span className="dark:text-white text-brand-black font-semibold">Industrial, Commercial & Farms</span></p>
            </div>
          </motion.div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
            <button 
                onClick={prevSlide} 
                className="p-3 rounded-full border border-white/10 hover:bg-white/10 text-white/50 hover:text-white transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Previous Slide"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
                {SLIDES.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            idx === currentSlide ? 'w-8 bg-brand-gold' : 'w-2 bg-white/20 hover:bg-brand-gold/50'
                        }`}
                    />
                ))}
            </div>
            <button 
                onClick={nextSlide} 
                className="p-3 rounded-full border border-white/10 hover:bg-white/10 text-white/50 hover:text-white transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Next Slide"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
      </div>
    </section>
  );
};