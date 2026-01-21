import React from 'react';
import { ArrowRight, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';

interface SignUpSectionProps {
  onSignUp: () => void;
}

export const SignUpSection: React.FC<SignUpSectionProps> = ({ onSignUp }) => {
  return (
    <section className="py-20 bg-brand-gold relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-black rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-black/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-brand-black font-bold text-xs uppercase tracking-widest mb-6 border border-brand-black/5">
             <UserPlus className="w-4 h-4" />
             Client Portal Access
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-black mb-6 leading-tight">
            Ready to secure your energy future?
          </h2>
          
          <p className="text-lg md:text-xl text-brand-black/80 mb-10 max-w-2xl mx-auto font-medium">
            Create a profile to access detailed yield reports, track your installation progress, and get exclusive pricing on vertical solar kits.
          </p>

          <button
            onClick={onSignUp}
            className="group inline-flex items-center gap-3 bg-brand-black text-white px-10 py-5 rounded-sm font-bold text-lg transition-all hover:bg-white hover:text-brand-black shadow-xl"
          >
            Sign Up Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};