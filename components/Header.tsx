import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, Sun, Moon, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  onBookAppointment: () => void;
  onSignUp: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme, onBookAppointment, onSignUp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy logic to determine active section
      const sections = ['benefits', 'calculator', 'get-quote'];
      const scrollPosition = window.scrollY + 120; // Offset for header + a bit of breathing room

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-brand-black/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-lg p-1" 
            onClick={scrollToTop}
            onKeyDown={handleLogoKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Carter Energy Solutions Home - Scroll to top"
          >
            <div className="relative" aria-hidden="true">
                <div className="absolute inset-0 bg-brand-gold blur-sm opacity-50 rounded-full"></div>
                <div className="relative bg-gradient-to-br from-brand-gold to-brand-gold-dark p-2 rounded-lg text-white">
                  <Zap className="h-5 w-5" strokeWidth={2} />
                </div>
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight dark:text-white text-slate-900 font-serif">
              Carter<span className="text-brand-gold-dark dark:text-brand-gold">Energy</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            <a 
              href="#benefits" 
              onClick={(e) => scrollToSection(e, 'benefits')}
              className={`text-sm font-medium transition-colors focus:outline-none focus:text-brand-gold focus:underline py-2 ${
                activeSection === 'benefits' 
                  ? 'text-brand-gold-dark dark:text-brand-gold' 
                  : 'dark:text-slate-300 text-slate-700 hover:text-brand-gold-dark dark:hover:text-brand-gold'
              }`}
              aria-current={activeSection === 'benefits' ? 'true' : undefined}
            >
              Expertise
            </a>
            <a 
              href="#calculator" 
              onClick={(e) => scrollToSection(e, 'calculator')}
              className={`text-sm font-medium transition-colors focus:outline-none focus:text-brand-gold focus:underline py-2 ${
                activeSection === 'calculator' 
                  ? 'text-brand-gold-dark dark:text-brand-gold' 
                  : 'dark:text-slate-300 text-slate-700 hover:text-brand-gold-dark dark:hover:text-brand-gold'
              }`}
              aria-current={activeSection === 'calculator' ? 'true' : undefined}
            >
              Savings
            </a>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-3 rounded-full dark:bg-white/5 bg-slate-100 dark:hover:bg-white/10 hover:bg-slate-200 transition-colors mr-2 focus:outline-none focus:ring-2 focus:ring-brand-gold min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="h-4 w-4 text-brand-gold" aria-hidden="true" /> : <Moon className="h-4 w-4 text-slate-700" aria-hidden="true" />}
            </button>
            
            <button 
              onClick={onSignUp}
              className="hidden lg:flex items-center gap-2 text-brand-gold-dark dark:text-brand-gold px-3 py-2.5 rounded-sm font-semibold text-sm hover:text-brand-black dark:hover:text-white transition-all mr-2 focus:outline-none focus:ring-2 focus:ring-brand-gold min-h-[44px]"
            >
              Sign Up
            </button>

            <button 
              onClick={onBookAppointment}
              className="hidden lg:flex items-center gap-2 border border-brand-gold-dark dark:border-brand-gold text-brand-gold-dark dark:text-brand-gold px-5 py-2.5 rounded-sm font-semibold text-sm hover:bg-brand-gold hover:text-brand-black transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold min-h-[44px]"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Book Appointment</span>
            </button>

            <button 
              onClick={(e) => scrollToSection(e, 'get-quote')}
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-black px-6 py-2.5 rounded-sm font-semibold text-sm transition-all shadow-[0_0_20px_-5px_rgba(212,175,55,0.4)] focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 dark:focus:ring-offset-brand-black min-h-[44px]"
            >
              Get a Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-3 rounded-full dark:bg-white/5 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-gold min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="h-4 w-4 text-brand-gold" aria-hidden="true" /> : <Moon className="h-4 w-4 text-slate-700" aria-hidden="true" />}
            </button>
            <button 
              className="dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-gold p-2 rounded-md min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          id="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 dark:bg-brand-black bg-white border-b dark:border-white/10 border-slate-200 p-6 shadow-xl"
          role="region"
          aria-label="Mobile Navigation"
        >
          <nav className="flex flex-col gap-6 text-center">
             <a 
               href="#benefits" 
               onClick={(e) => scrollToSection(e, 'benefits')} 
               className={`font-serif text-lg py-2 ${activeSection === 'benefits' ? 'text-brand-gold' : 'dark:text-slate-300 text-slate-700'}`}
               aria-current={activeSection === 'benefits' ? 'true' : undefined}
             >
               Expertise
             </a>
            <a 
              href="#calculator" 
              onClick={(e) => scrollToSection(e, 'calculator')} 
              className={`font-serif text-lg py-2 ${activeSection === 'calculator' ? 'text-brand-gold' : 'dark:text-slate-300 text-slate-700'}`}
              aria-current={activeSection === 'calculator' ? 'true' : undefined}
            >
              Savings
            </a>
            
            <button 
              onClick={() => {
                onSignUp();
                setIsMobileMenuOpen(false);
              }}
              className="font-serif text-lg dark:text-white text-slate-900 hover:text-brand-gold focus:outline-none focus:text-brand-gold py-2"
            >
              Sign Up
            </button>

            <button 
              onClick={() => {
                onBookAppointment();
                setIsMobileMenuOpen(false);
              }}
              className="border border-brand-gold text-brand-gold px-5 py-4 rounded-sm font-bold w-full flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-gold min-h-[44px]"
            >
              <Calendar className="w-5 h-5" aria-hidden="true" />
              Book Appointment
            </button>
            <button 
              onClick={(e) => scrollToSection(e, 'get-quote')}
              className="bg-brand-gold text-brand-black px-5 py-4 rounded-sm font-bold w-full focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 dark:focus:ring-offset-brand-black min-h-[44px]"
            >
              Get a Quote
            </button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};