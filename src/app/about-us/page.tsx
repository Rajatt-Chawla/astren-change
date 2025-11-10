import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/about/Hero'
import OurStory from '@/components/sections/about/OurStory'
import OurMission from '@/components/sections/about/OurMission'
import CoreValues from '@/components/sections/about/CoreValues'
import Certifications from '@/components/sections/about/Certifications'
import OurTeam from '@/components/sections/about/OurTeam'
import CTA from '@/components/sections/CTA'

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Navigation />
      <Hero />
      <OurStory />
      <OurMission />
      <CoreValues />
      <Certifications />
      <OurTeam />
      <CTA />
      <Footer />
    </main>
  )
}
