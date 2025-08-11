'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Search, Pencil, Hammer, Package } from 'lucide-react'
import Text from '@/components/atoms/Text'

const steps = [
  {
    icon: Search,
    title: 'Consultation',
    description: 'Discuss your vision with our expert designers',
  },
  {
    icon: Pencil,
    title: 'Design',
    description: 'Create detailed sketches and 3D renderings',
  },
  {
    icon: Hammer,
    title: 'Crafting',
    description: 'Master artisans bring your piece to life',
  },
  {
    icon: Package,
    title: 'Delivery',
    description: 'Receive your perfectly crafted jewelry',
  },
]

const ProcessSection: React.FC = () => {
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
            How We Work
          </Text>
          <Text variant="title" className="font-serif mb-6">
            Our Process
          </Text>
          <Text variant="body" className="max-w-2xl mx-auto text-gray-600">
            From initial concept to final creation, every step is carefully orchestrated to ensure perfection
          </Text>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-white border-2 border-gray-300 relative z-10">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-light mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection