import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/hire-talent/Hero'
import WhyAstrenoxTalent from '@/components/sections/hire-talent/WhyAstrenoxTalent'
import RolesWePlace from '@/components/sections/hire-talent/RolesWePlace'
import HowItWorks from '@/components/sections/hire-talent/HowItWorks'
import VettingQuality from '@/components/sections/hire-talent/VettingQuality'
import EngagementModels from '@/components/sections/hire-talent/EngagementModels'
import SLAsGuarantees from '@/components/sections/hire-talent/SLAsGuarantees'
import SnapshotsImpact from '@/components/sections/hire-talent/SnapshotsImpact'
import PricingSignals from '@/components/sections/hire-talent/PricingSignals'
import FAQ from '@/components/sections/hire-talent/FAQ'
import TalentRequestForm from '@/components/sections/hire-talent/TalentRequestForm'
export default function HireTalent() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Navigation />
      <Hero />
      <WhyAstrenoxTalent />
      <RolesWePlace />
      <HowItWorks />
      <VettingQuality />
      <EngagementModels />
      <SLAsGuarantees />
      <SnapshotsImpact />
      <PricingSignals />
      <FAQ />
      <TalentRequestForm />
      <Footer />
    </main>
  )
}
