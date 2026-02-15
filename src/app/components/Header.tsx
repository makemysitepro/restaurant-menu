import React from 'react';
import { Star, ChefHat } from 'lucide-react';
import { motion } from 'motion/react';
import { RESTAURANT_INFO } from '../data';

interface HeaderProps {
  isDark: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isDark }) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-300 bg-theme/90
        ${isDark
          ? 'border-neutral-800 text-neutral-100'
          : 'border-neutral-200 text-neutral-900'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-theme-accent text-brand">
            <ChefHat size={24} />
          </div>
          <div>
            <h1 className="font-serif text-lg font-bold tracking-tight leading-none">
              {RESTAURANT_INFO.name}
            </h1>
            <p className={`text-xs font-medium mt-1 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
              Scan • Browse • Order
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Rating Badge */}
          <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold bg-theme-accent text-brand">
            <Star size={12} fill="currentColor" />
            <span>4.8</span>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
