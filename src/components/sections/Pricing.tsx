'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import Button from '@/components/ui/Button'
import { openCalendly } from '@/lib/engagementLinks'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'one-time',
      description: 'Perfect for small businesses and startups',
      features: [
        'Custom website design',
        'Mobile responsive',
        'Basic SEO optimization',
        'Contact form integration',
        '3 months support',
        'SSL certificate included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,999',
      period: 'one-time',
      description: 'Ideal for growing businesses',
      features: [
        'Everything in Starter',
        'Advanced animations',
        'E-commerce integration',
        'Advanced SEO setup',
        'Analytics integration',
        '6 months support',
        'Performance optimization',
        'Content management system'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$7,999',
      period: 'one-time',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Custom web application',
        'API integrations',
        'Advanced security features',
        'Priority support',
        '12 months support',
        'Dedicated project manager',
        'Training and documentation'
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-bg-elevated/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/18 border border-accent-primary/35 text-accent-primary text-sm font-semibold mb-6">
            💰 Pricing Plans
          </div>
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            Choose Your Perfect
            <span className="block gradient-text">Investment Level</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. All plans include our premium design 
            and development services with ongoing support.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${
                plan.popular 
                  ? 'lg:scale-105 lg:-mt-4' 
                  : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-accent text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`bg-surface-card border rounded-xl p-8 h-full transition-all duration-med hover:shadow-float hover:-translate-y-1 ${
                plan.popular 
                  ? 'border-accent-primary/60 shadow-glow-primary' 
                  : 'border-border-soft hover:border-white/14'
              }`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">{plan.name}</h3>
                  <p className="text-text-secondary mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-text-primary">{plan.price}</span>
                    <span className="text-text-muted ml-2">/{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <Check className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-text-secondary">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant={plan.popular ? 'primary' : 'secondary'} 
                  className="w-full"
                  onClick={openCalendly}
                >
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </Button>
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
              Need a Custom Solution?
            </h3>
            <p className="text-text-secondary mb-6">
              We offer tailored packages for unique requirements. 
              Let's discuss your specific needs and create a custom quote.
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
