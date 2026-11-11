import React from 'react';
import { m as motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, FileText, Award, Building2, Landmark } from 'lucide-react';

const MotionDiv = motion.div as any;

export const Credentials: React.FC = () => {
  const credentials = [
    {
      icon: <Building2 className="w-7 h-7 text-brand-gold" />,
      title: 'CIPC Registration',
      value: '2025/852718/07',
      detail: 'Carter Energy Solutions (Pty) Ltd — Registered South African Private Company.',
      contact: 'www.cipc.co.za'
    },
    {
      icon: <FileText className="w-7 h-7 text-brand-gold" />,
      title: 'SARS Tax Clearance',
      value: '9218382282',
      detail: 'Active corporate income tax registration and compliant tax standing.',
      contact: 'www.sars.gov.za'
    },
    {
      icon: <Award className="w-7 h-7 text-brand-gold" />,
      title: 'B-BBEE Status',
      value: 'Level 1 Contributor',
      detail: '100% Black-Owned Exempted Micro Enterprise (EME) with 135% procurement recognition.',
      contact: 'Certificate Available'
    },
    {
      icon: <Landmark className="w-7 h-7 text-brand-gold" />,
      title: 'Public & Corporate Procurement',
      value: '20/10 PPPFA Points',
      detail: 'Central Supplier Database (CSD) aligned for public tenders, ESD, and CSI partnerships.',
      contact: 'www.csd.gov.za'
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-brand-gold" />,
      title: 'Working on Heights',
      value: 'CETA Accredited Certificate',
      detail: 'Progressive School of Business and Engineering. Cert No: PSBE/ROY/20/100. Valid: 30 Nov 2025 — 29 Nov 2027.',
      contact: 'Accreditation No: ACC/20/07/00029'
    },
    {
      icon: <CheckCircle2 className="w-7 h-7 text-brand-gold" />,
      title: 'SANS 10142-1 Compliance',
      value: 'Certificate of Compliance (COC)',
      detail: 'Issued on every installation via registered Electrical Contracting Board (ECB) electrician.',
      contact: 'ECB Registered'
    }
  ];

  return (
    <section
      id="credentials"
      className="py-24 bg-brand-ivory dark:bg-brand-charcoal/30 border-y border-brand-forest/10 dark:border-white/10 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-gold-dark dark:text-brand-gold block mb-3">
            STATUTORY DUE DILIGENCE
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-4 dark:text-brand-ivory text-brand-forest">
            Verified Credentials
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mb-4" />
          <p className="text-slate-600 dark:text-brand-sage font-light max-w-2xl mx-auto text-sm leading-relaxed">
            Third-party verifiable statutory registrations and safety accreditations for corporate and public sector compliance evaluators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((cred, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="bg-white dark:bg-brand-black p-8 rounded-sm border border-brand-forest/10 dark:border-white/10 hover:border-brand-gold dark:hover:border-brand-gold transition-colors group relative overflow-hidden flex flex-col h-full"
            >
              <div className="mb-6 bg-brand-gold/10 w-14 h-14 rounded-sm flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-300">
                {React.cloneElement(cred.icon, {
                  className:
                    'w-7 h-7 text-brand-gold-dark dark:text-brand-gold group-hover:text-brand-black transition-colors'
                })}
              </div>

              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-brand-sage mb-2">
                {cred.title}
              </h3>
              <p className="text-xl font-serif font-semibold dark:text-brand-ivory text-brand-forest mb-3 tabular-nums">
                {cred.value}
              </p>
              <p className="text-sm text-slate-600 dark:text-brand-sage/90 font-light leading-relaxed mb-6 flex-grow">
                {cred.detail}
              </p>

              <div className="mt-auto pt-4 border-t border-brand-forest/10 dark:border-white/5">
                <p className="text-xs font-mono text-brand-gold-dark dark:text-brand-gold break-words tabular-nums">
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
