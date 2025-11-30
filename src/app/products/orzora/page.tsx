import { Metadata } from 'next'
import ClientAkiren from './ClientAkiren'

export const metadata: Metadata = {
  title: 'Akiren - AI Growth OS for your brand',
  description:
    'AKIREN - The Dual-Avatar AI Growth OS. AKI: Growth & Referral Agent. REN: Research & Insight Agent. 5-10x faster campaign launch with AI-operated growth stack.',
  openGraph: {
    title: 'Akiren - AI Growth OS for your brand',
    description:
      'AKIREN - The Dual-Avatar AI Growth OS. AKI: Growth & Referral Agent. REN: Research & Insight Agent. 5-10x faster campaign launch with AI-operated growth stack.',
    images: ['/images/og-Akiren.png'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akiren - AI Growth OS for your brand',
    description:
      'AKIREN - The Dual-Avatar AI Growth OS. AKI: Growth & Referral Agent. REN: Research & Insight Agent. 5-10x faster campaign launch with AI-operated growth stack.',
    images: ['/images/og-Akiren.png']
  }
}

export default function AkirenPage() {
  return <ClientAkiren />
}

