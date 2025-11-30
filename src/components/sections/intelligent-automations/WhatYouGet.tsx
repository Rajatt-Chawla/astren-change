'use client'

import { motion } from 'framer-motion'
import { BarChart, Shield, Zap, CheckCircle } from 'lucide-react'

export default function WhatYouGet() {
  const benefits = [
    {
      icon: BarChart,
      title: 'Measurable Impact',
      description: 'Every automation is tied to specific business metrics and KPIs. Track ROI, efficiency gains, and user satisfaction in real-time.',
      features: ['Real-time Analytics', 'ROI Tracking', 'Performance Metrics', 'User Feedback']
    },
    {
      icon: Shield,
      title: 'Accuracy & Freshness',
      description: 'Live-synced retrieval ensures your automations always have access to the most current information and data.',
      features: ['Live Data Sync', 'Real-time Updates', 'Data Accuracy', 'Fresh Information']
    },
    {
      icon: Zap,
      title: 'Enterprise-grade Integration',
      description: 'Seamless integration with triggers, actions, and API endpoints that work with your existing infrastructure.',
      features: ['API Integration', 'Webhook Support', 'Trigger Systems', 'Action Workflows']
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
            Enterprise-Grade
            <span className="block gradient-text">AI Automations</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Our automations deliver measurable business impact with enterprise-grade security, 
            reliability, and integration capabilities.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-card border border-border-soft rounded-xl p-8 hover:shadow-float transition-all duration-med hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-accent-primary/14 border border-white/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-accent-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-text-primary mb-4 text-center">{benefit.title}</h3>
              <p className="text-text-secondary leading-relaxed mb-6 text-center">{benefit.description}</p>
              
              <div className="space-y-3">
                {benefit.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
