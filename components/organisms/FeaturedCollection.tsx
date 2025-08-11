'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Text from '@/components/atoms/Text'
import Button from '@/components/atoms/Button'

const collections = [
  {
    id: 1,
    name: 'Diamond Solitaires',
    description: 'Timeless elegance in its purest form',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    price: 'From $5,000',
  },
  {
    id: 2,
    name: 'Heritage Collection',
    description: 'Inspired by centuries of craftsmanship',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    price: 'From $3,500',
  },
  {
    id: 3,
    name: 'Modern Luxe',
    description: 'Contemporary designs for the modern connoisseur',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
    price: 'From $2,800',
  },
  {
    id: 4,
    name: 'Bridal Exclusive',
    description: 'For your most precious moments',
    image: 'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=800&q=80',
    price: 'From $8,000',
  },
]

const FeaturedCollection: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Text variant="caption" className="uppercase tracking-[0.3em] mb-4 block">
            Curated for You
          </Text>
          <Text variant="title" className="font-serif mb-6">
            Featured Collections
          </Text>
          <Text variant="body" className="max-w-2xl mx-auto text-gray-600">
            Each piece in our collection tells a story of exceptional craftsmanship and timeless beauty
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-4">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-lg font-light mb-2">{collection.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{collection.description}</p>
              <p className="text-sm font-medium">{collection.price}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button variant="outline" size="lg">
              View All Collections
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedCollection