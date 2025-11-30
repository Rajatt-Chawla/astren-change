'use client'

import { motion } from 'framer-motion'
import { Shield, Target, Users, Zap } from 'lucide-react'

export default function WhyUs() {
  const reasons = [
    {
      icon: Shield,
      title: 'Mission-Critical Expertise',
      description: 'We understand the stakes. Our solutions are built for production environments where failure is not an option.'
    },
    {
      icon: Target,
      title: 'Ownership Gap Filled',
      description: 'Most organizations lack the internal capability to own AI transformation end-to-end. We fill that gap completely.'
    },
    {
      icon: Zap,
      title: 'Technical Chops',
      description: 'We don\'t just consult—we build. Our engineering team delivers production-ready solutions that actually work.'
    },
    {
      icon: Users,
      title: 'Cultural Buy-In',
      description: 'We help organizations navigate the cultural shift required for successful AI adoption, not just the technical implementation.'
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
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            The Astrenox
            <span className="block gradient-text">Advantage</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Traditional consultancies provide strategy without execution. Product shops build without strategy. 
            We bridge the gap with rigorous thinking and production-grade execution.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-primary/14 border border-white/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <reason.icon className="w-8 h-8 text-accent-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-text-primary mb-4">{reason.title}</h3>
              <p className="text-text-secondary leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Consultancy Pitfalls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-surface-card border border-border-soft rounded-xl p-8">
            <h3 className="text-xl font-bold text-text-primary mb-6 text-center">
              Why Traditional Consultancies Fall Short
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-danger/14 border border-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-danger font-bold text-lg">✗</span>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Strategy Without Execution</h4>
                <p className="text-sm text-text-secondary">Beautiful reports that sit on shelves, never implemented</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-danger/14 border border-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-danger font-bold text-lg">✗</span>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Generic Solutions</h4>
                <p className="text-sm text-text-secondary">One-size-fits-all approaches that don't fit your unique constraints</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-danger/14 border border-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-danger font-bold text-lg">✗</span>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">No Ownership</h4>
                <p className="text-sm text-text-secondary">Handoff to internal teams who lack the expertise to execute</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
