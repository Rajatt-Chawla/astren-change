'use client'

import { motion } from 'framer-motion'
import { Target, Code, RefreshCw, Cloud, Zap, Shield } from 'lucide-react'

export default function CoreCapabilities() {
  const capabilities = [
    {
      icon: Target,
      title: 'IT Strategy & Roadmapping',
      description: 'Comprehensive technology strategy aligned with business objectives and AI-first transformation goals.'
    },
    {
      icon: Code,
      title: 'Custom Application Development',
      description: 'Modern, scalable applications built with cutting-edge technologies and best practices.'
    },
    {
      icon: RefreshCw,
      title: 'Legacy System Modernization',
      description: 'Transform outdated systems into modern, maintainable, and scalable architectures.'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native & Microservices Architecture',
      description: 'Design and implement cloud-native solutions with microservices for maximum scalability.'
    },
    {
      icon: Zap,
      title: 'API Development & Integration',
      description: 'Build robust APIs and seamless integrations to connect your entire technology ecosystem.'
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
            Comprehensive Digital
            <span className="block gradient-text">Transformation Services</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Our full-stack approach covers every aspect of digital transformation, 
            from strategic planning to hands-on implementation and ongoing support.
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
