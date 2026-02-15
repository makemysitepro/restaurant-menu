import React from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';

interface FilterBarProps {
  filterType: 'all' | 'veg' | 'non-veg';
  onFilterChange: (type: 'all' | 'veg' | 'non-veg') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isDark: boolean;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filterType,
  onFilterChange,
  searchQuery,
  onSearchChange,
  isDark
}) => {
  return (
    <div className={`py-4 px-4 transition-colors duration-300 w-full sticky top-[120px] z-30 bg-theme`}>
      <div className="max-w-2xl mx-auto space-y-3">
        {/* Search Input */}
        <div className="relative">
          <Search size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`} />
          <input
            type="text"
            placeholder="Search for dishes..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border outline-none transition-all bg-theme-accent
              ${isDark
                ? 'border-neutral-700 text-white focus:border-brand placeholder:text-neutral-600'
                : 'border-neutral-200 text-neutral-900 focus:border-brand placeholder:text-neutral-400 focus:ring-1 focus:ring-brand/20'}`}
          />
        </div>

        {/* Filter Toggles */}
        <div className={`flex p-1 rounded-xl border shadow-sm bg-theme-accent ${isDark ? 'border-neutral-700' : 'border-neutral-200'}`}>
          {(['all', 'veg', 'non-veg'] as const).map((type) => {
            const isActive = filterType === type;
            return (
              <button
                key={type}
                onClick={() => onFilterChange(type)}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300
                  ${isActive
                    ? 'bg-brand text-white shadow-md'
                    : isDark
                      ? 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-700/50'
                      : 'text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50'
                  }`}
              >
                {type === 'all' ? 'All' : type}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
