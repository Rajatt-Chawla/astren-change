'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Search, FileText, Zap, Shield, Database, Network, Rocket, RefreshCw, ArrowRight, CheckCircle } from 'lucide-react'
import SolvorisModules from '@/components/products/SolvorisModules'
import Button from '@/components/ui/Button'
import { openTallyPopup } from '@/lib/engagementLinks'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Solvoris',
      url: 'https://www.astrentech.com/products/solvoris',
      logo: 'https://www.astrentech.com/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/astrenox',
        'https://twitter.com/astrenox'
      ]
    },
    {
      '@type': 'Product',
      name: 'Solvoris',
      description:
        'Solvoris brings enterprise search, decision intelligence, and business process automation into one cognitive platform.',
      brand: {
        '@type': 'Brand',
        name: 'Solvoris'
      }
    }
  ]
}

const primaryOutcomes = [
  {
    metric: 'Proposal and SoW turnaround down 50–70%',
    description: 'AI Deal Desk assembles proposals, SoWs, and RFP responses from past wins, playbooks, and CRM context, shifting effort from blank-page drafting to targeted review.'
  },
  {
    metric: 'Knowledge retrieval time down 80–90% with citations',
    description: 'Enterprise search and AI Sales Engineer locate the relevant spec, policy, email, or slide in seconds, with line-level citations so stakeholders can trust and verify the answer.'
  },
  {
    metric: 'Document intake automated ≥65% with <2% critical field error',
    description: 'AI Ops Engineer digitizes RFQs, POs, BOMs, and invoices from email and shared folders into structured ERP/CRM data, with confidence thresholds and review workflows to keep quality high.'
  },
  {
    metric: 'SLA breaches down 25–30% via exception routing and approval control',
    description: 'Edge cases, low-confidence parses, and non-standard terms are automatically surfaced to the right owners, preventing silent failures and last-minute firefighting.'
  },
  {
    metric: 'AI Sales Engineer enables 30–40% higher deal velocity',
    description: 'Technical Q&A, comparison matrices, and quote-ready recommendations move in lockstep with the sales cycle, removing bottlenecks between discovery, engineering, and commercial teams.'
  }
]

const dashboardFeatures = [
  {
    icon: Search,
    title: 'Enterprise Search + AI Sales Engineer workspace',
    description: 'Enterprise DeepSearch and AI Sales Engineer work as a shared workspace over Drive, SharePoint, email, Slack, Jira, Salesforce, Zoho, and more. They answer company-specific and prospect-specific questions, then turn that context into sales-ready narratives: capability mapping, discovery responses, objection handling, and proposal snippets, all grounded in your actual content and catalogs.'
  },
  {
    icon: FileText,
    title: 'AI Deal Desk Copilot for proposals and approvals',
    description: 'The AI Deal Desk copilot is designed to operationalize how your organization already runs deals. It reads opportunity context from CRM, leverages historical pricing and contractual patterns, assembles the proposal, applies margin and policy guardrails, and orchestrates approvals and redlines with clear ownership and traceability.'
  },
  {
    icon: Zap,
    title: 'Proactive pipeline, ops, and risk insights',
    description: 'Proactive Insights continuously scans deal, workflow, and document streams to highlight where risk accumulates—stuck RFQs, aging quotes, approval bottlenecks, discount drift, or recurring intake errors—so leaders see emerging issues before they crystallize into lost revenue or SLA penalties.'
  },
  {
    icon: Shield,
    title: 'Compliance & residency layer for global and India-first teams',
    description: 'A dedicated Compliance Layer brings RBAC, audit logs, regional and air-gapped deployments and built-in PII controls. The intent is simple: every AI-driven action should be explainable, exportable, and aligned with your regulatory and client commitments.'
  }
]

const howItWorksSteps = [
  {
    icon: Network,
    title: 'Connect',
    subtitle: '(data plane)',
    description: 'Securely connect CRM, ERP, PIM, file stores, chat, email, ticketing, and catalog systems. Content is normalized, tagged with metadata, and indexed while respecting source permissions, regional residency requirements, and key business identifiers such as GSTIN, HSN/SAC, and contract IDs.'
  },
  {
    icon: Database,
    title: 'Understand',
    subtitle: '(intelligence plane)',
    description: 'The Cognitive Memory Fabric links documents, deals, specs sheets, knowledge base, decisions and prior outcomes. Specialized agents for deal strategy, sales engineering, and operations determine whether to answer, clarify, or escalate, ensuring the system behaves more like an informed colleague than a generic chatbot.'
  },
  {
    icon: Rocket,
    title: 'Act',
    subtitle: '(action plane)',
    description: 'Solvoris executes work: drafting proposals, generating quotes, preparing technical answer packs, creating POs or SOs, and updating systems of record. Approvals, risk checks, and system updates are orchestrated with end-to-end traceability across ERP, CRM, and collaboration tools.'
  },
  {
    icon: RefreshCw,
    title: 'Learn',
    subtitle: '(continuous improvement)',
    description: 'Every answer, draft, override, approval, and exception feeds back into the enterprise memory. Over time, Solvoris internalizes your preferred language, discount playbooks, approval behavior, and regional compliance nuances, lifting speed, accuracy, and policy adherence with each cycle.'
  }
]

const integrations = [
  'Salesforce',
  'HubSpot',
  'Dynamics',
  'SAP',
  'Oracle',
  'NetSuite',
  'Tally',
  'Zoho',
  'Jira',
  'ServiceNow',
  'Slack',
  'Microsoft 365',
  'Google Workspace',
  'SharePoint',
  'Drive',
  'Box',
  'Notion',
  'WhatsApp Business',
  'GeM',
  'More'
]

const industries = [
  {
    title: 'Manufacturing and Distribution',
    pain: 'Automate RFQ and BOM parsing into structured line items, recommend compliant products and alternates, and generate first-draft quotes with margin guardrails and ERP sync, improving price consistency and order accuracy and delivering 60–70% faster turnaround.',
    impact: 'Extend sales workflows with AI Sales Engineer for prospect-aware capability mapping, discovery answer packs, objection handling, and proposal snippets grounded in product specs, certifications, and historic wins.',
    cta: 'Explore Manufacturing Solutions'
  },
  {
    title: 'Construction and EPC',
    pain: 'Generate tender and BOQ packs with compliance annexures, normalize GAEB/PDF/Excel inputs into catalog SKUs, and manage variation orders with audit trails, standardizing submissions and cutting bid preparation to under 48 hours.',
    impact: 'Enrich pursuits with role-specific responses for owners and consultants, capability summaries linked to method statements, and bid clarifications aligned with drawings, HSE expectations, and contract language.',
    cta: 'Explore EPC Solutions'
  },
  {
    title: 'IT and Consulting',
    pain: 'Draft SoWs and change requests from precedent libraries, apply clause and policy guardrails, and enforce approval SLAs with redline summaries, reducing proposal cycles by 50–70 percent.',
    impact: 'Accelerate pursuits by combining discovery Q&A from case studies and playbooks with persona-specific objection handling and auto-assembled proposal sections mapped to solutions and accelerators.',
    cta: 'Explore IT Consulting Solutions'
  },
  {
    title: 'Logistics and Supply Chain',
    pain: 'Convert PDF and email orders into clean TMS, WMS, and ERP records with exception routing and SLA tracking, lowering manual errors and reducing SLA breaches by 25–30 percent.',
    impact: 'Support revenue teams with lane-specific capability briefs, tariff and SLA clarifications, and rapid quote emails aligned to customer contracts and fuel-surcharge frameworks, all with clear citations.',
    cta: 'Explore Logistics Solutions'
  },
  {
    title: 'Public Sector',
    pain: 'Run tender and notification analysis and policy Q&A with authoritative citations, maintaining cross-department provenance and audit-ready logs for consistent and defensible responses.',
    impact: 'Equip pursuit teams with requirement-by-clause responses, eligibility and credential summaries, and compliant proposal text tailored to RFP sections and formats, including India-specific portals such as GeM for intake where relevant.',
    cta: 'Explore Public Sector Solutions'
  },
  {
    title: 'Defense',
    pain: 'Streamline mission paperwork, policy retrieval, and approvals with source-cited answers and audit-grade trails, reducing decision latency and strengthening compliance.',
    impact: 'Enhance engagements with classification-aware capability briefs, doctrine-linked clarifications, and structured responses to technical and commercial queries, while supporting stringent access controls and on-premise or air-gapped deployment models where required.',
    cta: 'Explore Defense Solutions'
  },
  {
    title: 'Energy',
    pain: 'Accelerate asset, HSE, and compliance workflows by auto-ingesting RFQs and POs, linking them to specs and standards, and surfacing risks before they affect uptime, which shortens reporting cycles and reduces downtime risk.',
    impact: 'Enable pursuits with equipment capability matrices, standards-based responses, and quote narratives that adapt to field constraints, lead times, and regulatory reporting obligations.',
    cta: 'Explore Energy Solutions'
  },
  {
    title: 'Retail and Consumer',
    pain: 'Unify product, price, and operations data to cut ticket resolution time and automate order and reconciliation at scale, improving accuracy and customer experience across channels.',
    impact: 'Power sales motions with assortment-aware product briefs, competitive objection handling, and channel-specific proposal copy tied to inventory, pricing, and promotional policies.',
    cta: 'Explore Retail Solutions'
  },
  {
    title: 'Education',
    pain: 'Turn syllabi, policies, and LMS content into instant cited answers and automate admissions and support queues, improving service levels for students, faculty, and partners.',
    impact: 'Support outreach teams with program-specific capability summaries, eligibility clarifications, and templated responses for partnerships and grants, allowing staff to refocus on higher-value engagement.',
    cta: 'Explore Education Solutions'
  },
  {
    title: 'Financial Services',
    pain: 'Lower operational risk with permission-aware search, KYC and AML document automation, and policy-guarded approvals that raise SLA adherence.',
    impact: 'Strengthen front-office responses with policy-cited explanations, product suitability narratives, and regulated disclosure inserts aligned to jurisdiction, supported by AI Deal Desk templates for RFPs, RFIs, and due-diligence questionnaires.',
    cta: 'Explore Financial Services Solutions'
  },
  {
    title: 'Legal',
    pain: 'Draft faster with precedent-aware clause retrieval, redline summaries, and matter file automation, delivering fully auditable matters and shorter cycle times.',
    impact: 'Support business development with sector-specific capability statements, authority-linked answers to RFP questions, and proposal sections that reuse winning language while respecting firm-wide risk thresholds and style guides.',
    cta: 'Explore Legal Solutions'
  },
  {
    title: 'Telecom, Media, and Technology',
    pain: 'Connect CRM, OSS, BSS, and document repositories into a single action layer to speed quotes, service activation, and support, improving accuracy and first-call resolution.',
    impact: 'Advanced pursuits can rely on configuration narratives, service capability matrices, and SLA-referenced responses tied to network and catalog data, orchestrated through AI Deal Desk and Ops Engineer.',
    cta: 'Explore TMT Solutions'
  },
  {
    title: 'Marketing',
    pain: 'Convert more pipeline by pairing an AI-demand generation agent with campaign data, automating campaign operations, and producing executive-ready performance narratives.',
    impact: 'Equip commercial teams with persona-tailored discovery answers, competitive rebuttals anchored in current collateral, and on-brand proposal copy aligned to live campaigns and rate cards.',
    cta: 'Explore Marketing Solutions'
  }
]

const proofStats = [
  {
    stat: 'First draft of proposal or SoW in ≤5 minutes',
    description: 'From RFP upload and opportunity selection to a policy-guarded draft with discovery and objection coverage ≥90% across the defined question set.'
  },
  {
    stat: 'Sales and Q&A latency at p95 ≤3 seconds with source citations',
    description: 'AI Sales Engineer and enterprise search respond within the rhythm of live work, backed by clear evidence links across internal and curated sources.'
  },
  {
    stat: 'Automation coverage ≥70% of eligible documents with <2% critical field error',
    description: 'RFQs, POs, invoices, and BOMs are automatically parsed and posted, with low-confidence items surfaced for review rather than silently accepted.'
  },
  {
    stat: 'Meeting→proposal conversion uplift +20–30%',
    description: 'Structured notes, deal intelligence, and one-click proposal generation increase the proportion of conversations that progress into priced and sent offers.'
  },
  {
    stat: '3–5× efficiency gains within the first year',
    description: 'Teams reclaim significant time previously spent on manual drafting, data entry, and hunting for information, without diluting governance or control.'
  },
  {
    stat: 'Personalized follow-up and email sequence generation in ≤60 seconds',
    description: 'Solvoris composes follow-ups, reminders, and clarification emails with CRM merge fields and regional nuance built in, ensuring momentum is not lost between touchpoints.'
  }
]

export default function SolvorisPageContent() {
  return (
    <main id="product-Solvoris" className="min-h-screen bg-bg-base">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section id="hero" role="banner" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.12),_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Solvoris
              </h1>
              <p className="text-xl sm:text-2xl text-text-primary font-semibold leading-tight mb-4">
                The Cognitive Core for your Business
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Solvoris unifies AI Deal Desk, AI Sales Engineer, and AI Ops Engineer into a single cognitive platform. It gives revenue, operations, and delivery teams a structured way to move from fragmented RFQs, emails, and documents to evidence-backed answers, margin-safe proposals, and ERP-ready orders with the governance and measurability you would expect from an enterprise program.
              </p>
              <ul className="space-y-3 text-text-secondary">
                {[
                  'Built for revenue, operations, delivery, and back-office teams in small, mid, and large enterprises across manufacturing, EPC, IT services, logistics, public sector, and more',
                  'Delivers instant answers with citations, first-draft proposals and SoWs, RFQ→quote→PO→invoice automation, and an always-on AI Sales Engineer that handles technical queries, comparisons, and pre-sales discovery',
                  'Powered by a Cognitive Memory Fabric that continuously ingests RFPs, RFQs, contracts, catalogs, and emails, preserving organizational context so every new deal, ticket, and order benefits from what the organization has already learned'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 w-5 h-5 text-accent-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="group" 
                  onClick={openTallyPopup}
                  data-analytics="cta_hero_demo"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-fast" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  'Source-cited answers',
                  'Deal, Sales & Ops agents at your disposal',
                  'Human-in-the-loop safety',
                  'Cloud, hybrid, and on-prem deployments'
                ].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-text-secondary"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.figure
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              aria-label="Solvoris product preview"
              className="flex justify-center"
            >
              <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-border-soft bg-surface-card shadow-2xl">
                <Image
                  src="/assets/images/placeholder-solvoris.png"
                  alt="Solvoris product preview"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.figure>
          </div>
        </div>
      </section>

      {/* Primary Outcomes */}
      <section id="outcomes" className="py-24 bg-bg-elevated/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Primary Outcomes
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {primaryOutcomes.map((outcome, index) => (
              <motion.div
                key={outcome.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group rounded-2xl border border-border-soft bg-surface-card p-6 hover:border-accent-primary/40 transition-all duration-300 hover:shadow-2xl"
                style={{
                  boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <p className="text-lg text-text-primary font-medium leading-relaxed mb-3">{outcome.metric}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Dashboard */}
      <section id="dashboard" className="py-24 bg-bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            One Workspace
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dashboardFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group rounded-2xl border border-border-soft bg-surface-card p-6 hover:border-accent-secondary/40 transition-all duration-300 hover:shadow-2xl"
                  style={{
                    boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  <div className="w-12 h-12 bg-accent-secondary/14 border border-accent-secondary/35 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-accent-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">{feature.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <SolvorisModules />

      {/* How It Works - Horizontal Timeline */}
      <section id="how-it-works" className="py-24 bg-bg-elevated/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            How It Works
          </motion.h2>
          
          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary transform -translate-y-1/2" style={{
              boxShadow: '0 0 20px rgba(124, 58, 237, 0.5), 0 0 40px rgba(34, 211, 238, 0.3)'
            }} />
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
              {howItWorksSteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    {/* Timeline Node */}
                    <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-4 h-4 rounded-full bg-accent-primary border-4 border-bg-elevated shadow-lg" style={{
                        boxShadow: '0 0 20px rgba(124, 58, 237, 0.8)'
                      }} />
                    </div>
                    
                    <div className="relative rounded-2xl border border-border-soft bg-surface-card p-6 hover:border-accent-primary/40 transition-all duration-300 hover:shadow-2xl mt-8 lg:mt-0"
                      style={{
                        boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 4px 6px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                      
                      <div className="w-12 h-12 bg-accent-primary/14 border border-accent-primary/35 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-accent-primary" />
                      </div>
                      
                      <div className="flex items-baseline gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-text-primary">{step.title}</h3>
                        <span className="text-sm text-text-muted">{step.subtitle}</span>
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-24 bg-bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Integrations & Interoperability
          </motion.h2>
          
          {/* Logo Grid */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mb-8">
            {integrations.map((logo) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="flex h-20 items-center justify-center rounded-2xl border border-border-soft bg-surface-card text-sm font-semibold text-text-secondary hover:border-accent-primary/40 hover:bg-surface-card/80 transition-all duration-300"
                style={{
                  boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
              >
                {logo}
              </motion.div>
            ))}
          </div>
          
          {/* Bullet Points */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3 text-text-secondary max-w-3xl mx-auto"
          >
            {[
              'APIs and webhooks for event-driven automations, partner connectors, and industry-specific patterns such as RFQ ingestion, PO posting, and e-invoicing handoffs.',
              'Read-only onboarding and staged write-backs to begin with "AI drafts, humans approve" before scaling into higher degrees of automation.',
              'Environment tiering from sandbox to pilot to production with per-tenant isolation, making it straightforward to pilot GST-ready or DPDP-aligned workflows before rolling out to the wider organization.'
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 w-5 h-5 text-accent-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-24 bg-bg-elevated/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Security & Compliance
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Access and identity',
                description: 'SSO, SAML, and SCIM support, granular RBAC across modules, approval rules, and per-role entitlements (Deal Desk, Sales Engineer, Ops Engineer), ensuring the right people see and do the right things.'
              },
              {
                title: 'Data protection',
                description: 'Encryption in transit and at rest, regional data residency for India and UAE, optional VPC or on-prem connectors, PII redaction for sensitive fields (GSTIN, PAN, KYC identifiers), and configurable retention policies aligned with DPDP and sector-level requirements.'
              },
              {
                title: 'Auditability',
                description: 'End-to-end action logs and a robust "reason-of-record" layer capture what ran, which sources were consulted, what was suggested, what humans changed, and when approvals were granted—producing exportable evidence packs for internal review, client audits, or regulatory checks.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group rounded-2xl border border-border-soft bg-surface-card p-6 hover:border-accent-primary/40 transition-all duration-300 hover:shadow-2xl"
                style={{
                  boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <h3 className="text-xl font-semibold text-text-primary mb-3">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-24 bg-bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Who Benefits Most
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative group rounded-2xl border border-border-soft bg-surface-card p-6 hover:border-accent-primary/40 transition-all duration-300 hover:shadow-2xl"
                style={{
                  boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                
                <h3 className="text-xl font-semibold text-text-primary mb-4">{industry.title}</h3>
                
                <div className="space-y-4 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Pain</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{industry.pain}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Impact</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{industry.impact}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">CTA</p>
                    <button className="text-sm font-semibold text-accent-primary hover:text-accent-secondary transition-colors duration-fast">
                      {industry.cta} →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Stats */}
      <section id="proof" className="py-24 bg-bg-elevated/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Outcomes You Can Measure
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {proofStats.map((stat, index) => (
              <motion.div
                key={stat.stat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group rounded-2xl border border-border-soft bg-surface-card p-6 hover:border-accent-primary/40 transition-all duration-300 hover:shadow-2xl"
                style={{
                  boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <div className="text-xl font-bold text-accent-primary mb-2">{stat.stat}</div>
                <p className="text-text-secondary text-sm leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-text-secondary italic max-w-4xl mx-auto"
            style={{
              fontFamily: 'var(--font-inter)',
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.8) 0%, rgba(34, 211, 238, 0.8) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(124, 58, 237, 0.3)',
              filter: 'drop-shadow(0 0 8px rgba(124, 58, 237, 0.4))'
            }}
          >
            These outcomes are the result of combining a unified memory layer with specialized agents for deals, sales engineering, and operations, plus integrations that respect the realities of India-first and global enterprises—from local tax regimes to global compliance requirements.
          </motion.p>
        </div>
      </section>

      {/* Final CTA - Start in Minutes */}
      <section id="final-cta" aria-label="Get Started" className="py-24 bg-bg-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-border-soft bg-gradient-to-br from-surface-card to-bg-elevated p-10 lg:p-12 text-center"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-primary/5 via-accent-secondary/5 to-accent-primary/5 opacity-50 -z-10" />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Final call to action — start in minutes</h2>
            <div className="space-y-4 text-text-secondary mb-8 max-w-2xl mx-auto">
              <p>Launch your first Solvoris workspace today and see AI Deal Desk, AI Sales Engineer, and AI Ops Engineer transform fragmented RFQs, proposals, and orders into a coherent, managed flow.</p>
              <p>Spin up your first automation this week, connect your CRM and file stores, and experience instant, cited insights and draft proposals that reflect how your business actually sells, delivers, and operates.</p>
              <p>Cut turnaround time by up to 70 percent across proposals, quotes, and order entry, with enterprise-grade controls, regional data residency, and no heavy IT program required to get started.</p>
              <p>Turn scattered documents, fragmented knowledge, and inbox sprawl into real-time intelligence that not only answers questions, but executes the next best action on your behalf.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                className="group" 
                onClick={openTallyPopup}
                data-analytics="cta_final_visit"
              >
                Visit our website
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-fast" />
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="group"
                data-analytics="cta_final_demo"
              >
                Book a demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}


