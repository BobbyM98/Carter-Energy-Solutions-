import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Calendar, Gift, UserCheck, ArrowUpRight } from 'lucide-react';
import { m as motion } from 'framer-motion';

const MotionHeader = motion.header as any;
const MotionDiv = motion.div as any;

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  onBookAppointment: () => void;
  onSignUp: () => void;
  onReferFriend: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', id: 'top' },
  { label: 'Technology', id: 'benefits' },
  { label: 'Solutions', id: 'service-pillars' },
  { label: 'Projects', id: 'projects' },
  { label: 'About', id: 'credentials' },
  { label: 'Contact', id: 'get-quote' },
];

export const Header: React.FC<HeaderProps> = ({
  isDark,
  toggleTheme,
  onBookAppointment,
  onSignUp,
  onReferFriend,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      if (window.scrollY < 200) {
        setActiveSection('top');
        return;
      }

      const sections = ['benefits', 'service-pillars', 'packages', 'projects', 'credentials', 'tenders', 'calculator', 'get-quote'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (section === 'packages') {
              setActiveSection('service-pillars');
            } else if (section === 'tenders') {
              setActiveSection('credentials');
            } else if (section === 'calculator') {
              setActiveSection('get-quote');
            } else {
              setActiveSection(section);
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <MotionHeader
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-ivory/95 dark:bg-brand-black/95 backdrop-blur-md border-b border-brand-charcoal/10 dark:border-brand-sage/15 py-3.5 shadow-sm'
          : 'bg-gradient-to-b from-brand-black/75 via-brand-black/35 to-transparent py-5'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Architectural Top Bar */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#top"
            onClick={(e) => scrollToSection(e, 'top')}
            className={`text-xl md:text-2xl font-serif font-semibold tracking-wider whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm transition-colors ${
              isScrolled ? 'text-brand-forest dark:text-brand-ivory' : 'text-brand-ivory'
            }`}
            aria-label="Cenergys — Carter Energy Solutions Home"
          >
            CENERGYS <span className="text-brand-gold font-normal">· Carter Energy</span>
          </a>

          {/* Zone 2: Minimal Single-Line Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.id === 'top' ? '#top' : `#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`text-sm font-medium whitespace-nowrap shrink-0 py-1.5 border-b-2 transition-colors focus:outline-none focus-visible:text-brand-gold ${
                    isActive
                      ? 'border-brand-gold text-brand-gold'
                      : isScrolled
                      ? 'border-transparent text-brand-charcoal/80 dark:text-brand-sage/85 hover:text-brand-forest dark:hover:text-brand-ivory hover:border-brand-gold/50'
                      : 'border-transparent text-brand-ivory/85 hover:text-brand-ivory hover:border-brand-gold/50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action (Desktop) & Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={(e) => scrollToSection(e, 'get-quote')}
              className="hidden md:inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-forest px-5 py-2.5 rounded-sm font-semibold text-xs uppercase tracking-widest transition-colors whitespace-nowrap shrink-0 min-h-[42px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>

            <button
              className={`lg:hidden p-2.5 rounded-sm min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
                isScrolled ? 'text-brand-forest dark:text-brand-ivory' : 'text-brand-ivory'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Utility Drawer */}
      {isMobileMenuOpen && (
        <MotionDiv
          id="mobile-menu"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-brand-ivory dark:bg-brand-black border-b border-brand-charcoal/15 dark:border-brand-sage/15 px-6 py-8 shadow-2xl max-h-[85vh] overflow-y-auto"
          role="region"
          aria-label="Mobile Navigation"
        >
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.id === 'top' ? '#top' : `#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`font-serif text-2xl py-2 border-b border-brand-charcoal/10 dark:border-white/5 flex items-center justify-between ${
                  activeSection === item.id
                    ? 'text-brand-gold-dark dark:text-brand-gold font-semibold'
                    : 'text-brand-forest dark:text-brand-ivory'
                }`}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-60" />
              </a>
            ))}

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={(e) => scrollToSection(e, 'get-quote')}
                className="bg-brand-gold text-brand-forest px-5 py-3.5 rounded-sm font-semibold text-xs uppercase tracking-widest w-full min-h-[44px] flex items-center justify-center gap-2"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  onBookAppointment();
                  setIsMobileMenuOpen(false);
                }}
                className="border border-brand-gold text-brand-forest dark:text-brand-gold px-5 py-3.5 rounded-sm font-semibold text-xs uppercase tracking-widest w-full min-h-[44px] flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <span>Schedule Consultation</span>
              </button>
            </div>

            <div className="pt-4 border-t border-brand-charcoal/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-brand-charcoal/80 dark:text-brand-sage">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    onSignUp();
                    setIsMobileMenuOpen(false);
                  }}
                  className="inline-flex items-center gap-1.5 hover:text-brand-gold transition-colors py-2"
                >
                  <UserCheck className="w-4 h-4 text-brand-gold" />
                  <span>Client Portal</span>
                </button>
                <button
                  onClick={() => {
                    onReferFriend();
                    setIsMobileMenuOpen(false);
                  }}
                  className="inline-flex items-center gap-1.5 hover:text-brand-gold transition-colors py-2"
                >
                  <Gift className="w-4 h-4 text-brand-gold" />
                  <span>Refer & Earn</span>
                </button>
              </div>

              <button
                onClick={toggleTheme}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-sm border border-brand-charcoal/15 dark:border-white/15 hover:border-brand-gold transition-colors min-h-[40px]"
                aria-label={isDark ? 'Switch to Warm Ivory light mode' : 'Switch to Deep Forest dark mode'}
              >
                {isDark ? (
                  <>
                    <Sun className="w-4 h-4 text-brand-gold" />
                    <span>Light Theme</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-brand-forest" />
                    <span>Dark Theme</span>
                  </>
                )}
              </button>
            </div>
          </nav>
        </MotionDiv>
      )}
    </MotionHeader>
  );
};