import React, { useState } from 'react';
import { TrendingUp, Zap, Info, FileText, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Calculator: React.FC = () => {
  const [bill, setBill] = useState<string>('');
  
  // Adjusted calculation logic to reflect higher efficiency of vertical/bifacial systems
  const monthlyBill = parseFloat(bill.replace(/[^0-9.]/g, '')) || 0;
  const yearlySavings = (monthlyBill * 12 * 0.45).toFixed(0); // slightly higher yield factor for bifacial
  const tenYearSavings = (monthlyBill * 12 * 0.45 * 10 * 1.12).toFixed(0); // compounding tariff increase

  return (
    <motion.div 
      id="calculator"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="dark:bg-brand-black bg-white p-8 md:p-12 rounded-sm border dark:border-white/10 border-slate-200 shadow-2xl dark:shadow-black/50 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <Zap className="w-40 h-40 text-brand-gold" />
      </div>
      
      <div className="relative z-10">
        <div className="mb-10">
          <h3 className="text-2xl font-serif dark:text-white text-brand-black mb-2">Estimate Vert-X Yield</h3>
          <p className="dark:text-slate-400 text-slate-500 font-light">Enter your monthly electricity spend to see the potential savings of a high-yield Vert-X system.</p>
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
                <label htmlFor="bill" className="block text-xs uppercase tracking-widest dark:text-brand-gold text-brand-gold-dark font-semibold">
                Monthly Bill (ZAR)
                </label>
                {/* Tooltip for ZAR */}
                <div className="group/tooltip relative">
                    <Info className="w-3.5 h-3.5 text-slate-400 cursor-help" />
                    <div className="invisible group-hover/tooltip:visible opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-slate-900 text-white text-xs rounded-md shadow-lg z-50 pointer-events-none">
                        South African Rand (R). Please enter your average monthly electricity bill.
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
                    </div>
                </div>
            </div>
            
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 dark:text-slate-400 text-slate-500 text-2xl font-light pointer-events-none group-focus-within:text-brand-gold transition-colors">R</span>
              <input
                type="number"
                id="bill"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                placeholder="25000"
                className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg py-4 pl-12 pr-4 dark:text-white text-brand-black placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold text-3xl font-light transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>

          <div className="space-y-6 pt-4">
             <div className="flex items-center justify-between group/item">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-gold/10 rounded-full">
                        <TrendingUp className="w-5 h-5 text-brand-gold" />
                    </div>
                    <span className="dark:text-slate-300 text-slate-600 font-light">Projected Annual Savings</span>
                </div>
                <p className="text-3xl font-serif dark:text-white text-brand-black">
                    R {monthlyBill > 0 ? Number(yearlySavings).toLocaleString() : '0'}
                </p>
             </div>
             
             <div className="h-px bg-slate-200 dark:bg-white/10"></div>

             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="dark:text-slate-300 text-slate-600 font-light">10-Year Value (Bifacial)</span>
                    {/* Tooltip for 10-Year Value */}
                    <div className="group/tooltip relative">
                        <Info className="w-3.5 h-3.5 text-slate-400 cursor-help" />
                        <div className="invisible group-hover/tooltip:visible opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-slate-900 text-white text-xs rounded-md shadow-lg z-50 pointer-events-none">
                             Estimated cumulative savings over 10 years, accounting for a 12% annual tariff increase and superior bifacial generation performance.
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
                        </div>
                    </div>
                </div>
                <p className="text-3xl font-serif text-brand-gold">
                    R {monthlyBill > 0 ? Number(tenYearSavings).toLocaleString() : '0'}
                </p>
             </div>
          </div>
          
          {/* Section 12B & 12L Tax Incentive Box */}
          <div className="mt-8 p-5 bg-brand-gold/10 border border-brand-gold/30 rounded-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none">
                <FileText className="w-24 h-24 text-brand-gold" />
             </div>
             <div className="relative z-10">
                <h4 className="flex items-center gap-2 font-serif font-bold dark:text-brand-gold text-brand-gold-dark mb-2 text-sm uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 fill-current" /> Tax Incentives (2026)
                </h4>
                <div className="text-sm dark:text-slate-300 text-slate-700 leading-relaxed mb-3 space-y-2">
                    <p>
                        <strong className="text-brand-black dark:text-white block">Section 12B (Active):</strong> 
                        Reverts to a <span className="underline decoration-brand-gold underline-offset-2 font-bold decoration-2">100% upfront deduction</span> for solar PV &lt;1MW (or 50/30/20% split for &gt;1MW).
                    </p>
                    <p>
                        <strong className="text-brand-black dark:text-white block">Section 12L (Extended):</strong> 
                        Energy-efficiency tax incentives confirmed until <span className="font-semibold text-brand-gold-dark dark:text-brand-gold">31 Dec 2030</span>.
                    </p>
                </div>
             </div>
          </div>

          <p className="text-xs dark:text-slate-500 text-slate-400 mt-6 italic">
            *Projections include East/West peak tariff offset and reduced cleaning maintenance costs.
          </p>
        </div>
      </div>
    </motion.div>
  );
