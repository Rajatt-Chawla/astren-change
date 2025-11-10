'use client'

import { motion } from 'framer-motion'

const metrics = [
  { label: 'Products shipped', value: '20+' },
  { label: 'Capital raised by clients', value: '$10M+' },
  { label: 'Acquisitions', value: '5+' },
  { label: 'Average time to first user', value: 'Under 14 days' },
  { label: 'NPS for delivery', value: '80+' }
]

export default function Numbers() {
  return (
    <section className="py-24 bg-bg-elevated/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-h1 font-bold text-text-primary">Numbers that matter</h2>
          <p className="text-text-secondary">
            Replace these with your verified stats before go-live.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border-soft bg-surface-card p-6"
            >
              <div className="text-3xl font-bold text-accent-primary">{metric.value}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.2em] text-text-muted">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

