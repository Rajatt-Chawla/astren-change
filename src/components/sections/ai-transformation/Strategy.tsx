'use client'

import { motion } from 'framer-motion'
import { Target, CheckCircle, ArrowRight, CalendarClock, Map, FileSignature } from 'lucide-react'
import Button from '@/components/ui/Button'
import { openCalendly } from '@/lib/engagementLinks'

export default function Strategy() {
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
              📊 Strategy
            </div>
            
            <h2 className="text-h1 font-bold text-text-primary mb-6">
              Strategic AI Assessment &
              <span className="block gradient-text">Roadmap Development</span>
            </h2>
            
            <p className="text-lead text-text-secondary mb-8">
              Our comprehensive engagement provides a holistic view of your organization’s AI readiness across people,
              process, and technology—then delivers a prioritized roadmap aligned to business objectives.
            </p>

            {/* Assessment Process */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Holistic Assessment</h3>
                  <p className="text-text-secondary">
                    Comprehensive evaluation of teams, workflows, data, and platforms across business functions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent-secondary/14 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-accent-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">AI-Adoption Report</h3>
                  <p className="text-text-secondary">
                    Detailed findings with a technical appendix mapping current state to AI-native capabilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Assessment Timeline */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <CalendarClock className="w-5 h-5 text-accent-primary" />
                Assessment Timeline
              </h3>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <h4 className="font-semibold text-text-primary">Weeks 1–4: Discovery</h4>
                  <p className="text-sm text-text-secondary">
                    Stakeholder interviews, end-to-end process mapping, and a data/technology audit to establish the
                    current-state baseline and risks.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <h4 className="font-semibold text-text-primary">Weeks 5–10: Analysis</h4>
                  <p className="text-sm text-text-secondary">
                    Gap analysis, value-pool sizing, and opportunity identification, followed by prioritization of AI
                    use cases and executive alignment.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <h4 className="font-semibold text-text-primary">Weeks 11–18: Roadmap</h4>
                  <p className="text-sm text-text-secondary">
                    Strategic AI roadmap with a phased implementation plan, resourcing and budget model, governance
                    framework, and defined KPIs/success criteria.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Deliverables */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Map className="w-5 h-5 text-accent-secondary" />
                Key Deliverables
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <CheckCircle className="w-5 h-5 text-accent-secondary flex-shrink-0 mt-1" />
                  <span className="text-text-secondary text-sm">AI-Adoption Report</span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <FileSignature className="w-5 h-5 text-accent-primary flex-shrink-0 mt-1" />
                  <span className="text-text-secondary text-sm">Technical Appendix (current-state & architecture)</span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <Target className="w-5 h-5 text-accent-primary flex-shrink-0 mt-1" />
                  <span className="text-text-secondary text-sm">Implementation Roadmap (phased plan & resourcing)</span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <CheckCircle className="w-5 h-5 text-accent-secondary flex-shrink-0 mt-1" />
                  <span className="text-text-secondary text-sm">Success Metrics Framework (KPIs & guardrails)</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-text-tertiary mb-8">
              Durations are typical market ranges and may adjust with scale and complexity.
            </p>

            <Button variant="primary" size="lg" className="group" onClick={openCalendly}>
              Schedule your scoping session
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-fast" />
            </Button>
          </motion.div>

          {/* Visual - Strategy Infographic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-[1100px] w-full rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.15)]">
              <img
                src="/assets/images/ai-transformation-strategy.png"
                alt="Astrenox AI Transformation — Strategic Assessment & Roadmap Development"
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const fallback = e.currentTarget.parentElement?.querySelector('.fallback-infographic')
                  if (fallback) (fallback as HTMLElement).style.display = 'block'
                }}
              />
              <div className="fallback-infographic hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_40px_rgba(56,189,248,0.06)] text-center">
                <h3 className="text-xl font-bold mb-4 text-text-primary">30/60/90 Day Assessment</h3>
                <p className="text-text-secondary text-sm">Discovery • Analysis • Roadmap Development</p>
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
