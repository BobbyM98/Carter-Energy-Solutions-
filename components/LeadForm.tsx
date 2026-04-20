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

        <div className="mt-6 text-center">
          <p className="text-xs dark:text-slate-500 text-slate-400 mb-2 uppercase tracking-widest">Or speak to us directly</p>
          <a 
            href="https://wa.me/27602924523" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-gold hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" stroke="none" className="text-[#25D366]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            WhatsApp us at +27 60 292 4523
          </a>
        </div>
      </form>
    </MotionDiv>
  );
};