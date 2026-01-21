import React from 'react';
import { X, FileText, Download, Shield, Wind, Zap, Scale, Anchor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TechSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechSpecsModal: React.FC<TechSpecsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const specs = [
    { label: "System Weight", value: "< 10 kg/m²", sub: "Includes panels & racking", icon: <Scale className="w-4 h-4" /> },
    { label: "Wind Load", value: "Hurricane Rated", sub: "Up to 180 km/h", icon: <Wind className="w-4 h-4" /> },
    { label: "Mounting Method", value: "Chemical Bond", sub: "No roof penetration", icon: <Anchor className="w-4 h-4" /> },
    { label: "Module Type", value: "Bifacial Only", sub: "Glass-Glass / Framed", icon: <Zap className="w-4 h-4" /> },
    { label: "Tilt Angle", value: "90° (Vertical)", sub: "Self-cleaning angle", icon: <Shield className="w-4 h-4" /> },
    { label: "Warranty", value: "25 Years", sub: "Linear Performance", icon: <FileText className="w-4 h-4" /> },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
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
              <div className="p-8 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {specs.map((spec, idx) => (
                        <div key={idx} className="p-4 rounded-sm border border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-brand-charcoal hover:border-brand-gold/30 transition-colors">
                            <div className="flex items-center gap-2 mb-2 text-brand-gold">
                                {spec.icon}
                                <span className="text-xs uppercase tracking-wider font-semibold">{spec.label}</span>
                            </div>
                            <div className="text-xl font-bold dark:text-white text-slate-900">{spec.value}</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{spec.sub}</div>
                        </div>
                    ))}
                </div>

                <div className="space-y-4">
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
                 <button className="flex items-center gap-2 px-6 py-3 bg-brand-gold text-brand-black font-bold rounded-sm hover:bg-white hover:text-brand-black transition-all text-sm w-full sm:w-auto justify-center">
                    <Download className="w-4 h-4" />
                    Download Full Datasheet (PDF)
                 </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};