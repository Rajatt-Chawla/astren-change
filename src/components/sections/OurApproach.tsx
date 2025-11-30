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
      description: 'Focus on outcomes (growth, efficiency, risk) and "North Star metrics".',
      points: [
        'Team aligns executive sponsors around a common language for AI, shared principles, and clearly bounded transformation themes so that every initiative supports the same strategic narrative',
        'Forward deployed engineers establish a concise set of north star metrics and supporting indicators that guide all investment decisions, inform trade offs, and create visible momentum across business units'
      ],
      color: 'sky'
    },
    {
      number: 2,
      icon: ClipboardCheck,
      title: 'Capability Readiness',
      description: 'Benchmarking against maturity frameworks and assessing gaps.',
      points: [
        'Team benchmark the organization against a proven maturity framework, highlight capability gaps, and surface operational, regulatory, and security risks that must be addressed early',
        'We synthesize these insights into a focused readiness view that directs capital, leadership attention, and change efforts to the few levers that unlock disproportionate value'
      ],
      color: 'blue'
    },
    {
      number: 3,
      icon: Network,
      title: 'Architecture and Systems',
      description: 'Mapping core systems and defining the enterprise data model.',
      points: [
        'Architect maps how core systems, platforms, and operational workflows connect across the value chain so that AI solutions can consume and act on data without creating fragmentation',
        'Our team defines the enterprise data model and establishes clear standards for interoperability, security, governance, observability, and model lifecycle management, resulting in a reference architecture that guides every subsequent build'
      ],
      color: 'cyan'
    },
    {
      number: 4,
      icon: Briefcase,
      title: 'Use Case Portfolio',
      description: 'Constructing a portfolio of "quick wins" and "strategic bets".',
      points: [
        'We curate a balanced mix of quick win initiatives that demonstrate confidence and deeper strategic bets that reshape how the organization sells, serves, operates, and decides',
        'PM translates priority opportunities into concise business cases with explicit value drivers, ownership, and adoption pathways that the executive team can commit to'
      ],
      color: 'indigo'
    },
    {
      number: 5,
      icon: Users,
      title: 'Governance and Execution',
      description: 'Defining decision rights and compliance guardrails.',
      points: [
        'We define decision rights, escalation routes, and compliance guardrails, and convene a cross functional leadership group spanning business, data, technology, security, and change',
        'Our team incentives and performance indicators across functions so that teams are rewarded for shared outcomes, not isolated experiments, ensuring coordinated execution at scale'
      ],
      color: 'purple'
    },
    {
      number: 6,
      icon: Rocket,
      title: 'Scalable Execution',
      description: 'Standardizing the journey from discovery to deployment.',
      points: [
        'Deployed engineers standardize the journey from problem discovery through design, data preparation, experimentation, model development, evaluation, and deployment, with clear quality checkpoints at each stage',
        'Team enables progressive rollout across sites, regions, or product lines and embed communication, training, and support into every release so that change is absorbed and usage becomes routine'
      ],
      color: 'teal'
    },
    {
      number: 7,
      icon: Database,
      title: 'Data and Intelligence Activation',
      description: 'Transforming data into production assets and deploying decision surfaces.',
      points: [
        'PM deploys decision surfaces such as analyst ready views, operational dashboards, alerting mechanisms, copilots, and assistants that embed intelligence directly into the daily flow of work',
        'Our team connects these insights with continuous improvement cycles so that operations, commercial teams, and leadership see measurable performance uplift month after month'
      ],
      color: 'emerald'
    },
    {
      number: 8,
      icon: RefreshCw,
      title: 'Feedback and Adaptation Loops',
      description: 'Tracking indicators and institutionalizing feedback channels.',
      points: [
        'Institutionalize structured feedback channels from frontline teams and owners back into product, data, and leadership groups, ensuring rapid course correction',
        'Engineers run regular portfolio and strategy reviews to retire low value initiatives, scale proven patterns, and keep the AI roadmap tightly aligned with evolving market dynamics and organizational ambition'
      ],
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

      {/* Steps Grid - Alternating Left and Right */}
      <div className="relative max-w-7xl mx-auto">
        {/* Central vertical line (connector) with enhanced neon glow */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 neon-line" style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(124, 58, 237, 0.4) 10%, rgba(34, 211, 238, 0.6) 50%, rgba(124, 58, 237, 0.4) 90%, transparent 100%)',
          boxShadow: '0 0 20px rgba(124, 58, 237, 0.8), 0 0 40px rgba(34, 211, 238, 0.6), 0 0 60px rgba(124, 58, 237, 0.4)',
          animation: 'neon-line-pulse 3s ease-in-out infinite'
        }} />
        
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
                  <div className={`process-box group relative bg-surface-card border ${colorClasses.border} rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`} style={{
                    boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}>
                    {/* Thin background glow effect - always visible */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorClasses.bg} opacity-20 blur-md transition-opacity duration-300 -z-10`} />
                    {/* Enhanced hover glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorClasses.bg} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300 -z-10`} />
                    
                    <div className={`inline-flex items-center gap-3 mb-4 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                      <div className={`w-14 h-14 ${colorClasses.bg} border ${colorClasses.border} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-7 h-7 ${colorClasses.text}`} />
                      </div>
                      <div className={`text-4xl font-black ${colorClasses.text}`}>
                        {String(step.number).padStart(2, '0')}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-3">{step.title}</h3>
                    <p className="text-text-secondary leading-relaxed mb-4">{step.description}</p>
                    
                    {/* Bullet points */}
                    {step.points && step.points.length > 0 && (
                      <ul className="space-y-2 mt-4">
                        {step.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colorClasses.text} bg-current flex-shrink-0`} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
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

      {/* Assessment Process Section */}
      <div className="relative mt-24">
        <div className="mb-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Assessment Process
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            A structured approach to understanding your organization's AI readiness and building a strategic roadmap.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'Discovery',
              description: 'Stakeholder interviews, end-to-end process mapping, and a data/technology audit to establish the current-state baseline and risks.',
              gradient: 'from-sky-500/20 to-blue-500/10'
            },
            {
              title: 'Analysis',
              description: 'Gap analysis, value-pool sizing, and opportunity identification, followed by prioritization of AI use cases and executive alignment.',
              gradient: 'from-purple-500/20 to-indigo-500/10'
            },
            {
              title: 'Roadmap',
              description: 'Strategic AI roadmap with a phased implementation plan, resourcing and budget model, governance framework, and defined KPIs/success criteria.',
              gradient: 'from-cyan-500/20 to-teal-500/10'
            }
          ].map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-8 h-full transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                {/* Abstract art placeholder background */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-30 blur-2xl -z-10`} />
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: `radial-gradient(circle at ${index % 2 === 0 ? '20%' : '80%'} ${index === 1 ? '50%' : '30%'}, rgba(124, 58, 237, 0.15), transparent 60%)`
                }} />
                
                {/* Abstract art pattern overlay */}
                <div className="absolute top-4 right-4 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(124, 58, 237, 0.3)" />
                        <stop offset="100%" stopColor="rgba(34, 211, 238, 0.3)" />
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="40" fill="none" stroke={`url(#gradient-${index})`} strokeWidth="2" />
                    <path d="M 20 50 Q 50 20, 80 50 Q 50 80, 20 50" fill="none" stroke={`url(#gradient-${index})`} strokeWidth="1.5" />
                    <circle cx="50" cy="50" r="15" fill={`url(#gradient-${index})`} opacity="0.5" />
                  </svg>
                </div>

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-accent-primary">{index + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold text-text-primary mb-3">{step.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
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
