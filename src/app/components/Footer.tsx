import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Instagram, Facebook } from 'lucide-react';
import { RESTAURANT_INFO } from '../data';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  return (
    <footer className={`py-12 px-4 border-t transition-colors duration-300 bg-theme
      ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}>
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand Info */}
        <div className="space-y-4">
          <h2 className={`font-serif text-2xl font-bold ${isDark ? 'text-brand' : 'text-neutral-900'}`}>
            {RESTAURANT_INFO.name}
          </h2>
          <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
            {RESTAURANT_INFO.tagline}
          </p>
          <div className="flex gap-4 pt-2">
            <a href={`https://instagram.com/${RESTAURANT_INFO.socials.instagram}`} target="_blank" rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors bg-theme-accent ${isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-900 shadow-sm'}`}>
              <Instagram size={18} />
            </a>
            <a href={`https://facebook.com/${RESTAURANT_INFO.socials.facebook}`} target="_blank" rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors bg-theme-accent ${isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-900 shadow-sm'}`}>
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <h3 className={`font-bold uppercase tracking-wider text-xs ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
            Contact Us
          </h3>
          <div className="space-y-3">
            <a href={`https://wa.me/${RESTAURANT_INFO.socials.whatsapp}`}
              className="flex items-center gap-3 p-3 rounded-xl border transition-all hover:scale-[1.02] bg-green-500 border-green-600 text-white hover:bg-green-600">
              <MessageCircle size={20} />
              <span className="font-bold text-sm">Chat on WhatsApp</span>
            </a>
            <a href="tel:+918962464949"
              className={`flex items-center gap-3 p-3 rounded-xl border transition-all hover:scale-[1.02] bg-theme-accent
                ${isDark
                  ? 'border-neutral-700 text-neutral-300 hover:brightness-110'
                  : 'border-neutral-200 text-neutral-700 hover:brightness-95'
                }`}>
              <Phone size={20} />
              <span className="font-bold text-sm">Call Now</span>
            </a>
          </div>
        </div>

        {/* Placeholder for Map or other links */}
        <div className="md:col-span-2 lg:col-span-2">
          <div className={`h-full min-h-[150px] rounded-2xl overflow-hidden relative flex items-center justify-center border bg-theme-accent
             ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}>
            <MapPin size={32} className={`mb-2 ${isDark ? 'text-neutral-600' : 'text-neutral-400'}`} />
            <span className={`absolute bottom-4 text-xs font-bold uppercase tracking-wider ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
              Google Map Integration
            </span>
          </div>
        </div>
      </div>

      <div className={`mt-12 pt-8 text-center border-t text-xs
        ${isDark ? 'border-neutral-800 text-neutral-600' : 'border-neutral-200 text-neutral-400'}`}>
        © {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved.
      </div>
    </footer>
  );
};
