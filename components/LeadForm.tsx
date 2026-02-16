import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

export const LeadForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    siteType: '',
    location: ''
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
      setFormState({ name: '', phone: '', siteType: '', location: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    let value = e.target.value;

    if (e.target.name === 'phone') {
      const raw = value.replace(/\D/g, '');
      if (raw.length <= 3) {
        value = raw;
      } else if (raw.length <= 6) {
        value = `${raw.slice(0, 3)} ${raw.slice(3)}`;
      } else {
        value = `${raw.slice(0, 3)} ${raw.slice(3, 6)} ${raw.slice(6, 10)}`;
      }
    }

    setFormState({
      ...formState,
      [e.target.name]: value
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
        <h3 className="text-3xl font-serif dark:text-white text-brand-black mb-4">Audit Requested</h3>
        <p className="dark:text-slate-400 text-slate-500 max-w-xs mx-auto font-light">
          Our technical team will contact you to schedule your site feasibility assessment.
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
        <h3 className="text-2xl font-serif dark:text-white text-brand-black mb-2">Book Feasibility Audit</h3>
        <p className="dark:text-slate-400 text-slate-500 font-light">Expert analysis for complex roofs and agricultural land.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
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
          <label htmlFor="phone" className="block text-xs uppercase tracking-widest dark:text-slate-500 text-slate-400 mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formState.phone}
            onChange={handleChange}
            className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg py-3 px-4 dark:text-white text-brand-black placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
            placeholder="082 123 4567"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
             <div>
              <label htmlFor="siteType" className="block text-xs uppercase tracking-widest dark:text-slate-500 text-slate-400 mb-2">Site Type</label>
              <div className="relative">
                <select
                    id="siteType"
                    name="siteType"
                    required
                    value={formState.siteType}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg py-3 px-4 dark:text-white text-brand-black placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all appearance-none"
                >
                    <option value="" disabled>Type</option>
                    <option value="Agricultural">Farm / Agri</option>
                    <option value="Industrial">Warehouse</option>
                    <option value="Commercial">Office/Mall</option>
                    <option value="Estate">Residential</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="location" className="block text-xs uppercase tracking-widest dark:text-slate-500 text-slate-400 mb-2">Region</label>
              <div className="relative">
                <select
                    id="location"
                    name="location"
                    required
                    value={formState.location}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg py-3 px-4 dark:text-white text-brand-black placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all appearance-none"
                >
                    <option value="" disabled>Region</option>
                    <option value="GP">Gauteng</option>
                    <option value="WC">Western Cape</option>
                    <option value="KZN">KZN</option>
                    <option value="BW">Botswana</option>
                    <option value="Other">Other</option>
                </select>
              </div>
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
              Request Vert-X Audit <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </MotionDiv>
  );
};