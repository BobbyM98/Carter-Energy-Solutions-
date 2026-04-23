import React from 'react';
import { X, Zap, Lightbulb, Droplets, Ruler, Hammer, Settings, FileCheck, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div as any;

interface AgriKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PUMP_DATA = [
  { hp: "0.5 HP", kw: "0.37 kW", config: "2 Panels (Series)", power: "1,100 W", fence: "~4.5 m" },
  { hp: "0.75 HP", kw: "0.55 kW", config: "3 Panels (Series)", power: "1,650 W", fence: "~7.0 m" },
  { hp: "1.0 HP", kw: "0.75 kW", config: "4 Panels (Series)", power: "2,200 W", fence: "~9.2 m" },
  { hp: "1.5 HP", kw: "1.1 kW", config: "6 Panels (2x3 Series)", power: "3,300 W", fence: "~14 m" },
];

export const AgriKitModal: React.FC<AgriKitModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
              className="bg-white dark:bg-brand-black w-full max-w-3xl rounded-sm shadow-2xl border border-slate-200 dark:border-brand-gold/20 overflow-hidden relative flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-100 dark:border-white/10 flex justify-between items-start bg-slate-50 dark:bg-white/5">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-green-600/10 text-green-600 dark:text-green-400 border border-green-600/20 text-xs font-bold uppercase tracking-widest rounded-sm">Agricultural Series</span>
                    </div>
                    <h2 className="text-2xl font-serif font-bold dark:text-white text-brand-black">Solar Pump & Fence Kits</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">SANS/NDB Compliant. Irrigation-Ready Design.</p>
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

                {/* Regional Compliance & Financial Incentives */}
                <div className="p-8 border-b border-slate-100 dark:border-white/5 bg-brand-gold/5">
                    <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest dark:text-white text-slate-900 mb-4">
                        <FileCheck className="w-4 h-4 text-brand-gold" /> 
                        Financial Compliance & Incentives
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-white dark:bg-brand-black rounded-sm border border-brand-gold/20 shadow-sm">
                            <div className="text-xs font-bold text-slate-500 uppercase mb-1">South Africa (2026)</div>
                            <div className="text-brand-gold font-bold text-lg mb-1 flex items-center gap-2">
                                Section 12B & 12L <ShieldCheck className="w-4 h-4" />
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">
                                <strong>100% Upfront Deduction</strong> (&lt;1MW). 12L Efficiency incentives extended to Dec 2030.
                            </div>
                        </div>
                        <div className="p-4 bg-white dark:bg-brand-black rounded-sm border border-brand-gold/20 shadow-sm">
                            <div className="text-xs font-bold text-slate-500 uppercase mb-1">Botswana</div>
                            <div className="text-brand-gold font-bold text-lg mb-1 flex items-center gap-2">
                                65% NDB Subsidy <ShieldCheck className="w-4 h-4" />
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">
                                National Development Bank agricultural grant compliant system design.
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* 1. Recommended Hardware */}
                <div className="p-8 border-b border-slate-100 dark:border-white/5">
                    <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest dark:text-white text-slate-900 mb-6">
                        <Zap className="w-4 h-4 text-brand-gold" /> 
                        1. Core Components
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-brand-gold mb-2 text-sm">Vert-X PV Modules</h4>
                            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
                                <li>Vert-X 570W+ Bifacial Series</li>
                                <li>Double-Glass Framed Design</li>
                                <li>N-Type High Albedo Cells</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-brand-gold mb-2 text-sm">The Controller (The Brains)</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                                <strong>Solar VFD</strong> required. Takes DC power to "soft start" the pump.
                            </p>
                            <div className="text-xs p-3 bg-slate-100 dark:bg-white/5 rounded-sm border-l-2 border-brand-gold dark:text-slate-400 space-y-2">
                                <p>
                                    <strong className="block text-slate-700 dark:text-slate-200">Critical Requirement:</strong> 
                                    Must have a wide MPPT Voltage Range to handle vertical voltage drops at noon without tripping.
                                </p>
                                <p>
                                    <strong className="block text-slate-700 dark:text-slate-200">Eskom Demand Side Management:</strong> 
                                    Shift heavy pumping loads to daytime solar peaks to eliminate expensive grid consumption.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. The Structure */}
                <div className="p-8 bg-slate-50 dark:bg-white/[0.02] border-b border-slate-100 dark:border-white/5">
                    <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest dark:text-white text-slate-900 mb-6">
                        <Hammer className="w-4 h-4 text-brand-gold" /> 
                        2. The Structure ("The Fence")
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="p-4 bg-white dark:bg-brand-black border border-slate-200 dark:border-white/10 rounded-sm">
                            <div className="text-brand-gold mb-2"><Ruler className="w-5 h-5" /></div>
                            <div className="font-bold text-sm mb-1 dark:text-white">Post Material</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">2.4m Treated Gum Poles (Standard) or Galvanized I-Beams (Premium).</div>
                        </div>
                        <div className="p-4 bg-white dark:bg-brand-black border border-slate-200 dark:border-white/10 rounded-sm">
                            <div className="text-brand-gold mb-2"><Settings className="w-5 h-5" /></div>
                            <div className="font-bold text-sm mb-1 dark:text-white">Mounting</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">Landscape mode. Stacked 1-high or 2-high between posts depending on pump size.</div>
                        </div>
                        <div className="p-4 bg-white dark:bg-brand-black border border-slate-200 dark:border-white/10 rounded-sm">
                            <div className="text-brand-gold mb-2"><Ruler className="w-5 h-5" /></div>
                            <div className="font-bold text-sm mb-1 dark:text-white">Clearance</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">Top @ 2.1m. Bottom @ 600mm (allows small livestock/grass to pass).</div>
                        </div>
                    </div>
                </div>

                {/* 3. Pump Sizing Table */}
                <div className="p-8 border-b border-slate-100 dark:border-white/5">
                     <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest dark:text-white text-slate-900 mb-6">
                        <Droplets className="w-4 h-4 text-brand-gold" /> 
                        3. Pump Kit Configurations (550W+ Panels)
                    </h3>
                    <div className="overflow-x-auto border border-slate-200 dark:border-white/10 rounded-sm">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 font-bold uppercase text-xs">
                                <tr>
                                    <th className="p-3">Pump Size</th>
                                    <th className="p-3">Power</th>
                                    <th className="p-3">Configuration</th>
                                    <th className="p-3">Total PV</th>
                                    <th className="p-3">Fence Length</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                                {PUMP_DATA.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-white/5">
                                        <td className="p-3 font-bold">{row.hp}</td>
                                        <td className="p-3">{row.kw}</td>
                                        <td className="p-3">{row.config}</td>
                                        <td className="p-3 text-brand-gold font-bold">{row.power}</td>
                                        <td className="p-3">{row.fence}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 4. The Kalahari Secret */}
                <div className="p-8 bg-brand-gold/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Lightbulb className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                        <h3 className="flex items-center gap-2 text-lg font-serif font-bold dark:text-white text-brand-black mb-4">
                            <Lightbulb className="w-5 h-5 text-brand-gold-dark dark:text-brand-gold" /> 
                            The "Kalahari Secret" (Installation Tip)
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-4 font-medium italic">
                            "Clear the grass, expose the sand."
                        </p>
                        <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                            <p>
                                <strong className="text-brand-black dark:text-white">The Physics:</strong> White/Grey Kalahari sand has extremely high albedo (reflectivity).
                            </p>
                            <p>
                                <strong className="text-brand-black dark:text-white">The Trick:</strong> Instruct the farmer to scrape the ground white for 1 meter on either side of the fence. That reflected light hits the backside of the N-Type bifacial panels.
                            </p>
                            <p className="font-bold text-brand-gold-dark dark:text-brand-gold mt-2">
                                Result: Boosts current by 20%+. This is essentially "free" energy for the pump.
                            </p>
                        </div>
                    </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-slate-100 dark:border-white/10 bg-slate-50 dark:bg-brand-black flex flex-col sm:flex-row gap-4 justify-between items-center">
                 <div className="text-xs text-slate-400">
                    *Pilot Kit available: 4x Vert-X 555W Bifacial + 2.2kW VFD + Mounting.
                 </div>
                 <button className="px-8 py-3 bg-brand-gold text-brand-black font-bold rounded-sm hover:bg-white hover:text-brand-black transition-all text-sm w-full sm:w-auto shadow-lg">
                    Order Pilot Kit
                 </button>
              </div>
            </MotionDiv>
          </MotionDiv>
        </>
      )}
    </AnimatePresence>
  );
};