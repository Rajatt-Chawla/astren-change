import { Metadata } from 'next'
import ClientOrzora from './ClientOrzora'

export const metadata: Metadata = {
  title: 'Uncover the Why Behind Customer Behavior—Fast, Deep, and Incentivized',
  description:
    'Orzora unifies AI research, expert intelligence, and tokenized participation with automation workflows, so you launch multilingual studies in minutes, collect richer qualitative answers, and trigger next steps across your stack.',
  openGraph: {
    title: 'Uncover the Why Behind Customer Behavior—Fast, Deep, and Incentivized',
    description:
      'Orzora unifies AI research, expert intelligence, and tokenized participation with automation workflows, so you launch multilingual studies in minutes, collect richer qualitative answers, and trigger next steps across your stack.',
    images: ['/images/og-Orzora.png'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uncover the Why Behind Customer Behavior—Fast, Deep, and Incentivized',
    description:
      'Orzora unifies AI research, expert intelligence, and tokenized participation with automation workflows, so you launch multilingual studies in minutes, collect richer qualitative answers, and trigger next steps across your stack.',
    images: ['/images/og-Orzora.png']
  }
}

export default function OrzoraPage() {
  return <ClientOrzora />
}

