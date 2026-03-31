'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';

export function HeroSection() {
  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: 'url(/images/ambiance/cafe-interior-1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/55 z-5" />
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-20"
            animate={{
              y: [0, -200, 0],
              x: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500 rounded-full opacity-10 blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-600 rounded-full opacity-10 blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-2">
            Mr. Charlie
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-yellow-300 via-yellow-400 to-yellow-500">
              CAFE
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light tracking-widest">
            .

            🍽️ CONTINENTAL & CHINESE 🍜
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          Discover the perfect blend of culinary excellence and sophisticated ambiance.
          Experience flavors that dance on your palate with every bite.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#menu">
            <Button
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)]"
            >
              Explore Menu
            </Button>
          </a>
          <a href="https://www.zomato.com/solapur/mr-charlie-cafe-solapur-locality/order">
            <Button
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)]"
            >
              Order Now
            </Button>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-400 text-sm">Scroll to explore</span>
            <svg
              className="w-6 h-6 text-yellow-400 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 z-15 w-full h-24 bg-linear-to-t from-black to-transparent" />
    </div>
  );
}
