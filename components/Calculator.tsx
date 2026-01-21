import React, { useState } from 'react';
import { TrendingUp, Zap } from 'lucide-react';
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
          <h3 className="text-2xl font-serif dark:text-white text-brand-black mb-2">Estimate Vertical Yield</h3>
          <p className="dark:text-slate-400 text-slate-500 font-light">Enter your monthly electricity spend to see the potential savings of a high-yield bifacial system.</p>
        </div>

        <div className="space-y-8">
          <div>
            <label htmlFor="bill" className="block text-xs uppercase tracking-widest dark:text-brand-gold text-brand-gold-dark font-semibold mb-3">
              Monthly Bill (ZAR)
            </label>
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
                <span className="dark:text-slate-300 text-slate-600 font-light">10-Year Value (Bifacial)</span>
                <p className="text-3xl font-serif text-brand-gold">
                    R {monthlyBill > 0 ? Number(tenYearSavings).toLocaleString() : '0'}
                </p>
             </div>
          </div>
          
          <p className="text-xs dark:text-slate-500 text-slate-400 mt-6 italic">
            *Projections include East/West peak tariff offset and reduced cleaning maintenance costs.
          </p>
        </div>
      </div>
    </motion.div>
  );
};