'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Text from '@/components/atoms/Text'
import Button from '@/components/atoms/Button'

const categories = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets']

const products = [
  {
    id: 1,
    name: 'Eternal Solitaire',
    category: 'Rings',
    price: '$12,500',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
  },
  {
    id: 2,
    name: 'Pearl Cascade',
    category: 'Necklaces',
    price: '$8,900',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  },
  {
    id: 3,
    name: 'Diamond Drops',
    category: 'Earrings',
    price: '$6,500',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  },
  {
    id: 4,
    name: 'Royal Heritage',
    category: 'Bracelets',
    price: '$9,800',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
  },
  {
    id: 5,
    name: 'Infinity Band',
    category: 'Rings',
    price: '$4,500',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80',
  },
  {
    id: 6,
    name: 'Celestial Chain',
    category: 'Necklaces',
    price: '$7,200',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
  },
  {
    id: 7,
    name: 'Sapphire Studs',
    category: 'Earrings',
    price: '$3,800',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
  },
  {
    id: 8,
    name: 'Tennis Classic',
    category: 'Bracelets',
    price: '$15,000',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
  },
]

const ProductGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? 'border-b-2 border-black font-medium'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-square mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Button variant="primary" size="sm" className="w-full">
                      View Details
                    </Button>
                  </div>
                </div>
                <h3 className="text-lg font-light mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{product.category}</p>
                <p className="text-base font-medium">{product.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProductGrid