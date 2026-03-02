import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Landmark, FileText, Factory, HandCoins } from 'lucide-react';

const MotionDiv = motion.div as any;

export const RevenueStreams: React.FC = () => {
  const streams = [
    {
      icon: <Building2 className="h-8 w-8 text-brand-gold" strokeWidth={1.5} />,
      title: "ESD — Enterprise & Supplier Development",
      description: "Every R1 you invest with Carter Energy Solutions generates R1.35–R1.50 in B-BBEE scorecard recognition. No other solar installer in SA can offer Level 1 status and vertical bifacial technology simultaneously.",
      target: "ESD Managers, Sustainability Directors",
      cta: "Request ESD Proposal"
    },
    {
      icon: <Users className="h-8 w-8 text-brand-gold" strokeWidth={1.5} />,
      title: "CSI — Corporate Social Investment",
      description: "Measurable, visible community impact. Solar installations on community facilities your company can name in your sustainability report. Beneficiary count, kWh generated, and carbon offset data delivered.",
      target: "CSI Managers, Foundation Directors",
      cta: "Request CSI Proposal"
    },
    {
      icon: <Landmark className="h-8 w-8 text-brand-gold" strokeWidth={1.5} />,
      title: "Public Tenders",
      description: "Level 1 B-BBEE supplier. 20/10 preference points under PPPFA. Registered on Central Supplier Database. Qualified for all government and parastatal solar and energy infrastructure procurement.",
      target: "Government & Parastatal Procurement",
      cta: "Download Compliance Pack"
    },
    {
      icon: <FileText className="h-8 w-8 text-brand-gold" strokeWidth={1.5} />,
      title: "Private Tenders",
      description: "Respond to your RFP/RFQ within 5 business days. Full compliance pack included: CIPC, SARS, B-BBEE affidavit, technical certifications. SANS 10142-1 compliant. COC issued on every installation.",
      target: "Corporate Procurement, Developers",
      cta: "Add Us to Vendor Database"
    },
    {
      icon: <Factory className="h-8 w-8 text-brand-gold" strokeWidth={1.5} />,
      title: "Direct Commercial Installations",
      description: "Zero productive land consumed. Fence-line and perimeter installation. Professional installation with Certificate of Compliance. CETA-certified team. Competitive pricing for SMEs and Farms.",
      target: "Business Owners, Farm Managers",
      cta: "Get in Touch"
    },
    {
      icon: <HandCoins className="h-8 w-8 text-brand-gold" strokeWidth={1.5} />,
      title: "Government DFI Funding",
      description: "We are a government-fundable, investment-ready business. We actively partner with development finance institutions (SEFA, DBSA, IDC, SEDA, NEF) for grants, soft loans, and blended finance.",
      target: "DFI Evaluators, Investment Partners",
      cta: "Request Company Profile"
    }
  ];

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('get-quote');
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
    <section id="services" className="py-24 border-t dark:border-white/5 border-slate-100 transition-colors duration-500 dark:bg-brand-black bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 dark:text-white text-slate-900">Our Services & Revenue Streams</h2>
           <div className="h-0.5 w-16 bg-brand-gold mx-auto mb-4"></div>
           <p className="text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto">
             Partner with a B-BBEE Level 1 Contributor. We deliver high-yield solar solutions across six core channels.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {streams.map((stream, index) => (
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              key={index} 
              className="group p-8 rounded-sm border dark:border-white/5 border-slate-200 dark:hover:border-brand-gold/30 hover:border-brand-gold/50 dark:bg-brand-charcoal/50 bg-slate-50 hover:shadow-2xl hover:shadow-brand-gold/5 transition-all duration-500 flex flex-col items-start h-full"
            >
              <div className="mb-6 bg-transparent w-fit p-0 group-hover:scale-110 transition-transform duration-500">
                {stream.icon}
              </div>
              <h3 className="text-xl font-serif dark:text-white text-brand-black mb-3">{stream.title}</h3>
              <p className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-4">For: {stream.target}</p>
              <p className="dark:text-slate-400 text-slate-700 leading-relaxed font-light mb-8 flex-grow text-sm">
                {stream.description}
              </p>
              <a 
                href="#get-quote"
                onClick={scrollToContact}
                className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-brand-black dark:text-white border-b border-brand-gold pb-1 hover:text-brand-gold dark:hover:text-brand-gold transition-colors"
              >
                {stream.cta}
              </a>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};
