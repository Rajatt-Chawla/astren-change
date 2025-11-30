'use client'

import { motion } from 'framer-motion'
import { Users, Calendar, MessageSquare, FileText, Code } from 'lucide-react'
import Button from '@/components/ui/Button'
import { openCalendly } from '@/lib/engagementLinks'

export default function EngagementModel() {
  const engagementFeatures = [
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Your dedicated AI engineering squad works exclusively on your projects with full context and continuity.'
    },
    {
      icon: Calendar,
      title: 'Sprint Cycles',
      description: 'Agile development with 2-week sprints, regular demos, and continuous delivery of working software.'
    },
    {
      icon: MessageSquare,
      title: 'Project Management',
      description: 'Dedicated project manager ensures smooth communication, timeline tracking, and stakeholder alignment.'
    },
    {
      icon: MessageSquare,
      title: 'Check-ins',
      description: 'Regular sync meetings, progress reviews, and strategic alignment sessions with your team.'
    },
    {
      icon: FileText,
      title: 'Ticket Submission',
      description: 'Structured ticket system for feature requests, bug reports, and priority management.'
    },
    {
      icon: Code,
      title: 'Code Submission',
      description: 'Direct code access and collaboration through your preferred development tools and repositories.'
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
            🤝 Engagement Model
          </div>
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            How We Work
            <span className="block gradient-text">With Your Team</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Our engagement model is designed for seamless integration with your existing workflows 
            while maintaining the highest standards of communication and delivery.
          </p>
        </motion.div>

        {/* Engagement Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {engagementFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-card border border-border-soft rounded-xl p-6 hover:shadow-float transition-all duration-med hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-text-primary mb-3">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Engagement Process with Deliverables */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Start from Proven Patterns</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our reusable frameworks and patterns accelerate delivery while maintaining quality standards.
            </p>
          </div>

          {/* Process Steps with Deliverables */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: 'Discovery',
                deliverables: ['Requirements doc', 'Technical spec', 'Architecture plan']
              },
              {
                title: 'Design',
                deliverables: ['System design', 'API contracts', 'Data models']
              },
              {
                title: 'Development',
                deliverables: ['Working code', 'Unit tests', 'Integration tests']
              },
              {
                title: 'Deployment',
                deliverables: ['Production deploy', 'Monitoring setup', 'Documentation']
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface-card border border-border-soft rounded-xl p-6"
              >
                <div className="w-10 h-10 bg-accent-primary/14 border border-accent-primary/35 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-accent-primary font-bold">{index + 1}</span>
                </div>
                <h4 className="text-lg font-bold text-text-primary mb-3">{step.title}</h4>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Deliverables:</p>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Infographic */}
          <div className="relative mt-12 flex justify-center">
            <div className="relative max-w-[1100px] w-full rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.15)]">
              <img
                src="/assets/images/ai-engineering-engagement.png"
                alt="Astrenox AI Engineering — Engagement Model & Process"
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const fallback = e.currentTarget.parentElement?.querySelector('.fallback-infographic')
                  if (fallback) (fallback as HTMLElement).style.display = 'block'
                }}
              />
              <div className="fallback-infographic hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_40px_rgba(56,189,248,0.06)] text-center">
                <h3 className="text-xl font-bold mb-4 text-text-primary">AI Engineering Engagement Process</h3>
                <p className="text-text-secondary text-sm">Dedicated Team • Sprint Cycles • Project Management • Code Collaboration</p>
              </div>
            </div>
          </div>
        </motion.div>

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
              Ready to Scale Your AI Engineering?
            </h3>
            <p className="text-text-secondary mb-6">
              Let's discuss your AI engineering needs and create a custom engagement plan.
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
