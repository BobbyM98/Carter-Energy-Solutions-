import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const LeadForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    area: ''
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
      setFormState({ name: '', phone: '', area: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  if (isSuccess) {
    return (
      <div className="h-full min-h-[500px] flex flex-col items-center justify-center dark:bg-brand-black bg-white p-12 rounded-sm border border-brand-gold/30 text-center shadow-2xl">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-brand-gold/10 rounded-full flex items-center justify-center mb-8"
        >
          <Check className="w-12 h-12 text-brand-gold" />
        </motion.div>
        <h3 className="text-3xl font-serif dark:text-white text-brand-black mb-4">Request Received</h3>
        <p className="dark:text-slate-400 text-slate-500 max-w-xs mx-auto font-light">
          We will be in touch shortly to curate your energy solution.
        </p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="dark:bg-brand-black bg-white p-8 md:p-12 rounded-sm border dark:border-white/10 border-slate-200 shadow-2xl dark:shadow-black/50 h-full flex flex-col justify-center"
    >
      <div className="mb-10">
        <h3 className="text-2xl font-serif dark:text-white text-brand-black mb-2">Request Consultation</h3>
        <p className="dark:text-slate-400 text-slate-500 font-light">Provide your details for a bespoke proposal.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="group">
          <label htmlFor="name" className="block text-xs uppercase tracking-widest dark:text-slate-500 text-slate-400 group-hover:text-brand-gold transition-colors mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formState.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-slate-300 dark:border-slate-700 py-3 dark:text-white text-brand-black placeholder-slate-500 focus:outline-none focus:border-brand-gold transition-all"
            placeholder="John Doe"
          />
        </div>

        <div className="group">
          <label htmlFor="phone" className="block text-xs uppercase tracking-widest dark:text-slate-500 text-slate-400 group-hover:text-brand-gold transition-colors mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formState.phone}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-slate-300 dark:border-slate-700 py-3 dark:text-white text-brand-black placeholder-slate-500 focus:outline-none focus:border-brand-gold transition-all"
            placeholder="082 123 4567"
          />
        </div>

        <div className="group">
          <label htmlFor="area" className="block text-xs uppercase tracking-widest dark:text-slate-500 text-slate-400 group-hover:text-brand-gold transition-colors mb-2">Area / Suburb</label>
          <input
            type="text"
            id="area"
            name="area"
            required
            value={formState.area}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-slate-300 dark:border-slate-700 py-3 dark:text-white text-brand-black placeholder-slate-500 focus:outline-none focus:border-brand-gold transition-all"
            placeholder="Sandton, Johannesburg"
          />
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
              Request Quote <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};