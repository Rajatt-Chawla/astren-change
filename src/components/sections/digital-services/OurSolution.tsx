'use client'

import { motion } from 'framer-motion'
import { FileText, Code, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { openCalendly } from '@/lib/engagementLinks'

export default function OurSolution() {
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
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            Strategy & Build
            <span className="block gradient-text">AI-First Blueprint + Elite Engineering</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            We combine strategic consulting with hands-on engineering to deliver 
            modern, scalable solutions that accelerate your digital transformation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* The Blueprint */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-surface-card border border-border-soft rounded-xl p-8 hover:shadow-float transition-all duration-med"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-accent-primary" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">The Blueprint</h3>
            </div>
            
            <p className="text-text-secondary leading-relaxed mb-6">
              AI-first strategy, enterprise architecture, data/process design, and phased 
              measurable roadmap. We create the strategic foundation for your digital transformation.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-text-primary">AI-First Strategy</div>
                  <div className="text-sm text-text-secondary">Strategic planning with AI capabilities at the core</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-text-primary">Enterprise Architecture</div>
                  <div className="text-sm text-text-secondary">Scalable, modern architecture design</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-text-primary">Data & Process Design</div>
                  <div className="text-sm text-text-secondary">Integrated data flows and optimized processes</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-text-primary">Phased Roadmap</div>
                  <div className="text-sm text-text-secondary">Measurable milestones and clear delivery timeline</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The Build */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-surface-card border border-border-soft rounded-xl p-8 hover:shadow-float transition-all duration-med"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent-secondary/14 border border-white/10 rounded-lg flex items-center justify-center mr-4">
                <Code className="w-6 h-6 text-accent-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">The Build</h3>
            </div>
            
            <p className="text-text-secondary leading-relaxed mb-6">
              Custom app development, legacy modernization, microservices & APIs; security, 
              reliability, velocity. We deliver production-ready solutions that scale.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-secondary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-text-primary">Custom Application Development</div>
                  <div className="text-sm text-text-secondary">Modern, scalable applications built for your needs</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-secondary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-text-primary">Legacy System Modernization</div>
                  <div className="text-sm text-text-secondary">Transform legacy systems into modern architecture</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-secondary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-text-primary">Microservices & APIs</div>
                  <div className="text-sm text-text-secondary">Modular, API-first architecture for flexibility</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-secondary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-text-primary">Security & Reliability</div>
                  <div className="text-sm text-text-secondary">Enterprise-grade security and reliability built-in</div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button variant="secondary" size="sm" className="group" onClick={openCalendly}>
                Schedule your scoping session
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-fast" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
