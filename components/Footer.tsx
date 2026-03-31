'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-yellow-400/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Mr. Charlie <span className="text-yellow-400">CAFE</span>
            </h3>

            <p className="text-gray-400 text-sm">
              Experience premium dining with authentic flavors and elegant ambiance in Solapur.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-bold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2">

              <li>
                <Link
                  href="/menu"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  Menu
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>

              <li>
                <a
                  href="https://www.zomato.com/solapur/mr-charlie-cafe-solapur-locality/order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  Order
                </a>
              </li>

            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-4">
              Contact
            </h4>

            <ul className="space-y-2">

              <li className="flex items-center gap-2 text-gray-400 text-sm hover:text-yellow-400 transition-colors">
                <Phone size={16} />

                <a href="tel:+917058389633">
                  +91 70583 89633
                </a>
              </li>

              <li className="flex items-center gap-2 text-gray-400 text-sm hover:text-yellow-400 transition-colors">
                <MapPin size={16} />

                Navneet hospital, Ashwini hospital road, beside remand home, South Sadar Bazar, Jawaharlal Housing Society, Keshav Nagra, Solapur, Maharashtra 413003
              </li>

            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-bold mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4">



              <a
                href="https://www.instagram.com/mr.charlie_cafe/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400/60 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>



            </div>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="border-t border-yellow-400/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >

          <p className="text-gray-500 text-sm">
            © {currentYear} Mr. Charlie Cafe. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">

            <Link
              href="/privacy-policy"
              className="hover:text-yellow-400 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-yellow-400 transition-colors"
            >
              Terms of Service
            </Link>

          </div>

        </motion.div>

      </div>
    </footer>
  );
}