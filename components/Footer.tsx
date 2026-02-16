import React from 'react';
import { Zap, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="dark:bg-brand-black bg-white pt-20 pb-10 border-t dark:border-white/10 border-slate-100 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-gold p-1.5 rounded-sm">
                <Zap className="h-5 w-5 text-brand-black" fill="currentColor" />
              </div>
              <span className="text-2xl font-serif font-bold dark:text-white text-brand-black">
                Carter<span className="text-brand-gold">Energy</span>
              </span>
            </div>
            <p className="dark:text-slate-400 text-slate-500 max-w-sm font-light leading-relaxed">
              Made in SA, Designed for Africa. Empowering homes and businesses with premium sustainable energy solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">Services</h4>
            <ul className="space-y-4 text-sm dark:text-slate-400 text-slate-600 font-light">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Residential Solar</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Commercial Solutions</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Battery Backup</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Maintenance Plans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">Company</h4>
            <ul className="space-y-4 text-sm dark:text-slate-400 text-slate-600 font-light">
              <li><a href="#benefits" onClick={(e) => scrollToSection(e, 'benefits')} className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#get-quote" onClick={(e) => scrollToSection(e, 'get-quote')} className="hover:text-brand-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border dark:border-white/10 border-slate-200 flex items-center justify-center dark:text-slate-400 text-slate-500 hover:border-brand-gold hover:text-brand-gold transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="WhatsApp" className="w-10 h-10 rounded-full border dark:border-white/10 border-slate-200 flex items-center justify-center dark:text-slate-400 text-slate-500 hover:border-brand-gold hover:text-brand-gold transition-all">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border dark:border-white/10 border-slate-200 flex items-center justify-center dark:text-slate-400 text-slate-500 hover:border-brand-gold hover:text-brand-gold transition-all">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border dark:border-white/10 border-slate-200 flex items-center justify-center dark:text-slate-400 text-slate-500 hover:border-brand-gold hover:text-brand-gold transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t dark:border-white/5 border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs dark:text-slate-500 text-slate-400 font-light">
          <div>
            © {new Date().getFullYear()} Carter Energy Solutions Pty Ltd.
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};