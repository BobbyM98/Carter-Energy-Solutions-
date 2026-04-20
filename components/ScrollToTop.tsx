import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, animate } from 'framer-motion';

const MotionButton = motion.button as any;

export const ScrollToTop: React.FC = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check boundaries to ensure it always points correctly at extremes
      const isAtBottom = currentScrollY + window.innerHeight >= document.body.scrollHeight - 50;
      const isAtTop = currentScrollY <= 50;

      if (isAtTop) {
        setScrollDirection('down');
      } else if (isAtBottom) {
        setScrollDirection('up');
      } else {
        // Determine manual scroll direction based on scroll delta
        if (currentScrollY > lastScrollY.current + 5) {
          setScrollDirection('down');
        } else if (currentScrollY < lastScrollY.current - 5) {
          setScrollDirection('up');
        }
      }

      // Update ref
      lastScrollY.current = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const target = scrollDirection === 'up' ? 0 : document.body.scrollHeight - window.innerHeight;
    
    // Disable native CSS smooth scroll temporarily to prevent collision with JS animation (which causes jitter)
    document.documentElement.style.scrollBehavior = 'auto';

    // Super-smooth custom scrolling using framer-motion's animate function
    animate(window.scrollY, target, {
      duration: 1.2, // Fast, silky scroll
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier (easeOutQuint) for perfect butter-smooth deceleration
      onUpdate: (latest) => {
        window.scrollTo(0, latest);
      },
      onComplete: () => {
        // Restore CSS smooth scroll once JS animation completes
        document.documentElement.style.scrollBehavior = 'smooth';
      }
    });
  };

  const isUp = scrollDirection === 'up';

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <MotionButton
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          rotate: isUp ? 0 : 180 
        }}
        transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
        onClick={handleClick}
        title={isUp ? "Scroll to Top" : "Scroll to Bottom"}
        aria-label={isUp ? "Scroll to top" : "Scroll to bottom"}
        className="p-3 rounded-full bg-brand-gold text-brand-black dark:bg-brand-black dark:text-brand-gold dark:border-brand-gold/30 shadow-[0_0_20px_-5px_rgba(212,175,55,0.5)] hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.8)] hover:bg-white hover:text-brand-gold dark:hover:bg-brand-gold dark:hover:text-brand-black hover:scale-110 transition-all duration-300 group border border-transparent hover:border-brand-gold flex items-center justify-center transform origin-center"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={2.5} />
      </MotionButton>
    </div>
  );
};