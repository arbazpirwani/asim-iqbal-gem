'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Text from '@/components/atoms/Text'

const ContactHero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Text variant="caption" className="uppercase tracking-[0.3em] mb-4 block">
            Get in Touch
          </Text>
          <Text variant="hero" className="font-serif mb-6">
            Contact Us
          </Text>
          <Text variant="body" className="max-w-2xl mx-auto text-gray-600">
            We'd love to hear from you. Whether you're looking for the perfect piece or have questions about our services, our team is here to help.
          </Text>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHero