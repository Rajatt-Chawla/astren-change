'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Step 1 — Define the product vision',
    description:
      'We align on the problem framing and the jobs to be done, distinguish the must-have scope from later iterations, and confirm measurable success criteria with the right analytics events, resulting in a product specification doc, a screen map, and a prioritized backlog that gives the team a clear, shared plan of record.'
  },
  {
    title: 'Step 2 — Build your MVP',
    description:
      'We establish a compact design system and implement the core user flows with required integrations, set up CI and CD with environment configurations and observability, and enable secure authentication, delivering a fully deployed MVP with an operational runbook that explains day-to-day management and support.'
  },
  {
    title: 'Step 3 — Launch, learn, and iterate',
    description:
      'We execute a structured beta rollout, capture signal through funnels and event tracking, and use real usage to prioritize the next sprint while strengthening early retention and reducing onboarding friction, culminating in a post-launch report and a v0.1 backlog with clear acceptance criteria that guide focused iteration.'
  }
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-bg-elevated/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-h1 font-bold text-text-primary">Process — Define → Build → Launch and Iterate</h2>
        </motion.div>

        <div className="mt-14 space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border-soft bg-surface-card p-8"
            >
              <h3 className="text-2xl font-semibold text-text-primary">{step.title}</h3>
              <p className="mt-4 text-text-secondary leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

