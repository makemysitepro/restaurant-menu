import React, { useState, forwardRef } from 'react';
import { motion } from 'motion/react';
import { Plus, Star } from 'lucide-react';
import { MenuItem } from '../data';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem, size: string, price: number) => void;
  isDark: boolean;
}

export const MenuCard = forwardRef<HTMLDivElement, MenuCardProps>(({ item, onAddToCart, isDark }, ref) => {
  const [selectedSize, setSelectedSize] = useState<string>(
    item.prices.standard ? 'standard' : 'half'
  );

  const currentPrice = item.prices[selectedSize as keyof typeof item.prices] || 0;

  const handleAdd = () => {
    onAddToCart(item, selectedSize, currentPrice);
  };

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`relative overflow-hidden rounded-2xl border shadow-lg transition-all duration-300 group bg-theme-accent
        ${isDark
          ? 'border-neutral-700 shadow-black/40'
          : 'border-neutral-200 shadow-neutral-200/50'
        }`}
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <ImageWithFallback
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <div className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border border-white/10 shadow-sm
            ${item.type === 'veg' ? 'bg-green-500/90 text-white' : 'bg-red-500/90 text-white'}`}>
            {item.type === 'veg' ? 'Veg' : 'Non-Veg'}
          </div>
          {item.isBestSeller && (
            <div className="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand text-white backdrop-blur-md shadow-sm flex items-center gap-1">
              <Star size={10} fill="currentColor" />
              Best Seller
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className={`font-serif text-lg font-bold leading-tight mb-1
            ${isDark ? 'text-brand' : 'text-neutral-900'}`}>
            {item.name}
          </h3>
          <p className={`text-xs line-clamp-2 leading-relaxed
            ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
            {item.description}
          </p>
        </div>

        {/* Size Selector */}
        {!item.prices.standard && (
          <div className="flex gap-2">
            {Object.keys(item.prices).map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 text-[10px] uppercase font-bold tracking-wider rounded-lg border transition-colors
                  ${selectedSize === size
                    ? 'bg-brand border-brand text-white'
                    : isDark
                      ? 'border-neutral-700 text-neutral-400 hover:border-neutral-500'
                      : 'border-neutral-200 text-neutral-500 hover:border-neutral-400'
                  }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}

        {/* Price & Add Action */}
        <div className="flex items-center justify-between pt-2 border-t border-dashed border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col">
            <span className={`text-[10px] font-medium uppercase tracking-wider ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
              Price
            </span>
            <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              ₹{currentPrice}
            </span>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleAdd}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg
              ${isDark
                ? 'bg-brand text-white hover:opacity-90 shadow-[var(--brand-color)]/20'
                : 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-neutral-900/20'
              }`}
          >
            <Plus size={14} />
            Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
});

MenuCard.displayName = 'MenuCard';
