import Hero from '@/components/sections/Hero'
import OurApproach from '@/components/sections/OurApproach'
import TechnologyEcosystem from '@/components/sections/TechnologyEcosystem'
import SuccessStories from '@/components/sections/SuccessStories'
import FAQ from '@/components/sections/FAQ'
import GetInTouch from '@/components/sections/GetInTouch'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Navigation />
      <Hero />
      <OurApproach />
      <TechnologyEcosystem />
      <SuccessStories />
      <FAQ />
      <GetInTouch />
      <Footer />
    </main>
  )
}
