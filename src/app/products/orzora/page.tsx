import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Orzora',
      url: 'https://www.astrentech.com/products/orzora',
      logo: 'https://www.astrentech.com/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/astrenox',
        'https://twitter.com/astrenox'
      ]
    },
    {
      '@type': 'Product',
      name: 'Orzora',
      description:
        'Orzora unifies AI research, expert intelligence, and tokenized participation with automation workflows.',
      brand: {
        '@type': 'Brand',
        name: 'Orzora'
      },
      offers: [
        { '@type': 'Offer', name: 'Free', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Rise', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Scale', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Enterprise', priceCurrency: 'USD' }
      ]
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.astrentech.com' },
        { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.astrentech.com/products' },
        { '@type': 'ListItem', position: 3, name: 'Orzora' }
      ]
    }
  ]
}

const pillars = [
  {
    title: 'Instant Research',
    bullets: [
      'Context → Questions: Paste goals, audience, assets (screens, flows). Orzora drafts 5–20 questions (open-ended, MCQ, scales) with reading-level and clarity checks.',
      'Conversational or Form: Choose a chat-style interviewer for qualitative depth, or a form with skip/branch logic for structured signal.',
      'Multilingual at Scale: 70+ languages with auto-detect, mobile-first UX, and low-bandwidth optimizations for Indian and global audiences.',
      'Pilot & Versioning: Run a micro-pilot to confirm comprehension/duration, then lock the final version for quota.',
      'Distribution & Tracking: Unique links with UTM/ref codes; reminders; source tracking; completion SLAs.'
    ]
  },
  {
    title: 'AI Interviewer',
    bullets: [
      'Adaptive Probing: Real-time “why-stack” questions, contradiction surfaces, and clarification prompts to deepen responses.',
      'Quality Controls: Honeypots, speeders/straight-liners detection, geo/device/IP heuristics, and response-consistency scoring.',
      'Open-End Enrichment: Auto-tagging, entity extraction, sentiment scoring, and quote mining with reviewer overrides.',
      'Executive-Ready Outputs: One-click summaries with top “why” factors, driver trees, and highlight reels of verbatims.'
    ]
  },
  {
    title: 'Expert & Public Intelligence',
    bullets: [
      'Respondents : Inclusive reach, mobile-first completion, transparent rewards (ORZ).',
      'Experts/SMEs: Asynchronous form-based Q&A with evidence fields, references, and ratings no calendar wrangling.',
      'Unified Analysis: Crowd and expert signals synthesized into one narrative with segment cuts and confidence indicators.'
    ]
  }
]

const dashboardFeatures = [
  'Adaptive Research Studio: Create briefs, generate questions, configure screeners/quotas, launch pilots, and publish at production scale.',
  'AI Interviewer Panel: Live monitoring of conversation flows, probe depth, and completion quality with fraud metrics by cohort and geography.',
  'Proactive Insights: Real-time theme clustering, sentiment shifts, anomaly flags, and “next best actions” (e.g., run copy test; launch follow-up probe; segment by region).',
  'Incentives & Marketplace (ORZ): Track token earnings, vesting calendars, redemption and referrals; preview upcoming marketplace drops.',
  'Automation Copilot (Coming Soon): Ask → Decide → Do. Generate stakeholder reports, open follow-up tasks in Jira, draft updates in Slack, or schedule a second study.',
  'Compliance & Security: DPDP/GDPR consent dashboards, audit logs, data-retention policies, and export controls.'
]

const howSteps = [
  'Create Project — Add objectives, target cohorts, quotas, and assets (images, wireflows, videos).',
  'Generate Questions — Orzora drafts multi-format questions with bias checks; you edit and preview.',
  'Pilot & Lock — Validate comprehension and timing with a small cohort; finalize the instrument.',
  'Launch Study — Conversational or form-based; screeners, branching, and fraud controls enabled by default.',
  'Add Expert Depth — Route nuanced sub-questions to vetted SMEs asynchronously; rate and annotate responses.',
  'Analyze & Decide — Explore “why” factors, sentiment trends, and segment cuts; export CSV/PDF; share executive one-pagers.',
  'Automate Next Steps (coming soon) — Trigger task creation, handoffs, or targeted follow-up studies directly from insights.'
]

const tokenBlocks = [
  {
    title: 'Respondents',
    description:
      'Earn 1–5 ORZ per qualified completion with quality bonuses for thoughtful, consistent responses.'
  },
  {
    title: 'Experts',
    description:
      'Earn 10–50 ORZ per task and unlock reputation tiers with premium briefs and higher rates.'
  },
  {
    title: '(Upcoming) Marketplace',
    description:
      'Redeem ORZ for products, coupons, software subscriptions, and digital assets like gold, silver, crypto, and stock ETFs (where compliant).'
  },
  {
    title: 'Partner & Product Referrals',
    description:
      'Brands can list coupons or redirect to their store; earn referral economics while running research.'
  },
  {
    title: 'Compliance & Controls',
    description:
      'Clear disclosures on fees, KYC thresholds, regional availability and rate limits.'
  }
]

const vestingTiers = [
  '30-Day (Starter)',
  '90-Day (Builder)',
  '180-Day (Pro)',
  '365-Day (Champion)'
]

const insightsBullets = [
  'Theme Evolution: Track how core themes shift as new data arrives.',
  'Sentiment & Intensity: See sentiment with intensity coefficients by segment (region, device, cohort).',
  'Contradiction & Risk Flags: Identify where stated intent diverges from behavior; flag risk narratives early.',
  'Recommendations: Actionable next steps (e.g., “Test price anchor ₹X–₹Y with free returns promise in Tier-1 Hindi markets”).',
  'Auto-Briefs: Draft follow-up study briefs from gaps detected in current results.'
]

const copilotCards = [
  {
    title: 'Workflows Across Your Stack',
    description:
      'Slack, Sheets, Notion, Drive, Jira, CRM, Email—compiled into agentic, multi-step flows.'
  },
  {
    title: 'Report Automation',
    description:
      'Auto-generate stakeholder updates, annotate with charts/quotes, and schedule distribution.'
  },
  {
    title: 'Follow-Up Launchers',
    description:
      'Spin up a targeted micro-study to validate a recommendation (new copy, UX variant, price test).'
  },
  {
    title: 'Campaign Triggers',
    description:
      'Push winning messages to your marketing tools or sales collateral library.'
  }
]

const useCases = [
  {
    title: 'E-commerce & D2C',
    description:
      'PDP copy tests, checkout friction, returns messaging, bundling and price anchoring, creative A/Bs.'
  },
  {
    title: 'BFSI',
    description:
      'KYC/UX clarity, trust-signal experiments, scam-awareness copy in local languages, onboarding flow diagnostics.'
  },
  {
    title: 'Healthcare',
    description:
      'Patient instruction clarity, consent comprehension, multilingual education testing.'
  },
  {
    title: 'SaaS & B2B',
    description:
      'Product-market fit, roadmap prioritization, sales enablement messaging, pricing & packaging tests.'
  },
  {
    title: 'Public Sector / Civic',
    description:
      'Service comprehension, grievance tracking, program feedback in regional languages.'
  }
]

const comparison = {
  old: [
    'Weeks to design, recruit, schedule, moderate, translate, and analyze',
    'Expensive expert calls; limited sample; language/reach barriers',
    'Thin “what” without the why; survey fraud erodes trust',
    'Fragmented stack; manual reporting and handoffs'
  ],
  new: [
    'Live in hours with first themes and analysis coming in 24-72 hours',
    'Adaptive conversational AI for deeper qualitative signals',
    'Async expert layer at a fraction of classic costs',
    'Fraud & bias controls built-in with multilingual support by default',
    'Token incentives boost completes and retention',
    'Automation copilot to act on insights (coming soon)'
  ]
}

const securityBullets = [
  'DPDP/GDPR consent, purpose limitation, and data minimization',
  'Encryption at rest and in transit; secrets rotation; RBAC',
  'Audit Trails and immutable logs for regulator-friendly reporting',
  'Data Residency Global deployment options and configurable retention',
  'Vulnerability scans, pen-tests, and incident response protocols'
]

function Pillars() {
  return (
    <section id="pillars" className="py-24">
      <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Why Orzora Wins</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="card rounded-2xl border border-border-soft bg-surface-card p-6 space-y-4">
            <h3 className="text-xl font-semibold text-text-primary">{pillar.title}</h3>
            <ul className="space-y-3 text-sm text-text-secondary">
              {pillar.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent-primary" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Dashboard() {
  return (
    <section id="dashboard" className="py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-text-primary">What You See, All in One Place</h2>
          <div className="space-y-3 text-text-secondary">
            {dashboardFeatures.map((feature) => (
              <p key={feature}>{feature}</p>
            ))}
          </div>
        </div>
        <aside className="flex justify-center">
          <div className="w-full max-w-xl overflow-hidden rounded-3xl border border-border-soft bg-surface-card">
            <Image
              src="/assets/images/placeholder-orzora-dashboard.png"
              alt="Orzora intelligence dashboard preview"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-cover"
            />
          </div>
        </aside>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
        From Brief to Decision (in Days)
      </h2>
      <div className="grid gap-6 md:grid-cols-7">
        {howSteps.map((step, index) => (
          <div key={step} className="card rounded-2xl border border-border-soft bg-surface-card p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-accent-primary">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">{step}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <button
          type="button"
          aria-label="Start Free Trial"
          className="btn-primary inline-flex items-center justify-center rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-primary/90 focus:outline-none focus:ring-2 focus:ring-accent-primary"
        >
          Start Free Trial
        </button>
      </div>
    </section>
  )
}

function TokenSection() {
  return (
    <section id="token" className="py-24">
      <h2 className="text-3xl font-bold text-text-primary text-center">Earn, Vest, Redeem (Powered by ORZ)</h2>
      <p className="mt-4 text-center text-text-secondary">
        Aligned incentives = better participation, better data quality.
      </p>
      <div className="grid gap-6 md:grid-cols-3 mt-10">
        {tokenBlocks.map((block) => (
          <div key={block.title} className="card rounded-2xl border border-border-soft bg-surface-card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-text-primary">{block.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{block.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-4">
        {vestingTiers.map((tier) => (
          <div key={tier} className="card rounded-xl border border-border-soft bg-surface-card p-4 text-center text-sm text-text-secondary">
            {tier} — longer vesting unlocks earn multipliers, VIP drops, and fee discounts.
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-3xl border border-border-soft bg-surface-card p-6 text-sm text-text-secondary">
        Example: Complete 10 tasks @3 ORZ = 30 ORZ. Vest 90 days to unlock early marketplace access and a +5% earn multiplier; redeem 20 ORZ for a software coupon, save 10 ORZ for an upcoming drop.
      </div>
    </section>
  )
}

function InsightsSection() {
  return (
    <section id="insights" className="py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-text-primary">Answers That Find You</h2>
          <ul className="space-y-3 text-text-secondary">
            {insightsBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="flex justify-center">
          <div className="w-full max-w-md rounded-3xl border border-border-soft bg-surface-card p-6 text-center text-text-secondary">
            Illustrations placeholder
          </div>
        </aside>
      </div>
    </section>
  )
}

function CopilotSection() {
  return (
    <section id="copilot" className="py-24">
      <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
        Ask → Decide → Do
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {copilotCards.map((card) => (
          <div key={card.title} className="card rounded-2xl border border-border-soft bg-surface-card p-6 space-y-3">
            <h3 className="text-lg font-semibold text-text-primary">{card.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function UseCases() {
  return (
    <section id="use-cases" className="py-24">
      <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
        Practical Applications
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {useCases.map((item) => (
          <div key={item.title} className="card rounded-2xl border border-border-soft bg-surface-card p-6 space-y-3">
            <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
            <p className="text-sm text-text-secondary">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Comparison() {
  return (
    <section id="comparison" className="py-24">
      <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
        Old Way vs. Orzora
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card rounded-2xl border border-border-soft bg-surface-card p-6 space-y-3">
          <h3 className="text-lg font-semibold text-text-primary">Old Way (Pain)</h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            {comparison.old.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card rounded-2xl border border-border-soft bg-surface-card p-6 space-y-3">
          <h3 className="text-lg font-semibold text-text-primary">Orzora (Advantage)</h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            {comparison.new.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Security() {
  return (
    <section id="security" className="py-24">
      <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
        Enterprise-Grade by Default
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card rounded-2xl border border-border-soft bg-surface-card p-6 space-y-3">
          <ul className="space-y-2 text-sm text-text-secondary">
            {securityBullets.slice(0, Math.ceil(securityBullets.length / 2)).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card rounded-2xl border border-border-soft bg-surface-card p-6 space-y-3">
          <ul className="space-y-2 text-sm text-text-secondary">
            {securityBullets.slice(Math.ceil(securityBullets.length / 2)).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section id="final-cta" className="py-24 text-center">
      <div className="rounded-3xl border border-border-soft bg-surface-card p-10 space-y-6">
        <h2 className="text-3xl font-bold text-text-primary">Start in Minutes</h2>
        <p className="text-text-secondary">
          Launch your first study today, see first themes this week, and automate the next action—all in one place.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            type="button"
            aria-label="Visit Our Website"
            className="btn-primary inline-flex items-center justify-center rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-primary/90 focus:outline-none focus:ring-2 focus:ring-accent-primary"
          >
            Visit Our Website
          </button>
        </div>
      </div>
    </section>
  )
}

export default function OrzoraPage() {
  return (
    <main id="product-orzora" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id="hero" className="grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary">
            Uncover the Why Behind Customer Behavior—Fast, Deep, and Incentivized
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Orzora unifies AI research, expert intelligence, and tokenized participation with automation workflows, so you launch multilingual studies in minutes, collect richer qualitative answers, and trigger next steps across your stack.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              aria-label="Start Free Trial"
              className="btn-primary inline-flex items-center justify-center rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-primary/90 focus:outline-none focus:ring-2 focus:ring-accent-primary"
            >
              Start Free Trial
            </button>
            <button
              type="button"
              aria-label="Book a Demo"
              className="btn-secondary inline-flex items-center justify-center rounded-full border border-accent-primary px-6 py-3 text-sm font-semibold text-accent-primary transition hover:bg-accent-primary/10 focus:outline-none focus:ring-2 focus:ring-accent-primary"
            >
              Book a Demo
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              'Insights in 24–72 hours (median)',
              '70+ languages (auto-detect)',
              '60–80% lower cost vs. moderated qual/expert calls',
              'Built-in fraud & bias controls',
              'DPDP/GDPR-ready consent & audit logs'
            ].map((badge) => (
              <span key={badge} className="badge inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-text-secondary">
                {badge}
              </span>
            ))}
          </div>
        </div>
        <figure aria-label="Orzora product hero visual" className="flex justify-center">
          <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-border-soft bg-surface-card">
            <Image
              src="/assets/images/placeholder-orzora-hero.png"
              alt="Orzora research copilot illustration"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-cover"
            />
          </div>
        </figure>
      </section>

      <Pillars />
      <Dashboard />
      <HowItWorks />
      <TokenSection />
      <InsightsSection />
      <CopilotSection />
      <UseCases />
      <Comparison />
      <Security />
      <FinalCTA />
    </main>
  )
}
import type { Metadata } from "next"
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: "Orzora — The Market Research Copilot",
  description: "Uncover the why behind customer behavior—fast, deep, and incentivized. Launch multilingual studies, blend expert intelligence, and automate next steps.",
  alternates: { canonical: "/products/orzora" },
}

const Band = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-border-soft bg-surface-card p-5 hover:shadow-card transition-all duration-med">
    {children}
  </div>
)

export default function OrzoraPage() {
  return (
    <main className="bg-bg-base text-white min-h-screen">
      <Navigation />
      
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-24 pb-10 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/18 border border-accent-primary/35 text-accent-primary text-sm font-semibold mb-6">
          The Market Research Copilot
        </div>
        <h1 className="mt-4 text-h1 md:text-display-md font-extrabold leading-tight text-text-primary">
          Uncover the Why Behind Customer Behavior—Fast, Deep, and Incentivized
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lead text-text-secondary">
          Orzora unifies AI research, expert intelligence, and tokenized
          participation with automation workflows, so you launch multilingual
          studies in minutes, collect richer qualitative answers, and trigger
          next steps across your stack.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/get-started"
            className="rounded-full bg-accent-primary text-white px-5 py-2.5 text-sm font-semibold hover:bg-cta-solid-hover transition-all duration-fast shadow-card"
          >
            Start Free Trial
          </a>
          <a
            href="mailto:Prajwal@astrentech.com"
            className="rounded-full border border-cta-outline-border px-5 py-2.5 text-sm font-medium hover:bg-cta-outline-hover-bg transition-all duration-fast"
          >
            Book a Demo
          </a>
        </div>

        {/* Proof badges */}
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 text-sm text-text-secondary">
          {[
            "Insights in 24–72 hours (median)",
            "70+ languages (auto-detect)",
            "60–80% lower cost vs. moderated qual/expert calls",
            "Built-in fraud & bias controls",
            "DPDP/GDPR-ready consent & audit logs",
          ].map((x) => (
            <li
              key={x}
              className="rounded-full bg-surface-card border border-border-soft px-4 py-2 text-center"
            >
              {x}
            </li>
          ))}
        </ul>
      </section>

      {/* 3 Pillars */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-h2 font-bold text-text-primary">Why Orzora Wins</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {/* 1 */}
          <Band>
            <h3 className="font-semibold text-text-primary">1) Instant Research (Speed to Insight)</h3>
            <ul className="mt-2 space-y-2 text-sm text-text-secondary">
              <li>• Context → Questions: paste goals/audience/assets; Orzora drafts 5–20 questions with bias & clarity checks.</li>
              <li>• Conversational or form studies with skip/branch logic.</li>
              <li>• Multilingual at scale (70+), mobile-first, low-bandwidth.</li>
              <li>• Pilot & versioning; distribution with tracking & SLAs.</li>
            </ul>
          </Band>
          {/* 2 */}
          <Band>
            <h3 className="font-semibold text-text-primary">2) AI Interviewer (Depth & Data Quality)</h3>
            <ul className="mt-2 space-y-2 text-sm text-text-secondary">
              <li>• Adaptive probing, contradiction surfacing, clarifications.</li>
              <li>• Quality controls: honeypots, speeders, device/IP heuristics, consistency scoring.</li>
              <li>• Open-end enrichment: tags, entities, sentiment, quote mining.</li>
              <li>• Executive-ready outputs with driver trees & highlight reels.</li>
            </ul>
          </Band>
          {/* 3 */}
          <Band>
            <h3 className="font-semibold text-text-primary">3) Expert & Public Intelligence (Scale + Domain Depth)</h3>
            <ul className="mt-2 space-y-2 text-sm text-text-secondary">
              <li>• Respondents ("Janta"): inclusive reach, transparent ORZ rewards.</li>
              <li>• Experts/SMEs: async Q&A with evidence & ratings—no scheduling.</li>
              <li>• Unified analysis: crowd + expert signals with segment cuts and confidence.</li>
            </ul>
          </Band>
        </div>
      </section>

      {/* Dashboard */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-h2 font-bold text-text-primary">Orzora Intelligence Dashboard</h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2 text-text-secondary">
          {[
            "Adaptive Research Studio: create briefs, generate questions, configure screeners/quotas, launch pilots, and publish.",
            "AI Interviewer Panel: live monitoring of probe depth & completion quality with fraud metrics.",
            "Proactive Insights: theme clustering, sentiment shifts, anomaly flags, & next best actions.",
            "Incentives & Marketplace (ORZ): earnings, vesting, redemption, referrals, upcoming drops.",
            "Automation Copilot (Coming Soon): Ask → Decide → Do across Slack, Sheets, Notion, Drive, Jira, CRM, Email.",
            "Compliance & Security: DPDP/GDPR consent, audit logs, retention & export controls.",
          ].map((x) => (
            <li key={x} className="rounded-xl border border-border-soft bg-surface-card p-4 hover:shadow-card transition-all duration-med">
              {x}
            </li>
          ))}
        </ul>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-h2 font-bold text-text-primary">How It Works — From Brief to Decision</h2>
        <ol className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm text-text-secondary">
          {[
            "Create Project — objectives, cohorts, quotas, assets.",
            "Generate Questions — multi-format with bias checks; edit & preview.",
            "Pilot & Lock — validate comprehension & timing; finalize.",
            "Launch Study — conversational or form; screeners, branching, fraud controls.",
            "Add Expert Depth — route nuanced sub-questions to vetted SMEs; rate/annotate.",
            "Analyze & Decide — explore 'why', export CSV/PDF, share one-pagers.",
            "Automate Next Steps (coming soon) — create tasks, handoffs, targeted follow-ups.",
          ].map((x, i) => (
            <li key={i} className="rounded-xl border border-border-soft bg-surface-card p-4 hover:shadow-card transition-all duration-med">
              {x}
            </li>
          ))}
        </ol>
      </section>

      {/* Token incentives */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-h2 font-bold text-text-primary">Token Incentives & Marketplace — Earn, Vest, Redeem (ORZ)</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Band>
            <ul className="space-y-2 text-sm text-white/80">
              <li>• Respondents: earn 1–5 ORZ per qualified completion; quality bonuses.</li>
              <li>• Experts: 10–50 ORZ per task; reputation tiers unlock premiums.</li>
              <li>• Vesting tiers: 30/90/180/365 days with multipliers, VIP drops, fee discounts.</li>
              <li>• (Upcoming) Marketplace: redeem for products, coupons, software, and compliant digital assets.</li>
              <li>• Referrals: brands list coupons or redirect to store; earn while running research.</li>
              <li>• Controls: disclosures, KYC thresholds, regional availability & rate limits.</li>
            </ul>
            <p className="mt-3 text-xs text-text-muted">
              Example: Complete 10 tasks @3 ORZ = 30 ORZ. Vest 90 days → early marketplace access +5% multiplier; redeem 20 ORZ for a software coupon, save 10 ORZ for a drop.
            </p>
          </Band>
          <Band>
            <h3 className="font-semibold text-text-primary">Proactive Insights — Answers That Find You</h3>
            <ul className="mt-2 space-y-2 text-sm text-text-secondary">
              <li>• Theme evolution & sentiment with intensity by segment.</li>
              <li>• Contradiction/risk flags where intent ≠ behavior.</li>
              <li>• Recommendations & auto-briefs for follow-ups.</li>
            </ul>
          </Band>
        </div>
      </section>

      {/* Who it's for */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-h2 font-bold text-text-primary">Who It&apos;s For — Practical Applications</h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            "E-commerce & D2C: PDP copy tests, UX clarity, pricing tests",
            "BFSI: Product comprehension, risk appetite, trust signals",
            "Healthcare: Patient experience, consent clarity, service perception",
            "SaaS & B2B: PMF validation, pricing research, feature prioritization",
            "Public Sector / Civic: Policy comprehension, community feedback, service delivery",
          ].map((x) => (
            <li key={x} className="rounded-xl border border-border-soft bg-surface-card p-4 hover:shadow-card transition-all duration-med">
              {x}
            </li>
          ))}
        </ul>
      </section>

      {/* Comparison */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-h2 font-bold text-text-primary">Comparison — Old Way vs. Orzora</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Band>
            <h3 className="font-semibold text-text-primary">Old Way (Pain)</h3>
            <ul className="mt-2 space-y-2 text-sm text-text-secondary">
              <li>• Weeks to design, recruit, schedule, moderate, translate, analyze</li>
              <li>• Expensive expert calls; tiny samples; language barriers</li>
              <li>• Thin "what" without the why; survey fraud</li>
              <li>• Fragmented stack; manual reporting & handoffs</li>
            </ul>
          </Band>
          <Band>
            <h3 className="font-semibold text-text-primary">Orzora (Advantage)</h3>
            <ul className="mt-2 space-y-2 text-sm text-text-secondary">
              <li>• Live in hours; first themes in 24–72 hours</li>
              <li>• Adaptive conversational AI for deeper signals</li>
              <li>• Async expert layer at a fraction of cost</li>
              <li>• Fraud & bias controls; multilingual by default</li>
              <li>• Token incentives boost completes & retention</li>
              <li>• Automation copilot to act on insights (coming soon)</li>
            </ul>
          </Band>
        </div>
      </section>

      {/* Security */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-h2 font-bold text-text-primary">Security & Compliance — Enterprise-Grade by Default</h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            "DPDP/GDPR consent, purpose limitation, data minimization",
            "Encryption at rest & in transit; secrets rotation; RBAC",
            "Audit trails & immutable logs for reporting",
            "Data Residency options & configurable retention; vuln scans & IR",
          ].map((x) => (
            <li key={x} className="rounded-xl border border-border-soft bg-surface-card p-4 hover:shadow-card transition-all duration-med">
              {x}
            </li>
          ))}
        </ul>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-surface-card border border-border-soft px-8 py-10 text-center shadow-glow-secondary">
          <h3 className="text-h2 font-bold text-text-primary">Start in Minutes</h3>
          <p className="mt-2 text-text-secondary">
            Launch your first study today, see first themes this week, and
            automate the next action—all in one place.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a
              href="/get-started"
              className="rounded-full bg-accent-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-cta-solid-hover transition-all duration-fast shadow-card"
            >
              Get Started
            </a>
            <a
              href="mailto:Prajwal@astrentech.com"
              className="rounded-full border border-cta-outline-border px-6 py-2.5 text-sm font-medium hover:bg-cta-outline-hover-bg transition-all duration-fast"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

