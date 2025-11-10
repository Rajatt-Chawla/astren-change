'use client'

import { motion } from 'framer-motion'
import { TrendingDown, Zap, Shield, Rocket } from 'lucide-react'
import Button from '@/components/ui/Button'
import { openCalendly } from '@/lib/engagementLinks'

export default function TheAdvantage() {
  const advantages = [
    {
      icon: TrendingDown,
      title: 'Lower TCO',
      description: 'Reduced total cost of ownership through optimized architecture and automated processes.'
    },
    {
      icon: Zap,
      title: 'Higher Release Frequency',
      description: 'Faster delivery cycles with modern development practices and automated deployment.'
    },
    {
      icon: Shield,
      title: 'Stronger Security',
      description: 'Enterprise-grade security built-in from the ground up with modern best practices.'
    },
    {
      icon: Rocket,
      title: 'Faster Innovation',
      description: 'Accelerated innovation with modern tools, practices, and AI-first architecture.'
    }
  ]

  return (
    <section className="py-24 bg-bg-base">
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
            🎯 The Advantage
          </div>
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            Practitioner-Led,
            <span className="block gradient-text">Production-Grade Results</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Our practitioner-led approach delivers production-grade solutions with measurable outcomes: 
            lower TCO, higher release frequency, stronger security, and faster innovation.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-primary/14 border border-white/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <advantage.icon className="w-8 h-8 text-accent-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-text-primary mb-4">{advantage.title}</h3>
              <p className="text-text-secondary leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-surface-card border border-border-soft rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ready to Transform Your Technology Stack?
            </h3>
            <p className="text-text-secondary mb-6">
              Start with a focused scoping session. We'll align the plan and ship the work.
            </p>
            <Button variant="primary" size="lg" className="group" onClick={openCalendly}>
              Schedule your scoping session
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
