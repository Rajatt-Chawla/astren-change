'use client'

import { motion } from 'framer-motion'
import { Search, Users, Play, CheckCircle } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Intake and role design',
      time: '24–48 hours',
      description: 'We define the outcomes, must-have skills, overlap windows, security constraints, and budget so the search is precise.'
    },
    {
      icon: Users,
      title: 'Shortlist and interviews',
      time: '3–5 days',
      description: 'You receive three to five best-fit options with delivery notes. Optional pair-sessions on your code validate approach and fit.'
    },
    {
      icon: Play,
      title: 'Trial sprint',
      time: '1 week',
      description: 'A one-week paid pilot can verify velocity, communication quality, and code practices in your environment.'
    },
    {
      icon: CheckCircle,
      title: 'Onboard & scale',
      time: 'Ongoing',
      description: 'We handle contracts, security onboarding, and ramp. Capacity expands as the roadmap grows with continuity safeguards in place.'
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
            🔄 How It Works
          </div>
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            From request to "in the code"
            <span className="block gradient-text">in four steps</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            From request to “in the code” in four steps—built to de-risk hiring and prove fit before you scale.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-accent-primary" />
                  </div>
                  <div className="text-2xl font-bold text-accent-primary">{String(index + 1).padStart(2, '0')}</div>
                  <div className="text-sm text-accent-secondary font-semibold">{step.time}</div>
                </div>
                
                <h3 className="text-2xl font-bold text-text-primary mb-4">{step.title}</h3>
                <p className="text-lead text-text-secondary">{step.description}</p>
              </div>
              
              <div className="flex-1">
                <div className="bg-surface-card border border-border-soft rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="h-4 bg-accent-primary/30 rounded w-3/4"></div>
                    <div className="h-3 bg-text-muted/30 rounded w-1/2"></div>
                    <div className="h-3 bg-text-muted/30 rounded w-2/3"></div>
                    <div className="h-8 bg-accent-secondary/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm text-accent-secondary font-semibold">Process Step {index + 1}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
