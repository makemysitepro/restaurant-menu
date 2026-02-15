# Single Page Restaurant Menu

A beautiful, responsive single-page restaurant menu built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, elegant design inspired by restaurant menu templates
- 📱 Fully responsive layout
- 🎯 Single-page menu with multiple categories
- ⚡ Built with Next.js 14 and Tailwind CSS
- 🎭 Beautiful gradient backgrounds and animations
- 📊 JSON-based menu data for easy updates

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Menu Data

The menu data is stored in `data/menu.json`. You can easily customize:

- Restaurant name and contact information
- Menu categories
- Food items and prices
- Special offers

## Customization

### Colors

Edit the Tailwind config in `tailwind.config.ts` to change the color scheme:

- `menu-dark`: Dark background color
- `menu-red`: Accent red color
- `menu-gold`: Gold/yellow accent color
- `menu-cream`: Text color

### Menu Items

Edit `data/menu.json` to add, remove, or modify menu items.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## License

MIT
