import React, { useState, useEffect, Suspense, lazy } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CredentialBar } from './components/CredentialBar';
import { TrustSignals } from './components/TrustSignals';

const Footer = lazy(() => import('./components/Footer').then((m) => ({ default: m.Footer })));
const ComparisonTable = lazy(() =>
  import('./components/ComparisonTable').then((m) => ({ default: m.ComparisonTable }))
);
const RevenueStreams = lazy(() =>
  import('./components/RevenueStreams').then((m) => ({ default: m.RevenueStreams }))
);
const TendersAndProcurement = lazy(() =>
  import('./components/TendersAndProcurement').then((m) => ({ default: m.TendersAndProcurement }))
);
const Credentials = lazy(() =>
  import('./components/Credentials').then((m) => ({ default: m.Credentials }))
);
const ServicePillars = lazy(() =>
  import('./components/ServicePillars').then((m) => ({ default: m.ServicePillars }))
);
const Calculator = lazy(() =>
  import('./components/Calculator').then((m) => ({ default: m.Calculator }))
);
const LeadForm = lazy(() =>
  import('./components/LeadForm').then((m) => ({ default: m.LeadForm }))
);
const InstallationSteps = lazy(() =>
  import('./components/InstallationSteps').then((m) => ({ default: m.InstallationSteps }))
);
const SignUpSection = lazy(() =>
  import('./components/SignUpSection').then((m) => ({ default: m.SignUpSection }))
);
const RentToOwn = lazy(() =>
  import('./components/RentToOwn').then((m) => ({ default: m.RentToOwn }))
);
const CommercialBenefits = lazy(() =>
  import('./components/CommercialBenefits').then((m) => ({ default: m.CommercialBenefits }))
);
const SideServices = lazy(() =>
  import('./components/SideServices').then((m) => ({ default: m.SideServices }))
);
const Testimonials = lazy(() =>
  import('./components/Testimonials').then((m) => ({ default: m.Testimonials }))
);
const ScrollToTop = lazy(() =>
  import('./components/ScrollToTop').then((m) => ({ default: m.ScrollToTop }))
);

// Modals
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

const SectionLoader = ({ height = 'min-h-[400px]' }: { height?: string }) => (
  <div className={`py-24 flex justify-center items-center w-full ${height}`}>
    <div className="w-10 h-10 border-2 border-brand-gold border-t-transparent rounded-full animate-spin" />
  </div>
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
          <Suspense fallback={<SectionLoader height="min-h-[600px]" />}>
            <ServicePillars
              onOpenAgriSpecs={() => setIsAgriKitOpen(true)}
              onOpenTechSpecs={() => setIsTechSpecsOpen(true)}
            />
          </Suspense>

          {/* Engineering Comparison Matrix */}
          <Suspense fallback={<SectionLoader height="min-h-[500px]" />}>
            <ComparisonTable />
          </Suspense>

          {/* Core Pricing & Subscription Packages */}
          <Suspense fallback={<SectionLoader />}>
            <RentToOwn />
          </Suspense>

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
                <Suspense
                  fallback={
                    <div className="h-[520px] w-full bg-slate-100 dark:bg-white/5 rounded-sm animate-pulse" />
                  }
                >
                  <Calculator />
                </Suspense>
                <Suspense
                  fallback={
                    <div className="h-[520px] w-full bg-slate-100 dark:bg-white/5 rounded-sm animate-pulse" />
                  }
                >
                  <LeadForm />
                </Suspense>
              </div>
            </div>
          </section>

          {/* Verified Institutional Endorsement & Field Profiles (#projects) */}
          <Suspense fallback={<SectionLoader />}>
            <Testimonials />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <CommercialBenefits />
          </Suspense>

          <Suspense fallback={<SectionLoader height="min-h-[500px]" />}>
            <RevenueStreams />
          </Suspense>

          <Suspense fallback={<SectionLoader height="min-h-[500px]" />}>
            <TendersAndProcurement />
          </Suspense>

          <Suspense fallback={<SectionLoader height="min-h-[500px]" />}>
            <Credentials />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <InstallationSteps />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <SideServices />
          </Suspense>

          <Suspense fallback={<div className="h-64 bg-brand-gold/10" />}>
            <SignUpSection
              onSignUp={() => setIsSignUpOpen(true)}
              onReferFriend={() => setIsReferFriendOpen(true)}
            />
          </Suspense>
        </main>

        <Suspense fallback={<div className="h-64 bg-brand-forest" />}>
          <Footer />
        </Suspense>

        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>

        <Suspense fallback={null}>
          <AppointmentModal
            isOpen={isAppointmentOpen}
            onClose={() => setIsAppointmentOpen(false)}
          />
          <TechSpecsModal
            isOpen={isTechSpecsOpen}
            onClose={() => setIsTechSpecsOpen(false)}
          />
          <SignUpModal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />
          <AgriKitModal isOpen={isAgriKitOpen} onClose={() => setIsAgriKitOpen(false)} />
          <ReferFriendModal
            isOpen={isReferFriendOpen}
            onClose={() => setIsReferFriendOpen(false)}
          />
        </Suspense>
      </div>
    </LazyMotion>
  );
};

export default App;