'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Text from '@/components/atoms/Text'

const ServiceHero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Text variant="caption" className="uppercase tracking-[0.3em] mb-4 block">
            What We Do
          </Text>
          <Text variant="hero" className="font-serif mb-6">
            Our Services &
            <span className="block italic font-light">Collections</span>
          </Text>
          <Text variant="body" className="max-w-3xl mx-auto text-gray-600">
            From bespoke creations to timeless classics, discover our comprehensive range of services and exquisite jewelry collections crafted to perfection.
          </Text>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceHero