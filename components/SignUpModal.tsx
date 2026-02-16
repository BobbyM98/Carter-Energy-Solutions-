import React, { useState } from 'react';
import { X, User, Mail, Phone, MapPin, Lock, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    province: '',
    password: ''
  });
  
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    // Standard email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing again
    if (name === 'email' && emailError) {
      setEmailError('');
    }
  };

  const handleEmailBlur = () => {
    if (formData.email && !validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation check before submission
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            province: '',
            password: ''
        });
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
              className="bg-white dark:bg-brand-black w-full max-w-md rounded-sm shadow-2xl border border-slate-200 dark:border-brand-gold/20 overflow-hidden relative"
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-brand-black dark:hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {isSuccess ? (
                <div className="p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </motion.div>
                  <h3 className="text-2xl font-serif font-bold mb-2 dark:text-white text-slate-900">Welcome Aboard</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    Your account has been created. A verification email has been sent to your inbox.
                  </p>
                </div>
              ) : (
                <div className="p-8 md:p-10">
                  <div className="mb-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2 dark:text-white text-brand-black">Create Account</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-light">
                      Join Carter Energy for exclusive yield reports and priority support.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Full Name"
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-md py-3 pl-10 pr-4 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none dark:text-white transition-colors"
                      />
                    </div>

                    <div className="relative">
                      <Mail className={`absolute left-3 top-3.5 w-4 h-4 ${emailError ? 'text-red-500' : 'text-slate-400'}`} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleEmailBlur}
                        required
                        placeholder="Email Address"
                        className={`w-full bg-slate-50 dark:bg-white/5 border ${emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-white/10 focus:border-brand-gold focus:ring-brand-gold'} rounded-md py-3 pl-10 pr-4 text-sm focus:ring-1 outline-none dark:text-white transition-colors`}
                      />
                      {emailError && (
                        <p className="absolute -bottom-5 left-0 text-[10px] text-red-500 font-medium ml-1">{emailError}</p>
                      )}
                    </div>

                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Phone Number"
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-md py-3 pl-10 pr-4 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none dark:text-white transition-colors"
                      />
                    </div>

                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                      <select
                        name="province"
                        value={formData.province}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-md py-3 pl-10 pr-4 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none dark:text-white text-slate-500 appearance-none transition-colors"
                      >
                        <option value="">Select Province</option>
                        <option value="GP">Gauteng</option>
                        <option value="WC">Western Cape</option>
                        <option value="KZN">KwaZulu-Natal</option>
                        <option value="BW">Botswana</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="relative">
                      <Lock className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="Create Password"
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-md py-3 pl-10 pr-4 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none dark:text-white transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-gold hover:bg-brand-gold-dark text-brand-black font-bold py-4 rounded-sm transition-all duration-300 mt-6 disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? 'Creating Account...' : (
                        <>
                          Sign Up <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-xs text-center text-slate-400 dark:text-slate-500 mt-4">
                      Already have an account? <a href="#" className="text-brand-gold hover:underline">Log in</a>
                    </p>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};