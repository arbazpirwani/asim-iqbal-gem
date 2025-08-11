'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Text from '@/components/atoms/Text'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Bride',
    content: 'The engagement ring exceeded all my expectations. The attention to detail and craftsmanship is absolutely stunning.',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Collector',
    content: 'I\'ve been collecting fine jewelry for years, and Asim Iqbal Gem pieces are truly exceptional. World-class quality.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Fashion Designer',
    content: 'Their custom design service brought my vision to life perfectly. The team\'s expertise and creativity are unmatched.',
    rating: 5,
  },
]

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Text variant="caption" className="uppercase tracking-[0.3em] mb-4 block">
            Client Stories
          </Text>
          <Text variant="title" className="font-serif mb-6">
            Words from Our Clients
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials