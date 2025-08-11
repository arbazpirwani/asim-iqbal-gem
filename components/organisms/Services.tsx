'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Gem, Palette, Settings, Award } from 'lucide-react'
import Text from '@/components/atoms/Text'

const services = [
  {
    icon: Gem,
    title: 'Custom Design',
    description: 'Work with our master craftsmen to create your unique piece',
  },
  {
    icon: Settings,
    title: 'Expert Repairs',
    description: 'Restore your precious jewelry to its original glory',
  },
  {
    icon: Palette,
    title: 'Personalization',
    description: 'Add engravings and custom touches to make it truly yours',
  },
  {
    icon: Award,
    title: 'Certification',
    description: 'All our pieces come with authentic certification',
  },
]

const Services: React.FC = () => {
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
            Excellence in Every Detail
          </Text>
          <Text variant="title" className="font-serif mb-6">
            Our Services
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-gray-300 group-hover:border-black transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-light mb-3">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services