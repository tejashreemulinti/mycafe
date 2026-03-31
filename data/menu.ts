export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  rating?: number;
  isSpecial?: boolean;
}

export const MENU_CATEGORIES = [
  'All',
  'Meals',
  'Soups',
  'Starters',
  'Main Course',
  'Bread',
  'Rice',
  'Momos',
  'Desserts',
  'Drinks (Beverages)',
];

export const MENU_ITEMS: MenuItem[] = [

  // ================= MEALS =================

  {
    id: 'meal-1',
    name: 'Paneer Tikka Curry with Jeera Rice',
    description: 'Smoky paneer curry with aromatic rice.',
    category: 'Meals',
    image: '/images/food/meal1.jpg',
    rating: 4.8,
    isSpecial: true,
  },

  {
    id: 'meal-2',
    name: 'Paneer Makhani Curry with Jeera Rice',
    description: 'Creamy, buttery paneer curry served with rice.',
    category: 'Meals',
    image: '/images/food/meal2.jpg',
    rating: 4.7,
  },

  {
    id: 'meal-3',
    name: 'Paneer Kolhapuri with Jeera Rice',
    description: 'Spicy Kolhapuri curry paired with jeera rice.',
    category: 'Meals',
    image: '/images/food/meal3.jpg',
    rating: 4.6,
  },

 

  {
    id: 'meal-4',
    name: 'Green Thai Curry with Garlic Rice',
    description: 'Herbal green curry with aromatic rice.',
    category: 'Meals',
    image: '/images/food/meal4.jpg',
    rating: 4.7,
  },



  // ================= SOUPS =================

  {
    id: 'soup-1',
    name: 'Veg Manchow Soup',
    description: 'Hot, spicy soup topped with crispy noodles.',
    category: 'Soups',
    image: '/images/food/soup1.jpg',
    rating: 4.6,
  },

  {
    id: 'soup-2',
    name: 'Hot Garlic Soup',
    description: 'Garlic rich soup for strong flavor lovers.',
    category: 'Soups',
    image: '/images/food/soup2.jpg',
    rating: 4.7,
  },

  // ================= STARTERS =================

  {
    id: 'starter-1',
    name: 'Gobi Manchurian',
    description: 'Cauliflower tossed in tangy manchurian gravy.',
    category: 'Starters',
    image: '/images/food/starter1.jpg',
    rating: 4.6,
  },

  {
    id: 'starter-2',
    name: 'Paneer Manchurian',
    description: 'Paneer cubes cooked in Indo Chinese style.',
    category: 'Starters',
    image: '/images/food/starter2.jpg',
    rating: 4.7,
  },

  {
    id: 'starter-3',
    name: 'Paneer Chilli',
    description: 'Spicy and tangy paneer tossed with peppers.',
    category: 'Starters',
    image: '/images/food/starter3.jpg',
    rating: 4.8,
  },

  {
    id: 'starter-4',
    name: 'Indonesian Paneer',
    description: 'Asian style paneer with sweet spicy glaze.',
    category: 'Starters',
    image: '/images/food/starter4.jpg',
    rating: 4.7,
  },

  {
    id: 'starter-5',
    name: 'Green Thai Paneer',
    description: 'Paneer in aromatic green Thai curry.',
    category: 'Starters',
    image: '/images/food/starter5.jpg',
    rating: 4.6,
  },

  {
    id: 'starter-6',
    name: 'Veg Crispy',
    description: 'Crispy vegetables tossed in spicy sauce.',
    category: 'Starters',
    image: '/images/food/starter6.jpg',
    rating: 4.6,
  },

  // ================= MAIN COURSE =================

  {
    id: 'main-1',
    name: 'Paneer Tikka Masala',
    description: 'Paneer cooked in rich tikka masala gravy.',
    category: 'Main Course',
    image: '/images/food/main1.jpg',
    rating: 4.7,
  },

  {
    id: 'main-2',
    name: 'Paneer Kolhapuri',
    description: 'Authentic spicy Kolhapuri style paneer curry.',
    category: 'Main Course',
    image: '/images/food/main2.jpg',
    rating: 4.7,
  },

  {
    id: 'main-3',
    name: 'Paneer Makhani Masala',
    description: 'Creamy tomato based curry.',
    category: 'Main Course',
    image: '/images/food/main3.jpg',
    rating: 4.8,
  },

  // ================= BREAD =================

  {
    id: 'bread-1',
    name: 'Paratha',
    description: 'Soft buttery Indian flatbread.',
    category: 'Bread',
    image: '/images/food/bread1.jpg',
    rating: 4.5,
  },

  // ================= RICE =================

  {
    id: 'rice-1',
    name: 'Jeera Rice',
    description: 'Fragrant rice flavored with cumin.',
    category: 'Rice',
    image: '/images/food/rice1.jpg',
    rating: 4.6,
  },

  // ================= MOMOS =================

  {
    id: 'momo-1',
    name: 'Veg Fried Momos',
    description: 'Crispy golden fried veg momos.',
    category: 'Momos',
    image: '/images/food/momo1.jpg',
    rating: 4.6,
  },

  {
    id: 'momo-2',
    name: 'Paneer Fried Kurkure Momos',
    description: 'Crunchy paneer kurkure style momos.',
    category: 'Momos',
    image: '/images/food/momo2.jpg',
    rating: 4.7,
  },

  {
    id: 'momo-3',
    name: 'Cheese Corn Fried Momos',
    description: 'Cheesy corn stuffed crispy momos.',
    category: 'Momos',
    image: '/images/food/momo3.jpg',
    rating: 4.6,
  },

  {
    id: 'momo-4',
    name: 'Barbeque Smoky Paneer Momos',
    description: 'Smoky paneer momos with barbeque glaze.',
    category: 'Momos',
    image: '/images/food/momo4.jpg',
    rating: 4.7,
  },

  // ================= DESSERT =================

  {
    id: 'dessert-1',
    name: 'Hot Brownie',
    description: 'Soft chocolate brownie served warm.',
    category: 'Desserts',
    image: '/images/food/dessert1.jpg',
    rating: 4.8,
    isSpecial: true,
  },

  // ================= DRINKS =================

  {
    id: 'drink-1',
    name: 'Charlie Hard Rock Coffee',
    description: 'Strong cold coffee with bold flavor.',
    category: 'Drinks (Beverages)',
    image: '/images/food/drink1.jpg',
    rating: 4.6,
  },

  {
    id: 'drink-2',
    name: 'Charlie Chocolate Cold Coffee',
    description: 'Classic cold coffee blended with rich chocolate.',
    category: 'Drinks (Beverages)',
    image: '/images/food/drink2.jpg',
    rating: 4.6,
  },

  {
    id: 'drink-3',
    name: 'KitKat Cold Coffee',
    description: 'Topped with KitKat chunks and whipped cream.',
    category: 'Drinks (Beverages)',
    image: '/images/food/drink3.jpg',
    rating: 4.7,
  },


{
    id: 'drink-4',
    name: 'Blue Ocean Mocktail',
    description: '[Non Alcoholic] Blue curacao inspired tropical beverage.',
    category: 'Drinks (Beverages)',
    image: '/images/food/drink4.jpg',
    rating: 4.6,
  },

  {
    id: 'drink-5',
    name: 'Mint Mojito',
    description: '[Non Alcoholic] Cool mint, lemon and fizz for instant freshness.',
    category: 'Drinks (Beverages)',
    image: '/images/food/drink5.jpg',
    rating: 4.6,
  },

  {
    id: 'drink-6',
    name: 'Kiwi Moctail',
    description: '[Non Alcoholic] Tropical kiwi with a zesty twist.',
    category: 'Drinks (Beverages)',
    image: '/images/food/drink6.jpg',
    rating: 4.7,
  },



  {
    id: 'drink-7',
    name: 'Belgium Chocolate Shake',
    description: 'Thick shake made with real chocolate.',
    category: 'Drinks (Beverages)',
    image: '/images/food/drink7.jpg',
    rating: 4.8,
  },

  {
    id: 'drink-8',
    name: 'Mango Shake',
    description: 'Classic mango shake.',
    category: 'Drinks (Beverages)',
    image: '/images/food/drink8.jpg',
    rating: 4.7,
  },

];