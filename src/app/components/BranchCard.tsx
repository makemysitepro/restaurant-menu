import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';
import { Branch } from '../data';

interface BranchCardProps {
  branch: Branch;
  isDark: boolean;
}

export const BranchCard: React.FC<BranchCardProps> = ({ branch, isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`p-6 rounded-2xl border shadow-sm transition-all duration-300 bg-theme-accent
        ${isDark
          ? 'border-neutral-700 shadow-black/40'
          : 'border-neutral-200 shadow-neutral-200/50'
        }`}
    >
      <h3 className={`font-serif text-xl font-bold mb-4 ${isDark ? 'text-brand' : 'text-neutral-900'}`}>
        {branch.name}
      </h3>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin size={20} className={`mt-1 shrink-0 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`} />
          <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
            {branch.address}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Phone size={20} className={`shrink-0 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`} />
          <a href={`tel:${branch.phone}`} className={`text-sm font-medium hover:underline ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
            {branch.phone}
          </a>
        </div>

        <a
          href={branch.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors bg-brand text-white hover:bg-[var(--brand-color-hover)]`}
        >
          <ExternalLink size={14} />
          Get Directions
        </a>
      </div>
    </motion.div>
  );
};
