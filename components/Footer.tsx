import React from 'react';
import { Zap, Linkedin, Mail } from 'lucide-react';

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
            <p className="dark:text-slate-400 text-slate-500 max-w-sm font-light leading-relaxed mb-4">
              Made in SA, Designed for Africa. Empowering homes and businesses with premium sustainable energy solutions.
            </p>
            <div className="text-sm dark:text-slate-500 text-slate-400 font-light space-y-1">
              <p><strong>CIPC:</strong> 2025/852718/07</p>
              <p><strong>SARS:</strong> 9218382282</p>
              <p><strong>B-BBEE:</strong> Level 1 Contributor</p>
              <div className="pt-2 space-y-1">
                <p>
                  <a href="mailto:info@cenergys.space" className="hover:text-brand-gold transition-colors block">
                    info@cenergys.space
                  </a>
                </p>
                <p>
                  <a href="https://wa.me/27602924523" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors block">
                    WhatsApp: +27 60 292 4523
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">Services</h4>
            <ul className="space-y-4 text-sm dark:text-slate-400 text-slate-600 font-light">
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-brand-gold transition-colors">ESD & CSI</a></li>
              <li><a href="#tenders" onClick={(e) => scrollToSection(e, 'tenders')} className="hover:text-brand-gold transition-colors">Public & Private Tenders</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-brand-gold transition-colors">Commercial Solar</a></li>
              <li><a href="#service-pillars" onClick={(e) => scrollToSection(e, 'service-pillars')} className="hover:text-brand-gold transition-colors">Vert-X Systems</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">Company</h4>
            <ul className="space-y-4 text-sm dark:text-slate-400 text-slate-600 font-light">
              <li><a href="#credentials" onClick={(e) => scrollToSection(e, 'credentials')} className="hover:text-brand-gold transition-colors">Credentials</a></li>
              <li><a href="#benefits" onClick={(e) => scrollToSection(e, 'benefits')} className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#get-quote" onClick={(e) => scrollToSection(e, 'get-quote')} className="hover:text-brand-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="mailto:info@cenergys.space" aria-label="Email" className="w-10 h-10 rounded-full border dark:border-white/10 border-slate-200 flex items-center justify-center dark:text-slate-400 text-slate-500 hover:border-brand-gold hover:text-brand-gold transition-all">
                <Mail className="h-4 w-4" />
              </a>
              <a href="https://wa.me/27602924523" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full border dark:border-white/10 border-slate-200 flex items-center justify-center dark:text-slate-400 text-slate-500 hover:border-[#25D366] hover:text-[#25D366] hover:bg-[#25D366]/10 transition-all group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 transition-colors group-hover:text-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/112013610/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border dark:border-white/10 border-slate-200 flex items-center justify-center dark:text-slate-400 text-slate-500 hover:border-brand-gold hover:text-brand-gold transition-all">
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