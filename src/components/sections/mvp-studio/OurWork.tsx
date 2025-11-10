'use client'

import { motion } from 'framer-motion'

const work = [
  {
    title: 'Ops Copilot',
    description:
      'From detailed specification to a live product in 13 days. Forty pilot users in the first week through target outreach and warm intros.'
  },
  {
    title: 'Fintech Dashboard',
    description:
      'Version zero shipped in two weeks. Two design partners converted to paying customers after a guided trial and value review.'
  },
  {
    title: 'Creator Tools',
    description:
      'Low-code MVP validated core assumptions. The team raised a seed round within ninety days using product signals and cohort retention.'
  }
]

export default function OurWork() {
  return (
    <section className="py-24 bg-bg-base">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-h1 font-bold text-text-primary">Our work</h2>
          <p className="text-text-secondary">
            A quick sample of outcomes our team has delivered.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {work.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border-soft bg-surface-card p-6"
            >
              <h3 className="text-xl font-semibold text-text-primary">{item.title}</h3>
              <p className="mt-3 text-text-secondary leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

