'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Button from '@/components/ui/Button'

const includedFeatures = [
  'Strategy workshop',
  'Compact design system',
  'Full-stack build and deploy',
  'Analytics setup',
  'Handoff documentation',
  'Two-week warranty window'
]

const addOnFeatures = [
  'Extra integrations',
  'Custom models or AI agents',
  'Complex data migrations',
  'Multi-tenant setup',
  'SOC 2-ready foundation'
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-bg-elevated/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 font-bold text-text-primary mb-4">Pricing</h2>
          <p className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
            MVP in 3 weeks — starts from <span className="gradient-text">$1,500</span>
          </p>
          <p className="text-text-secondary max-w-3xl mx-auto">
            Best for well-scoped products with up to three core flows. If your goal is to learn fast and convert those learnings into traction, our three-week program gives you a live product, the right analytics, and a plan for the next sprint.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Pricing Box - Included */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative h-full rounded-3xl border border-border-soft bg-surface-card p-8 lg:p-10 hover:border-accent-primary/40 transition-all duration-300 hover:shadow-2xl">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              <div className="mb-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-primary/14 border border-accent-primary/35 text-accent-primary text-xs font-semibold mb-4">
                  Included
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">What's Included</h3>
                <p className="text-text-secondary text-sm">
                  Everything you need to launch your MVP in 3 weeks
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {includedFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent-primary/20 border border-accent-primary/40 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent-primary" />
                    </div>
                    <span className="text-text-secondary text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Pricing Box - Add-ons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative h-full rounded-3xl border border-border-soft bg-surface-card p-8 lg:p-10 hover:border-accent-secondary/40 transition-all duration-300 hover:shadow-2xl">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              <div className="mb-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-secondary/14 border border-accent-secondary/35 text-accent-secondary text-xs font-semibold mb-4">
                  Add-ons
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Available Add-ons</h3>
                <p className="text-text-secondary text-sm">
                  Additional features available at fixed fees
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {addOnFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent-secondary/20 border border-accent-secondary/40 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent-secondary" />
                    </div>
                    <span className="text-text-secondary text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-border-soft bg-gradient-to-br from-surface-card to-bg-elevated p-8 lg:p-10 text-center"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-primary/5 via-accent-secondary/5 to-accent-primary/5 opacity-50 -z-10" />
          
          <h3 className="text-2xl font-bold text-text-primary mb-4">30 minutes to confirm fit</h3>
          <p className="text-text-secondary mb-2 max-w-2xl mx-auto">
            Bring your problem statement, your audience, and your success criteria. Leave with a clear timeline and a fixed price.
          </p>
          <p className="text-text-secondary mb-6">
            Email: <span className="font-medium text-text-primary">prajwal@astrentech.com</span>
          </p>
          <div className="flex justify-center">
            <Link href="/get-started?intent=mvp-pricing" className="inline-flex">
              <Button variant="primary" size="lg" className="group">
                Book a 30-minute scoping call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-fast" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
