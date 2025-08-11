'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Heart, Sparkles, Users } from 'lucide-react'
import Text from '@/components/atoms/Text'

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Every piece comes with complete transparency and certification.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Our love for the craft shows in every detail of our creations.',
  },
  {
    icon: Sparkles,
    title: 'Excellence',
    description: 'We never compromise on quality, using only the finest materials.',
  },
  {
    icon: Users,
    title: 'Relationships',
    description: 'Building lasting connections with every client we serve.',
  },
]

const Values: React.FC = () => {
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
            What Drives Us
          </Text>
          <Text variant="title" className="font-serif">
            Our Values
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                <value.icon className="w-8 h-8" strokeWidth={1} />
              </div>
              <h3 className="text-lg font-medium mb-3">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values