'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function TalentRequestForm() {
  return (
    <section id="talent-request-form" className="py-24 bg-bg-base">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 font-bold mb-6 holo-fade">
            Talent Request Form
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Tell us what you need — we'll send a shortlist
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="contact-form-container bg-surface-card border border-border-soft rounded-xl p-8"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-bg-base border border-border-soft rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/35 focus:border-accent-primary/45 transition-all duration-fast"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-bg-base border border-border-soft rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/35 focus:border-accent-primary/45 transition-all duration-fast"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Company
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-bg-base border border-border-soft rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/35 focus:border-accent-primary/45 transition-all duration-fast"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Role or Roles & Seniority
              </label>
              <textarea
                className="w-full px-4 py-3 bg-bg-base border border-border-soft rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/35 focus:border-accent-primary/45 transition-all duration-fast"
                rows={3}
                placeholder="Describe the roles and seniority needed (e.g., Senior AI Engineer, Staff PM, etc.)"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Tech Stack
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-bg-base border border-border-soft rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/35 focus:border-accent-primary/45 transition-all duration-fast"
                  placeholder="React, Python, AWS, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Time-zone Overlap
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-bg-base border border-border-soft rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/35 focus:border-accent-primary/45 transition-all duration-fast"
                  placeholder="EST, PST, GMT, etc."
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-bg-base border border-border-soft rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/35 focus:border-accent-primary/45 transition-all duration-fast"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Budget Range
                </label>
                <select className="w-full px-4 py-3 bg-bg-base border border-border-soft rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/35 focus:border-accent-primary/45 transition-all duration-fast">
                  <option>Select budget range</option>
                  <option>$5K - $10K/month</option>
                  <option>$10K - $20K/month</option>
                  <option>$20K - $50K/month</option>
                  <option>$50K+/month</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Must-haves
              </label>
              <textarea
                className="w-full px-4 py-3 bg-bg-base border border-border-soft rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/35 focus:border-accent-primary/45 transition-all duration-fast"
                rows={3}
                placeholder="Essential requirements and skills"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                Nice-to-haves
              </label>
              <textarea
                className="w-full px-4 py-3 bg-bg-base border border-border-soft rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/35 focus:border-accent-primary/45 transition-all duration-fast"
                rows={3}
                placeholder="Preferred but not essential requirements"
              />
            </div>

            <div className="text-center">
              <Link href="/get-started?intent=talent" className="inline-flex">
                <Button variant="primary" size="lg" className="group">
                  Submit &amp; get a shortlist
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-fast" />
                </Button>
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
