import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, FileText, Award, Building2, Zap } from 'lucide-react';

const MotionDiv = motion.div as any;

export const Credentials: React.FC = () => {
  const credentials = [
    {
      icon: <Building2 className="w-8 h-8 text-brand-gold" />,
      title: "CIPC Registration",
      value: "2025/852718/07",
      detail: "Carter Energy Solutions (PTY) Ltd",
      contact: "www.cipc.co.za"
    },
    {
      icon: <FileText className="w-8 h-8 text-brand-gold" />,
      title: "SARS Tax Clearance",
      value: "9218382282",
      detail: "Registered and compliant",
      contact: "www.sars.gov.za"
    },
    {
      icon: <Award className="w-8 h-8 text-brand-gold" />,
      title: "B-BBEE Status",
      value: "Level 1 Contributor",
      detail: "100% Black-Owned Exempted Micro Enterprise (EME)",
      contact: "Sworn Affidavit Available"
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-gold" />,
      title: "Solar Maintenance & Installation",
      value: "DLO Energy Resources Group",
      detail: "Confirmed by Director Zizi Nonqana, 1 Dec 2025",
      contact: "+27 11 065-9515 | admin@dloenergy.com"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-gold" />,
      title: "Working on Heights",
      value: "CETA Accredited Certificate",
      detail: "Progressive School of Business and Engineering. Cert No: PSBE/ROY/20/100. Valid: 30 Nov 2025 — 29 Nov 2027",
      contact: "Accreditation No: ACC/20/07/00029"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-brand-gold" />,
      title: "SANS 10142-1 Compliance",
      value: "Certificate of Compliance (COC)",
      detail: "Issued on every installation via registered ECB electrician subcontractor.",
      contact: "ECB Registered"
    }
  ];

  return (
    <section id="credentials" className="py-24 bg-slate-50 dark:bg-brand-charcoal/20 border-y border-slate-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold tracking-widest uppercase mb-6">
             <ShieldCheck className="w-4 h-4" />
             Due Diligence
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 dark:text-white text-slate-900">Verified Credentials</h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto">
            Third-party verified. Not self-declared. We present our credentials and invite verification from compliance evaluators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((cred, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-brand-black p-8 rounded-sm border border-slate-200 dark:border-white/10 hover:border-brand-gold dark:hover:border-brand-gold transition-colors group relative overflow-hidden flex flex-col h-full"
            >
              <div className="mb-6 bg-brand-gold/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-300">
                {React.cloneElement(cred.icon, { className: "w-8 h-8 text-brand-gold-dark dark:text-brand-gold group-hover:text-brand-black transition-colors" })}
              </div>
              
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">{cred.title}</h3>
              <p className="text-xl font-serif font-bold dark:text-white text-brand-black mb-3">{cred.value}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-6 flex-grow">{cred.detail}</p>
              
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/5">
                <p className="text-xs font-mono text-brand-gold-dark dark:text-brand-gold break-words">
                  Verification: {cred.contact}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};
