import React from 'react';
import { motion } from 'motion/react';
import { CATEGORIES } from '../data';
import { Utensils, UtensilsCrossed, Soup, IceCream, Martini, ChefHat } from 'lucide-react';

interface CategoryNavProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  isDark: boolean;
}

const iconMap: Record<string, React.ElementType> = {
  'Utensils': Utensils,
  'UtensilsCrossed': UtensilsCrossed,
  'Soup': Soup,
  'IceCream': IceCream,
  'Martini': Martini,
  'ChefHat': ChefHat
};

export const CategoryNav: React.FC<CategoryNavProps> = ({ activeCategory, onSelectCategory, isDark }) => {
  return (
    <div className={`sticky top-[60px] z-40 py-3 border-b transition-colors duration-300 backdrop-blur-sm
      ${isDark ? 'bg-theme/95 border-neutral-800' : 'bg-theme/95 border-neutral-200'}`}>
      <div className="max-w-7xl mx-auto overflow-x-auto no-scrollbar px-4 flex gap-3 pb-1">
        {CATEGORIES.map((cat) => {
          const Icon = iconMap[cat.icon] || Utensils;
          const isActive = activeCategory === cat.id;

          return (
            <motion.button
              key={cat.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex flex-col items-center gap-1 min-w-[70px] p-2 rounded-xl transition-all duration-300 border
                ${isActive
                  ? 'bg-brand border-brand text-white shadow-lg shadow-[var(--brand-color)]/20'
                  : isDark
                    ? 'bg-theme-accent border-neutral-700 text-neutral-400 hover:brightness-110'
                    : 'bg-theme-accent border-neutral-200 text-neutral-600 hover:brightness-95'
                }`}
            >
              <div className={`p-2 rounded-full ${isActive ? 'bg-white/20' : isDark ? 'bg-neutral-700' : 'bg-neutral-100'}`}>
                <Icon size={18} />
              </div>
              <span className="text-xs font-medium whitespace-nowrap">{cat.name}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
