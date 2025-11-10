'use client'

import { motion } from 'framer-motion'
import { Target, ClipboardCheck, Network, Briefcase, Users, Rocket, Database, RefreshCw } from 'lucide-react'
import Button from '@/components/ui/Button'
import { openCalendly } from '@/lib/engagementLinks'

export default function OurApproach() {
  const steps = [
    {
      number: 1,
      icon: Target,
      title: 'Vision and Strategy',
      description: 'Define a clear purpose for AI that ties directly to growth, efficiency, and risk reduction. Align executive sponsorship and agree on shared language, target outcomes, and the scope of transformation. Establish the north star metrics that will guide choices and create momentum across the business.',
      color: 'sky'
    },
    {
      number: 2,
      icon: ClipboardCheck,
      title: 'Capability Readiness and Gap Assessment',
      description: 'Assess people, processes, data, and technology to understand what is strong and what is missing. Benchmark current maturity with a structured framework, map critical risks, and identify the foundational capabilities that must be in place before scaling. Produce a readiness scorecard that focuses investment where it matters most.',
      color: 'blue'
    },
    {
      number: 3,
      icon: Network,
      title: 'Architecture and Systems Mapping',
      description: 'Design the digital backbone that allows AI to operate safely and at speed. Document how core systems connect across the value chain from business platforms to operational systems, define the enterprise data model, and set standards for interoperability, security, governance, and model lifecycle management. The result is a reference architecture that guides every build.',
      color: 'cyan'
    },
    {
      number: 4,
      icon: Briefcase,
      title: 'Use Case Portfolio and Prioritization',
      description: 'Build a pipeline of feasible AI initiatives and score them on impact, effort, time to value, and dependency risk. Balance quick wins that unlock confidence with strategic bets that reshape how the business operates. Translate each priority into a simple business case with success criteria and an adoption plan.',
      color: 'indigo'
    },
    {
      number: 5,
      icon: Users,
      title: 'Governance and Execution Alignment',
      description: 'Create a delivery model that mobilizes the organization. Establish decision rights, escalation paths, and compliance guardrails, and form a cross functional program team that includes business owners, data leaders, security, and change management. Align incentives and KPIs across departments so execution stays coordinated.',
      color: 'purple'
    },
    {
      number: 6,
      icon: Rocket,
      title: 'Scalable Execution Framework',
      description: 'Stand up repeatable delivery methods that turn strategy into shipped outcomes. Standardize discovery, design, data preparation, model development, evaluation, and deployment with quality gates at each step. Support site by site or line by line rollout and embed change management and training into every release so adoption sticks.',
      color: 'teal'
    },
    {
      number: 7,
      icon: Database,
      title: 'Data and Intelligence Activation',
      description: 'Operationalize trustworthy data and real time insight. Implement pipelines, feature stores, and monitoring that keep models fresh and reliable. Deliver dashboards, alerts, and copilots that put decisions in the flow of work, and connect these insights to continuous improvement loops that raise performance month after month.',
      color: 'emerald'
    },
    {
      number: 8,
      icon: RefreshCw,
      title: 'Feedback and Adaptation Loops',
      description: 'Measure what is working and adjust fast. Track leading and lagging indicators, capture frontline feedback, and close the loop between delivery teams and business strategy. Use structured reviews and recalibration points to retire low value work, scale proven patterns, and keep the roadmap aligned with changing market conditions.',
      color: 'violet'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      sky: { bg: 'bg-sky-400/14', text: 'text-sky-400', border: 'border-sky-400/35' },
      blue: { bg: 'bg-blue-400/14', text: 'text-blue-400', border: 'border-blue-400/35' },
      cyan: { bg: 'bg-cyan-400/14', text: 'text-cyan-400', border: 'border-cyan-400/35' },
      indigo: { bg: 'bg-indigo-400/14', text: 'text-indigo-400', border: 'border-indigo-400/35' },
      purple: { bg: 'bg-purple-400/14', text: 'text-purple-400', border: 'border-purple-400/35' },
      teal: { bg: 'bg-teal-400/14', text: 'text-teal-400', border: 'border-teal-400/35' },
      emerald: { bg: 'bg-emerald-400/14', text: 'text-emerald-400', border: 'border-emerald-400/35' },
      violet: { bg: 'bg-violet-400/14', text: 'text-violet-400', border: 'border-violet-400/35' }
    }
    return colors[color] || colors.sky
  }

  return (
    <section id="our-approach" className="relative mx-auto max-w-7xl px-4 py-24">
      {/* Pill */}
      <div className="mb-6 flex justify-center">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
          Our Foundational Methodologies
        </span>
      </div>

      <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
        Systematic Approach to{" "}
        <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
          AI Transformation
        </span>
      </h2>

      <p className="text-center text-white/70 max-w-3xl mx-auto mb-16">
        A comprehensive framework that transforms your organization from strategy to scalable execution, 
        ensuring AI delivers measurable business value at every step.
      </p>

      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 10%, rgba(56,189,248,.2), transparent 60%), radial-gradient(50% 30% at 10% 60%, rgba(99,102,241,.18), transparent 60%)",
          mixBlendMode: "screen",
          filter: "blur(2px)",
        }}
      />

      {/* Central Infographic */}
      <div className="relative mt-12 mb-20 flex justify-center">
        <div className="relative max-w-[1200px] w-full rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.15)] bg-white/[0.03] border border-white/10 p-8 md:p-12">
          {/* Try to load the image, but show SVG fallback by default */}
          <div className="relative">
            <img
              src="/assets/images/ai-transformation-systematic-approach.png"
              alt="Astrenox Systematic Approach to AI Transformation — 8-Step Framework"
              className="w-full h-auto object-contain"
              onLoad={(e) => {
                // Hide SVG if image loads successfully
                const svgFallback = e.currentTarget.parentElement?.querySelector('.svg-infographic-fallback')
                if (svgFallback) (svgFallback as HTMLElement).style.display = 'none'
              }}
              onError={(e) => {
                // Hide img if it fails to load
                e.currentTarget.style.display = 'none'
              }}
            />
            {/* SVG Infographic Fallback - Always visible until image loads */}
            <div className="svg-infographic-fallback">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-text-primary">Systematic Approach to AI Transformation</h3>
                <p className="text-text-secondary">8-Step Framework from Vision to Continuous Improvement</p>
              </div>
              
              {/* Visual Flow Diagram */}
              <div className="relative max-w-4xl mx-auto">
                <svg viewBox="0 0 800 600" className="w-full h-auto">
                  <defs>
                    <linearGradient id="stepGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="stepGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="stepGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#818cf8" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="stepGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.4" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Central connecting line */}
                  <line x1="400" y1="50" x2="400" y2="550" stroke="rgba(56,189,248,0.3)" strokeWidth="2" strokeDasharray="5,5"/>
                  
                  {/* Step 1 - Top */}
                  <circle cx="400" cy="75" r="35" fill="url(#stepGradient1)" filter="url(#glow)"/>
                  <text x="400" y="82" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">01</text>
                  <text x="400" y="125" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600">Vision & Strategy</text>
                  
                  {/* Step 2 - Right */}
                  <circle cx="550" cy="150" r="35" fill="url(#stepGradient2)" filter="url(#glow)"/>
                  <text x="550" y="157" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">02</text>
                  <text x="550" y="200" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="11">Capability Readiness</text>
                  
                  {/* Step 3 - Left */}
                  <circle cx="250" cy="225" r="35" fill="url(#stepGradient3)" filter="url(#glow)"/>
                  <text x="250" y="232" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">03</text>
                  <text x="250" y="275" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="11">Architecture & Systems</text>
                  
                  {/* Step 4 - Right */}
                  <circle cx="550" cy="300" r="35" fill="url(#stepGradient4)" filter="url(#glow)"/>
                  <text x="550" y="307" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">04</text>
                  <text x="550" y="350" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="11">Use Case Portfolio</text>
                  
                  {/* Step 5 - Left */}
                  <circle cx="250" cy="375" r="35" fill="url(#stepGradient1)" filter="url(#glow)"/>
                  <text x="250" y="382" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">05</text>
                  <text x="250" y="425" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="11">Governance & Alignment</text>
                  
                  {/* Step 6 - Right */}
                  <circle cx="550" cy="450" r="35" fill="url(#stepGradient2)" filter="url(#glow)"/>
                  <text x="550" y="457" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">06</text>
                  <text x="550" y="500" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="11">Scalable Execution</text>
                  
                  {/* Step 7 - Left */}
                  <circle cx="250" cy="525" r="35" fill="url(#stepGradient3)" filter="url(#glow)"/>
                  <text x="250" y="532" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">07</text>
                  <text x="250" y="575" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="11">Data & Intelligence</text>
                  
                  {/* Step 8 - Bottom */}
                  <circle cx="400" cy="550" r="35" fill="url(#stepGradient4)" filter="url(#glow)"/>
                  <text x="400" y="557" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">08</text>
                  
                  {/* Connecting lines */}
                  <path d="M 400 110 L 550 115" stroke="rgba(56,189,248,0.4)" strokeWidth="2" fill="none" strokeDasharray="3,3"/>
                  <path d="M 550 185 L 250 190" stroke="rgba(56,189,248,0.4)" strokeWidth="2" fill="none" strokeDasharray="3,3"/>
                  <path d="M 250 260 L 550 265" stroke="rgba(56,189,248,0.4)" strokeWidth="2" fill="none" strokeDasharray="3,3"/>
                  <path d="M 550 335 L 250 340" stroke="rgba(56,189,248,0.4)" strokeWidth="2" fill="none" strokeDasharray="3,3"/>
                  <path d="M 250 410 L 550 415" stroke="rgba(56,189,248,0.4)" strokeWidth="2" fill="none" strokeDasharray="3,3"/>
                  <path d="M 550 485 L 250 490" stroke="rgba(56,189,248,0.4)" strokeWidth="2" fill="none" strokeDasharray="3,3"/>
                  <path d="M 250 560 L 400 515" stroke="rgba(56,189,248,0.4)" strokeWidth="2" fill="none" strokeDasharray="3,3"/>
                </svg>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-xs text-text-muted italic">Replace with high-res generated infographic image</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Grid - Alternating Left and Right */}
      <div className="relative max-w-7xl mx-auto">
        {/* Central vertical line (connector) */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2" />
        
        <div className="space-y-12">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0
            const colorClasses = getColorClasses(step.color)
            const IconComponent = step.icon

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:grid lg:grid-cols-2 gap-8 items-start ${
                  isLeft ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Step Content - Left aligned for odd, right aligned for even */}
                <div className={`${isLeft ? 'lg:pr-12 lg:text-right' : 'lg:col-start-2 lg:pl-12 lg:text-left'} flex-1`}>
                  <div className={`inline-flex items-center gap-3 mb-4 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`w-14 h-14 ${colorClasses.bg} border ${colorClasses.border} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-7 h-7 ${colorClasses.text}`} />
                    </div>
                    <div className={`text-4xl font-black ${colorClasses.text}`}>
                      {String(step.number).padStart(2, '0')}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{step.description}</p>
                </div>

                {/* Spacer for opposite side */}
                {isLeft ? (
                  <div className="hidden lg:block" />
                ) : (
                  <div className="hidden lg:block" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Unified CTA Band */}
      <div className="relative overflow-hidden mt-20 py-16">
        {/* Background gradient band */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-cyan-500/10 blur-2xl"
        />

        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            Ready to Transform Your Business?
          </h3>
          <p className="mt-3 text-base text-white/75 max-w-xl mx-auto">
            Schedule a scoping session to align strategy, prioritize opportunities, and launch your AI roadmap.
          </p>

          <div className="mt-6 flex justify-center">
            <Button variant="primary" size="lg" className="group" onClick={openCalendly}>
              Schedule your scoping session
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
