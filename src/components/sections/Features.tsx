'use client'

import { motion } from 'framer-motion'
import { 
  Palette, 
  Code, 
  Smartphone, 
  Zap, 
  Shield, 
  Users,
  ArrowRight
} from 'lucide-react'
import Button from '@/components/ui/Button'
import { openCalendly } from '@/lib/engagementLinks'

export default function Features() {
  const features = [
    {
      icon: Palette,
      title: 'Premium Design',
      description: 'Stunning visuals that captivate your audience and reflect your brand identity with pixel-perfect precision.'
    },
    {
      icon: Code,
      title: 'Clean Development',
      description: 'Robust, scalable code that follows best practices and ensures optimal performance across all devices.'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Responsive designs that work flawlessly on every device, from mobile phones to large desktop screens.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with cutting-edge technologies that deliver instant loading and smooth interactions.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security measures and reliable infrastructure to protect your data and ensure uptime.'
    },
    {
      icon: Users,
      title: 'User Centered',
      description: 'Intuitive user experiences designed around your customers needs to maximize engagement and conversions.'
    }
  ]

  return (
    <section id="features" className="py-24 bg-bg-elevated/50">
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
            Everything You Need to
            <span className="block gradient-text">Succeed Online</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            We provide comprehensive digital solutions that combine beautiful design, 
            powerful functionality, and exceptional user experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-surface-card border border-border-soft rounded-xl p-8 hover:border-white/14 hover:shadow-float hover:-translate-y-1 transition-all duration-med">
                {/* Icon */}
                <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent-primary/20 transition-colors duration-fast">
                  <feature.icon className="w-6 h-6 text-accent-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-accent-primary transition-colors duration-fast">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-accent-primary text-sm font-semibold group-hover:translate-x-1 transition-transform duration-fast">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-surface-card border border-border-soft rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-text-secondary mb-6">
              Let's discuss your project and create something amazing together.
            </p>
            <Button variant="primary" size="lg" className="group" onClick={openCalendly}>
              Schedule your scoping session
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
