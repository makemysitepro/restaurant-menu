import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { FilterBar } from './components/FilterBar';
import { MenuCard } from './components/MenuCard';
import { CartBar } from './components/CartBar';
import { HeroSection } from './components/HeroSection';
import { BranchCard } from './components/BranchCard';
import { Footer } from './components/Footer';
import { SettingsPanel, FontType, ThemeColor } from './components/SettingsPanel';
import { MENU_ITEMS, MenuItem, BRANCHES } from './data';
import '../styles/fonts.css';

export default function App() {
  // Appearance State
  const [isDark, setIsDark] = useState(false);
  const [themeColor, setThemeColor] = useState<ThemeColor>('warm');
  const [font, setFont] = useState<FontType>('Lato');
  const [fontSize, setFontSize] = useState(16);
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Data State
  const [activeCategory, setActiveCategory] = useState('all');
  const [filterType, setFilterType] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState<{ item: MenuItem; size: string; price: number; quantity: number }[]>([]);

  // Refs for scrolling
  const menuRef = useRef<HTMLDivElement>(null);

  // Toggle Theme
  const toggleTheme = () => setIsDark(!isDark);

  // Apply Global Styles
  useEffect(() => {
    // Theme Mode
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Theme Color
    document.documentElement.setAttribute('data-theme', themeColor);

    // Apply theme background
    const root = document.documentElement;
    const bgColor = getComputedStyle(root).getPropertyValue(isDark ? '--theme-bg-dark' : '--theme-bg-light').trim();
    document.body.style.backgroundColor = bgColor || (isDark ? '#121212' : '#F9FAFB');

    // Typography
    document.documentElement.style.fontSize = `${fontSize}px`;
    document.body.style.fontFamily = font;
  }, [isDark, themeColor, fontSize, font]);

  // Filter Logic
  const filteredItems = MENU_ITEMS.filter((item) => {
    // Search Filter
    if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    // Category Filter
    if (activeCategory !== 'all' && item.category !== activeCategory) {
      return false;
    }
    // Type Filter (Veg/Non-Veg)
    if (filterType !== 'all' && item.type !== filterType) {
      return false;
    }
    return true;
  });

  // Cart Logic
  const handleAddToCart = (item: MenuItem, size: string, price: number) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.item.id === item.id && i.size === size);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id && i.size === size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { item, size, price, quantity: 1 }];
    });
  };

  const totalItems = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans bg-theme
      ${isDark ? 'text-neutral-100' : 'text-neutral-900'}`}>

      {/* Settings Panel */}
      <SettingsPanel
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentFont={font}
        setFont={setFont}
        fontSize={fontSize}
        setFontSize={setFontSize}
        themeColor={themeColor}
        setThemeColor={setThemeColor}
      />

      {/* Hero Section */}
      <HeroSection
        isDark={isDark}
        onScrollToMenu={scrollToMenu}
      />

      {/* Sticky Header */}
      <Header isDark={isDark} />

      <main className="pb-32">
        {/* Sticky Nav */}
        <div ref={menuRef} className="scroll-mt-[70px]">
          <CategoryNav
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            isDark={isDark}
          />
        </div>

        <FilterBar
          filterType={filterType}
          onFilterChange={setFilterType}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          isDark={isDark}
        />

        {/* Menu Grid */}
        <div className="max-w-7xl mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                onAddToCart={handleAddToCart}
                isDark={isDark}
              />
            ))}
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-20 text-center"
            >
              <p className={`text-lg font-medium ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                No items found in this category.
              </p>
            </motion.div>
          )}
        </div>

        {/* Branches Section */}
        <div className="max-w-7xl mx-auto px-4 mt-20 mb-10">
          <div className="flex items-center justify-center mb-8">
            <h2 className={`text-3xl font-serif font-bold text-center ${isDark ? 'text-[#C9A227]' : 'text-neutral-900'}`}>
              Our Branches
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BRANCHES.map(branch => (
              <BranchCard key={branch.id} branch={branch} isDark={isDark} />
            ))}
          </div>
        </div>
      </main>

      <Footer isDark={isDark} />

      <CartBar
        totalItems={totalItems}
        totalPrice={totalPrice}
        onViewCart={() => console.log('View Cart')}
        isDark={isDark}
      />

      {/* Floating Custom Theme Button */}
      <button
        onClick={() => setSettingsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 group
          ${isDark
            ? 'bg-brand border-brand text-white hover:bg-[var(--brand-color-hover)]'
            : 'bg-brand border-brand text-white hover:bg-[var(--brand-color-hover)]'
          }`}
      >
        {/* Palette Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform duration-300">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
      </button>
    </div>
  );
}
