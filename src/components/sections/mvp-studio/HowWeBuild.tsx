'use client'

import { motion } from 'framer-motion'

export default function HowWeBuild() {
  const steps = [
    { week: 'Week 0', title: 'Scoping & Design', desc: 'User flows, wireframes, tech stack, data model' },
    { week: 'Week 1-2', title: 'Foundation', desc: 'Auth, DB, core entities, CI/CD' },
    { week: 'Week 3-5', title: 'Features & AI', desc: 'Core workflows, AI integration, testing' },
    { week: 'Week 6-7', title: 'Polish & Deploy', desc: 'UI refinement, performance, launch prep' },
    { week: 'Week 8', title: 'Handoff', desc: 'Documentation, training, support transition' }
  ]

  return (
    <section className="py-24 bg-bg-elevated/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 font-bold text-text-primary mb-6">How We Build</h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Weekly milestones, daily standups, Friday demos
          </p>
        </motion.div>

        {/* Build Process Infographic */}
        <div className="relative mt-12 flex justify-center mb-12">
          <div className="relative max-w-[1100px] w-full rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.15)]">
            <img
              src="/assets/images/mvp-studio-build-process.png"
              alt="Astrenox MVP Studio — 8-Week Build Process"
              className="w-full h-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const fallback = e.currentTarget.parentElement?.querySelector('.fallback-infographic')
                if (fallback) (fallback as HTMLElement).style.display = 'block'
              }}
            />
            <div className="fallback-infographic hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_40px_rgba(56,189,248,0.06)] text-center">
              <h3 className="text-xl font-bold mb-4 text-text-primary">8-Week MVP Build Process</h3>
              <p className="text-text-secondary text-sm">Scoping • Foundation • Features • Polish • Handoff</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-card border border-border-soft rounded-xl p-6 flex items-center space-x-6"
            >
              <div className="text-accent-primary font-bold text-lg w-24 flex-shrink-0">{step.week}</div>
              <div className="flex-1">
                <h3 className="font-bold text-text-primary mb-2">{step.title}</h3>
                <p className="text-text-secondary">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
