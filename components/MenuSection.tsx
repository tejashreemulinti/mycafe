'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { MENU_ITEMS, MenuItem } from '@/data/menu';
import { MenuCard } from './MenuCard';
import { CategoryFilter } from './CategoryFilter';

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') {
      return MENU_ITEMS;
    }
    return MENU_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div id="menu" className="w-full bg-black py-12">
      {/* Category Filter */}
      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Exquisite <span className="text-yellow-400">Menu</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Crafted with passion and premium ingredients, each dish tells a story of culinary excellence
          </p>
        </motion.div>

        {/* Items Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No items message */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No items found in this category</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// Import AnimatePresence
import { AnimatePresence } from 'framer-motion';
