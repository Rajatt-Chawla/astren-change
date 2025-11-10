'use client'

import Image from 'next/image'

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
        'Orzora unifies AI research, expert intelligence, and tokenized participation with automation workflows, so you launch multilingual studies in minutes, collect richer qualitative answers, and trigger next steps across your stack.',
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
    description: 'Earn 1–5 ORZ per qualified completion with quality bonuses for thoughtful, consistent responses.'
  },
  {
    title: 'Experts',
    description: 'Earn 10–50 ORZ per task and unlock reputation tiers with premium briefs and higher rates.'
  },
  {
    title: '(Upcoming) Marketplace',
    description: 'Redeem ORZ for products, coupons, software subscriptions, and digital assets like gold, silver, crypto, and stock ETFs (where compliant).'
  },
  {
    title: 'Partner & Product Referrals',
    description: 'Brands can list coupons or redirect to their store; earn referral economics while running research.'
  },
  {
    title: 'Compliance & Controls',
    description: 'Clear disclosures on fees, KYC thresholds, regional availability and rate limits.'
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
    description: 'Slack, Sheets, Notion, Drive, Jira, CRM, Email—compiled into agentic, multi-step flows.'
  },
  {
    title: 'Report Automation',
    description: 'Auto-generate stakeholder updates, annotate with charts/quotes, and schedule distribution.'
  },
  {
    title: 'Follow-Up Launchers',
    description: 'Spin up a targeted micro-study to validate a recommendation (new copy, UX variant, price test).'
  },
  {
    title: 'Campaign Triggers',
    description: 'Push winning messages to your marketing tools or sales collateral library.'
  }
]

const useCases = [
  {
    title: 'E-commerce & D2C',
    description: 'PDP copy tests, checkout friction, returns messaging, bundling and price anchoring, creative A/Bs.'
  },
  {
    title: 'BFSI',
    description: 'KYC/UX clarity, trust-signal experiments, scam-awareness copy in local languages, onboarding flow diagnostics.'
  },
  {
    title: 'Healthcare',
    description: 'Patient instruction clarity, consent comprehension, multilingual education testing.'
  },
  {
    title: 'SaaS & B2B',
    description: 'Product-market fit, roadmap prioritization, sales enablement messaging, pricing & packaging tests.'
  },
  {
    title: 'Public Sector / Civic',
    description: 'Service comprehension, grievance tracking, program feedback in regional languages.'
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

export default function ClientOrzora() {
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
              <span
                key={badge}
                className="badge inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-text-secondary"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
        <figure aria-label="Orzora product preview" className="flex justify-center">
          <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-border-soft bg-surface-card">
            <Image
              src="/assets/images/placeholder-orzora-hero.png"
              alt="Orzora market research copilot preview"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover"
            />
          </div>
        </figure>
      </section>

      <section id="pillars" className="mt-24">
        <h2 className="text-3xl font-bold text-text-primary text-center">Why Orzora Wins</h2>
        <div className="grid gap-6 md:grid-cols-3 mt-10">
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

      <section id="dashboard" className="mt-24 bg-bg-elevated/50 rounded-3xl p-10 space-y-8">
        <h2 className="text-3xl font-bold text-text-primary">Orzora Intelligence Dashboard — What You See, All in One Place</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {dashboardFeatures.map((feature) => (
            <div key={feature} className="card rounded-2xl border border-border-soft bg-white/[0.04] p-6 text-text-secondary">
              {feature}
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="mt-24 space-y-8">
        <h2 className="text-3xl font-bold text-text-primary text-center">How It Works — From Brief to Decision (in Days)</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {howSteps.map((step, index) => (
            <div key={step} className="card rounded-2xl border border-border-soft bg-surface-card p-6 space-y-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-accent-primary/20 text-sm font-semibold text-accent-primary">
                {String(index + 1).padStart(2, '0')}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            type="button"
            aria-label="Start Free Trial"
            className="btn-primary inline-flex items-center justify-center rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-primary/90 focus:outline-none focus:ring-2 focus:ring-accent-primary"
          >
            Start Free Trial
          </button>
        </div>
      </section>

      <section id="token" className="mt-24 space-y-10">
        <h2 className="text-3xl font-bold text-text-primary text-center">Token Incentives & Marketplace — Earn, Vest, Redeem (Powered by ORZ)</h2>
        <p className="text-center text-text-secondary">
          Aligned incentives = better participation, better data quality.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {tokenBlocks.map((block) => (
            <div key={block.title} className="card rounded-2xl border border-border-soft bg-surface-card p-6 space-y-3">
              <h3 className="text-lg font-semibold text-text-primary">{block.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{block.description}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-4">
          {vestingTiers.map((tier) => (
            <div key={tier} className="card rounded-xl border border-border-soft bg-surface-card p-4 text-center text-sm text-text-secondary">
              {tier} — longer vesting unlocks earn multipliers, VIP drops, and fee discounts.
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-border-soft bg-surface-card p-6 text-sm text-text-secondary">
          Example: Complete 10 tasks @3 ORZ = 30 ORZ. Vest 90 days to unlock early marketplace access and a +5% earn multiplier; redeem 20 ORZ for a software coupon, save 10 ORZ for an upcoming drop.
        </div>
      </section>

      <section id="insights" className="mt-24 grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-text-primary">Proactive Insights — Answers That Find You</h2>
          <ul className="space-y-3 text-text-secondary">
            {insightsBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-3xl border border-border-soft bg-surface-card p-6 text-center text-text-secondary">
            Chart placeholder
          </div>
        </div>
      </section>

      <section id="copilot" className="mt-24">
        <h2 className="text-3xl font-bold text-text-primary text-center">Automation Copilot (Coming Soon) — Ask → Decide → Do</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-10">
          {copilotCards.map((card) => (
            <div key={card.title} className="card rounded-2xl border border-border-soft bg-surface-card p-6 space-y-3">
              <h3 className="text-lg font-semibold text-text-primary">{card.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="use-cases" className="mt-24">
        <h2 className="text-3xl font-bold text-text-primary text-center">Who It’s For — Practical Applications</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-10">
          {useCases.map((item) => (
            <div key={item.title} className="card rounded-2xl border border-border-soft bg-surface-card p-6 space-y-3">
              <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison" className="mt-24">
        <h2 className="text-3xl font-bold text-text-primary text-center">Comparison — Old Way vs. Orzora</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-10">
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

      <section id="security" className="mt-24">
        <h2 className="text-3xl font-bold text-text-primary text-center">Security & Compliance — Enterprise-Grade by Default</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-10">
          <ul className="space-y-3 text-sm text-text-secondary rounded-2xl border border-border-soft bg-surface-card p-6">
            {securityBullets.slice(0, Math.ceil(securityBullets.length / 2)).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="space-y-3 text-sm text-text-secondary rounded-2xl border border-border-soft bg-surface-card p-6">
            {securityBullets.slice(Math.ceil(securityBullets.length / 2)).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="final-cta" className="mt-24 text-center">
        <div className="rounded-3xl border border-border-soft bg-surface-card p-10 space-y-6">
          <h2 className="text-3xl font-bold text-text-primary">Launch your first study today, see first themes this week, and automate the next action—all in one place.</h2>
          <button
            type="button"
            aria-label="Visit Our Website"
            className="btn-primary inline-flex items-center justify-center rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-primary/90 focus:outline-none focus:ring-2 focus:ring-accent-primary"
          >
            Visit Our Website
          </button>
        </div>
      </section>
    </main>
  )
}

