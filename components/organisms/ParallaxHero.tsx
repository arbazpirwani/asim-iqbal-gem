'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Diamond3D from '@/components/molecules/Diamond3D'
import Button from '@/components/atoms/Button'
import Text from '@/components/atoms/Text'

const ParallaxHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const y1 = useTransform(smoothProgress, [0, 1], [0, -100])
  const y2 = useTransform(smoothProgress, [0, 1], [0, -200])
  const y3 = useTransform(smoothProgress, [0, 1], [0, -300])
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 1.2])
  const opacity = useTransform(smoothProgress, [0, 0.8], [1, 0])

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10
  }))

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"
          style={{ scale }}
        />

        <motion.div
          className="absolute inset-0"
          style={{ opacity }}
        >
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-gray-300/20"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ y: y3, opacity }}
        >
          <Diamond3D className="w-96 h-96" />
        </motion.div>

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center z-10"
          style={{ y: y1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center space-y-6 px-6"
          >
            <motion.div style={{ y: y2 }}>
              <Text variant="caption" className="uppercase tracking-[0.3em] mb-4 block">
                Asim Iqbal Gem
              </Text>
            </motion.div>
            
            <motion.div style={{ y: y1 }}>
              <Text variant="hero" className="font-serif">
                Discover
                <span className="block italic font-light">Brilliance</span>
              </Text>
            </motion.div>

            <motion.div style={{ y: y2 }}>
              <Text variant="subtitle" className="max-w-2xl mx-auto text-gray-600">
                Timeless elegance meets contemporary design in our exquisite collection of handcrafted jewelry
              </Text>
            </motion.div>

            <motion.div
              style={{ y: y1 }}
              className="flex gap-4 justify-center pt-8"
            >
              <Button variant="primary" size="lg">
                Explore Collection
              </Button>
              <Button variant="outline" size="lg">
                Our Story
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          style={{ opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <Text variant="caption">Scroll to explore</Text>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-400"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ParallaxHero