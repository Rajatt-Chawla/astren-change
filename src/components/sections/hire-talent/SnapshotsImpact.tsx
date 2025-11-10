'use client'

import { motion } from 'framer-motion'
import { Bot, Database, Zap } from 'lucide-react'

export default function SnapshotsImpact() {
  const impacts = [
    {
      icon: Bot,
      title: 'GenAI Support Copilot',
      description: 'Ticket resolution time reduced by thirty percent with retrieval-augmented workflows and deflection automation.'
    },
    {
      icon: Database,
      title: 'Data Platform Revamp',
      description: 'Migration to modern ELT with a governed semantic layer enabled finance-ready dashboards and consistent metrics.'
    },
    {
      icon: Zap,
      title: 'Frontend Performance Push',
      description: 'Lighthouse scores above ninety-five and a measurable uplift in conversion after a focused two-week sprint.'
    }
  ]

  return (
    <section className="py-24 bg-bg-elevated/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            Snapshots of Impact
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            What great talent unlocks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-card border border-border-soft rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <impact.icon className="w-6 h-6 text-accent-primary" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">{impact.title}</h3>
              <p className="text-text-secondary">{impact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
