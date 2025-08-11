'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Text from '@/components/atoms/Text'

const AboutHero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Text variant="caption" className="uppercase tracking-[0.3em] mb-4 block">
              Our Story
            </Text>
            <Text variant="hero" className="font-serif mb-6">
              A Legacy of
              <span className="block italic font-light">Excellence</span>
            </Text>
            <Text variant="body" className="text-gray-600 mb-6">
              Founded in 1992, Asim Iqbal Gem has been at the forefront of luxury jewelry craftsmanship for over three decades. What began as a small workshop has evolved into a renowned atelier, trusted by discerning clients worldwide.
            </Text>
            <Text variant="body" className="text-gray-600 mb-6">
              Our founder, Asim Iqbal, brought together traditional techniques passed down through generations with innovative design approaches, creating a unique signature that defines our brand today.
            </Text>
            <Text variant="body" className="text-gray-600">
              Every piece that leaves our workshop carries with it not just precious materials, but a piece of our heritage, our passion, and our unwavering commitment to perfection.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5]"
          >
            <Image
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
              alt="Jewelry workshop"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero