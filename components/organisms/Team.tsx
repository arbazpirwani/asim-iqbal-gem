'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Text from '@/components/atoms/Text'

const team = [
  {
    id: 1,
    name: 'Asim Iqbal',
    role: 'Founder & Master Craftsman',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    bio: 'With over 40 years of experience in jewelry making, Asim brings unparalleled expertise and vision.',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Head Designer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    bio: 'Award-winning designer known for creating innovative pieces that blend tradition with modernity.',
  },
  {
    id: 3,
    name: 'Michael Roberts',
    role: 'Gemologist',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    bio: 'Certified gemologist ensuring every stone meets our exacting standards of quality.',
  },
  {
    id: 4,
    name: 'Emma Wilson',
    role: 'Client Relations Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80',
    bio: 'Dedicated to providing exceptional service and creating memorable experiences for our clients.',
  },
]

const Team: React.FC = () => {
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
            The People Behind the Magic
          </Text>
          <Text variant="title" className="font-serif">
            Our Team
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative aspect-square mb-4 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-lg font-medium mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{member.role}</p>
              <p className="text-sm text-gray-500">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team