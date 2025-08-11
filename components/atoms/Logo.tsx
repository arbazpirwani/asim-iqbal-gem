'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showText?: boolean
}

const Logo: React.FC<LogoProps> = ({ className, showText = true }) => {
  return (
    <Link href="/" className={cn('flex items-center gap-2', className)}>
      <motion.div
        className="relative w-10 h-10"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M20 5L35 15L30 35H10L5 15L20 5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M20 5L35 15L20 25L5 15L20 5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M20 25L35 15L30 35L20 25Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M20 25L5 15L10 35L20 25Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </motion.div>
      {showText && (
        <div className="flex flex-col">
          <span className="text-lg font-light tracking-widest uppercase">Asim Iqbal</span>
          <span className="text-xs tracking-[0.3em] uppercase text-gray-600">Gem</span>
        </div>
      )}
    </Link>
  )
}

export default Logo