'use client'

import { motion } from 'framer-motion'
import { FileX, Package, UserX } from 'lucide-react'

export default function ConsultancyComparison() {
  const shortcomings = [
    {
      icon: FileX,
      title: 'Strategy Without Execution',
      description: 'Beautiful reports that sit on shelves, never implemented. Traditional consultancies deliver recommendations but lack the engineering capability to build and deploy solutions.',
      color: 'danger'
    },
    {
      icon: Package,
      title: 'Generic Solutions',
      description: 'One-size-fits-all approaches that don\'t fit your unique constraints. Off-the-shelf frameworks that ignore your specific industry, technology stack, and organizational context.',
      color: 'warning'
    },
    {
      icon: UserX,
      title: 'No Ownership',
      description: 'Consultants leave, knowledge walks out the door. No long-term commitment to outcomes means no accountability when initiatives fail or stall after the engagement ends.',
      color: 'danger'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      danger: { bg: 'bg-danger/14', text: 'text-danger', border: 'border-danger/35' },
      warning: { bg: 'bg-warning/14', text: 'text-warning', border: 'border-warning/35' }
    }
    return colors[color] || colors.danger
  }

  return (
    <section className="py-24 bg-bg-elevated/50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.08),_transparent_60%)]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5 text-xs font-semibold tracking-[0.3em] uppercase text-white/70">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Why Traditional Consultancies
            <span className="block text-danger">Fall Short</span>
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Most AI transformation initiatives fail not because of technology, but because of how they're delivered. 
            Here's what separates us from traditional consultancies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {shortcomings.map((item, index) => {
            const colorClasses = getColorClasses(item.color)
            const IconComponent = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`relative rounded-2xl border ${colorClasses.border} bg-surface-card p-8 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`} style={{
                  boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                  {/* Background glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorClasses.bg} opacity-20 blur-md transition-opacity duration-300 -z-10`} />
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorClasses.bg} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300 -z-10`} />

                  {/* Icon */}
                  <div className={`w-16 h-16 ${colorClasses.bg} border ${colorClasses.border} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${colorClasses.text}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-text-primary mb-4">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.description}</p>

                  {/* Decorative X mark */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <span className={`text-4xl font-bold ${colorClasses.text}`}>✗</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Contrast CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-6 backdrop-blur-sm">
            <p className="text-text-secondary mb-2">
              <span className="text-text-primary font-semibold">Astrenox is different:</span> We combine strategic consulting with hands-on engineering, 
              delivering custom solutions with full ownership and accountability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

