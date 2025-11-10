'use client'

import { motion } from 'framer-motion'
import { Clock, Shield, CheckCircle, FileText } from 'lucide-react'

export default function SLAsGuarantees() {
  const guarantees = [
    {
      icon: Clock,
      title: 'Response SLA',
      description: 'Shortlists within three to five business days for common roles with proactive communication on edge cases.'
    },
    {
      icon: CheckCircle,
      title: 'Continuity',
      description: 'Rapid replacement and structured knowledge transfer if availability changes.'
    },
    {
      icon: FileText,
      title: 'Quality gates',
      description: 'Periodic code audits, velocity reviews, and sprint health checks for managed squads.'
    },
    {
      icon: Shield,
      title: 'IP & Security',
      description: 'Assignment agreements, access logs, environment isolation, and revocation procedures safeguard your assets.'
    }
  ]

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
            SLAs & Guarantees
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Risk controlled, delivery protected
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-card border border-border-soft rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <guarantee.icon className="w-6 h-6 text-accent-primary" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">{guarantee.title}</h3>
              <p className="text-text-secondary">{guarantee.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
