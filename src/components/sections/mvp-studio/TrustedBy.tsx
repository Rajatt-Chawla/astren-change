'use client'

import { motion } from 'framer-motion'

export default function TrustedBy() {
  return (
    <section className="py-20 bg-bg-elevated/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary">
            Trusted by teams shipping fast
          </h2>
          <p className="mt-4 text-text-secondary">
            Chosen by founders, operators, and product leaders who need to get to market quickly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl border border-border-soft bg-surface-card p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-12 w-full max-w-[180px] rounded-2xl border border-white/10 bg-white/[0.04]"
              />
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-text-muted">
            Replace these placeholders with verified partner logos before launch.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

