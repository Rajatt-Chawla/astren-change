import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import NoupeWidget from '@/components/NoupeWidget'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Astrenox - AI-First Digital Transformation',
  description: 'Creating engineering disruption with AI-first digital transformation. Strategic consulting plus hands-on engineering for measurable outcomes.',
  keywords: ['AI transformation', 'AI engineering', 'digital transformation', 'AI consulting', 'intelligent automation'],
  authors: [{ name: 'Astrenox' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Astrenox",
    "email": "Prajwal@astrentech.com",
    "telephone": "+91 8384016763",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C-18, Sector 105",
      "addressLocality": "Noida",
      "addressRegion": "UP",
      "addressCountry": "IN"
    },
    "url": "https://astrenox.com"
  }

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body suppressHydrationWarning className={`${inter.className} antialiased`}>
        {children}
        <NoupeWidget />
      </body>
    </html>
  )
}
