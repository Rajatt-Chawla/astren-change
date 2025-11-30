'use client'

import { motion } from 'framer-motion'
import { Factory, Bot, ShoppingCart } from 'lucide-react'

const stories = [
  {
    icon: Factory,
    title: 'EPC Automation',
    industry: 'Infrastructure & Construction',
    challenge:
      'Manual site ops, RFIs, drawings, and invoice packs moved through email and spreadsheets, causing approval delays, rework, and audit gaps.',
    solution:
      'Deployed an AI-assisted ops and document automation layer: OCR + LLM parsing for drawings/RFIs/BOQs, auto-tagging and version control, rule-based approvals, and SAP/Tally integrations with immutable audit trails.',
    results: [
      'RFI turnaround time reduction 68%',
      'Document processing accuracy 98%',
      'Working capital cycle improvement 22%'
    ]
  },
  {
    icon: Bot,
    title: 'GTM & Sales Enablement',
    industry: 'Leading IT Services Firm',
    challenge:
      'Presales teams spent hours assembling case studies, proposals, and battlecards; pipeline intelligence was fragmented across CRM, files, and mail.',
    solution:
      'Built a GTM copilot with unified search, auto-assembled SoWs and proposals, competitor battlecards from knowledge bases, and CRM workflow automation for deal reviews and next-best actions.',
    results: [
      'Proposal creation time reduction 75%',
      'Win-rate lift on targeted deals 14%',
      'Qualified pipeline velocity increase 28%'
    ]
  },
  {
    icon: ShoppingCart,
    title: 'Webstore + Manufacturing & Distribution ERP',
    industry: 'Legacy Retail Trader to Omnichannel',
    challenge:
      'Disconnected POS, webshop, and back-office led to stockouts, poor demand visibility, and high returns; production planning was manual.',
    solution:
      'Launched a headless ecommerce storefront integrated with a lightweight ERP: order orchestration, real-time inventory, MRP and production planning, distributor portal, and GST-compliant finance with Tally bridge.',
    results: [
      'Stockout reduction 60%',
      'Order-to-dispatch time improvement 45%',
      'Return rate decrease (RMA) 18%'
    ]
  }
]

export default function SuccessStories() {
  return (
    <section className="py-24 bg-bg-elevated/40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            Real Outcomes for
            <span className="block gradient-text">AI Transformation</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Explore how we help teams unlock measurable impact across product, process, and people with AI-native execution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-card border border-border-soft rounded-3xl p-8 flex flex-col gap-6 hover:shadow-float transition-all duration-med hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-xl flex items-center justify-center">
                  <story.icon className="w-6 h-6 text-accent-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-[0.2em] text-text-tertiary">{story.industry}</p>
                  <h3 className="text-xl font-semibold text-text-primary">{story.title}</h3>
                </div>
              </div>

              <div className="space-y-4 text-left">
                <div>
                  <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-2">Challenge</h4>
                  <p className="text-sm leading-relaxed text-text-secondary">{story.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-2">Our Solution</h4>
                  <p className="text-sm leading-relaxed text-text-secondary">{story.solution}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-2">Results</h4>
                  <ul className="space-y-2">
                    {story.results.map((result) => (
                      <li key={result} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-primary" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

