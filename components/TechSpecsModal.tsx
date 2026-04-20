import React, { useState } from 'react';
import { X, FileText, Download, Shield, Wind, Zap, Scale, Anchor, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
          {/* Backdrop - Deep iOS Frosted Blur */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-xl z-[60] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Modal - Liquid Glass Panel */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.25 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="w-full max-w-2xl overflow-hidden relative flex flex-col max-h-[90vh] bg-white/80 dark:bg-[#111111]/80 backdrop-blur-2xl rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_16px_48px_0_rgba(0,0,0,0.5)] border border-slate-200/50 dark:border-white/10"
            >
              {/* Inner subtle glow for liquid feel */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]" />

              {/* Header */}
              <div className="p-6 relative z-10 flex justify-between items-start border-b border-black/[0.05] dark:border-white/[0.05]">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-brand-gold/20 dark:bg-brand-gold/10 text-brand-gold-dark dark:text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em] rounded-full backdrop-blur-sm border border-brand-gold/30">Industrial Series</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-medium dark:text-white text-slate-900 tracking-tight">Vert-X Specs</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 font-medium">Technical datasheet for lightweight vertical racking.</p>
                </div>
                <button 
                  onClick={onClose}
                  aria-label="Close modal"
                  className="p-2 text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 rounded-full backdrop-blur-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-0 overflow-y-auto relative z-10 custom-scrollbar">
                <div className="flex flex-col">
                    {specs.map((spec, idx) => (
                        <div key={idx} className="border-b border-black/[0.05] dark:border-white/[0.05] last:border-b-0">
                            <button
                              onClick={() => handleToggle(idx)}
                              className="w-full flex items-center justify-between p-5 md:p-6 bg-transparent hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors focus:outline-none group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-brand-gold-dark dark:text-brand-gold shadow-sm border border-black/5 dark:border-white/5 group-hover:scale-105 transition-transform">
                                        {spec.icon}
                                    </div>
                                    <span className="text-sm uppercase tracking-widest font-semibold dark:text-slate-200 text-slate-800">{spec.label}</span>
                                </div>
                                <MotionDiv
                                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                                  transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                                >
                                  <ChevronDown className={`w-5 h-5 ${openIndex === idx ? 'text-brand-gold' : 'text-slate-300 dark:text-slate-600'}`} />
                                </MotionDiv>
                            </button>
                            
                            <AnimatePresence initial={false}>
                                {openIndex === idx && (
                                    <MotionDiv
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        className="overflow-hidden bg-black/[0.01] dark:bg-white/[0.01]"
                                    >
                                        <div className="px-5 md:px-[72px] pb-6 pt-1">
                                            <div className="text-[22px] font-medium tracking-tight dark:text-white text-slate-900 mb-2">{spec.value}</div>
                                            <div className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{spec.sub}</div>
                                        </div>
                                    </MotionDiv>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="p-6 md:p-8 space-y-4 bg-slate-50/50 dark:bg-black/20 mt-4 border-t border-black/[0.05] dark:border-white/[0.05]">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Detailed Description</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                        The Carter Vert-X Industrial system is engineered specifically for roofs that cannot support standard ballasted solar systems. By utilizing an aerodynamic vertical profile, we eliminate the need for heavy concrete blocks. The system is chemically bonded to the roof surface using Sika® structural adhesive, preserving the roof's waterproofing warranty by avoiding all penetrations.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                        The vertical orientation prevents dust accumulation, making it ideal for industrial zones with high particulate fallout.
                    </p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 relative z-10 border-t border-black/[0.05] dark:border-white/[0.05] flex flex-col sm:flex-row gap-4 justify-between items-center bg-white/50 dark:bg-black/40 backdrop-blur-3xl">
                 <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider text-center sm:text-left">
                    *Engineering approval required
                 </div>
                 <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black font-semibold rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.15)] dark:shadow-[0_4px_14px_0_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] transition-all text-sm w-full sm:w-auto justify-center">
                    <Download className="w-4 h-4" />
                    Download Datasheet
                 </button>
              </div>
            </MotionDiv>
          </MotionDiv>
        </>
      )}
    </AnimatePresence>
  );
};