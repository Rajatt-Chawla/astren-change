'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

const moduleTabs = [
  {
    id: 'deepsearch',
    label: 'Enterprise DeepSearch & AI Sales Engineer (zero-guesswork answers)',
    title: 'Enterprise DeepSearch & AI Sales Engineer',
    description: [
      'Company-aware Q&A across files, email, chats, tickets, CRM, ERP records, and catalogs, combined with a prospect-aware AI Sales Engineer that composes sales-ready responses based on manuals, specs, prior proposals, and curated external data.',
      'Multi-turn retrieval with permission awareness and multilingual prompts in various languages, enabling Indian and global teams to work in the language mix they actually use.',
      'Action suggestions that go beyond answers: open records, create tasks, draft follow-ups, generate capability mapping, discovery answer packs, objection-handling briefs, and proposal snippets that reuse proven win themes and talk tracks.',
      'Accuracy dashboards with human scoring, source coverage, and answer provenance for both knowledge responses and sales outputs, giving stakeholders clarity on what the AI consulted and how it reached its recommendations.'
    ],
    impact: {
      stat: '80–90% faster access to relevant context',
      details: [
        'Step-change reduction in research cycles',
        '≥95% citation presence for factual responses'
      ]
    }
  },
  {
    id: 'dealdesk',
    label: 'AI Deal Desk (proposals that write themselves)',
    title: 'AI Deal Desk',
    hasItalicUnderline: true,
    description: [
      'Drafts proposals, SoWs, RFP/RFQ responses, and term sheets in minutes by ingesting buyer documents, aligning them with precedent libraries, and enforcing margin floors and policy clauses from your playbooks.',
      'Uses CRM opportunity context, pricing history, catalog data, and regional rules (including GST / HSN for India where relevant) to ensure every quote is both commercially sound and operationally executable.',
      'Manages redlines with regenerate-by-section editing, attaches rationale for counter-clauses, and orchestrates approval matrices with SLAs, notifications, and full versioned audit trails so legal, finance, and sales stay aligned.',
      'Captures deviations, discount levers, and exceptions into a reusable memory, so over time your deal desk becomes more consistent and data-driven rather than dependent on tribal knowledge.'
    ],
    impact: {
      stat: '50–70% shorter proposal cycles',
      details: [
        '30–40% fewer redline loops',
        '10–20% uplift in margin discipline compared to unstructured, manual processes'
      ]
    }
  },
  {
    id: 'opsengineer',
    label: 'AI Ops Engineer (Business Agents for B2B workflows)',
    title: 'AI Ops Engineer',
    description: [
      'Reads emails and PDFs, RFQs, POs, BOMs, and invoices, extracts fields with configurable confidence thresholds and creates or updates ERP, TMS, WMS, and CRM records reducing manual data entry and rework.',
      'Runs exception queues with human-in-the-loop and dual-control approvals, including India-ready flows for GSTIN, HSN/SAC, Place of Supply, and IRN/e-invoicing payloads where applicable, so finance and ops teams stay in control.',
      'Drives RFQ→quote→PO→SO→invoice workflows via APIs, webhooks, and EDI, with structured write-backs and immutable logs to support reconciliation, close, and audit activities.',
      'Normalizes free-text descriptions to catalog SKUs, recommends alternates on stockouts, and pushes decisions, approvals, and payment-driving events into the right systems while maintaining a clear, end-to-end trace.'
    ],
    impact: {
      stat: '65% or more of eligible documents automated',
      details: [
        'Under 2% critical field error',
        '25–30% reduction in SLA breaches',
        '10–15 hours per week per user freed from low-value operational tasks'
      ]
    }
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
            className="mt-10 space-y-6"
          >
            <div className="rounded-3xl border border-border-soft bg-surface-card p-8">
              <h3 className="text-2xl font-semibold text-text-primary">
                {tab.hasItalicUnderline ? (
                  <>
                    AI <span className="italic underline decoration-accent-primary/50">Deal Desk</span>
                  </>
                ) : (
                  tab.title
                )}
              </h3>
              <ul className="mt-6 space-y-3 text-text-secondary">
                {tab.description.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {tab.impact && (
              <div className="rounded-2xl border border-border-soft bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 p-6"
                style={{
                  boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="text-2xl font-bold text-accent-primary mb-3">Impact</div>
                <div className="text-lg font-semibold text-text-primary mb-3">{tab.impact.stat}</div>
                <ul className="space-y-2">
                  {tab.impact.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-text-secondary">
                      <CheckCircle className="mt-0.5 w-4 h-4 text-accent-primary flex-shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

