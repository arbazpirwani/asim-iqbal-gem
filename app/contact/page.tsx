import ContactHero from '@/components/organisms/ContactHero'
import ContactForm from '@/components/organisms/ContactForm'
import ContactInfo from '@/components/organisms/ContactInfo'
import Map from '@/components/organisms/Map'

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <Map />
    </>
  )
}