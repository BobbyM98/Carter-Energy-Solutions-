import React, { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div as any;

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    }, 1500);
  };

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
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="bg-white dark:bg-brand-black w-full max-w-lg rounded-sm shadow-2xl border border-slate-200 dark:border-brand-gold/20 overflow-hidden relative"
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-brand-black dark:hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {isSuccess ? (
                <div className="p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
                  <MotionDiv
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </MotionDiv>
                  <h3 className="text-2xl font-serif font-bold mb-2 dark:text-white text-slate-900">Appointment Confirmed</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    We've received your request. A consultant will contact you shortly to confirm the slot.
                  </p>
                </div>
              ) : (
                <div className="p-8 md:p-10">
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2 dark:text-white text-brand-black">Book an Appointment</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-light">
                      Schedule a 15-minute consultation with a Vertical Solar Specialist.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          placeholder="Name"
                          className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-md py-3 pl-10 pr-4 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none dark:text-white"
                        />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          placeholder="Phone"
                          className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-md py-3 pl-10 pr-4 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-md py-3 pl-10 pr-4 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none dark:text-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="date"
                          required
                          className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-md py-3 pl-10 pr-4 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none dark:text-white text-slate-500"
                        />
                      </div>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                        <select
                          required
                          className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-md py-3 pl-10 pr-4 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none dark:text-white text-slate-500 appearance-none"
                        >
                          <option value="">Select Time</option>
                          <option value="morning">Morning (08:00 - 12:00)</option>
                          <option value="afternoon">Afternoon (12:00 - 16:00)</option>
                          <option value="evening">Evening (16:00 - 18:00)</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-gold hover:bg-white hover:text-brand-gold text-brand-black font-bold py-4 rounded-sm transition-all duration-300 mt-4 disabled:opacity-70"
                    >
                      {isSubmitting ? 'Scheduling...' : 'Confirm Appointment'}
                    </button>
                    
                    <p className="text-xs text-center text-slate-400 dark:text-slate-500 mt-4">
                      By booking, you agree to our privacy policy.
                    </p>
                  </form>
                </div>
              )}
            </MotionDiv>
          </MotionDiv>
        </>
      )}
    </AnimatePresence>
  );
};