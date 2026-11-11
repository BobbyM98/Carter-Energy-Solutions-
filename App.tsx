import React, { useState, useEffect, Suspense, lazy } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CredentialBar } from './components/CredentialBar';
import { TrustSignals } from './components/TrustSignals';
import { ServicePillars } from './components/ServicePillars';
import { ComparisonTable } from './components/ComparisonTable';
import { RentToOwn } from './components/RentToOwn';
import { Calculator } from './components/Calculator';
import { LeadForm } from './components/LeadForm';
import { Testimonials } from './components/Testimonials';
import { CommercialBenefits } from './components/CommercialBenefits';
import { RevenueStreams } from './components/RevenueStreams';
import { TendersAndProcurement } from './components/TendersAndProcurement';
import { Credentials } from './components/Credentials';
import { InstallationSteps } from './components/InstallationSteps';
import { SideServices } from './components/SideServices';
import { SignUpSection } from './components/SignUpSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

// Only modals (hidden until user interaction) are lazy-loaded
const AppointmentModal = lazy(() =>
  import('./components/AppointmentModal').then((m) => ({ default: m.AppointmentModal }))
);
const TechSpecsModal = lazy(() =>
  import('./components/TechSpecsModal').then((m) => ({ default: m.TechSpecsModal }))
);
const SignUpModal = lazy(() =>
  import('./components/SignUpModal').then((m) => ({ default: m.SignUpModal }))
);
const AgriKitModal = lazy(() =>
  import('./components/AgriKitModal').then((m) => ({ default: m.AgriKitModal }))
);
const ReferFriendModal = lazy(() =>
  import('./components/ReferFriendModal').then((m) => ({ default: m.ReferFriendModal }))
);

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isTechSpecsOpen, setIsTechSpecsOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isAgriKitOpen, setIsAgriKitOpen] = useState(false);
  const [isReferFriendOpen, setIsReferFriendOpen] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem('theme') === 'light') {
        setIsDark(false);
        document.documentElement.classList.remove('dark');
      } else {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      }
    } catch {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    try {
      if (newIsDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch (e) {
      console.warn('localStorage write failed:', e);
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={`min-h-screen flex flex-col transition-colors duration-500 ${
          isDark ? 'bg-brand-black text-brand-ivory' : 'bg-brand-ivory text-brand-forest'
        }`}
      >
        <Header
          isDark={isDark}
          toggleTheme={toggleTheme}
          onBookAppointment={() => setIsAppointmentOpen(true)}
          onSignUp={() => setIsSignUpOpen(true)}
          onReferFriend={() => setIsReferFriendOpen(true)}
        />
        <main className="flex-grow">
          <Hero
            onOpenTechSpecs={() => setIsTechSpecsOpen(true)}
            onBookAppointment={() => setIsAppointmentOpen(true)}
            isDark={isDark}
            toggleTheme={toggleTheme}
          />
          <CredentialBar />

          {/* Why Vertical Solar & Interactive Dual-Peak Irradiance Curve */}
          <TrustSignals />

          {/* Vert-X Systems & Vert-X Walls Product Experience */}
          <ServicePillars
            onOpenAgriSpecs={() => setIsAgriKitOpen(true)}
            onOpenTechSpecs={() => setIsTechSpecsOpen(true)}
          />

          {/* Engineering Comparison Matrix */}
          <ComparisonTable />

          {/* Core Pricing & Subscription Packages */}
          <RentToOwn />

          {/* Feasibility & Audit (Calculator & Proposal Form directly below packages) */}
          <section
            id="get-quote"
            className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-500 dark:bg-brand-black bg-brand-ivory border-t border-brand-forest/10 dark:border-white/10"
          >
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 border-b border-brand-forest/10 dark:border-white/10 pb-8">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-gold-dark dark:text-brand-gold block mb-3">
                    FEASIBILITY &amp; EPC QUOTATION DESK
                  </span>
                  <h2 className="text-3xl md:text-5xl font-serif font-medium dark:text-brand-ivory text-brand-forest tracking-tight">
                    Solar Yield Simulation &amp; Site Assessment
                  </h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-brand-sage max-w-md font-light leading-relaxed">
                  Model your preliminary 20-year cumulative tariff offset with our interactive D3.js simulator and request a SANS 10142-1 compliant engineering proposal.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <Calculator />
                <LeadForm />
              </div>
            </div>
          </section>

          {/* 4K Field Architecture & Deployment Profiles (#projects) */}
          <Testimonials />

          <CommercialBenefits />

          <RevenueStreams />

          <TendersAndProcurement />

          <Credentials />

          <InstallationSteps />

          <SideServices />

          <SignUpSection
            onSignUp={() => setIsSignUpOpen(true)}
            onReferFriend={() => setIsReferFriendOpen(true)}
          />
        </main>

        <Footer />

        <ScrollToTop />

        <Suspense fallback={null}>
          {isAppointmentOpen && (
            <AppointmentModal
              isOpen={isAppointmentOpen}
              onClose={() => setIsAppointmentOpen(false)}
            />
          )}
          {isTechSpecsOpen && (
            <TechSpecsModal
              isOpen={isTechSpecsOpen}
              onClose={() => setIsTechSpecsOpen(false)}
            />
          )}
          {isSignUpOpen && (
            <SignUpModal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />
          )}
          {isAgriKitOpen && (
            <AgriKitModal isOpen={isAgriKitOpen} onClose={() => setIsAgriKitOpen(false)} />
          )}
          {isReferFriendOpen && (
            <ReferFriendModal
              isOpen={isReferFriendOpen}
              onClose={() => setIsReferFriendOpen(false)}
            />
          )}
        </Suspense>
      </div>
    </LazyMotion>
  );
};

export default App;