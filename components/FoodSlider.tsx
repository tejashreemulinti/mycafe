'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MENU_ITEMS } from '@/data/menu';

export function FoodSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Featured items - show best sellers
  const featuredItems = MENU_ITEMS.filter(item => 
    ['Butter Chicken Rice', 'Margherita Pizza', 'Paneer Tikka Masala', 'Veg Momos', 'Chicken Biryani'].includes(item.name)
  );

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay, featuredItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredItems.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
    setAutoPlay(false);
  };

  const currentItem = featuredItems[currentIndex];

  return (
    <section className="w-full bg-gradient-to-b from-black via-gray-900 to-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-yellow-400">Delicacies</span>
          </h2>
          <p className="text-gray-400 text-lg">Discover our most loved dishes that keep customers coming back</p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="absolute left-0 z-20 p-2 md:p-3 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black transition-all duration-300 shadow-lg"
          >
            <ChevronLeft size={24} />
          </motion.button>

          {/* Slider Content */}
          <motion.div
            layout
            className="w-full flex justify-center"
          >
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-3xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl p-8 md:p-12 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 shadow-2xl">
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-64 md:h-72 rounded-xl overflow-hidden border-2 border-yellow-400/50"
                >
                  <Image
                    src={currentItem.image}
                    alt={currentItem.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col justify-center"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    {currentItem.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-yellow-400 font-semibold">★★★★★</span>
                    <span className="text-gray-400">5.0 (156 reviews)</span>
                  </div>

                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {currentItem.description}
                  </p>

                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-bold text-yellow-400">
                      ₹{currentItem.price}
                    </span>
                    <span className="text-gray-500 line-through text-lg">
                      ₹{Math.round(currentItem.price * 1.25)}
                    </span>
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-sm">
                      Save 20%
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)]"
                  >
                    View Details
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="absolute right-0 z-20 p-2 md:p-3 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black transition-all duration-300 shadow-lg"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-2 mt-8"
        >
          {featuredItems.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setAutoPlay(false);
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-yellow-400 w-8'
                  : 'bg-gray-600 hover:bg-gray-500 w-3'
              }`}
            />
          ))}
        </motion.div>

        {/* Auto-play indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6"
        >
          <p className="text-gray-400 text-sm">
            {autoPlay ? 'Auto-playing...' : 'Click to navigate'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
