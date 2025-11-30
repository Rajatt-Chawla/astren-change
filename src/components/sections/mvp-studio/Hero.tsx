'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-bg-base">
        <div className="absolute inset-0 bg-overlay-gradient" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden"
            >
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-display-lg lg:text-display-lg font-extrabold text-text-primary leading-tight"
            >
              Launch your MVP in 3 weeks
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lead text-text-secondary max-w-2xl leading-relaxed"
            >
              From idea to live product. Strategy, build, and first users delivered without chaos or rework.
            </motion.p>

            <ul className="space-y-3 text-text-secondary">
              {[
                'Clear scope confirmed within 48 hours',
                'Design, build, and deploy with end-to-end observability',
                'Handover playbook and a ready next-sprint backlog'
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-surface-card border border-border-soft rounded-xl p-8 shadow-card hover:shadow-float transition-all duration-med hover:-translate-y-2">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-danger rounded-full"></div>
                    <div className="w-3 h-3 bg-warning rounded-full"></div>
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                  </div>
                  <div className="text-xs text-text-muted">Three-week track</div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: 'Week 1', text: 'Define scope, user journeys, and success signals' },
                    { label: 'Week 2', text: 'Build core flows, integrations, and observability' },
                    { label: 'Week 3', text: 'Launch to first users with analytics and playbooks' }
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-20 rounded-lg bg-accent-primary/18 border border-accent-primary/35 px-3 py-2 text-xs font-semibold text-accent-primary">
                        {item.label}
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-3/4 rounded bg-accent-primary/30"></div>
                        <p className="mt-2 text-xs text-text-muted">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-accent-primary/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent-secondary/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
