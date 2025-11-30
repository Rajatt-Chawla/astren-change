'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Zap, Search, TrendingUp, Users, Target, CheckCircle, Rocket, Settings, RefreshCw, FileText, Link2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import { openTallyPopup } from '@/lib/engagementLinks'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Akiren',
      url: 'https://www.astrentech.com/products/akiren',
      logo: 'https://www.astrentech.com/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/astrenox',
        'https://twitter.com/astrenox'
      ]
    },
    {
      '@type': 'Product',
      name: 'Akiren',
      description:
        'AKIREN - The Dual-Avatar AI Growth OS. AKI: Growth & Referral Agent. REN: Research & Insight Agent.',
      brand: {
        '@type': 'Brand',
        name: 'Akiren'
      }
    }
  ]
}

const socialProof = {
  headline: 'Why we chose AKIREN for our clients',
  description: 'We benchmark dozens of AI marketing and research platforms. AKIREN stood out because it combines campaign creation, referral automation, and AI-led interviews in a single Growth OS. Teams using AKIREN see:',
  stats: [
    '5–10× faster campaign launch velocity',
    '25–40% more referral-driven revenue when referral flows are fully activated',
    'Customer insights delivered in days, not weeks, via AI-moderated interviews'
  ]
}

const agents = [
  {
    name: 'AKI',
    miniHeading: 'AKI – From website to campaigns and referrals in minutes',
    description: 'AKI ingests your website, catalog, and brand guidelines, then generates on-brand ads, UGC scripts, emails, and landing copy tailored to your goals. On top of that, AKI runs end-to-end referral programs—post-purchase prompts, WhatsApp and email share flows, reward logic, and performance tracking—so referral becomes a dependable revenue channel, not an afterthought.'
  },
  {
    name: 'REN',
    miniHeading: 'REN – Continuous customer insight on autopilot',
    description: 'REN turns your business questions into structured, unscripted interviews at scale. It designs the study, screens participants, runs AI-moderated conversations, and delivers clear themes, quotes, and "so-what" recommendations. Our team feeds REN\'s insights directly into AKI\'s creatives and referral offers, closing the loop between "what customers say" and "what you run in market."'
  },
  {
    name: 'Single Growth OS',
    miniHeading: 'Shared data, shared metrics, shared upside',
    description: 'Because AKI and REN live in one Growth OS, your creative performance, referral metrics, and research insights are tracked together. Our agency uses this unified view to prioritise tests, double down on winners, and retire underperforming ideas quickly.'
  }
]

const comparison = {
  old: {
    title: 'The Old Way: Too many tools, not enough insight',
    items: [
      'Separate apps for ads, UGC, referrals, and research',
      'Manual handoffs between teams and vendors',
      'Customer interviews done once a year—if at all',
      'No single source of truth for "what actually grew revenue"'
    ]
  },
  new: {
    title: 'The AKIREN Way: Integrated, insight-driven experimentation',
    items: [
      'AKI generates campaigns and runs referrals from one brand brain',
      'REN turns questions into ongoing qualitative insight',
      'Creative, referral, and research data live in the same OS',
      'Our agency orchestrates growth loops around measurable revenue lift'
    ]
  }
}

const keyBenefits = [
  {
    icon: Zap,
    title: 'More experiments, same team',
    description: 'We use AKI to help your team ship more creatives, offers, and referral tests without adding headcount. Going from 1–2 campaigns a month to 8–12 experiments becomes realistic.'
  },
  {
    icon: Users,
    title: 'Referral as a real revenue channel',
    description: 'AKI\'s referral engine lets us deploy high-converting "give X, get Y" programs across WhatsApp, email, SMS, and social media, lifting referral-driven revenue by 25–40% once flows are fully tuned.'
  },
  {
    icon: Target,
    title: 'Decisions backed by real conversations',
    description: 'REN allows us to run ongoing win–loss, post-purchase, and churn interviews, so campaign and product decisions are tied to actual customer language and motives, not assumptions.'
  }
]

const engagementSteps = [
  {
    step: '1',
    title: 'Diagnose & define goals',
    icon: Search,
    description: 'We map your current funnel, channels, and constraints, then define clear objectives: lower CAC, increase repeat orders, find new angles, reduce churn, etc.'
  },
  {
    step: '2',
    title: 'Configure AKI & REN around your brand',
    icon: Settings,
    description: 'We connect your store and data sources, ingest your brand into AKI, and set up REN study templates tailored to your audience and lifecycle.'
  },
  {
    step: '3',
    title: 'Launch campaigns, referrals, and research loops',
    icon: Rocket,
    description: 'Our team runs AKI-powered creatives, referral flows, and REN studies in parallel—so we\'re testing, learning, and optimising every week.'
  },
  {
    step: '4',
    title: 'Iterate from one shared growth scoreboard',
    icon: RefreshCw,
    description: 'We use AKIREN\'s unified analytics to see which creatives, offers, and insights move the numbers, then scale the winners and feed learnings back into your strategy.'
  }
]

const useCases = [
  {
    title: 'D2C & eCommerce',
    description: 'Launching always-on referrals, UGC-driven ads, and pricing/message tests around key calendar moments.'
  },
  {
    title: 'SaaS & Subscription',
    description: 'Running churn/win–loss interviews with REN and translating findings into onboarding, activation, and upsell flows via AKI.'
  },
  {
    title: 'Agencies & Studios',
    description: 'Operating AKIREN across multiple client accounts to standardise experiments and insight workflows.'
  }
]

export default function ClientAkiren() {
  const handleExternalRedirect = () => {
    window.open('https://akiren.ai', '_blank', 'noopener,noreferrer')
  }

  return (
    <main id="product-akiren" className="min-h-screen bg-bg-base">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section id="hero" role="banner" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.12),_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                AKIREN – The Dual-Avatar AI Growth OS We Deploy for Our Clients
              </h1>
              <p className="text-xl text-text-primary font-semibold leading-relaxed">
                AKIREN pairs two specialised AI agents—<span className="text-accent-primary">AKI</span>, your creative and referral growth operator, and <span className="text-accent-secondary">REN</span>, your always-on research strategist—inside one unified Growth OS. We implement AKIREN for brands that want faster experimentation, deeper customer insight, and measurable revenue lift without building a full in-house growth team.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Instead of juggling separate tools for ads, UGC, referrals, and customer interviews, AKIREN gives you a single platform where creative, referrals, and research talk to each other. Our agency plugs this OS into your funnels, so you get more tests shipped, more referrals activated, and more decisions backed by real customer conversations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="group"
                  onClick={handleExternalRedirect}
                >
                  Explore AKIREN Product Site
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-fast" />
                </Button>
              </div>
              <p className="text-sm text-text-muted">
                Built for D2C, SaaS, and modern agencies that care about speed, insight, and revenue impact.
              </p>
            </motion.div>
            <motion.figure
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              aria-label="Akiren product preview"
              className="flex justify-center"
            >
              <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-border-soft bg-surface-card shadow-2xl">
                <Image
                  src="/assets/images/placeholder-akiren.png"
                  alt="Akiren AI Growth OS preview"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.figure>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="social-proof" className="py-24 bg-bg-elevated/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              {socialProof.headline}
            </h2>
            <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto">
              {socialProof.description}
            </p>
            <ul className="space-y-3 max-w-2xl mx-auto mt-8">
              {socialProof.stats.map((stat) => (
                <li key={stat} className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle className="mt-0.5 w-5 h-5 text-accent-primary flex-shrink-0" />
                  <span className="text-base">{stat}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Product Overview - AKI & REN */}
      <section id="product-overview" className="py-24 bg-bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Two AI agents. One OS. All your growth loops.
          </motion.h2>
          <div className="space-y-8">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group rounded-2xl border border-border-soft bg-surface-card p-8 hover:border-accent-primary/40 transition-all duration-300 hover:shadow-2xl"
                style={{
                  boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <h3 className="text-2xl font-bold text-accent-primary mb-2">{agent.name}</h3>
                <h4 className="text-lg font-semibold text-text-primary mb-4">{agent.miniHeading}</h4>
                <p className="text-text-secondary leading-relaxed">{agent.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Old vs New Comparison */}
      <section id="comparison" className="py-24 bg-bg-elevated/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            From tool chaos to an AI-operated growth stack
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6"
            >
              <h3 className="text-xl font-semibold text-red-400 mb-4">{comparison.old.title}</h3>
              <ul className="space-y-3">
                {comparison.old.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-red-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-accent-primary/40 bg-accent-primary/10 p-6"
            >
              <h3 className="text-xl font-semibold text-accent-primary mb-4">{comparison.new.title}</h3>
              <ul className="space-y-3">
                {comparison.new.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <CheckCircle className="mt-0.5 w-4 h-4 text-accent-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="benefits" className="py-24 bg-bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            What you get when we implement AKIREN for you
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-3">
            {keyBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group rounded-2xl border border-border-soft bg-surface-card p-6 hover:border-accent-primary/40 transition-all duration-300 hover:shadow-2xl"
                  style={{
                    boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  <div className="w-12 h-12 bg-accent-primary/14 border border-accent-primary/35 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-accent-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">{benefit.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section id="engagement" className="py-24 bg-bg-elevated/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            How we plug AKIREN into your growth motion
          </motion.h2>
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary transform -translate-y-1/2" style={{
              boxShadow: '0 0 20px rgba(124, 58, 237, 0.5), 0 0 40px rgba(34, 211, 238, 0.3)'
            }} />
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
              {engagementSteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    {/* Timeline Node */}
                    <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-4 h-4 rounded-full bg-accent-primary border-4 border-bg-elevated shadow-lg" style={{
                        boxShadow: '0 0 20px rgba(124, 58, 237, 0.8)'
                      }} />
                    </div>
                    
                    <div className="relative rounded-2xl border border-border-soft bg-surface-card p-6 hover:border-accent-primary/40 transition-all duration-300 hover:shadow-2xl mt-8 lg:mt-0"
                      style={{
                        boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 4px 6px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                      
                      <div className="w-12 h-12 bg-accent-primary/14 border border-accent-primary/35 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-accent-primary" />
                      </div>
                      
                      <div className="text-sm font-semibold text-accent-primary mb-2">Step {step.step}</div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">{step.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Token Layer */}
      <section id="token" className="py-24 bg-bg-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border-soft bg-gradient-to-br from-surface-card to-bg-elevated p-10 text-center"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-primary/5 via-accent-secondary/5 to-accent-primary/5 opacity-50 -z-10" />
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-6 py-3 mb-6">
              <span className="text-2xl font-bold text-accent-primary">$AKRN</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">$AKRN – Optional token layer for power users</h2>
            <p className="text-lg text-text-secondary mb-6 max-w-2xl mx-auto leading-relaxed">
              AKIREN also introduces <span className="font-semibold text-accent-primary">$AKRN</span>, a token that rewards real usage and contribution inside the Growth OS. As your team and our agency run more successful campaigns, referrals, and studies, you can earn $AKRN that unlocks extra usage, fee reductions, and early access to new capabilities. It's a way for heavy users and believers to participate in the upside of the ecosystem they help build.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-24 bg-bg-elevated/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Where we deploy AKIREN today
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group rounded-2xl border border-border-soft bg-surface-card p-6 hover:border-accent-primary/40 transition-all duration-300 hover:shadow-2xl"
                style={{
                  boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <h3 className="text-xl font-semibold text-text-primary mb-3">{useCase.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="py-24 bg-bg-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-border-soft bg-gradient-to-br from-surface-card to-bg-elevated p-10 lg:p-12 text-center"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-primary/5 via-accent-secondary/5 to-accent-primary/5 opacity-50 -z-10" />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to go deeper into the AKIREN platform?</h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              We implement AKIREN as the core Growth OS for select clients. If you'd like to understand the product in more detail—its agents, token model, and roadmap—explore the official site and then talk to us about how we can deploy it for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="primary" 
                size="lg" 
                className="group"
                onClick={handleExternalRedirect}
              >
                Visit AKIREN Product Website
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-fast" />
              </Button>
              <button
                onClick={openTallyPopup}
                className="text-sm font-semibold text-accent-primary hover:text-accent-secondary transition-colors duration-fast flex items-center gap-1"
              >
                Book a call to see how we'd implement AKIREN for you
                <Link2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
