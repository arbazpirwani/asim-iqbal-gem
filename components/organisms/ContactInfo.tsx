'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import Text from '@/components/atoms/Text'
import siteConfig from '@/content/site-config.json'

const ContactInfo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div>
        <Text variant="subtitle" className="mb-8">
          Visit Our Showroom
        </Text>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 border border-gray-300 flex items-center justify-center flex-shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <h3 className="font-medium mb-1">Address</h3>
              <p className="text-gray-600">{siteConfig.contact.address}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 border border-gray-300 flex items-center justify-center flex-shrink-0">
              <Phone size={18} />
            </div>
            <div>
              <h3 className="font-medium mb-1">Phone</h3>
              <p className="text-gray-600">{siteConfig.contact.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 border border-gray-300 flex items-center justify-center flex-shrink-0">
              <Mail size={18} />
            </div>
            <div>
              <h3 className="font-medium mb-1">Email</h3>
              <p className="text-gray-600">{siteConfig.contact.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 border border-gray-300 flex items-center justify-center flex-shrink-0">
              <Clock size={18} />
            </div>
            <div>
              <h3 className="font-medium mb-1">Store Hours</h3>
              <p className="text-gray-600">{siteConfig.contact.hours.weekdays}</p>
              <p className="text-gray-600">{siteConfig.contact.hours.weekends}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 border border-gray-300 flex items-center justify-center flex-shrink-0">
              <MessageCircle size={18} />
            </div>
            <div>
              <h3 className="font-medium mb-1">WhatsApp</h3>
              <p className="text-gray-600">Message us for quick responses</p>
              <a 
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black underline mt-1 inline-block"
              >
                Start Chat
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-8">
        <Text variant="subtitle" className="mb-4">
          Appointment Booking
        </Text>
        <p className="text-gray-600 mb-4">
          For personalized consultations and custom design sessions, we recommend booking an appointment.
        </p>
        <p className="text-sm text-gray-500">
          Call us or use the contact form to schedule your visit.
        </p>
      </div>
    </motion.div>
  )
}

export default ContactInfo