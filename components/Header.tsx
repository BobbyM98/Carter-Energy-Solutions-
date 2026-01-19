import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToQuote = () => {
    const element = document.getElementById('get-quote');
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-brand-black/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
                <div className="absolute inset-0 bg-brand-gold blur-sm opacity-50 rounded-full"></div>
                <div className="relative bg-gradient-to-br from-brand-gold to-brand-gold-dark p-2 rounded-lg text-white">
                  <Zap className="h-5 w-5" strokeWidth={2} />
                </div>
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight dark:text-white text-slate-900 font-serif">
              Carter<span className="text-brand-gold">Energy</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-sm font-medium dark:text-slate-300 text-slate-600 hover:text-brand-gold transition-colors">Expertise</a>
            <a href="#calculator" className="text-sm font-medium dark:text-slate-300 text-slate-600 hover:text-brand-gold transition-colors">Savings</a>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full dark:bg-white/5 bg-slate-100 dark:hover:bg-white/10 hover:bg-slate-200 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="h-4 w-4 text-brand-gold" /> : <Moon className="h-4 w-4 text-slate-700" />}
            </button>

            <button 
              onClick={scrollToQuote}
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-black px-6 py-2.5 rounded-sm font-semibold text-sm transition-all shadow-[0_0_20px_-5px_rgba(212,175,55,0.4)]"
            >
              Get a Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full dark:bg-white/5 bg-slate-100"
            >
              {isDark ? <Sun className="h-4 w-4 text-brand-gold" /> : <Moon className="h-4 w-4 text-slate-700" />}
            </button>
            <button 
              className="dark:text-white text-slate-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 dark:bg-brand-black bg-white border-b dark:border-white/10 border-slate-200 p-6 shadow-xl"
        >
          <nav className="flex flex-col gap-6 text-center">
             <a href="#benefits" onClick={() => setIsMobileMenuOpen(false)} className="dark:text-slate-300 text-slate-600 font-serif text-lg">Expertise</a>
            <a href="#calculator" onClick={() => setIsMobileMenuOpen(false)} className="dark:text-slate-300 text-slate-600 font-serif text-lg">Savings</a>
            <button 
              onClick={scrollToQuote}
              className="bg-brand-gold text-brand-black px-5 py-4 rounded-sm font-bold w-full"
            >
              Get a Quote
            </button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};