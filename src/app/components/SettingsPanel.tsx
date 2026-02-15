import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Type, Palette, Monitor, Moon, Sun } from 'lucide-react';

export type FontType = 'Lato' | 'Poppins' | 'Roboto' | 'Open Sans' | 'Playfair Display' | 'Montserrat' | 'Dancing Script';
export type ThemeColor = 'warm' | 'minimal' | 'blue' | 'purple' | 'pink' | 'red' | 'golden';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  toggleTheme: () => void;
  currentFont: FontType;
  setFont: (font: FontType) => void;
  fontSize: number; // base pixel size, default 16
  setFontSize: (size: number) => void;
  themeColor: ThemeColor;
  setThemeColor: (color: ThemeColor) => void;
}

const fonts: FontType[] = ['Lato', 'Poppins', 'Roboto', 'Open Sans', 'Playfair Display', 'Montserrat', 'Dancing Script'];

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  isOpen,
  onClose,
  isDark,
  toggleTheme,
  currentFont,
  setFont,
  fontSize,
  setFontSize,
  themeColor,
  setThemeColor
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed top-0 right-0 bottom-0 w-80 z-[70] shadow-2xl border-l flex flex-col
              ${isDark ? 'bg-[#1E1E1E] border-neutral-800' : 'bg-white border-neutral-200'}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-dashed border-neutral-200 dark:border-neutral-800">
              <h2 className={`font-serif text-xl font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                Customize View
              </h2>
              <button
                onClick={onClose}
                className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-neutral-800 text-neutral-400' : 'hover:bg-neutral-100 text-neutral-500'}`}
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">

              {/* Appearance Mode */}
              <section className="space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <Monitor size={18} className={isDark ? 'text-brand' : 'text-neutral-500'} />
                  <h3 className={`font-bold uppercase tracking-wider text-xs ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    Appearance
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => !isDark && toggleTheme()}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all
                      ${isDark
                        ? 'bg-brand/10 border-brand text-brand'
                        : 'border-neutral-200 text-neutral-500 hover:border-neutral-300'}`}
                  >
                    <Moon size={20} />
                    <span className="text-sm font-medium">Dark</span>
                  </button>
                  <button
                    onClick={() => isDark && toggleTheme()}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all
                      ${!isDark
                        ? 'bg-brand/10 border-brand text-neutral-900'
                        : 'border-neutral-700 text-neutral-400 hover:border-neutral-600'}`}
                  >
                    <Sun size={20} />
                    <span className="text-sm font-medium">Light</span>
                  </button>
                </div>
              </section>

              {/* Typography */}
              <section className="space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <Type size={18} className={isDark ? 'text-brand' : 'text-neutral-500'} />
                  <h3 className={`font-bold uppercase tracking-wider text-xs ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    Typography
                  </h3>
                </div>

                <div className="space-y-2">
                  <label className={`text-sm ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>Font Family</label>
                  <select
                    value={currentFont}
                    onChange={(e) => setFont(e.target.value as FontType)}
                    className={`w-full p-2.5 rounded-lg text-sm border outline-none focus:ring-2 focus:ring-[var(--brand-color)]
                      ${isDark
                        ? 'bg-neutral-800 border-neutral-700 text-white'
                        : 'bg-neutral-50 border-neutral-200 text-neutral-900'}`}
                  >
                    {fonts.map(f => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex justify-between">
                    <label className={`text-sm ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>Font Size</label>
                    <span className={`text-xs font-mono ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>{fontSize}px</span>
                  </div>
                  <input
                    type="range"
                    min="14"
                    max="20"
                    step="1"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="w-full accent-[var(--brand-color)] h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
                  />
                </div>
              </section>

              {/* Color Theme */}
              <section className="space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <Palette size={18} className={isDark ? 'text-brand' : 'text-neutral-500'} />
                  <h3 className={`font-bold uppercase tracking-wider text-xs ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    Color Theme
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setThemeColor('warm')}
                    className={`p-2.5 rounded-lg border text-left transition-all
                      ${themeColor === 'warm'
                        ? 'bg-[#C9A227]/10 border-[#C9A227]'
                        : isDark ? 'border-neutral-700 hover:bg-neutral-800' : 'border-neutral-200 hover:bg-neutral-50'}`}
                  >
                    <div className="w-5 h-5 rounded-full bg-[#C9A227] mb-1.5 shadow-sm" />
                    <span className={`text-xs font-medium ${isDark ? 'text-white' : 'text-neutral-900'}`}>✨ Gold</span>
                  </button>

                  <button
                    onClick={() => setThemeColor('minimal')}
                    className={`p-2.5 rounded-lg border text-left transition-all
                      ${themeColor === 'minimal'
                        ? 'bg-neutral-500/10 border-neutral-500'
                        : isDark ? 'border-neutral-700 hover:bg-neutral-800' : 'border-neutral-200 hover:bg-neutral-50'}`}
                  >
                    <div className="w-5 h-5 rounded-full bg-neutral-900 border border-white/20 mb-1.5 shadow-sm" />
                    <span className={`text-xs font-medium ${isDark ? 'text-white' : 'text-neutral-900'}`}>⚫ Minimal</span>
                  </button>

                  <button
                    onClick={() => setThemeColor('blue')}
                    className={`p-2.5 rounded-lg border text-left transition-all
                      ${themeColor === 'blue'
                        ? 'bg-blue-500/10 border-blue-500'
                        : isDark ? 'border-neutral-700 hover:bg-neutral-800' : 'border-neutral-200 hover:bg-neutral-50'}`}
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-500 mb-1.5 shadow-sm" />
                    <span className={`text-xs font-medium ${isDark ? 'text-white' : 'text-neutral-900'}`}>💙 Blue</span>
                  </button>

                  <button
                    onClick={() => setThemeColor('purple')}
                    className={`p-2.5 rounded-lg border text-left transition-all
                      ${themeColor === 'purple'
                        ? 'bg-purple-500/10 border-purple-500'
                        : isDark ? 'border-neutral-700 hover:bg-neutral-800' : 'border-neutral-200 hover:bg-neutral-50'}`}
                  >
                    <div className="w-5 h-5 rounded-full bg-purple-500 mb-1.5 shadow-sm" />
                    <span className={`text-xs font-medium ${isDark ? 'text-white' : 'text-neutral-900'}`}>💜 Purple</span>
                  </button>

                  <button
                    onClick={() => setThemeColor('pink')}
                    className={`p-2.5 rounded-lg border text-left transition-all
                      ${themeColor === 'pink'
                        ? 'bg-pink-500/10 border-pink-500'
                        : isDark ? 'border-neutral-700 hover:bg-neutral-800' : 'border-neutral-200 hover:bg-neutral-50'}`}
                  >
                    <div className="w-5 h-5 rounded-full bg-pink-500 mb-1.5 shadow-sm" />
                    <span className={`text-xs font-medium ${isDark ? 'text-white' : 'text-neutral-900'}`}>💗 Pink</span>
                  </button>

                  <button
                    onClick={() => setThemeColor('red')}
                    className={`p-2.5 rounded-lg border text-left transition-all
                      ${themeColor === 'red'
                        ? 'bg-red-500/10 border-red-500'
                        : isDark ? 'border-neutral-700 hover:bg-neutral-800' : 'border-neutral-200 hover:bg-neutral-50'}`}
                  >
                    <div className="w-5 h-5 rounded-full bg-red-500 mb-1.5 shadow-sm" />
                    <span className={`text-xs font-medium ${isDark ? 'text-white' : 'text-neutral-900'}`}>❤️ Red</span>
                  </button>

                  <button
                    onClick={() => setThemeColor('golden')}
                    className={`p-2.5 rounded-lg border text-left transition-all
                      ${themeColor === 'golden'
                        ? 'bg-yellow-600/10 border-yellow-600'
                        : isDark ? 'border-neutral-700 hover:bg-neutral-800' : 'border-neutral-200 hover:bg-neutral-50'}`}
                  >
                    <div className="w-5 h-5 rounded-full bg-yellow-600 mb-1.5 shadow-sm" />
                    <span className={`text-xs font-medium ${isDark ? 'text-white' : 'text-neutral-900'}`}>🌟 Golden</span>
                  </button>
                </div>
              </section>
            </div>

            <div className={`p-4 border-t text-center text-xs ${isDark ? 'border-neutral-800 text-neutral-500' : 'border-neutral-200 text-neutral-400'}`}>
              Changes apply instantly
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
