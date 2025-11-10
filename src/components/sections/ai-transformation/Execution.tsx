'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Package, Users, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Execution() {
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
            ⚡ Execution
          </div>
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            From Strategy to
            <span className="block gradient-text">Measurable Outcomes</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            We execute AI transformation across three critical dimensions: Product, Process, and People. 
            Each initiative is tied to business metrics and delivered with a cadence of value.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Product Transformation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-surface-card border border-border-soft rounded-xl p-8 hover:shadow-float transition-all duration-med hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center mb-6">
              <Package className="w-6 h-6 text-accent-primary" />
            </div>
            
            <h3 className="text-xl font-bold text-text-primary mb-4">Product Transformation</h3>
            <p className="text-text-secondary mb-6">
              We build AI-native products that deliver measurable outcomes and a clear competitive edge.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                <span className="text-sm text-text-secondary">AI-native product development</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                <span className="text-sm text-text-secondary">Outcome-based engagements</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                <span className="text-sm text-text-secondary">AI acceleration frameworks</span>
              </div>
            </div>

            <Button variant="secondary" size="sm" className="group">
              Learn more about AI Engineering
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-fast" />
            </Button>
          </motion.div>

          {/* Process Transformation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-surface-card border border-border-soft rounded-xl p-8 hover:shadow-float transition-all duration-med hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-accent-secondary/14 border border-white/10 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-accent-secondary" />
            </div>
            
            <h3 className="text-xl font-bold text-text-primary mb-4">Process Transformation</h3>
            <p className="text-text-secondary mb-6">
              We map workflows and implement automation with clear metrics and change management.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-secondary rounded-full"></div>
                <span className="text-sm text-text-secondary">Process optimization</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-secondary rounded-full"></div>
                <span className="text-sm text-text-secondary">Automation implementation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-secondary rounded-full"></div>
                <span className="text-sm text-text-secondary">Change management</span>
              </div>
            </div>

            <Button variant="secondary" size="sm" className="group">
              Explore Intelligent Automations
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-fast" />
            </Button>
          </motion.div>

          {/* People Transformation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-surface-card border border-border-soft rounded-xl p-8 hover:shadow-float transition-all duration-med hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-success/14 border border-white/10 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-success" />
            </div>
            
            <h3 className="text-xl font-bold text-text-primary mb-4">People Transformation</h3>
            <p className="text-text-secondary mb-6">
              We upskill teams through practical training and workshops so they can use and manage AI confidently.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm text-text-secondary">Custom training programs</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm text-text-secondary">Hands-on workshops</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm text-text-secondary">Upskilling and adoption</span>
              </div>
            </div>

            <Button variant="secondary" size="sm" className="group">
              Start your transformation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-fast" />
            </Button>
          </motion.div>
        </div>

        {/* Execution Process Infographic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative mt-12 flex justify-center">
            <div className="relative max-w-[1100px] w-full rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.15)]">
              <img
                src="/assets/images/ai-transformation-execution.png"
                alt="Astrenox AI Transformation — Product, Process & People Execution"
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const fallback = e.currentTarget.parentElement?.querySelector('.fallback-infographic')
                  if (fallback) (fallback as HTMLElement).style.display = 'block'
                }}
              />
              <div className="fallback-infographic hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_40px_rgba(56,189,248,0.06)] text-center">
                <h3 className="text-xl font-bold mb-4 text-text-primary">Three Dimensions of Transformation</h3>
                <p className="text-text-secondary text-sm">Product • Process • People</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
