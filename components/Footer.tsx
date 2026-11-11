import React from 'react';
import { Zap, Linkedin, Mail, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
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
    <footer className="bg-brand-forest text-brand-ivory pt-20 pb-12 border-t border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Brand & Statutory Column */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-brand-gold p-2 rounded-sm">
                <Zap className="h-5 w-5 text-brand-black" fill="currentColor" />
              </div>
              <div>
                <span className="block text-xl font-serif font-semibold tracking-wider text-brand-ivory leading-none">
                  CENERGYS
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-brand-gold mt-1">
                  Carter Energy Solutions (Pty) Ltd
                </span>
              </div>
            </div>

            <p className="text-brand-sage text-sm font-light leading-relaxed max-w-md">
              Engineering South Africa&apos;s vertical bifacial and hybrid solar infrastructure. Precision-designed Vert-X Systems and Vert-X Walls for load-limited industrial roofs, commercial estates, and agrivoltaic perimeters.
            </p>

            {/* Statutory & Compliance Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2 max-w-md font-mono text-xs text-brand-ivory/80">
              <div className="p-3 bg-brand-black/30 border border-white/10 rounded-sm">
                <span className="block text-[10px] uppercase tracking-wider text-brand-gold">CIPC Registration</span>
                <span className="tabular-nums">2025/852718/07</span>
              </div>
              <div className="p-3 bg-brand-black/30 border border-white/10 rounded-sm">
                <span className="block text-[10px] uppercase tracking-wider text-brand-gold">SARS Tax Ref</span>
                <span className="tabular-nums">9218382282</span>
              </div>
              <div className="p-3 bg-brand-black/30 border border-white/10 rounded-sm">
                <span className="block text-[10px] uppercase tracking-wider text-brand-gold">B-BBEE Status</span>
                <span>Level 1 (135% Recognition)</span>
              </div>
              <div className="p-3 bg-brand-black/30 border border-white/10 rounded-sm">
                <span className="block text-[10px] uppercase tracking-wider text-brand-gold">CETA Safety ID</span>
                <span className="tabular-nums">PSBE/ROY/20/100</span>
              </div>
            </div>
          </div>

          {/* Technology & Products */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-brand-gold font-semibold uppercase tracking-[0.2em] text-xs mb-5">
              Technology
            </h4>
            <ul className="space-y-3.5 text-sm text-brand-sage font-light">
              <li>
                <a href="#benefits" onClick={(e) => scrollToSection(e, 'benefits')} className="hover:text-brand-gold transition-colors">
                  Why Vertical Solar
                </a>
              </li>
              <li>
                <a href="#service-pillars" onClick={(e) => scrollToSection(e, 'service-pillars')} className="hover:text-brand-gold transition-colors">
                  Vert-X Walls (Agri)
                </a>
              </li>
              <li>
                <a href="#service-pillars" onClick={(e) => scrollToSection(e, 'service-pillars')} className="hover:text-brand-gold transition-colors">
                  Vert-X Industrial Roofs
                </a>
              </li>
              <li>
                <a href="#packages" onClick={(e) => scrollToSection(e, 'packages')} className="hover:text-brand-gold transition-colors">
                  Hybrid &amp; Rent-to-Own
                </a>
              </li>
              <li>
                <a href="#calculator" onClick={(e) => scrollToSection(e, 'calculator')} className="hover:text-brand-gold transition-colors">
                  Yield &amp; ROI Simulator
                </a>
              </li>
            </ul>
          </div>

          {/* Enterprise & Governance */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-brand-gold font-semibold uppercase tracking-[0.2em] text-xs mb-5">
              Governance
            </h4>
            <ul className="space-y-3.5 text-sm text-brand-sage font-light">
              <li>
                <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-brand-gold transition-colors">
                  Verified Track Record
                </a>
              </li>
              <li>
                <a href="#credentials" onClick={(e) => scrollToSection(e, 'credentials')} className="hover:text-brand-gold transition-colors">
                  Statutory Credentials
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-brand-gold transition-colors">
                  ESD &amp; CSI Partnerships
                </a>
              </li>
              <li>
                <a href="#tenders" onClick={(e) => scrollToSection(e, 'tenders')} className="hover:text-brand-gold transition-colors">
                  Public &amp; Private Tenders
                </a>
              </li>
              <li>
                <a href="#get-quote" onClick={(e) => scrollToSection(e, 'get-quote')} className="hover:text-brand-gold transition-colors">
                  Request a Proposal
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Engineering Desk */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-brand-gold font-semibold uppercase tracking-[0.2em] text-xs mb-5">
              Engineering Desk
            </h4>
            <div className="space-y-2.5 text-sm text-brand-sage font-light">
              <p className="text-brand-ivory font-medium">Gauteng &amp; Vaal Region, South Africa</p>
              <p>
                <a
                  href="mailto:info@cenergys.space"
                  className="hover:text-brand-gold transition-colors inline-flex items-center gap-1.5 font-mono text-xs"
                >
                  info@cenergys.space <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/27602924523"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors inline-flex items-center gap-1.5 font-mono text-xs tabular-nums"
                >
                  +27 60 292 4523 (WhatsApp / Tel) <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="mailto:info@cenergys.space"
                aria-label="Email Cenergys"
                className="w-10 h-10 rounded-sm border border-white/15 flex items-center justify-center text-brand-ivory hover:border-brand-gold hover:text-brand-gold transition-all"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/27602924523"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Cenergys"
                className="w-10 h-10 rounded-sm border border-white/15 flex items-center justify-center text-brand-ivory hover:border-[#25D366] hover:text-[#25D366] transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/112013610/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-sm border border-white/15 flex items-center justify-center text-brand-ivory hover:border-brand-gold hover:text-brand-gold transition-all"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & POPIA Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-brand-sage/80 font-light">
          <div>
            © {new Date().getFullYear()} Carter Energy Solutions (Pty) Ltd · Trading digitally as CENERGYS. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-brand-ivory/80">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
              POPIA Compliant Data Governance (Act 4 of 2013)
            </span>
            <span className="text-brand-ivory/80">SANS 10142-1 Certified Installations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};