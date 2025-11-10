'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-bg-elevated/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 text-center"
        >
          <h2 className="text-h1 font-bold text-text-primary">Pricing</h2>
          <p className="text-text-secondary">
            MVP in 3 weeks — starts from $1,500
          </p>
          <p className="text-text-secondary max-w-3xl mx-auto">
            Best for well-scoped products with up to three core flows. Included: a strategy workshop, a compact design system, build and deploy, analytics setup, and handoff. Add-ons at fixed fees: extra integrations, custom models or AI agents, complex data migrations, multi-tenant setup, and a SOC 2-ready foundation where required.
          </p>
          <p className="text-text-secondary max-w-3xl mx-auto">
            If your goal is to learn fast and convert those learnings into traction, our three-week program gives you a live product, the right analytics, and a plan for the next sprint. Everything is designed to reduce uncertainty and accelerate validated progress.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-12 space-y-6 rounded-3xl border border-border-soft bg-surface-card p-8 lg:p-10"
        >
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-semibold text-text-primary">30 minutes to confirm fit</h3>
            <p className="text-text-secondary">
              Bring your problem statement, your audience, and your success criteria. Leave with a clear timeline and a fixed price.
            </p>
            <p className="text-text-secondary">
              Email: <span className="font-medium text-text-primary">prajwal@astrentech.com</span>
            </p>
          </div>
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
