'use client'

import { useState } from 'react'

const moduleTabs = [
  {
    id: 'deepsearch',
    label: 'Enterprise DeepSearch and AI sales engineer',
    title: 'Enterprise DeepSearch and AI sales engineer (zero guesswork answers)',
    description: [
      'Company-aware Q and A across files, email, chats, tickets, CRM and ERP records, plus prospect-aware AI Sales Engineer that composes sales-ready responses grounded in your content',
      'Multi-turn retrieval with permission awareness and bilingual prompts in English with optional Arabic or Hinglish',
      'Action suggestions that open records, create tasks, draft follow-ups, generate capability mapping, discovery answers, objection handling, and proposal snippets',
      'Accuracy dashboards with human scoring and answer provenance for both knowledge responses and sales outputs',
      'Impact: 80–90% faster access to context and ≥95% citation presence for factual answers'
    ]
  },
  {
    id: 'dealdesk',
    label: 'AI Deal Desk',
    title: 'AI Deal Desk (proposals that write themselves)',
    description: [
      'Drafts proposals and SoWs in minutes and enforces margin floors and policy clauses',
      'Uses CRM opportunity context, precedent clauses, and pricing history',
      'Handles redlines and regenerate by section and manages approval matrices with SLAs and full audit trails',
      'Captures deviations to reduce leakage and standardize terms',
      'Impact: 50–70 percent shorter proposal cycles and 30–40 percent fewer redline loops with stronger margin discipline'
    ]
  },
  {
    id: 'businessagents',
    label: 'Business Agents',
    title: 'Business Agents (Automate mundane Tasks)',
    description: [
      'Reads emails and PDFs, extracts fields with confidence thresholds, and creates or updates ERP and CRM records',
      'Runs exception queues with human in the loop and dual control approvals and reconciliation reports',
      'Provides API first write backs and immutable logs for audits',
      'Impact: 65 percent or more of eligible documents automated, under 2 percent critical field error, and 25–30 percent fewer SLA breaches'
    ]
  }
]

export default function SolvorisModules() {
  const [activeTab, setActiveTab] = useState(moduleTabs[0].id)

  return (
    <section id="modules" className="py-24 bg-bg-base">
      <div className="max-w-6xl mx-auto px-6">
        <div role="tablist" aria-label="Solvoris modules" className="flex flex-wrap gap-3 border-b border-border-soft pb-4">
          {moduleTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent-primary ${
                activeTab === tab.id
                  ? 'bg-accent-primary text-white tab-active'
                  : 'bg-white/5 text-text-secondary hover:text-text-primary'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {moduleTabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={activeTab !== tab.id}
            className="mt-10 rounded-3xl border border-border-soft bg-surface-card p-8"
          >
            <h3 className="text-2xl font-semibold text-text-primary">{tab.title}</h3>
            <ul className="mt-6 space-y-3 text-text-secondary">
              {tab.description.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

