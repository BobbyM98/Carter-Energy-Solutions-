import React, { useState } from 'react';
import { TrendingUp, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const Calculator: React.FC = () => {
  const [bill, setBill] = useState<string>('');
  
  const monthlyBill = parseFloat(bill.replace(/[^0-9.]/g, '')) || 0;
  const yearlySavings = (monthlyBill * 12 * 0.40).toFixed(0);
  const tenYearSavings = (monthlyBill * 12 * 0.40 * 10 * 1.1).toFixed(0);

  return (
    <motion.div 
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
          <h3 className="text-2xl font-serif dark:text-white text-brand-black mb-2">Estimate Savings</h3>
          <p className="dark:text-slate-400 text-slate-500 font-light">Enter your monthly electricity spend to see the value of independence.</p>
        </div>

        <div className="space-y-8">
          <div>
            <label htmlFor="bill" className="block text-xs uppercase tracking-widest dark:text-brand-gold text-brand-gold-dark font-semibold mb-3">
              Monthly Bill (ZAR)
            </label>
            <div className="relative">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 dark:text-white text-brand-black text-xl font-light">R</span>
              <input
                type="number"
                id="bill"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                placeholder="2500"
                className="w-full bg-transparent border-b border-slate-300 dark:border-slate-700 py-2 pl-6 pr-4 dark:text-white text-brand-black placeholder-slate-400 focus:outline-none focus:border-brand-gold text-3xl font-light transition-all"
              />
            </div>
          </div>

          <div className="space-y-6 pt-4">
             <div className="flex items-center justify-between group/item">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-gold/10 rounded-full">
                        <TrendingUp className="w-5 h-5 text-brand-gold" />
                    </div>
                    <span className="dark:text-slate-300 text-slate-600 font-light">Annual Savings</span>
                </div>
                <p className="text-3xl font-serif dark:text-white text-brand-black">
                    R {monthlyBill > 0 ? Number(yearlySavings).toLocaleString() : '0'}
                </p>
             </div>
             
             <div className="h-px bg-slate-200 dark:bg-white/10"></div>

             <div className="flex items-center justify-between">
                <span className="dark:text-slate-300 text-slate-600 font-light">10-Year Value</span>
                <p className="text-3xl font-serif text-brand-gold">
                    R {monthlyBill > 0 ? Number(tenYearSavings).toLocaleString() : '0'}
                </p>
             </div>
          </div>
          
          <p className="text-xs dark:text-slate-500 text-slate-400 mt-6 italic">
            *Projections are estimates based on standard Tier-1 equipment performance and current escalation rates.
          </p>
        </div>
      </div>
    </motion.div>
  );
};