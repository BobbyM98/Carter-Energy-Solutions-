import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, ShieldCheck, Clock, Download, Building } from 'lucide-react';

const MotionDiv = motion.div as any;

export const TendersAndProcurement: React.FC = () => {
  const complianceItems = [
    "Company Profile — Carter Energy Solutions (PTY) Ltd",
    "CIPC Certificate of Incorporation (2025/852718/07)",
    "SARS Tax Clearance / Registration (9218382282)",
    "B-BBEE Level 1 EME Affidavit",
    "DLO Energy Resources Group Recommendation Letter",
    "CETA Accredited Working on Heights Certificate",
    "Subcontractor Agreement with registered ECB electrician",
    "ESD/CSI Proposal template"
  ];

  return (
    <section id="tenders" className="py-24 bg-brand-black text-white relative overflow-hidden border-y border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.2)_0%,transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <MotionDiv 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold tracking-widest uppercase mb-6">
               <Building className="w-4 h-4" />
               Public & Private Procurement
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Tender-Ready. <span className="text-brand-gold italic">Fully Compliant.</span>
            </h2>
            
            <p className="text-lg text-slate-300 font-light leading-relaxed mb-6">
              Carter Energy Solutions (PTY) Ltd is registered on the Central Supplier Database (csd.gov.za) and qualifies for <strong>20 preference points under the PPPFA</strong> as a B-BBEE Level 1 contributor.
            </p>
            
            <p className="text-lg text-slate-300 font-light leading-relaxed mb-8">
              We respond to all public and private sector RFPs within 5 business days with a full compliance pack, ensuring your procurement process is seamless and audit-proof.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-sm border border-white/10">
                  <ShieldCheck className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wide text-sm mb-1">PPPFA Level 1</h4>
                  <p className="text-xs text-slate-400">20/10 Preference Points</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-sm border border-white/10">
                  <Clock className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wide text-sm mb-1">Strict SLA</h4>
                  <p className="text-xs text-slate-400">5 Business Day Response</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:info@cenergys.space?subject=Vendor%20Database%20Registration"
                className="inline-flex justify-center items-center gap-2 bg-brand-gold text-brand-black px-8 py-4 rounded-sm font-bold transition-all hover:bg-white"
              >
                Add Us to Your Vendor Database
              </a>
            </div>
          </MotionDiv>

          <MotionDiv 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-brand-charcoal border border-white/10 p-8 md:p-10 rounded-sm shadow-2xl relative"
          >
            <div className="absolute -top-4 -right-4 bg-brand-gold text-brand-black p-3 rounded-sm shadow-lg">
              <FileCheck className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-serif font-bold mb-6">Compliance Pack Contents</h3>
            <div className="h-px w-full bg-white/10 mb-8"></div>
            
            <ul className="space-y-4 mb-10">
              {complianceItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 font-light">
                  <div className="mt-1 w-1.5 h-1.5 bg-brand-gold rounded-full flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a 
              href="mailto:info@cenergys.space?subject=Request%20Compliance%20Pack"
              className="w-full inline-flex justify-center items-center gap-2 border border-brand-gold text-brand-gold px-6 py-4 rounded-sm font-bold transition-all hover:bg-brand-gold hover:text-brand-black"
            >
              <Download className="w-4 h-4" />
              Download Our Compliance Pack
            </a>
          </MotionDiv>

        </div>
      </div>
    </section>
  );
};
