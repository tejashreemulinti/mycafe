'use client';

import { motion } from 'framer-motion';
import { MENU_CATEGORIES } from '@/data/menu';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-16 z-30 w-full bg-linear-to-b from-black via-black to-black/80 backdrop-blur-md border-b border-yellow-400/20 py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {MENU_CATEGORIES.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onCategoryChange(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`whitespace-nowrap px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/50'
                  : 'bg-gray-900/50 text-gray-300 border border-gray-700 hover:border-yellow-400/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
