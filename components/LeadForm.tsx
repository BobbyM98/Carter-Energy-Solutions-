import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

export const LeadForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    role: '',
    interestType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
      setFormState({ name: '', company: '', email: '', role: '', interestType: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  if (isSuccess) {
    return (
      <div className="h-full min-h-[500px] flex flex-col items-center justify-center dark:bg-brand-black bg-white p-12 rounded-sm border border-brand-gold/30 text-center shadow-2xl">
        <MotionDiv 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-brand-gold/10 rounded-full flex items-center justify-center mb-8"
        >
          <Check className="w-12 h-12 text-brand-gold" />
        </MotionDiv>
        <h3 className="text-3xl font-serif dark:text-white text-brand-black mb-4">Proposal Requested</h3>
        <p className="dark:text-slate-400 text-slate-500 max-w-xs mx-auto font-light">
          Our team will contact you shortly with your customized proposal and compliance pack.
        </p>
      </div>
    );
  }

  return (
    <MotionDiv 
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="dark:bg-brand-black bg-white p-8 md:p-12 rounded-sm border dark:border-white/10 border-slate-200 shadow-2xl dark:shadow-black/50 h-full flex flex-col justify-center"
    >
      <div className="mb-10">
        <h3 className="text-2xl font-serif dark:text-white text-brand-black mb-2">Request a Proposal</h3>
        <p className="dark:text-slate-400 text-slate-500 font-light">Partner with a B-BBEE Level 1 Contributor.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs uppercase tracking-widest dark:text-slate-500 text-slate-400 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formState.name}
              onChange={handleChange}
              className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg py-3 px-4 dark:text-white text-brand-black placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-xs uppercase tracking-widest dark:text-slate-500 text-slate-400 mb-2">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formState.company}
              onChange={handleChange}
              className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg py-3 px-4 dark:text-white text-brand-black placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
              placeholder="Company Name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-widest dark:text-slate-500 text-slate-400 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formState.email}
              onChange={handleChange}
              className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg py-3 px-4 dark:text-white text-brand-black placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
              placeholder="jane@company.com"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-xs uppercase tracking-widest dark:text-slate-500 text-slate-400 mb-2">Role</label>
            <input
              type="text"
              id="role"
              name="role"
              required
              value={formState.role}
              onChange={handleChange}
              className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg py-3 px-4 dark:text-white text-brand-black placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
              placeholder="ESD Manager"
            />
          </div>
        </div>

        <div>
          <label htmlFor="interestType" className="block text-xs uppercase tracking-widest dark:text-slate-500 text-slate-400 mb-2">Interest Type</label>
          <div className="relative">
            <select
                id="interestType"
                name="interestType"
                required
                value={formState.interestType}
                onChange={handleChange}
                className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg py-3 px-4 dark:text-white text-brand-black placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all appearance-none"
            >
                <option value="" disabled>Select Interest</option>
                <option value="ESD">ESD — Enterprise & Supplier Development</option>
                <option value="CSI">CSI — Corporate Social Investment</option>
                <option value="Public Tender">Public Tender / Government</option>
                <option value="Private Tender">Private Tender / Corporate</option>
                <option value="Direct Commercial">Direct Commercial Installation</option>
                <option value="DFI Funding">DFI / Investment Partnership</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-gold text-brand-black py-4 rounded-sm font-bold text-sm tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 mt-8 disabled:opacity-70 disabled:cursor-not-allowed uppercase"
        >
          {isSubmitting ? (
            'Processing...'
          ) : (
            <>
              Request ESD/CSI Proposal <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </MotionDiv>
  );
};