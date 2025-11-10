'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, DollarSign, Clock, Wrench } from 'lucide-react'

export default function WhyYouNeedUs() {
  const challenges = [
    {
      icon: AlertTriangle,
      title: 'Hiring Risks',
      description: 'Finding and retaining top AI talent is expensive and risky. One bad hire can set you back months.'
    },
    {
      icon: DollarSign,
      title: 'High Costs',
      description: 'Senior AI engineers command premium salaries. Building an in-house team requires significant investment.'
    },
    {
      icon: Clock,
      title: 'Velocity Advantage',
      description: 'We deliver faster because we\'re already optimized for AI development workflows and best practices.'
    },
    {
      icon: Wrench,
      title: 'Unwinding Bad Habits',
      description: 'Existing teams often have technical debt and outdated practices that slow down AI adoption.'
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
            ⚠️ Why You Need Us
          </div>
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            The Challenges of
            <span className="block gradient-text">Building AI Teams</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Building an internal AI engineering capability is complex, expensive, and risky. 
            Here's why partnering with us makes more sense.
          </p>
        </motion.div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-card border border-border-soft rounded-xl p-6 hover:shadow-float transition-all duration-med hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-danger/14 border border-white/10 rounded-lg flex items-center justify-center mb-4">
                <challenge.icon className="w-6 h-6 text-danger" />
              </div>
              
              <h3 className="text-lg font-bold text-text-primary mb-3">{challenge.title}</h3>
              <p className="text-text-secondary leading-relaxed">{challenge.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-surface-card border border-border-soft rounded-xl p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                The Astrenox Solution
              </h3>
              <p className="text-lead text-text-secondary">
                Skip the hiring risks, avoid the learning curve, and start building AI solutions immediately. 
                Our pre-vetted teams deliver production-ready code from day one.
              </p>
            </div>

            <div className="mt-10">
              <div className="relative mx-auto max-w-4xl rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.15)]">
                <img
                  src="/assets/images/ai-engineering-astrenox-solution.png"
                  alt="Astrenox AI Engineering solution overview infographic"
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const fallback = e.currentTarget.parentElement?.querySelector('.fallback-infographic')
                    if (fallback) (fallback as HTMLElement).style.display = 'block'
                  }}
                />
                <div className="fallback-infographic hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_40px_rgba(56,189,248,0.06)] text-center">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">Astrenox AI Engineering Solution</h4>
                  <p className="text-sm text-text-secondary">Dedicated Teams • Proven Frameworks • Accelerated Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
