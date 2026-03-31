'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { MenuItem } from '@/data/menu';

interface MenuCardProps {
  item: MenuItem;
  index?: number;
}

export function MenuCard({ item, index = 0 }: MenuCardProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group relative bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 rounded-xl overflow-hidden hover:border-yellow-400/60 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]"
    >
      {/* Special Badge */}
      {item.isSpecial && (
        <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
          ★ Special
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-800 to-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-full"
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 z-20 bg-black/40"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Name */}
        <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors line-clamp-2">
          {item.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 line-clamp-2">{item.description}</p>

        {/* Rating and Price row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {item.rating && (
              <>
                <Star className="text-yellow-400 fill-yellow-400" size={16} />
                <span className="text-sm font-semibold text-white">{item.rating}</span>
              </>
            )}
          </div>
          {/* <p className="text-2xl font-bold text-yellow-400">₹{item.price}</p> */}
        </div>


      </div>

      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/0 to-yellow-400/0 group-hover:bg-gradient-to-r group-hover:from-yellow-400/20 group-hover:via-yellow-400/0 group-hover:to-transparent pointer-events-none transition-all duration-300" />
    </motion.div>
  );
}
