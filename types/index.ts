export interface NavItem {
  title: string
  href: string
  description?: string
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  featured?: boolean
  model3D?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  hours: {
    weekdays: string
    weekends: string
  }
}

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter?: string
    instagram?: string
    facebook?: string
  }
}