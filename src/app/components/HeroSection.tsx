import React from 'react';
import { motion } from 'motion/react';
import { RESTAURANT_INFO } from '../data';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  isDark: boolean;
  onScrollToMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isDark, onScrollToMenu }) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Banner */}
      <div className="absolute inset-0 h-[400px] w-full">
        <ImageWithFallback
          src={RESTAURANT_INFO.bannerImage}
          alt="Banner"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-12 flex flex-col items-center text-center">
        {/* Logo/Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
        >
          <div className="h-16 w-16 rounded-full bg-brand flex items-center justify-center text-white text-3xl font-serif font-bold shadow-inner">
            {RESTAURANT_INFO.name.charAt(0)}
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif font-bold text-white mb-2 drop-shadow-lg"
        >
          {RESTAURANT_INFO.name}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-white/90 font-light mb-8 max-w-md drop-shadow-md"
        >
          {RESTAURANT_INFO.tagline}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={onScrollToMenu}
            className="px-8 py-3 bg-brand text-white rounded-xl font-bold uppercase tracking-wider shadow-xl shadow-[var(--brand-color)]/50 hover:bg-[var(--brand-color-hover)] transition-all transform hover:-translate-y-1 hover:shadow-2xl relative z-10"
          >
            View Menu
          </button>
        </motion.div>
      </div>

      {/* Decorative gradient fade at bottom - blends with theme background */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--theme-bg-light)] dark:from-[var(--theme-bg-dark)] to-transparent" />
    </div>
  );
};
