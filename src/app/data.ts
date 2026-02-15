
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  type: 'veg' | 'non-veg';
  isBestSeller?: boolean;
  prices: {
    quarter?: number;
    half?: number;
    full?: number;
    standard?: number;
  };
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  mapLink: string;
}

export interface RestaurantInfo {
  name: string;
  logo: string;
  bannerImage: string;
  tagline: string;
  socials: {
    whatsapp: string;
    instagram: string;
    facebook: string;
  };
}

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "Royal Spices",
  logo: "ChefHat", // Using Lucide icon name for simplicity in this demo
  bannerImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
  tagline: "Experience the Taste of Royalty",
  socials: {
    whatsapp: "+919876543210",
    instagram: "royal_spices_official",
    facebook: "royalspices"
  }
};

export const BRANCHES: Branch[] = [
  {
    id: '1',
    name: "Royal Spices - Downtown",
    address: "123, Heritage Road, Near City Palace, Jaipur",
    phone: "+91 98765 43210",
    mapLink: "https://maps.google.com"
  },
  {
    id: '2',
    name: "Royal Spices - Lake View",
    address: "45, Lakeside Promenade, Udaipur",
    phone: "+91 98765 43211",
    mapLink: "https://maps.google.com"
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All', icon: 'Utensils' },
  { id: 'starters', name: 'Starters', icon: 'ChefHat' },
  { id: 'tandoor', name: 'Tandoor', icon: 'ChefHat' },
  { id: 'main-course', name: 'Main Course', icon: 'UtensilsCrossed' },
  { id: 'biryani', name: 'Biryani', icon: 'UtensilsCrossed' },
  { id: 'chinese', name: 'Chinese', icon: 'Soup' },
  { id: 'breads', name: 'Breads', icon: 'Utensils' },
  { id: 'seafood', name: 'Seafood', icon: 'Utensils' },
  { id: 'desserts', name: 'Desserts', icon: 'IceCream' },
  { id: 'drinks', name: 'Drinks', icon: 'Martini' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: "Chef's Special Thali",
    description: "A royal assortment of our finest delicacies served on a traditional platter.",
    image: "https://images.unsplash.com/photo-1755090154823-2832067d402b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbmRpYW4lMjB0aGFsaSUyMHJveWFsJTIwZm9vZHxlbnwxfHx8fDE3NzExNzE3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'main-course',
    type: 'veg',
    isBestSeller: true,
    prices: { standard: 450 }
  },
  {
    id: '2',
    name: "Tandoori Platter",
    description: "Assorted kebabs marinated in authentic spices and grilled to perfection.",
    image: "https://images.unsplash.com/photo-1700625914525-54dba25d2125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5kb29yaSUyMHBsYXR0ZXIlMjBrZWJhYnxlbnwxfHx8fDE3NzExNzE3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'starters',
    type: 'non-veg',
    prices: { half: 350, full: 650 }
  },
  {
    id: '3',
    name: "Royal Paneer Lababdar",
    description: "Cottage cheese cubes cooked in a rich, creamy tomato and cashew gravy.",
    image: "https://images.unsplash.com/photo-1701579231378-3726490a407b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBidXR0ZXIlMjBtYXNhbGF8ZW58MXx8fHwxNzcxMTcxNzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'main-course',
    type: 'veg',
    isBestSeller: true,
    prices: { quarter: 180, half: 320, full: 550 }
  },
  {
    id: '4',
    name: "Chicken Tikka Masala",
    description: "Grilled chicken chunks spiced and cooked in a delicious red curry.",
    image: "https://images.unsplash.com/photo-1735233024815-7986206a18a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwdGlra2ElMjBtYXNhbGElMjBib3dsfGVufDF8fHx8MTc3MTE3MTczN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'main-course',
    type: 'non-veg',
    prices: { quarter: 220, half: 400, full: 750 }
  },
  {
    id: '5',
    name: "Mutton Rogan Josh",
    description: "Aromatic lamb dish of Persian origin, one of the signature recipes of Kashmiri cuisine.",
    image: "https://images.unsplash.com/photo-1640542509430-f529fdfce835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXR0b24lMjByb2dhbiUyMGpvc2glMjBjdXJyeXxlbnwxfHx8fDE3NzExNzE3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'main-course',
    type: 'non-veg',
    isBestSeller: true,
    prices: { half: 450, full: 850 }
  },
  {
    id: '6',
    name: "Veg Hakka Noodles",
    description: "Classic stir-fried noodles with crunchy vegetables.",
    image: "https://images.unsplash.com/photo-1634864572872-a01c21e388d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG93JTIwbWVpbiUyMG5vb2RsZXN8ZW58MXx8fHwxNzcxMTcxNzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'chinese',
    type: 'veg',
    prices: { half: 150, full: 280 }
  },
  {
    id: '7',
    name: "Chilli Paneer Dry",
    description: "Crispy paneer cubes tossed in a spicy, tangy Chinese sauce.",
    image: "https://images.unsplash.com/photo-1587041770006-965fc1251180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsbGklMjBwYW5lZXIlMjBkcnl8ZW58MXx8fHwxNzcxMTcxNzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'chinese',
    type: 'veg',
    prices: { half: 220, full: 400 }
  },
  {
    id: '8',
    name: "Dal Makhani",
    description: "Black lentils simmered overnight with butter and cream.",
    image: "https://images.unsplash.com/photo-1708782340357-b7b38d653979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWwlMjBtYWtoYW5pJTIwY3JlYW15fGVufDF8fHx8MTc3MTE3MTczN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'main-course',
    type: 'veg',
    prices: { half: 200, full: 380 }
  },
  {
    id: '9',
    name: "Creamy Tomato Soup",
    description: "Fresh tomato soup served with crunchy croutons.",
    image: "https://images.unsplash.com/photo-1730312382513-62e9454f4797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBzb3VwJTIwYm93bCUyMGdvdXJtZXR8ZW58MXx8fHwxNzcxMTcxNzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'starters',
    type: 'veg',
    prices: { standard: 120 }
  },
  {
    id: '10',
    name: "Gulab Jamun",
    description: "Traditional Indian dessert of fried dough balls soaked in sweet syrup.",
    image: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzExNDgxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'desserts',
    type: 'veg',
    prices: { standard: 90 }
  },
  {
    id: '11',
    name: "Mango Lassi",
    description: "A refreshing yogurt-based drink made with sweet mango pulp.",
    image: "https://images.unsplash.com/photo-1655074084308-901ea6b88fd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGxhc3NpJTIwZHJpbmt8ZW58MXx8fHwxNzcxMTcxODUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'drinks',
    type: 'veg',
    prices: { standard: 110 }
  },
  // More Starters
  {
    id: '12',
    name: "Paneer Tikka",
    description: "Marinated cottage cheese cubes grilled with bell peppers and onions.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",
    category: 'starters',
    type: 'veg',
    prices: { half: 200, full: 380 }
  },
  {
    id: '13',
    name: "Chicken Wings",
    description: "Crispy fried chicken wings tossed in spicy sauce.",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop",
    category: 'starters',
    type: 'non-veg',
    prices: { half: 250, full: 450 }
  },
  {
    id: '14',
    name: "Hara Bhara Kabab",
    description: "Spinach and green peas patties with aromatic spices.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
    category: 'starters',
    type: 'veg',
    prices: { standard: 180 }
  },
  // Tandoor Items
  {
    id: '15',
    name: "Tandoori Chicken",
    description: "Classic chicken marinated in yogurt and spices, cooked in tandoor.",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&h=300&fit=crop",
    category: 'tandoor',
    type: 'non-veg',
    isBestSeller: true,
    prices: { half: 350, full: 650 }
  },
  {
    id: '16',
    name: "Tandoori Paneer Tikka",
    description: "Cottage cheese marinated in tandoori spices and grilled.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
    category: 'tandoor',
    type: 'veg',
    prices: { half: 280, full: 520 }
  },
  {
    id: '17',
    name: "Seekh Kebab",
    description: "Minced lamb kebabs with aromatic spices.",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
    category: 'tandoor',
    type: 'non-veg',
    prices: { half: 320, full: 600 }
  },
  {
    id: '18',
    name: "Fish Tikka",
    description: "Marinated fish pieces grilled in tandoor.",
    image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&h=300&fit=crop",
    category: 'tandoor',
    type: 'non-veg',
    prices: { half: 380, full: 700 }
  },
  // Biryani
  {
    id: '19',
    name: "Hyderabadi Chicken Biryani",
    description: "Aromatic basmati rice layered with spiced chicken.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    category: 'biryani',
    type: 'non-veg',
    isBestSeller: true,
    prices: { half: 280, full: 520 }
  },
  {
    id: '20',
    name: "Mutton Biryani",
    description: "Tender mutton pieces cooked with fragrant basmati rice.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    category: 'biryani',
    type: 'non-veg',
    prices: { half: 350, full: 650 }
  },
  {
    id: '21',
    name: "Veg Biryani",
    description: "Mixed vegetables cooked with aromatic spices and basmati rice.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    category: 'biryani',
    type: 'veg',
    prices: { half: 220, full: 400 }
  },
  {
    id: '22',
    name: "Egg Biryani",
    description: "Boiled eggs layered with spiced rice.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    category: 'biryani',
    type: 'non-veg',
    prices: { half: 200, full: 380 }
  },
  // More Main Course
  {
    id: '23',
    name: "Butter Chicken",
    description: "Tender chicken in rich tomato and butter gravy.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop",
    category: 'main-course',
    type: 'non-veg',
    isBestSeller: true,
    prices: { half: 320, full: 600 }
  },
  {
    id: '24',
    name: "Kadai Paneer",
    description: "Cottage cheese cooked with bell peppers in spicy gravy.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop",
    category: 'main-course',
    type: 'veg',
    prices: { half: 240, full: 450 }
  },
  {
    id: '25',
    name: "Palak Paneer",
    description: "Cottage cheese in creamy spinach gravy.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop",
    category: 'main-course',
    type: 'veg',
    prices: { half: 220, full: 420 }
  },
  // Chinese
  {
    id: '26',
    name: "Chicken Fried Rice",
    description: "Stir-fried rice with chicken and vegetables.",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop",
    category: 'chinese',
    type: 'non-veg',
    prices: { half: 180, full: 340 }
  },
  {
    id: '27',
    name: "Manchurian",
    description: "Vegetable balls in spicy Manchurian sauce.",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400&h=300&fit=crop",
    category: 'chinese',
    type: 'veg',
    prices: { half: 200, full: 380 }
  },
  {
    id: '28',
    name: "Schezwan Noodles",
    description: "Spicy noodles with vegetables in Schezwan sauce.",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop",
    category: 'chinese',
    type: 'veg',
    prices: { half: 180, full: 340 }
  },
  // Breads
  {
    id: '29',
    name: "Butter Naan",
    description: "Soft leavened bread brushed with butter.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    category: 'breads',
    type: 'veg',
    prices: { standard: 40 }
  },
  {
    id: '30',
    name: "Garlic Naan",
    description: "Naan topped with fresh garlic and coriander.",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
    category: 'breads',
    type: 'veg',
    prices: { standard: 50 }
  },
  {
    id: '31',
    name: "Tandoori Roti",
    description: "Whole wheat bread baked in tandoor.",
    image: "https://images.unsplash.com/photo-1619985632461-f33748ef8f3e?w=400&h=300&fit=crop",
    category: 'breads',
    type: 'veg',
    prices: { standard: 30 }
  },
  {
    id: '32',
    name: "Cheese Naan",
    description: "Naan stuffed with melted cheese.",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
    category: 'breads',
    type: 'veg',
    prices: { standard: 80 }
  },
  {
    id: '33',
    name: "Laccha Paratha",
    description: "Multi-layered crispy whole wheat bread.",
    image: "https://images.unsplash.com/photo-1619985632461-f33748ef8f3e?w=400&h=300&fit=crop",
    category: 'breads',
    type: 'veg',
    prices: { standard: 50 }
  },
  // Seafood
  {
    id: '34',
    name: "Fish Curry",
    description: "Fresh fish cooked in aromatic coastal spices.",
    image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&h=300&fit=crop",
    category: 'seafood',
    type: 'non-veg',
    prices: { half: 380, full: 700 }
  },
  {
    id: '35',
    name: "Prawn Masala",
    description: "Juicy prawns in spicy tomato gravy.",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop",
    category: 'seafood',
    type: 'non-veg',
    prices: { half: 450, full: 850 }
  },
  {
    id: '36',
    name: "Fish Fry",
    description: "Crispy fried fish marinated in spices.",
    image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&h=300&fit=crop",
    category: 'seafood',
    type: 'non-veg',
    prices: { half: 350, full: 650 }
  },
  // More Desserts
  {
    id: '37',
    name: "Rasmalai",
    description: "Soft paneer patties in sweetened milk.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
    category: 'desserts',
    type: 'veg',
    prices: { standard: 120 }
  },
  {
    id: '38',
    name: "Ice Cream",
    description: "Vanilla, chocolate, or strawberry flavor.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
    category: 'desserts',
    type: 'veg',
    prices: { standard: 100 }
  },
  {
    id: '39',
    name: "Gajar Halwa",
    description: "Carrot pudding with ghee and dry fruits.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
    category: 'desserts',
    type: 'veg',
    prices: { standard: 130 }
  },
  // More Drinks
  {
    id: '40',
    name: "Fresh Lime Soda",
    description: "Refreshing lime juice with soda.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
    category: 'drinks',
    type: 'veg',
    prices: { standard: 70 }
  },
  {
    id: '41',
    name: "Masala Chai",
    description: "Traditional Indian spiced tea.",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=300&fit=crop",
    category: 'drinks',
    type: 'veg',
    prices: { standard: 40 }
  },
  {
    id: '42',
    name: "Cold Coffee",
    description: "Chilled coffee with ice cream.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
    category: 'drinks',
    type: 'veg',
    prices: { standard: 120 }
  },
  {
    id: '43',
    name: "Fresh Juice",
    description: "Orange, apple, or mixed fruit juice.",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop",
    category: 'drinks',
    type: 'veg',
    prices: { standard: 90 }
  },
  // More Non-Veg Starters
  {
    id: '44',
    name: "Chicken Lollipop",
    description: "Crispy fried chicken drumsticks with spicy coating.",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop",
    category: 'starters',
    type: 'non-veg',
    prices: { half: 280, full: 520 }
  },
  {
    id: '45',
    name: "Mutton Seekh Kebab",
    description: "Minced mutton kebabs with aromatic spices.",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
    category: 'starters',
    type: 'non-veg',
    prices: { half: 350, full: 650 }
  },
  {
    id: '46',
    name: "Chicken 65",
    description: "Spicy deep-fried chicken with curry leaves.",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&h=300&fit=crop",
    category: 'starters',
    type: 'non-veg',
    prices: { half: 260, full: 480 }
  },
  {
    id: '47',
    name: "Fish Fingers",
    description: "Crispy fried fish strips with tartar sauce.",
    image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&h=300&fit=crop",
    category: 'starters',
    type: 'non-veg',
    prices: { half: 300, full: 550 }
  },
  // More Tandoor Non-Veg
  {
    id: '48',
    name: "Chicken Malai Tikka",
    description: "Creamy chicken tikka marinated in cheese and spices.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
    category: 'tandoor',
    type: 'non-veg',
    prices: { half: 380, full: 700 }
  },
  {
    id: '49',
    name: "Tandoori Prawns",
    description: "Jumbo prawns marinated and grilled in tandoor.",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop",
    category: 'tandoor',
    type: 'non-veg',
    prices: { half: 450, full: 850 }
  },
  {
    id: '50',
    name: "Lamb Chops",
    description: "Tender lamb chops grilled with herbs.",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
    category: 'tandoor',
    type: 'non-veg',
    prices: { half: 500, full: 950 }
  },
  // More Main Course Non-Veg
  {
    id: '51',
    name: "Chicken Korma",
    description: "Chicken in rich cashew and cream gravy.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop",
    category: 'main-course',
    type: 'non-veg',
    prices: { half: 300, full: 560 }
  },
  {
    id: '52',
    name: "Chicken Kadai",
    description: "Chicken cooked with bell peppers in spicy gravy.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop",
    category: 'main-course',
    type: 'non-veg',
    prices: { half: 280, full: 520 }
  },
  {
    id: '53',
    name: "Mutton Curry",
    description: "Traditional mutton curry with aromatic spices.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
    category: 'main-course',
    type: 'non-veg',
    prices: { half: 380, full: 720 }
  },
  {
    id: '54',
    name: "Chicken Do Pyaza",
    description: "Chicken cooked with double the amount of onions.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop",
    category: 'main-course',
    type: 'non-veg',
    prices: { half: 290, full: 540 }
  },
  {
    id: '55',
    name: "Keema Curry",
    description: "Minced mutton cooked with peas and spices.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
    category: 'main-course',
    type: 'non-veg',
    prices: { half: 320, full: 600 }
  },
  // More Chinese Non-Veg
  {
    id: '56',
    name: "Chicken Manchurian",
    description: "Chicken balls in tangy Manchurian gravy.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop",
    category: 'chinese',
    type: 'non-veg',
    prices: { half: 240, full: 450 }
  },
  {
    id: '57',
    name: "Chilli Chicken",
    description: "Boneless chicken in spicy chilli sauce.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop",
    category: 'chinese',
    type: 'non-veg',
    prices: { half: 260, full: 480 }
  },
  {
    id: '58',
    name: "Chicken Hakka Noodles",
    description: "Stir-fried noodles with chicken and vegetables.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop",
    category: 'chinese',
    type: 'non-veg',
    prices: { half: 220, full: 420 }
  },
  {
    id: '59',
    name: "Prawn Fried Rice",
    description: "Fried rice with prawns and vegetables.",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop",
    category: 'chinese',
    type: 'non-veg',
    prices: { half: 280, full: 520 }
  },
  // More Seafood
  {
    id: '60',
    name: "Goan Fish Curry",
    description: "Fish cooked in coconut-based Goan curry.",
    image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&h=300&fit=crop",
    category: 'seafood',
    type: 'non-veg',
    prices: { half: 400, full: 750 }
  },
  {
    id: '61',
    name: "Prawn Butter Garlic",
    description: "Prawns cooked in butter garlic sauce.",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop",
    category: 'seafood',
    type: 'non-veg',
    prices: { half: 480, full: 900 }
  },
  {
    id: '62',
    name: "Crab Masala",
    description: "Fresh crab cooked in spicy masala.",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop",
    category: 'seafood',
    type: 'non-veg',
    prices: { half: 550, full: 1050 }
  },
  {
    id: '63',
    name: "Squid Fry",
    description: "Crispy fried squid rings with spices.",
    image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&h=300&fit=crop",
    category: 'seafood',
    type: 'non-veg',
    prices: { half: 420, full: 800 }
  },
  // More Biryani
  {
    id: '64',
    name: "Prawn Biryani",
    description: "Aromatic rice with succulent prawns.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    category: 'biryani',
    type: 'non-veg',
    prices: { half: 380, full: 720 }
  },
  {
    id: '65',
    name: "Fish Biryani",
    description: "Fragrant rice layered with fish pieces.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    category: 'biryani',
    type: 'non-veg',
    prices: { half: 350, full: 650 }
  },
  {
    id: '66',
    name: "Keema Biryani",
    description: "Minced mutton cooked with aromatic rice.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    category: 'biryani',
    type: 'non-veg',
    prices: { half: 320, full: 600 }
  }
];
