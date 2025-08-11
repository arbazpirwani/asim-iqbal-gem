'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Text from '@/components/atoms/Text'

const milestones = [
  {
    year: '1992',
    title: 'The Beginning',
    description: 'Asim Iqbal Gem opens its first workshop with a vision to create exceptional jewelry.',
  },
  {
    year: '2000',
    title: 'International Recognition',
    description: 'Our pieces are featured in prestigious international exhibitions.',
  },
  {
    year: '2010',
    title: 'Innovation Era',
    description: 'Introduction of cutting-edge 3D design technology while maintaining traditional craftsmanship.',
  },
  {
    year: '2018',
    title: 'Global Expansion',
    description: 'Opening of flagship stores in major cities worldwide.',
  },
  {
    year: '2024',
    title: 'Digital Revolution',
    description: 'Launch of virtual showroom and AR try-on experiences.',
  },
]

const Timeline: React.FC = () => {
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
            Our Journey
          </Text>
          <Text variant="title" className="font-serif">
            Milestones
          </Text>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-300" />
          
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="text-3xl font-serif mb-2">{milestone.year}</div>
                <h3 className="text-lg font-medium mb-2">{milestone.title}</h3>
                <p className="text-sm text-gray-600">{milestone.description}</p>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-black rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline