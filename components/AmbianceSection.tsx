'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Utensils, Users, MapPin } from 'lucide-react';

export function AmbianceSection() {
  const features = [
    {
      icon: Utensils,
      title: 'Premium Cuisine',
      description: 'Authentic dishes crafted by our expert chefs with finest ingredients',
    },
    {
      icon: Users,
      title: 'Warm Ambiance',
      description: 'Elegant interiors designed for an unforgettable dining experience',
    },
    {
      icon: MapPin,
      title: 'Perfect Location',
      description: 'Conveniently located in Solapur Locality for easy access',
    },
  ];

  const ambianceImages = [
    '/images/ambiance/cafe-interior-1.jpg',
    '/images/ambiance/cafe-interior-2.jpg',
    '/images/ambiance/cafe-interior-3.jpg',
    '/images/ambiance/cafe-interior-4.jpg',
  ];

  return (
    <div id="about" className="w-full bg-linear-to-b from-black to-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience <span className="text-yellow-400">Mr. Charlie</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Where culinary excellence meets sophisticated ambiance
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-linear-to-br from-gray-900 to-black border border-yellow-400/30 rounded-xl hover:border-yellow-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]"
              >
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-black" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Ambiance Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {ambianceImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative h-64 md:h-80 rounded-xl overflow-hidden border border-yellow-400/30 group cursor-pointer"
            >
              <Image
                src={image}
                alt={`Mr. Charlie Cafe Ambiance ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                <p className="text-yellow-400 font-semibold">Premium Ambiance</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 bg-linear-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/30 rounded-xl text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Mr. Charlie Cafe is more than just a restaurant—it's a celebration of culinary artistry and 
            hospitality. Located in the heart of Solapur Locality, we pride ourselves on delivering authentic, 
            flavorful dishes in an elegantly designed space that invites you to linger and savor every moment. 
            From traditional recipes to modern innovations, every dish is a testament to our commitment to excellence.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
