import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

interface CartBarProps {
  totalItems: number;
  totalPrice: number;
  onViewCart: () => void;
  isDark: boolean;
}

export const CartBar: React.FC<CartBarProps> = ({ totalItems, totalPrice, onViewCart, isDark }) => {
  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className={`fixed bottom-0 left-0 right-0 z-50 p-4 backdrop-blur-md border-t shadow-2xl transition-colors duration-300 bg-theme/95
            ${isDark
              ? 'border-neutral-800'
              : 'border-neutral-200'
            }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full relative bg-theme-accent text-brand">
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white dark:ring-neutral-900">
                  {totalItems}
                </span>
              </div>
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  Total
                </p>
                <p className={`text-lg font-bold leading-none ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                  ₹{totalPrice}
                </p>
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onViewCart}
              className="flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg shadow-[var(--brand-color)]/30 hover:bg-[var(--brand-color-hover)] transition-colors"
            >
              View Cart
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
