'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Search, Brain, Zap, Shield } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function ANXIntelligence() {
  return (
    <section className="py-24 bg-bg-elevated/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/18 border border-accent-primary/35 text-accent-primary text-sm font-semibold mb-6">
              🤖 ANX Intelligence
            </div>
            
            <h2 className="text-h1 font-bold text-text-primary mb-6">
              The Business Copilot
            </h2>
            
            <p className="text-lead text-text-secondary mb-8">
              Built for executives, product owners, and operations leaders. ANX Intelligence 
              unifies search, insights, and business process automation into agentic workflows 
              that act across your entire system ecosystem.
            </p>

            {/* Core Capabilities */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Instant Search</h3>
                  <p className="text-text-secondary">Search across GDrive, Slack, Salesforce, Jira, and 30+ other data sources instantly.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent-secondary/14 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-accent-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Intelligent Copilot</h3>
                  <p className="text-text-secondary">Ask → Decide → Do. Multi-step task execution with intelligent reasoning and action.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-success/14 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Proactive Insights</h3>
                  <p className="text-text-secondary">Anticipates your needs and transforms noise into actionable signal automatically.</p>
                </div>
              </div>
            </div>

            <Button variant="primary" size="lg" className="group">
              Request a Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-fast" />
            </Button>
          </motion.div>

          {/* Visual - ANX Intelligence Infographic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-[1100px] w-full rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.15)]">
              <img
                src="/assets/images/anx-intelligence-platform.png"
                alt="Astrenox ANX Intelligence — Business Copilot Platform"
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const fallback = e.currentTarget.parentElement?.querySelector('.fallback-infographic')
                  if (fallback) (fallback as HTMLElement).style.display = 'block'
                }}
              />
              <div className="fallback-infographic hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_40px_rgba(56,189,248,0.06)] text-center">
                <h3 className="text-xl font-bold mb-4 text-text-primary">ANX Intelligence Platform</h3>
                <p className="text-text-secondary text-sm">Enterprise Search • AI Copilot • Proactive Insights</p>
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
        </div>
      </div>
    </section>
  )
}
