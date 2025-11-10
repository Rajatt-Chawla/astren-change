'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Cpu, Database, Zap, Settings } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function EngineV() {
  return (
    <section className="py-24 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual - Engine v Infographic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-[1100px] w-full rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.15)]">
              <img
                src="/assets/images/engine-v-platform.png"
                alt="Astrenox Engine v — AI Platform Architecture"
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const fallback = e.currentTarget.parentElement?.querySelector('.fallback-infographic')
                  if (fallback) (fallback as HTMLElement).style.display = 'block'
                }}
              />
              <div className="fallback-infographic hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_40px_rgba(56,189,248,0.06)] text-center">
                <h3 className="text-xl font-bold mb-4 text-text-primary">Engine v Platform</h3>
                <p className="text-text-secondary text-sm">AI Processing • Data Orchestration • Workflow Automation</p>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-accent-primary/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-secondary/20 rounded-full blur-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-secondary/18 border border-accent-secondary/35 text-accent-secondary text-sm font-semibold mb-6">
              ⚡ Engine v
            </div>
            
            <h2 className="text-h1 font-bold text-text-primary mb-6">
              The AI Platform
              <span className="block gradient-text">That Powers Everything</span>
            </h2>
            
            <p className="text-lead text-text-secondary mb-8">
              Engine v is our foundational AI platform that powers all our solutions. 
              It provides the infrastructure, orchestration, and intelligence layer that 
              makes advanced AI capabilities accessible to your entire organization.
            </p>

            {/* Platform Capabilities */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">AI Processing Engine</h3>
                  <p className="text-text-secondary">High-performance AI processing with support for multiple models and real-time inference.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent-secondary/14 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 text-accent-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Data Orchestration</h3>
                  <p className="text-text-secondary">Seamless integration with 30+ data sources and real-time data processing capabilities.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-success/14 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Enterprise Features</h3>
                  <p className="text-text-secondary">Security, compliance, monitoring, and governance built-in from the ground up.</p>
                </div>
              </div>
            </div>

            <Button variant="secondary" size="lg" className="group">
              Learn More About Engine v
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-fast" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
