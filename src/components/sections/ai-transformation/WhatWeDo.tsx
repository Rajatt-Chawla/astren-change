'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Brain, Users, Settings, Code, BarChart } from 'lucide-react'
import Button from '@/components/ui/Button'
import { openCalendly } from '@/lib/engagementLinks'

export default function WhatWeDo() {
  const services = [
    {
      icon: BarChart,
      title: 'Process Survey',
      description: 'Comprehensive analysis of your current workflows, bottlenecks, and automation opportunities.'
    },
    {
      icon: Users,
      title: 'Executive Survey',
      description: 'Strategic alignment assessment with leadership to ensure AI initiatives support business objectives.'
    },
    {
      icon: Brain,
      title: 'Expert Interviews',
      description: 'Deep-dive conversations with key stakeholders to understand technical and operational constraints.'
    },
    {
      icon: Settings,
      title: 'Custom Training Programs',
      description: 'Bespoke curricula designed to upskill your team for AI-first operations and decision-making.'
    },
    {
      icon: Code,
      title: 'AI Tooling',
      description: 'Implementation of production-ready AI tools and platforms tailored to your specific use cases.'
    },
    {
      icon: ArrowRight,
      title: 'AI Engineering',
      description: 'Hands-on development and deployment of AI solutions with ongoing support and optimization.'
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
            🚀 What We Do
          </div>
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            We are your
            <span className="block gradient-text">Chief AI Officer</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            From strategic assessment to hands-on implementation, we provide the complete AI transformation 
            capability that most organizations lack internally.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-card border border-border-soft rounded-xl p-6 hover:shadow-float transition-all duration-med hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-accent-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-text-primary mb-3">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-surface-card border border-border-soft rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ready to Start Your AI Transformation?
            </h3>
            <p className="text-text-secondary mb-6">
              Let's begin with a strategic assessment and create a roadmap for your AI-first future.
            </p>
            <Button variant="primary" size="lg" className="group" onClick={openCalendly}>
              Schedule your scoping session
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-fast" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
