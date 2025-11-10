'use client'

import { motion } from 'framer-motion'
import { Zap, Users, Shield, Clock, CheckCircle, DollarSign } from 'lucide-react'

export default function WhyAstrenoxTalent() {
  const advantages = [
    {
      icon: Clock,
      title: 'Shortlists in days, not weeks',
      description: 'We maintain an always-warm bench across AI, data, product, and platform so you see credible options quickly.'
    },
    {
      icon: CheckCircle,
      title: 'Vetted for outcomes',
      description: 'We evaluate real delivery patterns, system design judgment, and collaboration skills to ensure production-grade output.'
    },
    {
      icon: Users,
      title: 'Pods or individuals',
      description: 'Place a specialist for a focused gap or deploy a managed squad with TPM, QA, and DevOps to own a workstream end to end.'
    },
    {
      icon: Clock,
      title: 'Time-zone coverage',
      description: 'We staff for India, EMEA, and US overlap windows to maintain continuous progress and predictable handoffs.'
    },
    {
      icon: Shield,
      title: 'Security-first',
      description: 'NDAs, IP assignment, least-privilege access, and audited workflows are standard to protect your code and data.'
    },
    {
      icon: DollarSign,
      title: 'Aligned incentives',
      description: 'Outcome-based models for squads keep attention on features, reliability, and measurable value rather than hours logged.'
    }
  ]

  return (
    <section className="py-24 bg-bg-elevated/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/18 border border-accent-primary/35 text-accent-primary text-sm font-semibold mb-6">
            ⚡ Why Astrenox Talent
          </div>
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            Speed, quality, and accountability —
            <span className="block gradient-text">in one motion</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Speed, quality, and accountability live in the same motion—designed for teams that need talent deployed and delivering immediately.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-card border border-border-soft rounded-xl p-6 hover:shadow-float transition-all duration-med hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center mb-4">
                <advantage.icon className="w-6 h-6 text-accent-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-text-primary mb-3">{advantage.title}</h3>
              <p className="text-text-secondary leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
