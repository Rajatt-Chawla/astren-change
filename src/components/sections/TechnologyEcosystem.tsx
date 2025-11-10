'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, Layers } from 'lucide-react'
import Button from '@/components/ui/Button'

const foundationProviders = [
  {
    name: 'OpenAI',
    logo: '/logos/openai.svg',
    caption: 'Conversational intelligence & reasoning models',
    glow: 'shadow-[0_0_30px_rgba(14,165,233,0.2)]',
  },
  {
    name: 'Anthropic',
    logo: '/logos/anthropic.svg',
    caption: 'Constitutional AI for safety-critical deployments',
    glow: 'shadow-[0_0_30px_rgba(249,115,22,0.18)]',
  },
  {
    name: 'Google',
    logo: '/logos/google.svg',
    caption: 'Vertex AI & Gemini powering multimodal workloads',
    glow: 'shadow-[0_0_30px_rgba(59,130,246,0.18)]',
  },
  {
    name: 'Meta',
    logo: '/logos/meta.svg',
    caption: 'Llama models for open-weight extensibility',
    glow: 'shadow-[0_0_30px_rgba(59,130,246,0.18)]',
  },
]

const orchestrationTools = [
  { name: 'LangGraph', logo: '/logos/langgraph.svg', accent: 'from-sky-400/30 to-sky-500/10' },
  { name: 'CrewAI', logo: '/logos/crewai.svg', accent: 'from-violet-400/30 to-violet-500/10' },
  { name: 'n8n', logo: '/logos/n8n.svg', accent: 'from-rose-400/30 to-rose-500/10' },
]

const enterpriseAssurance = [
  { label: 'Security & Compliance', color: 'bg-sky-400' },
  { label: 'Observability & Monitoring', color: 'bg-violet-400' },
  { label: 'Scalable Infrastructure', color: 'bg-emerald-400' },
]

export default function TechnologyEcosystem() {
  return (
    <section className="py-24 bg-bg-base">
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
              🔧 Technology Ecosystem
            </div>
            
            <h2 className="text-h1 font-bold text-text-primary mb-6">
              We Orchestrate the Ecosystem
              <span className="block gradient-text">Not Just Use It</span>
            </h2>
            
            <p className="text-lead text-text-secondary mb-8">
              Astrenox serves as your systems integrator, seamlessly connecting OpenAI, Anthropic, Llama, Gemini, 
              LangGraph, CrewAI, and n8n into resilient, observable, and governable platforms. We don't just use 
              tools—we architect ecosystems that scale.
            </p>

            {/* Why it works */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Future-Proof Architecture</h3>
                  <p className="text-text-secondary">Modular design that adapts as AI capabilities evolve, ensuring your investments remain valuable.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent-secondary/14 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-accent-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Vendor-Agnostic Strategy</h3>
                  <p className="text-text-secondary">Avoid lock-in with flexible integrations across multiple AI providers and platforms.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-success/14 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Enterprise-Grade Security & Governance</h3>
                  <p className="text-text-secondary">Built-in compliance, audit trails, and security controls for enterprise environments.</p>
                </div>
              </div>
            </div>

            <Button variant="primary" size="lg" className="group">
              Explore Intelligent Automations
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-fast" />
            </Button>
          </motion.div>

          {/* Visual - AI Technology Ecosystem Infographic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-[1100px] w-full rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.15)]">
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-10 sm:p-14 backdrop-blur-sm">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_60%)]" />

                <div className="relative flex flex-col gap-12">
                  <div className="text-center">
                    <p className="uppercase tracking-[0.3em] text-[11px] text-accent-primary/80 mb-3">
                      AI Technology Stack
                    </p>
                    <p className="text-xs text-text-secondary max-w-xl mx-auto">
                      Big-priority logos signal the trusted execution layer. Tight copy underneath clarifies each role so
                      stakeholders instantly understand how the stack fits together.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {foundationProviders.map((provider) => (
                      <div
                        key={provider.name}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center transition duration-300 hover:border-accent-primary/60"
                      >
                        <div
                          className={`pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 ${provider.glow}`}
                        />
                        <div className="relative flex flex-col items-center gap-5">
                          <img
                            src={provider.logo}
                            alt={`${provider.name} logo`}
                            className="h-24 sm:h-28 object-contain transition duration-300 group-hover:scale-105"
                          />
                          <p className="text-[10px] uppercase tracking-[0.35em] text-text-secondary/60">
                            {provider.name}
                          </p>
                          <p className="text-[11px] text-text-secondary/80 leading-relaxed max-w-xs">
                            {provider.caption}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <p className="uppercase tracking-[0.35em] text-[11px] text-text-secondary/80 mb-6">
                      Orchestration & Integration
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      {orchestrationTools.map((tool) => (
                        <div
                          key={tool.name}
                          className={`group relative flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-text-primary transition duration-300 hover:border-accent-primary/60`}
                        >
                          <div
                            className={`absolute inset-0 rounded-full bg-gradient-to-r ${tool.accent} opacity-0 transition duration-300 group-hover:opacity-100`}
                          />
                          <img
                            src={tool.logo}
                            alt={`${tool.name} logo`}
                            className="relative h-5 w-5 object-contain"
                          />
                          <span className="relative text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary/70 group-hover:text-text-primary">
                            {tool.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 text-sm text-text-secondary">
                    {enterpriseAssurance.map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                        <span>{item.label}</span>
                      </div>
                    ))}
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
