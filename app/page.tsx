import ParallaxHero from '@/components/organisms/ParallaxHero'
import FeaturedCollection from '@/components/organisms/FeaturedCollection'
import Services from '@/components/organisms/Services'
import Craftsmanship from '@/components/organisms/Craftsmanship'
import Testimonials from '@/components/organisms/Testimonials'

export default function Home() {
  return (
    <>
      <ParallaxHero />
      <FeaturedCollection />
      <Services />
      <Craftsmanship />
      <Testimonials />
    </>
  )
}