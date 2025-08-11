import React from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import Logo from '@/components/atoms/Logo'
import Text from '@/components/atoms/Text'
import siteConfig from '@/content/site-config.json'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo className="text-white" />
            <Text variant="caption" className="text-gray-400">
              {siteConfig.site.tagline}
            </Text>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-wider font-medium">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-wider font-medium">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 text-gray-400" />
                <span className="text-sm text-gray-400">{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-gray-400" />
                <span className="text-sm text-gray-400">{siteConfig.contact.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-gray-400" />
                <span className="text-sm text-gray-400">{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-wider font-medium">Store Hours</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">{siteConfig.contact.hours.weekdays}</li>
              <li className="text-sm text-gray-400">{siteConfig.contact.hours.weekends}</li>
            </ul>
            <div className="flex gap-4 pt-4">
              {siteConfig.site.links.instagram && (
                <a
                  href={siteConfig.site.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              )}
              {siteConfig.site.links.facebook && (
                <a
                  href={siteConfig.site.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Text variant="caption" className="text-gray-400 text-center md:text-left">
              © {currentYear} {siteConfig.site.name}. All rights reserved.
            </Text>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer