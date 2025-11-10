'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'What do you need from us',
    answer: 'We need founder time for two structured workshops. We need a single decision maker. We need access to existing assets and tools.'
  },
  {
    question: 'Will it scale',
    answer: 'Yes. We engineer MVPs to grow with clean modules, environment configuration, and CI from the first commit.'
  },
  {
    question: 'What happens after launch',
    answer: 'You can retain us for weekly sprints or we can hand over to your team with documentation and training.'
  },
  {
    question: 'Do you support AI features',
    answer: 'Yes. We deliver RAG and search, chat experiences, assistants, and lightweight agents. We choose the simplest path that proves value quickly.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-bg-base">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-h1 font-bold text-text-primary">FAQ</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border-soft bg-surface-card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between"
                >
                  <span className="text-lg font-semibold text-text-primary">{faq.question}</span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-accent-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-text-muted" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

