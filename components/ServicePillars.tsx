import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductPillar {
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  imageUrl: string;
}

const PRODUCTS: ProductPillar[] = [
    {
      title: "Carter Vert-X Walls",
      subtitle: "The Solar Fence",
      description: "Turn your fences into power plants with our advanced Vert-X Walls. Livestock-friendly, tractor-safe, and zero land loss. Create micro-climates that reduce water evaporation for crops while generating bifacial power.",
      specs: ["Ground Clearance: 1.2m+", "Bifacial Gain: up to 30%", "Livestock Safe"],
      // Use the Agrivoltaics/Fence generated image
      imageUrl: "https://wsrv.nl/?url=https://i.ibb.co/7xh2RMMY/Gemini-Generated-Image-xhsictxhsictxhsi.png&w=1000&output=webp&q=80"
    },
    {
      title: "Carter Vert-X Industrial",
      subtitle: "For 'Unusable' Roofs",
      description: "The solution for old or weak industrial roofs. Our aerodynamic, lightweight racking weighs less than 10kg/m² and requires zero ballast. Bond-mounted for waterproofing integrity.",
      specs: ["Weight: <10kg/m²", "Mounting: Chemical Bond", "Wind Load: Hurricane Rated"],
      // Use the Industrial Roof generated image
      imageUrl: "https://wsrv.nl/?url=https://i.ibb.co/j98GM2hY/Gemini-Generated-Image-vapyvdvapyvdvapy.png&w=1000&output=webp&q=80"
    },
    {
      title: "Vert-X Estate",
      subtitle: "Aesthetic Green Roofs",
      description: "Aesthetic vertical solutions for green roofs that don't kill the plants. Maintain your garden space while generating power. Perfect for eco-estates requiring visual discretion.",
      specs: ["Finish: Matte Black", "Spacing: Customizable", "Plant Friendly"],
      // Use the General/Clean generated image for Estate aesthetics
      imageUrl: "https://wsrv.nl/?url=https://i.ibb.co/GfWMr0JQ/Gemini-Generated-Image-9c3aj9c3aj9c3aj9.png&w=1000&output=webp&q=80"
    }
];

interface ServicePillarsProps {
  onOpenAgriSpecs?: () => void;
  onOpenTechSpecs?: () => void;
}

export const ServicePillars: React.FC<ServicePillarsProps> = ({ onOpenAgriSpecs, onOpenTechSpecs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % PRODUCTS.length);
  };
  
  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  const handleAction = () => {
    if (currentIndex === 0 && onOpenAgriSpecs) {
        // Agri / Fence Slide -> Open Agri Kit Modal
        onOpenAgriSpecs();
    } else if (currentIndex === 1 && onOpenTechSpecs) {
        // Industrial Slide -> Open Tech Specs Modal
        onOpenTechSpecs();
    } else {
        // Default -> Scroll to Quote
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
    }
  };

  return (
    <section id="service-pillars" className="py-24 border-t dark:border-white/5 border-slate-100 transition-colors duration-500 dark:bg-brand-black bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 dark:text-white text-slate-900">Our Vertical Systems</h2>
           <div className="h-0.5 w-16 bg-brand-gold mx-auto mb-4"></div>
           <p className="text-slate-600 dark:text-slate-400 font-light">Engineered for the edge cases. Made in SA, Designed for Africa.</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
            <div className="relative min-h-[500px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Image Side */}
                  <div className="relative group rounded-sm overflow-hidden h-[400px] border border-brand-gold/20">
                     <div className="absolute inset-0 bg-brand-gold/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                     <img 
                       src={PRODUCTS[currentIndex].imageUrl} 
                       alt={PRODUCTS[currentIndex].title} 
                       className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                       loading="lazy"
                     />
                  </div>

                  {/* Content Side */}
                  <div className="flex flex-col text-left">
                     <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-2">{PRODUCTS[currentIndex].subtitle}</span>
                     <h3 className="text-4xl font-serif dark:text-white text-brand-black mb-6">{PRODUCTS[currentIndex].title}</h3>
                     <p className="text-lg dark:text-slate-300 text-slate-700 leading-relaxed mb-8 font-light">
                       {PRODUCTS[currentIndex].description}
                     </p>
                     
                     <div className="space-y-4 mb-10">
                        {PRODUCTS[currentIndex].specs.map((spec, idx) => (
                             <div key={idx} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
                                <span className="dark:text-slate-400 text-slate-700 font-mono text-sm uppercase">{spec}</span>
                             </div>
                        ))}
                     </div>

                     <button 
                       onClick={handleAction}
                       className="flex items-center gap-2 text-brand-gold-dark dark:text-brand-gold hover:text-brand-black dark:hover:text-white transition-colors group w-fit"
                     >
                        <span className="font-bold border-b border-brand-gold pb-0.5">
                            {currentIndex === 0 ? "View Kit Configurations" : (currentIndex === 1 ? "View Technical Specs" : "Request Specs")}
                        </span>
                        {currentIndex === 0 ? <BookOpen className="w-4 h-4" /> : <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />}
                     </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button 
                onClick={prev}
                aria-label="Previous Product"
                className="p-3 rounded-full border border-slate-200 dark:border-white/10 text-slate-400 hover:text-brand-gold hover:border-brand-gold transition-all dark:bg-brand-charcoal bg-white min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-2">
                {PRODUCTS.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to product ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-brand-gold' : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-brand-gold/50'
                    }`}
                />
                ))}
            </div>

            <button 
                onClick={next}
                aria-label="Next Product"
                className="p-3 rounded-full border border-slate-200 dark:border-white/10 text-slate-400 hover:text-brand-gold hover:border-brand-gold transition-all dark:bg-brand-charcoal bg-white min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};