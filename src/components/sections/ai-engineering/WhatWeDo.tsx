'use client'

import { motion } from 'framer-motion'
import { Code, Brain, Database, Zap, Settings, Plus } from 'lucide-react'

export default function WhatWeDo() {
  const capabilities = [
    {
      icon: Code,
      title: 'Application Development',
      description: 'Full-stack AI applications with modern frameworks and cloud-native architecture.'
    },
    {
      icon: Brain,
      title: 'Fine-Tuning Models',
      description: 'Custom model training and fine-tuning for domain-specific AI solutions.'
    },
    {
      icon: Database,
      title: 'Code Migration + Refactors',
      description: 'Modernizing legacy systems and migrating to AI-first architectures.'
    },
    {
      icon: Zap,
      title: 'Data Engineering + Analysis',
      description: 'Building robust data pipelines and analytics infrastructure for AI workloads.'
    },
    {
      icon: Settings,
      title: 'Custom Agentic Solutions',
      description: 'Autonomous agents and multi-agent systems for complex business processes.'
    },
    {
      icon: Plus,
      title: 'And More',
      description: 'MLOps, AI infrastructure, model deployment, monitoring, and optimization.'
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
            Comprehensive AI
            <span className="block gradient-text">Engineering Services</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            From application development to model deployment, we provide end-to-end AI engineering 
            capabilities that scale with your business needs.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-card border border-border-soft rounded-xl p-6 hover:shadow-float transition-all duration-med hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center mb-4">
                <capability.icon className="w-6 h-6 text-accent-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-text-primary mb-3">{capability.title}</h3>
              <p className="text-text-secondary leading-relaxed">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
