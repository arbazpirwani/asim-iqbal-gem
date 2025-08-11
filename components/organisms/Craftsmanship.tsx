'use client'

import React from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Text from '@/components/atoms/Text'
import Button from '@/components/atoms/Button'

const Craftsmanship: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0.5, 0.8], [1, 1.1])

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Text variant="caption" className="uppercase tracking-[0.3em] mb-4 block">
              The Art of Perfection
            </Text>
            <Text variant="title" className="font-serif mb-6">
              Craftsmanship That
              <span className="block italic font-light">Transcends Time</span>
            </Text>
            <Text variant="body" className="text-gray-600 mb-6">
              For over three decades, our master artisans have been creating jewelry that captures the essence of beauty and elegance. Each piece is meticulously crafted by hand, ensuring that every detail meets our exacting standards.
            </Text>
            <Text variant="body" className="text-gray-600 mb-8">
              From the initial sketch to the final polish, we combine traditional techniques with modern innovation to create pieces that will be treasured for generations.
            </Text>
            <div className="flex gap-4">
              <Button variant="primary">Learn Our Story</Button>
              <Button variant="outline">View Process</Button>
            </div>
          </motion.div>

          <motion.div
            style={{ scale }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5]"
            >
              <Image
                src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
                alt="Master craftsman at work"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl font-serif">30+</div>
                <div>
                  <div className="text-sm font-medium">Years of</div>
                  <div className="text-sm text-gray-600">Excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Craftsmanship