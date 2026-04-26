import React, { useState } from 'react';
import { X, FileText, Download, Shield, Wind, Zap, Scale, Anchor, ChevronDown } from 'lucide-react';
import { m as motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div as any;

interface TechSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechSpecsModal: React.FC<TechSpecsModalProps> = ({ isOpen, onClose }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!isOpen) return null;

  const specs = [
    { label: "System Weight", value: "< 10 kg/m²", sub: "Includes panels & racking, specifically designed to bypass structural loading limits of older warehouse roofs.", icon: <Scale className="w-4 h-4" /> },
    { label: "Wind Load", value: "Hurricane Rated", sub: "Aerodynamic wind-tunnel tested up to 180 km/h with negative lift coefficients.", icon: <Wind className="w-4 h-4" /> },
    { label: "Mounting Method", value: "Chemical Bond", sub: "Proprietary Sika® structural adhesive. Zero roof penetration ensuring 100% waterproofing warranty preservation.", icon: <Anchor className="w-4 h-4" /> },
    { label: "Module Type", value: "Bifacial Only", sub: "Only compatible with high-yield Glass-Glass / Framed Bifacial N-Type modules.", icon: <Zap className="w-4 h-4" /> },
    { label: "Tilt Angle", value: "90° (Vertical)", sub: "Self-cleaning angle practically eliminates soiling losses in dusty agricultural or industrial zones.", icon: <Shield className="w-4 h-4" /> },
    { label: "Warranty", value: "25 Years", sub: "25-year linear performance warranty. 10-year defect warranty on all custom racking structural components.", icon: <FileText className="w-4 h-4" /> },
  ];

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          >
            {/* Modal */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="bg-white dark:bg-brand-black w-full max-w-2xl rounded-sm shadow-2xl border border-slate-200 dark:border-brand-gold/20 overflow-hidden relative flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-100 dark:border-white/10 flex justify-between items-start bg-slate-50 dark:bg-white/5">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-brand-gold text-brand-black text-xs font-bold uppercase tracking-widest rounded-sm">Industrial Series</span>
                    </div>
                    <h2 className="text-2xl font-serif font-bold dark:text-white text-brand-black">Vert-X Industrial Specs</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Technical datasheet for lightweight vertical racking.</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-brand-black dark:hover:text-white transition-colors bg-transparent hover:bg-slate-200 dark:hover:bg-white/10 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-0 overflow-y-auto">
                <div className="border-b border-slate-100 dark:border-white/5">
                    {specs.map((spec, idx) => (
                        <div key={idx} className="border-b border-slate-100 dark:border-white/5 last:border-b-0">
                            <button
                              onClick={() => handleToggle(idx)}
                              className="w-full flex items-center justify-between p-5 md:p-6 bg-transparent hover:bg-slate-50 dark:hover:bg-white/5 transition-colors focus:outline-none"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="text-brand-gold shrink-0">
                                        {spec.icon}
                                    </div>
                                    <span className="text-sm uppercase tracking-widest font-bold dark:text-white text-slate-900">{spec.label}</span>
                                </div>
                                <MotionDiv
                                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ChevronDown className="w-5 h-5 text-slate-400" />
                                </MotionDiv>
                            </button>
                            
                            <AnimatePresence initial={false}>
                                {openIndex === idx && (
                                    <MotionDiv
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden bg-slate-50 dark:bg-brand-charcoal/50"
                                    >
                                        <div className="px-5 md:px-6 pb-6 pt-2 ml-7">
                                            <div className="text-2xl font-bold dark:text-brand-gold text-brand-gold-dark mb-2">{spec.value}</div>
                                            <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{spec.sub}</div>
                                        </div>
                                    </MotionDiv>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="p-6 md:p-8 space-y-4 bg-white dark:bg-brand-black">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-white/10 pb-2 mb-4">Detailed Description</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        The Carter Vert-X Industrial system is engineered specifically for roofs that cannot support standard ballasted solar systems. By utilizing an aerodynamic vertical profile, we eliminate the need for heavy concrete blocks. The system is chemically bonded to the roof surface using Sika® structural adhesive, preserving the roof's waterproofing warranty by avoiding all penetrations.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        The vertical orientation prevents dust accumulation, making it ideal for industrial zones with high particulate fallout.
                    </p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-slate-100 dark:border-white/10 bg-slate-50 dark:bg-brand-black flex flex-col sm:flex-row gap-4 justify-between items-center">
                 <div className="text-xs text-slate-400">
                    *Specifications subject to site engineering approval.
                 </div>
                 <button className="flex items-center gap-2 px-6 py-3 bg-brand-gold text-brand-black font-bold rounded-sm shadow-md hover:bg-white hover:text-brand-black transition-all text-sm w-full sm:w-auto justify-center">
                    <Download className="w-4 h-4" />
                    Download Full Datasheet (PDF)
                 </button>
              </div>
            </MotionDiv>
          </MotionDiv>
        </>
      )}
    </AnimatePresence>
  );
};