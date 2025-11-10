'use client'

import { motion } from 'framer-motion'
import { DollarSign, Target, Users } from 'lucide-react'

export default function PricingSignals() {
  return (
    <section className="py-24 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            Pricing Signals
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Clear, predictable, and scalable
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-surface-card border border-border-soft rounded-xl p-6 text-center"
          >
            <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-accent-primary" />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-3">Individuals</h3>
            <p className="text-text-secondary">
              Monthly retainers based on role seniority and scope of responsibility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-surface-card border border-border-soft rounded-xl p-6 text-center"
          >
            <div className="w-12 h-12 bg-accent-secondary/14 border border-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-accent-secondary" />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-3">Squads</h3>
            <p className="text-text-secondary">
              Outcome-based pricing tied to features or story-points with jointly defined acceptance criteria.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-surface-card border border-border-soft rounded-xl p-6 text-center"
          >
            <div className="w-12 h-12 bg-success/14 border border-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-success" />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-3">Fractional leaders</h3>
            <p className="text-text-secondary">
              Fixed weekly blocks to ensure cadence, availability, and leadership continuity.
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-text-secondary"
        >
          A tailored plan is prepared after intake once outcomes, constraints, and timelines are confirmed.
        </motion.p>
      </div>
    </section>
  )
}
