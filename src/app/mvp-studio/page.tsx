import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/mvp-studio/Hero'
import TrustedBy from '@/components/sections/mvp-studio/TrustedBy'
import ForFounders from '@/components/sections/mvp-studio/ForFounders'
import Numbers from '@/components/sections/mvp-studio/Numbers'
import OurWork from '@/components/sections/mvp-studio/OurWork'
import Process from '@/components/sections/mvp-studio/Process'
import WhatsIncluded from '@/components/sections/mvp-studio/WhatsIncluded'
import Pricing from '@/components/sections/mvp-studio/Pricing'
import FAQ from '@/components/sections/mvp-studio/FAQ'

export default function MVPStudio() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Navigation />
      <Hero />
      <TrustedBy />
      <ForFounders />
      <Numbers />
      <OurWork />
      <Process />
      <WhatsIncluded />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
