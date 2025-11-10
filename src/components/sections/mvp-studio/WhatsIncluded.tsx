'use client'

import { motion } from 'framer-motion'

const items = [
  'Product strategy, UX flows, and a compact UI kit',
  'Full-stack implementation across APIs, database, and app or low-code where it is faster and stable',
  'Core integrations for authentication, payments, email, and analytics',
  'Basic telemetry across logs, metrics, and error tracking with dashboards',
  'Deployment to your cloud or to Vercel with handover documentation',
  'A two-week warranty window for critical fixes after launch'
]

export default function WhatsIncluded() {
  return (
    <section className="py-24 bg-bg-base">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-h1 font-bold text-text-primary">What’s included</h2>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-10 space-y-4 text-text-secondary"
        >
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-2xl border border-border-soft bg-surface-card p-4">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent-primary" />
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

