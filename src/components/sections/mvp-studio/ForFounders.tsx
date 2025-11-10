'use client'

import { motion } from 'framer-motion'

export default function ForFounders() {
  return (
    <section className="py-24 bg-bg-base">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-h1 font-bold text-text-primary">For founders who are ready to build</h2>
          <p className="text-lead text-text-secondary">
            You are not waiting for perfection. You are optimizing for learning speed.
          </p>
          <div className="space-y-4 text-text-secondary">
            <p>
              We turn a sharp problem statement into a testable MVP that is instrumented for signals from day one.
            </p>
            <p>
              You ship a focused product. You collect user data and feedback. You iterate with confidence because your next decisions are evidence-based.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

