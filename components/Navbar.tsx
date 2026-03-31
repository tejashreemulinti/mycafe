'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  isSticky?: boolean;
}

export function Navbar({ isSticky = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${isSticky ? 'fixed' : 'sticky'
        } top-0 z-40 w-full transition-all duration-300 ${isSticky
          ? 'bg-black/80 backdrop-blur-md border-b border-yellow-400/20'
          : 'bg-black'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo → Go to Home */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="w-10 h-10 object-contain"
              />

              <span className="text-white font-bold text-lg hidden sm:block">
                Mr. Charlie
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <Link
              href="/menu"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Menu
            </Link>

            <Link
              href="/about"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Contact
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-yellow-400"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-black/50 backdrop-blur-md border-t border-yellow-400/20"
        >
          <div className="px-4 py-4 space-y-4">

            <Link
              href="/menu"
              className="block text-gray-300 hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>

            <Link
              href="/about"
              className="block text-gray-300 hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              href="/contact"
              className="block text-gray-300 hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

          </div>
        </motion.div>

      </div>
    </motion.nav>
  );
}