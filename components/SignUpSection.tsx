import React from 'react';
import { ArrowRight, UserPlus, Gift } from 'lucide-react';
import { m as motion } from 'framer-motion';

const MotionDiv = motion.div as any;

interface SignUpSectionProps {
  onSignUp: () => void;
  onReferFriend?: () => void;
}

export const SignUpSection: React.FC<SignUpSectionProps> = ({ onSignUp, onReferFriend }) => {
  return (
    <section className="py-20 bg-brand-gold relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-black rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-black/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-brand-black font-bold text-xs uppercase tracking-widest mb-6 border border-brand-black/5">
              <Gift className="w-4 h-4" />
              Special Rewards Campaign
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-black mb-6 leading-tight">
            Ready to secure your energy future?
          </h2>
          
          <p className="text-lg md:text-xl text-brand-black/80 mb-10 max-w-2xl mx-auto font-medium">
            Create a profile to access detailed yield reports, or refer a friend to claim a free air fryer OR R1000 cash bonus upon successful installation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onSignUp}
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 bg-brand-black text-white px-8 py-4.5 rounded-sm font-bold text-base transition-all hover:bg-neutral-800 shadow-xl"
            >
              Sign Up Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {onReferFriend && (
              <button
                onClick={onReferFriend}
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 bg-transparent border-2 border-brand-black text-brand-black px-8 py-4.5 rounded-sm font-bold text-base transition-all hover:bg-brand-black hover:text-white"
              >
                <Gift className="w-4 h-4 stroke-[2.5]" />
                <span>Refer & Earn R1000</span>
              </button>
            )}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};