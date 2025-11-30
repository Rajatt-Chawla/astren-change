'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Bot, Zap, Search, FileText, BarChart } from 'lucide-react'

export default function WhatWeBuild() {
  const automations = [
    {
      icon: MessageCircle,
      title: 'AI Chatbots',
      description: 'Support, onboarding, leads, and advisory chatbots. Deploy on your site, link, Slack, WhatsApp/SMS with seamless integration.',
      features: ['Customer Support', 'Lead Qualification', 'Onboarding', 'Advisory Services']
    },
    {
      icon: Bot,
      title: 'AI Assistants / Co-pilots',
      description: 'Internal assistants across knowledge domains with SOP enforcement for sales, operations, and compliance workflows.',
      features: ['Sales Support', 'Operations', 'Compliance', 'Knowledge Management']
    },
    {
      icon: Zap,
      title: 'Autonomous Agents / Autopilots',
      description: 'Intelligent agents that decompose complex tasks and execute them using search, APIs, databases, and other tools.',
      features: ['Task Decomposition', 'Tool Integration', 'Autonomous Execution', 'Multi-step Workflows']
    },
    {
      icon: BarChart,
      title: 'Workflow Automations',
      description: 'Content generation, outbound campaigns, call summaries, analytics, and other business process automations.',
      features: ['Content Generation', 'Outbound Campaigns', 'Call Summaries', 'Analytics Automation']
    },
    {
      icon: Search,
      title: 'Knowledge Search',
      description: 'Permission-aware retrieval systems with live sync across your knowledge base, documents, and data sources.',
      features: ['Permission-aware', 'Live Sync', 'Multi-source', 'Contextual Results']
    },
    {
      icon: FileText,
      title: 'Document & Report Automations',
      description: 'RFP responses, proposals, reports, and analysis accelerators that generate high-quality content automatically.',
      features: ['RFP Responses', 'Proposals', 'Reports', 'Analysis Generation']
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
            Production-Ready AI
            <span className="block gradient-text">Automations</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            We build intelligent automations that integrate seamlessly with your existing tools, 
            data, and workflows to deliver immediate business value.
          </p>
        </motion.div>

        {/* Automations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {automations.map((automation, index) => (
            <motion.div
              key={automation.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-card border border-border-soft rounded-xl p-6 hover:shadow-float transition-all duration-med hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center mb-4">
                <automation.icon className="w-6 h-6 text-accent-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-text-primary mb-3">{automation.title}</h3>
              <p className="text-text-secondary leading-relaxed mb-4">{automation.description}</p>
              
              <div className="space-y-2">
                {automation.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
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
