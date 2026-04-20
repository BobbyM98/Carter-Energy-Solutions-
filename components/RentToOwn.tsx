import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Zap, Target, Factory, Building2, Store } from 'lucide-react';

const MotionDiv = motion.div as any;

const PACKAGES = [
  {
    name: "Starter — 3.5kW",
    target: "Small offices · Spaza shops · Hair salons",
    specs: [
      "8 Solar Panels (450W)",
      "3.5kW Hybrid Inverter",
      "5.12kWh LiFePO₄ Battery",
      "4–6 hrs backup power"
    ],
    price: "R1,799",
    featured: false
  },
  {
    name: "Business — 6kW",
    target: "Factories · Schools · Farms · Clinics",
    specs: [
      "16 Solar Panels (450W)",
      "6kW Hybrid Inverter",
      "10kWh LiFePO₄ Battery",
      "6–10 hrs backup power"
    ],
    price: "R3,499",
    featured: true
  },
  {
    name: "Industrial — 10kW+",
    target: "Large factories · Warehouses · Commercial farms",
    specs: [
      "24+ Solar Panels",
      "10kW+ Inverter (3-phase)",
      "Custom Battery Storage",
      "Full energy audit included"
    ],
    price: "Custom",
    featured: false
  }
];

const FEATURES = [
  {
    title: "No Upfront Cost",
    desc: "No deposit required. Installation funded by Carter Energy Solutions."
  },
  {
    title: "Fixed Monthly Payments",
    desc: "Predictable cost. No surprise increases. Budget with confidence."
  },
  {
    title: "Full Ownership at Month 60",
    desc: "The system becomes your asset. Zero ongoing payments after year 5."
  },
  {
    title: "20+ Years Free Energy",
    desc: "Solar panels last 25–30 years. Your ROI starts from day one."
  }
];

export const RentToOwn: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
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
  };

  return (
    <section id="packages" className="py-24 dark:bg-brand-black bg-white border-y border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <MotionDiv 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold tracking-widest uppercase mb-6 border border-brand-gold/20">
                <Zap className="w-4 h-4" />
                Rent-to-Own in Gauteng & Vaal Region
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold dark:text-white text-brand-black mb-4 leading-tight">
                INSTALL NOW.<br />
                <span className="text-brand-gold italic">OWN IT.</span>
              </h2>
              <p className="text-lg dark:text-slate-300 text-slate-700 font-light leading-relaxed mb-8">
                Get solar installed on your business today with zero upfront cost. Pay fixed monthly instalments for 5 years — then the system is completely yours. Free power for the next 20+ years.
              </p>

              <div className="space-y-6">
                {FEATURES.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center">
                       <CheckCircle2 className="w-4 h-4 text-brand-gold-dark dark:text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold dark:text-white text-slate-900 text-sm tracking-wide uppercase">{feature.title}</h4>
                      <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed font-light">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </MotionDiv>
          </div>

          <div className="lg:col-span-7">
            <MotionDiv 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PACKAGES.map((pkg, idx) => (
                  <div 
                    key={idx} 
                    className={`relative rounded-sm border p-6 flex flex-col h-full bg-white dark:bg-brand-charcoal overflow-hidden transition-all duration-300 ${
                      pkg.featured ? 'border-brand-gold shadow-2xl shadow-brand-gold/10 transform md:-translate-y-4 z-10' : 'border-slate-200 dark:border-white/10 hover:border-brand-gold/50'
                    }`}
                  >
                    {pkg.featured && (
                      <div className="absolute top-0 inset-x-0 bg-brand-gold text-brand-black text-[10px] font-bold uppercase tracking-widest text-center py-1">
                        Most Popular
                      </div>
                    )}
                    <h3 className={`font-serif text-2xl font-bold dark:text-white text-brand-black mb-2 ${pkg.featured ? 'mt-4' : ''}`}>
                      {pkg.name.split('—')[0]}
                    </h3>
                    <p className="text-xs font-bold text-brand-gold mb-2 tracking-wide uppercase">
                      {pkg.name.split('—')[1]}
                    </p>
                    <p className="text-[11px] dark:text-slate-400 text-slate-500 mb-6 flex-grow leading-relaxed italic">
                      {pkg.target}
                    </p>

                    <div className="space-y-3 mb-8">
                      {pkg.specs.map((spec, sidx) => (
                        <div key={sidx} className="flex items-center gap-2 text-xs dark:text-slate-300 text-slate-700">
                          <div className="w-1 h-1 rounded-full bg-brand-gold flex-shrink-0"></div>
                          {spec}
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-slate-100 dark:border-white/5 mt-auto">
                       <p className="text-xs uppercase tracking-widest dark:text-slate-500 text-slate-400 font-bold mb-1">
                         {pkg.price === 'Custom' ? 'Custom Quote' : 'From'}
                       </p>
                       <div className="flex items-baseline gap-2 mb-4">
                         <span className="text-4xl font-serif font-bold text-brand-gold-dark dark:text-brand-gold">{pkg.price}</span>
                         {pkg.price !== 'Custom' && <span className="text-sm dark:text-slate-400 text-slate-500 font-medium">/ month</span>}
                       </div>
                       
                       <button 
                         onClick={scrollToContact}
                         className={`w-full py-3 rounded-sm text-sm font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 ${
                           pkg.featured 
                             ? 'bg-brand-gold text-brand-black hover:bg-brand-gold-light' 
                             : 'dark:bg-white/5 bg-slate-100 dark:text-white text-brand-black dark:hover:bg-brand-gold hover:bg-brand-gold hover:text-white transition-colors'
                         }`}
                       >
                         Secure Package <ChevronRight className="w-4 h-4" />
                       </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ownership Timeline */}
              <div className="mt-12 bg-slate-50 dark:bg-brand-charcoal/50 p-6 md:p-8 rounded-sm border border-slate-200 dark:border-white/5">
                <h4 className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-6">🔑 Ownership Timeline — 60 Months</h4>
                
                <div className="flex items-center h-3 w-full rounded-full overflow-hidden mb-3">
                   <div className="h-full flex-1 bg-brand-gold/60 border-r border-brand-black w-1/5"></div>
                   <div className="h-full flex-1 bg-brand-gold/70 border-r border-brand-black w-1/5"></div>
                   <div className="h-full flex-1 bg-brand-gold/80 border-r border-brand-black w-1/5"></div>
                   <div className="h-full flex-1 bg-brand-gold/90 border-r border-brand-black w-1/5"></div>
                   <div className="h-full flex-1 bg-brand-gold w-1/5 shadow-[0_0_10px_rgba(212,175,55,0.5)] z-10"></div>
                </div>
                
                <div className="flex justify-between text-[10px] sm:text-xs font-bold uppercase tracking-wide dark:text-slate-400 text-slate-500">
                  <span>Year 1</span>
                  <span className="hidden sm:inline">Year 2</span>
                  <span className="hidden sm:inline">Year 3</span>
                  <span>Year 4</span>
                  <span className="text-brand-gold-dark dark:text-brand-gold">Year 5 — Yours</span>
                </div>
                
                <p className="mt-4 text-xs dark:text-slate-400 text-slate-600 font-light leading-relaxed">
                   *Based on 60-month rent-to-own term. Subject to credit approval. Prices exclude VAT. System specifications may vary based on site audit.
                </p>
              </div>

            </MotionDiv>
          </div>

        </div>
      </div>
    </section>
  );
};
