'use client'

import { useState } from 'react'
import menuData from '@/data/menu.json'

type FilterType = 'all' | 'veg' | 'non-veg'
type CategoryFilter = 'all' | 'special' | 'starters' | 'chicken' | 'chinese' | 'main-course' | 'desserts' | 'sweets' | 'icecream' | 'drinks'
type ThemeType = 'dark' | 'light' | 'blue' | 'purple' | 'golden'

interface ThemeConfig {
  name: string
  icon: string
  bg: string
  text: string
  cardBg: string
  cardBgHover: string
  border: string
  borderHover: string
  heading: string
  accent: string
  tabActive: string
  tabActiveBg: string
  tabInactive: string
  tabInactiveBorder: string
  priceBox: string
  priceBorder: string
}

const themes: Record<ThemeType, ThemeConfig> = {
  dark: {
    name: 'Dark',
    icon: '🌙',
    bg: 'bg-gradient-to-br from-black via-gray-900 to-black',
    text: 'text-white',
    cardBg: 'bg-white/5',
    cardBgHover: 'hover:bg-white/10',
    border: 'border-white/10',
    borderHover: 'hover:border-white/20',
    heading: 'bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent',
    accent: 'bg-white',
    tabActive: 'bg-white text-black border-white',
    tabActiveBg: 'bg-white text-black',
    tabInactive: 'bg-transparent text-gray-300 border-gray-600 hover:border-white hover:text-white hover:bg-white/5',
    tabInactiveBorder: 'border-gray-600',
    priceBox: 'bg-white/5 border-white/10',
    priceBorder: 'border-white/10'
  },
  light: {
    name: 'Light',
    icon: '☀️',
    bg: 'bg-gradient-to-br from-gray-50 via-white to-gray-100',
    text: 'text-gray-900',
    cardBg: 'bg-gray-900/5',
    cardBgHover: 'hover:bg-gray-900/10',
    border: 'border-gray-900/10',
    borderHover: 'hover:border-gray-900/20',
    heading: 'bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent',
    accent: 'bg-gray-900',
    tabActive: 'bg-gray-900 text-white border-gray-900',
    tabActiveBg: 'bg-gray-900 text-white',
    tabInactive: 'bg-transparent text-gray-600 border-gray-300 hover:border-gray-900 hover:text-gray-900 hover:bg-gray-900/5',
    tabInactiveBorder: 'border-gray-300',
    priceBox: 'bg-gray-900/5 border-gray-900/10',
    priceBorder: 'border-gray-900/10'
  },
  blue: {
    name: 'Blue',
    icon: '💙',
    bg: 'bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950',
    text: 'text-blue-50',
    cardBg: 'bg-blue-500/10',
    cardBgHover: 'hover:bg-blue-500/20',
    border: 'border-blue-400/20',
    borderHover: 'hover:border-blue-400/40',
    heading: 'bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 bg-clip-text text-transparent',
    accent: 'bg-blue-400',
    tabActive: 'bg-blue-500 text-white border-blue-500',
    tabActiveBg: 'bg-blue-500 text-white',
    tabInactive: 'bg-transparent text-blue-200 border-blue-600 hover:border-blue-400 hover:text-blue-100 hover:bg-blue-500/10',
    tabInactiveBorder: 'border-blue-600',
    priceBox: 'bg-blue-500/10 border-blue-400/20',
    priceBorder: 'border-blue-400/20'
  },
  purple: {
    name: 'Purple',
    icon: '💜',
    bg: 'bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950',
    text: 'text-purple-50',
    cardBg: 'bg-purple-500/10',
    cardBgHover: 'hover:bg-purple-500/20',
    border: 'border-purple-400/20',
    borderHover: 'hover:border-purple-400/40',
    heading: 'bg-gradient-to-r from-purple-200 via-purple-100 to-purple-200 bg-clip-text text-transparent',
    accent: 'bg-purple-400',
    tabActive: 'bg-purple-500 text-white border-purple-500',
    tabActiveBg: 'bg-purple-500 text-white',
    tabInactive: 'bg-transparent text-purple-200 border-purple-600 hover:border-purple-400 hover:text-purple-100 hover:bg-purple-500/10',
    tabInactiveBorder: 'border-purple-600',
    priceBox: 'bg-purple-500/10 border-purple-400/20',
    priceBorder: 'border-purple-400/20'
  },
  golden: {
    name: 'Golden',
    icon: '✨',
    bg: 'bg-gradient-to-br from-yellow-950 via-amber-900 to-yellow-950',
    text: 'text-yellow-50',
    cardBg: 'bg-yellow-500/10',
    cardBgHover: 'hover:bg-yellow-500/20',
    border: 'border-yellow-600/30',
    borderHover: 'hover:border-yellow-500/50',
    heading: 'bg-gradient-to-r from-yellow-200 via-amber-100 to-yellow-200 bg-clip-text text-transparent',
    accent: 'bg-yellow-500',
    tabActive: 'bg-yellow-600 text-white border-yellow-600',
    tabActiveBg: 'bg-yellow-600 text-white',
    tabInactive: 'bg-transparent text-yellow-200 border-yellow-700 hover:border-yellow-500 hover:text-yellow-100 hover:bg-yellow-500/10',
    tabInactiveBorder: 'border-yellow-700',
    priceBox: 'bg-yellow-500/10 border-yellow-600/30',
    priceBorder: 'border-yellow-600/30'
  }
}

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all')
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('dark')

  const theme = themes[currentTheme]

  const filteredCategories = menuData.categories
    .filter(category => {
      if (categoryFilter === 'all') return true
      return category.id === categoryFilter
    })
    .map(category => ({
      ...category,
      items: category.items.filter(item => {
        if (activeFilter === 'all') return true
        return item.type === activeFilter
      })
    }))
    .filter(category => category.items.length > 0)

  // Get available categories based on veg/non-veg filter
  const availableCategories = menuData.categories
    .map(category => ({
      ...category,
      items: category.items.filter(item => {
        if (activeFilter === 'all') return true
        return item.type === activeFilter
      })
    }))
    .filter(category => category.items.length > 0)
    .map(category => category.id)

  return (
    <div className={`min-h-screen p-4 md:p-8 lg:p-12 transition-colors duration-500 ${theme.bg} ${theme.text}`}>
      <div className="container mx-auto relative">
        {/* Theme Selector */}
        <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50 flex gap-1.5 md:gap-2">
          {(Object.keys(themes) as ThemeType[]).map((themeKey) => (
            <button
              key={themeKey}
              onClick={() => setCurrentTheme(themeKey)}
              className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border transition-all duration-300 hover:scale-110 ${currentTheme === themeKey
                ? themes[themeKey].tabActiveBg + ' border-2'
                : 'bg-white/10 border border-white/30 hover:bg-white/20'
                }`}
              title={themes[themeKey].name}
            >
              <span className="text-base md:text-lg">{themes[themeKey].icon}</span>
            </button>
          ))}
        </div>

        {/* Header */}
        <header className={`mb-8 md:mb-10 pb-6 md:pb-8 border-b-2 ${theme.border}`}>
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight ${theme.heading}`}>
            {menuData.restaurant.name}
          </h1>
          <div className={`w-20 md:w-24 h-1 mt-4 ${theme.accent}`}></div>
        </header>

        {/* Veg/Non-Veg Filter Tabs */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8 px-2 md:px-4 max-w-2xl mx-auto">
          {[
            { id: 'all', label: 'All', emoji: '🍽️' },
            { id: 'veg', label: 'Veg', emoji: '🥬' },
            { id: 'non-veg', label: 'Non-Veg', emoji: '🍖' }
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as FilterType)}
              className={`flex flex-col items-center justify-center gap-2 py-4 md:py-5 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 active:scale-95 ${activeFilter === filter.id
                  ? theme.tabActive + ' shadow-xl'
                  : theme.tabInactive + ' shadow-md'
                }`}
            >
              <span className="text-3xl md:text-4xl">{filter.emoji}</span>
              <span className="text-sm md:text-base font-bold">{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-8 md:mb-12 px-2 md:px-4">
          {[
            { id: 'all', label: '🍽️ All' },
            { id: 'special', label: '⭐ Special' },
            { id: 'main-course', label: '🍛 Main Course' },
            { id: 'starters', label: '🥗 Starters' },
            { id: 'chicken', label: '🍗 Chicken' },
            { id: 'chinese', label: '🥢 Chinese' },
            { id: 'desserts', label: '🍰 Desserts' },
            { id: 'sweets', label: '🍬 Sweets' },
            { id: 'icecream', label: '🍦 Ice Cream' },
            { id: 'drinks', label: '🥤 Drinks' }
          ]
            .filter(cat => cat.id === 'all' || availableCategories.includes(cat.id))
            .map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id as CategoryFilter)}
                className={`px-4 sm:px-5 py-2.5 sm:py-2 text-sm sm:text-base font-semibold rounded-lg border transition-all duration-300 ${categoryFilter === cat.id
                  ? theme.tabActive
                  : theme.tabInactive
                  }`}
              >
                {cat.label}
              </button>
            ))}
        </div>

        {/* Menu Items */}
        <div className="space-y-10">
          {filteredCategories.map((category, idx) => (
            <section
              key={category.id}
              className={`backdrop-blur-sm rounded-2xl p-6 md:p-8 border shadow-xl transition-all duration-300 ${theme.cardBg} ${theme.border} ${theme.borderHover}`}
            >
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className={`w-1.5 sm:w-2 h-8 sm:h-10 rounded-full ${theme.accent}`}></div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide">
                  {category.name}
                </h2>
              </div>

              <div className="space-y-4 md:space-y-5">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={item.id}
                    className={`group rounded-2xl overflow-hidden border-2 transition-all duration-300 shadow-md ${theme.cardBg} ${theme.cardBgHover} ${theme.border} ${theme.borderHover}`}
                  >
                    <div className="flex flex-col sm:flex-row gap-0 sm:gap-4">
                      {/* Item Image */}
                      <div className="w-full sm:w-28 md:w-32 h-52 sm:h-28 md:h-32 flex-shrink-0">
                        {(item as any).image ? (
                          <img
                            src={(item as any).image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className={`w-full h-full flex items-center justify-center text-5xl ${theme.cardBg}`}>
                            🍽️
                          </div>
                        )}
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 p-4 sm:p-4 md:p-5 flex flex-col sm:flex-row justify-between items-start gap-4">
                        <div className="flex-1 w-full">
                          <div className="flex items-center gap-2 mb-3 flex-wrap">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold transition-colors leading-tight">
                              {item.name}
                            </h3>
                            <span className={`text-xs sm:text-sm px-3 py-1 rounded-full font-bold ${item.type === 'veg'
                              ? 'bg-green-500/20 text-green-400 border-2 border-green-500/50'
                              : 'bg-red-500/20 text-red-400 border-2 border-red-500/50'
                              }`}>
                              {item.type === 'veg' ? '🥬 VEG' : '🍖 NON-VEG'}
                            </span>
                            {(item as any).bestSeller && (
                              <span className="text-xs sm:text-sm px-3 py-1 rounded-full font-bold bg-yellow-500/20 text-yellow-400 border-2 border-yellow-500/50 animate-pulse">
                                ⭐ BEST SELLER
                              </span>
                            )}
                          </div>
                          <p className="text-sm sm:text-base leading-relaxed opacity-90">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex gap-2 flex-shrink-0 flex-wrap w-full sm:w-auto justify-start sm:justify-end">
                          {(item as any).quarterPrice && (
                            <div className={`text-center sm:text-right px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border ${theme.priceBox}`}>
                              <div className="text-xs font-semibold mb-0.5 sm:mb-1 opacity-70">QUARTER</div>
                              <div className="text-sm sm:text-base md:text-lg font-bold">₹{(item as any).quarterPrice}</div>
                            </div>
                          )}
                          {item.halfPrice && (
                            <div className={`text-center sm:text-right px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border ${theme.priceBox}`}>
                              <div className="text-xs font-semibold mb-0.5 sm:mb-1 opacity-70">HALF</div>
                              <div className="text-sm sm:text-base md:text-lg font-bold">₹{item.halfPrice}</div>
                            </div>
                          )}
                          <div className={`text-center sm:text-right px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border ${theme.priceBox}`}>
                            <div className="text-xs font-semibold mb-0.5 sm:mb-1 opacity-70">FULL</div>
                            <div className="text-sm sm:text-base md:text-lg font-bold">₹{item.fullPrice}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        {/* <footer className="text-center mt-16 pt-8 border-t-2 border-white/20">
          <p className="text-xl font-semibold text-gray-300 mb-2">Thank you for dining with us!</p>
          <p className="text-sm text-gray-500">Enjoy your meal 🍽️</p>
        </footer> */}
      </div>
    </div>
  )
}
