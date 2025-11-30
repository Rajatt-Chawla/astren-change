import { Metadata } from 'next'
import SolvorisPageContent from './SolvorisPageContent'

export const metadata: Metadata = {
  title: 'Solvoris The Cognitive Core for your Business',
  description:
    'A context-aware AI engine built for faster deals, smarter sales engineering, and zero-friction operations. Which unifies context → answer → action',
  openGraph: {
    title: 'Solvoris The Cognitive Core for your Business',
    description:
      'A context-aware AI engine built for faster deals, smarter sales engineering, and zero-friction operations. Which unifies context → answer → action',
    images: ['/images/og-Solvoris.png'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solvoris The Cognitive Core for your Business',
    description:
      'A context-aware AI engine built for faster deals, smarter sales engineering, and zero-friction operations. Which unifies context → answer → action',
    images: ['/images/og-Solvoris.png']
  }
}

export default function SolvorisPage() {
  return <SolvorisPageContent />
}
