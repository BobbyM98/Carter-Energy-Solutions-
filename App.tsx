import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSignals } from './components/TrustSignals';
// Eager load Footer for structure, or lazy load if very heavy. Keeping it lazy for now as it's at the bottom.
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

// Lazy load below-the-fold components to improve initial load performance
const ComparisonTable = lazy(() => import('./components/ComparisonTable').then(m => ({ default: m.ComparisonTable })));
const ServicePillars = lazy(() => import('./components/ServicePillars').then(m => ({ default: m.ServicePillars })));
const Calculator = lazy(() => import('./components/Calculator').then(m => ({ default: m.Calculator })));
const LeadForm = lazy(() => import('./components/LeadForm').then(m => ({ default: m.LeadForm })));
const InstallationSteps = lazy(() => import('./components/InstallationSteps').then(m => ({ default: m.InstallationSteps })));
const SignUpSection = lazy(() => import('./components/SignUpSection').then(m => ({ default: m.SignUpSection })));
const CommercialBenefits = lazy(() => import('./components/CommercialBenefits').then(m => ({ default: m.CommercialBenefits })));
const SideServices = lazy(() => import('./components/SideServices').then(m => ({ default: m.SideServices })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const ScrollToTop = lazy(() => import('./components/ScrollToTop').then(m => ({ default: m.ScrollToTop })));

// Modals
const AppointmentModal = lazy(() => import('./components/AppointmentModal').then(m => ({ default: m.AppointmentModal })));
const TechSpecsModal = lazy(() => import('./components/TechSpecsModal').then(m => ({ default: m.TechSpecsModal })));
const SignUpModal = lazy(() => import('./components/SignUpModal').then(m => ({ default: m.SignUpModal })));

// Minimal loader to prevent layout thrashing too much
const SectionLoader = () => (
  <div className="py-24 flex justify-center items-center w-full min-h-[300px]">
    <div className="w-10 h-10 border-4 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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
        
        {/* Why Vertical / Education Section - Kept eager or high priority */}
        <TrustSignals />
        
        {/* Lazy load remaining sections */}
        <Suspense fallback={<SectionLoader />}>
            <ComparisonTable />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
            <ServicePillars />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
            <InstallationSteps />
        </Suspense>

        <Suspense fallback={<div className="h-20 bg-brand-gold/10" />}>
            <SignUpSection onSignUp={() => setIsSignUpOpen(true)} />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
            <CommercialBenefits />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
            <SideServices />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
            <Testimonials />
        </Suspense>

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
              <Suspense fallback={<div className="h-[400px] w-full bg-slate-100 dark:bg-white/5 rounded-sm animate-pulse" />}>
                <Calculator />
              </Suspense>
              <Suspense fallback={<div className="h-[400px] w-full bg-slate-100 dark:bg-white/5 rounded-sm animate-pulse" />}>
                <LeadForm />
              </Suspense>
            </div>
          </div>
        </section>

      </main>
      
      <Suspense fallback={<div className="h-64 bg-brand-black" />}>
         <Footer />
      </Suspense>
      
      <Suspense fallback={null}>
         <ScrollToTop />
      </Suspense>

      <Suspense fallback={null}>
        <AppointmentModal isOpen={isAppointmentOpen} onClose={() => setIsAppointmentOpen(false)} />
        <TechSpecsModal isOpen={isTechSpecsOpen} onClose={() => setIsTechSpecsOpen(false)} />
        <SignUpModal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />
      </Suspense>
    </div>
  );
};

export default App;