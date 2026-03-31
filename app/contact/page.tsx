'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

import emailjs from '@emailjs/browser';
import { useRef } from 'react';


import { HeroSection } from '@/components/HeroSection';
import { MenuSection } from '@/components/MenuSection';
import { AmbianceSection } from '@/components/AmbianceSection';



export default function ContactPage() {

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    if (!formRef.current) return;

    try {

      await emailjs.sendForm(
        'service_lg5hflc',   // replace
        'template_wb1sp2d',  // replace
        formRef.current,
        'ocnc3coNiHf4ZXZCv'    // replace
      );

      alert('Thank you! Your message has been sent.');

      formRef.current.reset();

    } catch (error) {

      console.error(error);

      alert('Failed to send message. Please try again.');

    }

  };

  return (
    <main className="min-h-screen bg-black">

      <Navbar isSticky={true} />

      <div className="pt-20 pb-20">

        {/* Header */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">

              Get in <span className="gold-gradient">Touch</span>

            </h1>

            <p className="text-xl text-gray-400">

              We'd love to hear from you. Contact us for reservations or inquiries.

            </p>

          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Contact Information */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >

              <h2 className="text-3xl font-bold text-white mb-8">

                Contact Information

              </h2>

              {/* Address */}

              <motion.div
                whileHover={{ x: 5 }}
                className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300"
              >

                <div className="flex-shrink-0">

                  <MapPin className="w-6 h-6 text-yellow-400 mt-1" />

                </div>

                <div>

                  <h3 className="text-lg font-semibold text-white mb-2">

                    Location

                  </h3>

                  <p className="text-gray-400">

                    Navneet hospital, Ashwini hospital road, beside remand home, South Sadar Bazar, Jawaharlal Housing Society, Keshav Nagra, Solapur, Maharashtra 413003

                  </p>

                </div>

              </motion.div>

              {/* Phone */}

              <motion.div
                whileHover={{ x: 5 }}
                className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300"
              >

                <div className="flex-shrink-0">

                  <Phone className="w-6 h-6 text-yellow-400 mt-1" />

                </div>

                <div>

                  <h3 className="text-lg font-semibold text-white mb-2">

                    Phone

                  </h3>

                  <p className="text-gray-400">

                    <a
                      href="tel:+919876543210"
                      className="hover:text-yellow-400 transition-colors"
                    >

                      +91 89756 33633

                    </a>

                  </p>

                </div>

              </motion.div>

              {/* Hours */}

              <motion.div
                whileHover={{ x: 5 }}
                className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300"
              >

                <div className="flex-shrink-0">

                  <Clock className="w-6 h-6 text-yellow-400 mt-1" />

                </div>

                <div>

                  <h3 className="text-lg font-semibold text-white mb-2">

                    Operating Hours

                  </h3>

                  <p className="text-gray-400">

                    Monday - Sunday: 11:00 AM - 11:00 PM<br />


                  </p>

                </div>

              </motion.div>

            </motion.div>

            {/* Contact Form */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300"
              >

                <h2 className="text-3xl font-bold text-white mb-8">

                  Send us a Message

                </h2>

                {/* Your inputs remain EXACTLY same */}

                {/* Name */}

                <motion.div whileHover={{ scale: 1.02 }} className="group">

                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >

                    Full Name

                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-yellow-400/30 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-all duration-300 group-hover:border-yellow-400/60"
                    placeholder="Your name"
                  />

                </motion.div>

                {/* Email */}

                <motion.div whileHover={{ scale: 1.02 }} className="group">

                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >

                    Email Address

                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-yellow-400/30 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-all duration-300 group-hover:border-yellow-400/60"
                    placeholder="your@email.com"
                  />

                </motion.div>

                {/* Phone */}

                <motion.div whileHover={{ scale: 1.02 }} className="group">

                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >

                    Phone Number

                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-yellow-400/30 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-all duration-300 group-hover:border-yellow-400/60"
                    placeholder="+91 XXXXX XXXXX"
                  />

                </motion.div>

                {/* Subject */}

                <motion.div whileHover={{ scale: 1.02 }} className="group">

                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >

                    Subject

                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-yellow-400/30 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-all duration-300 group-hover:border-yellow-400/60"
                    placeholder="Reservation, Inquiry, Feedback..."
                  />

                </motion.div>

                {/* Message */}

                <motion.div whileHover={{ scale: 1.02 }} className="group">

                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >

                    Message

                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-yellow-400/30 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-all duration-300 group-hover:border-yellow-400/60 resize-none"
                    placeholder="Tell us what you'd like to discuss..."
                  />

                </motion.div>

                {/* Submit Button */}

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(250,204,21,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >

                  Send Message

                </motion.button>

              </form>

            </motion.div>

          </div>

        </div>

      </div>

      <Footer />

    </main>
  );
}