import React from 'react'
import { cn } from '@/lib/utils'

interface TextProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  variant?: 'hero' | 'title' | 'subtitle' | 'body' | 'caption'
  className?: string
  children: React.ReactNode
}

const Text: React.FC<TextProps> = ({ 
  as: Component = 'p', 
  variant = 'body', 
  className,
  children 
}) => {
  const variants = {
    hero: 'text-6xl md:text-7xl lg:text-8xl font-light tracking-tight',
    title: 'text-3xl md:text-4xl lg:text-5xl font-light tracking-wide',
    subtitle: 'text-xl md:text-2xl font-light tracking-wide',
    body: 'text-base md:text-lg font-light leading-relaxed',
    caption: 'text-sm md:text-base text-gray-600 tracking-wide',
  }

  return (
    <Component className={cn(variants[variant], className)}>
      {children}
    </Component>
  )
}

export default Text