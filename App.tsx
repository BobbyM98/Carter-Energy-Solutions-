import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSignals } from './components/TrustSignals';
import { ComparisonTable } from './components/ComparisonTable';
import { Calculator } from './components/Calculator';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';
import { ServicePillars } from './components/ServicePillars';
import { SideServices } from './components/SideServices';
import { CommercialBenefits } from './components/CommercialBenefits';
import { ScrollToTop } from './components/ScrollToTop';
import { AppointmentModal } from './components/AppointmentModal';
import { TechSpecsModal } from './components/TechSpecsModal';
import { SignUpModal } from './components/SignUpModal';
import { SignUpSection } from './components/SignUpSection';
import { Testimonials } from './components/Testimonials';
import { InstallationSteps } from './components/InstallationSteps';

const App: React.FC = () => {
  // Theme management
  const [isDark, setIsDark] = useState(true);
  // Modal management
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isTechSpecsOpen, setIsTechSpecsOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  useEffect(() => {
    // Check system preference or default to dark
    if (localStorage.getItem('theme') === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${isDark ? 'bg-brand-black text-white' : 'bg-white text-slate-900'}`}>
      <Header 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
        onBookAppointment={() => setIsAppointmentOpen(true)}
        onSignUp={() => setIsSignUpOpen(true)}
      />
      <main className="flex-grow">
        <Hero onOpenTechSpecs={() => setIsTechSpecsOpen(true)} />
        
        {/* Why Vertical / Education Section */}
        <TrustSignals />
        
        {/* Comparison Data Section */}
        <ComparisonTable />
        
        {/* Service Pillars / Product Section */}
        <ServicePillars />

        {/* Installation Process Guide */}
        <InstallationSteps />

        {/* New Sign Up Section - CTA before detailed breakdown */}
        <SignUpSection onSignUp={() => setIsSignUpOpen(true)} />

        {/* Commercial & Retail Deep Dive */}
        <CommercialBenefits />

        {/* Side Services / Maintenance Section */}
        <SideServices />

        {/* Social Proof Section */}
        <Testimonials />

        {/* Concierge Section */}
        <section id="get-quote" className="py-24 px-4 relative overflow-hidden transition-colors duration-500 dark:bg-brand-charcoal bg-slate-50">
           {/* Decorative background elements */}
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
             <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-brand-gold blur-[100px]"></div>
             <div className="absolute -bottom-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-brand-gold blur-[100px]"></div>
           </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-slate-900 font-serif">Feasibility & Audit</h2>
              <div className="h-1 w-20 bg-brand-gold mx-auto"></div>
              <p className="mt-4 text-slate-500 dark:text-slate-400">Calculate your Vertical Yield and book a site assessment.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <Calculator />
              <LeadForm />
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ScrollToTop />
      <AppointmentModal isOpen={isAppointmentOpen} onClose={() => setIsAppointmentOpen(false)} />
      <TechSpecsModal isOpen={isTechSpecsOpen} onClose={() => setIsTechSpecsOpen(false)} />
      <SignUpModal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />
    </div>
  );
};

export default App;