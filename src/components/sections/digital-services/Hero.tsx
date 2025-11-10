'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, Settings, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'
import { openCalendly } from '@/lib/engagementLinks'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-bg-base">
        <div className="absolute inset-0 bg-overlay-gradient" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/18 border border-accent-primary/35 text-accent-primary text-sm font-semibold"
            >
              🏗️ Digital & IT Consulting
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-display-lg lg:text-display-lg font-extrabold text-text-primary leading-tight"
            >
              Digital & IT Consulting and Custom Software & Application Modernization
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lead text-text-secondary max-w-2xl leading-relaxed"
            >
              Strategy & Build — AI-first blueprint + elite engineering. We combine strategic 
              consulting with hands-on development to modernize your technology stack and 
              accelerate your digital transformation.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg" className="group" onClick={openCalendly}>
                Let's Build Your Future
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-fast" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-surface-card border border-border-soft rounded-xl p-8 shadow-card hover:shadow-float transition-all duration-med hover:-translate-y-2">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-danger rounded-full"></div>
                      <div className="w-3 h-3 bg-warning rounded-full"></div>
                      <div className="w-3 h-3 bg-success rounded-full"></div>
                    </div>
                    <div className="text-xs text-text-muted">Digital Services</div>
                  </div>

                  {/* Services Visual */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-accent-primary/20 rounded-lg flex items-center justify-center">
                        <Code className="w-4 h-4 text-accent-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-accent-primary/30 rounded w-3/4"></div>
                        <div className="text-xs text-text-muted mt-1">Custom Development</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-accent-secondary/20 rounded-lg flex items-center justify-center">
                        <Settings className="w-4 h-4 text-accent-secondary" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-accent-secondary/30 rounded w-2/3"></div>
                        <div className="text-xs text-text-muted mt-1">System Modernization</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-success/20 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-success" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-success/30 rounded w-1/2"></div>
                        <div className="text-xs text-text-muted mt-1">AI Integration</div>
                      </div>
                    </div>
                  </div>

                  {/* Services Code Block */}
                  <div className="bg-bg-base rounded-lg p-4 border border-border-soft">
                    <div className="text-xs text-accent-secondary font-mono">
                      <div className="text-info">const</div> digitalServices = {'{'}
                      <div className="ml-4">
                        <div>strategy: <span className="text-success">"AI-First"</span>,</div>
                        <div>build: <span className="text-warning">"Elite Engineering"</span>,</div>
                        <div>outcome: <span className="text-accent-primary">"Modern Stack"</span></div>
                      </div>
                      {'}'};
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-accent-primary/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent-secondary/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
