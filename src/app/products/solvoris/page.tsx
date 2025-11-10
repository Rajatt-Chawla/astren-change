import { Metadata } from 'next'
import Image from 'next/image'
import SolvorisModules from '@/components/products/SolvorisModules'

export const metadata: Metadata = {
  title: 'Solvoris — Enterprise AI Copilot for Search, Deal Desk & B2B Workflow Automation',
  description:
    'Unify context → answer → action. Solvoris delivers source-cited enterprise search, proposal automation, and RFQ→PO workflows with audit-ready controls.',
  openGraph: {
    title: 'Solvoris — Enterprise AI Copilot for Search, Deal Desk & B2B Workflow Automation',
    description:
      'Unify context → answer → action. Solvoris delivers source-cited enterprise search, proposal automation, and RFQ→PO workflows with audit-ready controls.',
    images: ['/images/og-Solvoris.png'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solvoris — Enterprise AI Copilot for Search, Deal Desk & B2B Workflow Automation',
    description:
      'Unify context → answer → action. Solvoris delivers source-cited enterprise search, proposal automation, and RFQ→PO workflows with audit-ready controls.',
    images: ['/images/og-Solvoris.png']
  }
}

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
      },
      offers: [
        {
          '@type': 'Offer',
          name: 'Free',
          price: '0',
          priceCurrency: 'USD'
        },
        {
          '@type': 'Offer',
          name: 'Rise',
          priceCurrency: 'USD'
        },
        {
          '@type': 'Offer',
          name: 'Scale',
          priceCurrency: 'USD'
        },
        {
          '@type': 'Offer',
          name: 'Enterprise',
          priceCurrency: 'USD'
        }
      ]
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.astrentech.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Products',
          item: 'https://www.astrentech.com/products'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Solvoris'
        }
      ]
    }
  ]
}

const integrations = [
  'Salesforce',
  'HubSpot',
  'Dynamics',
  'SAP',
  'Oracle',
  'NetSuite',
  'Jira',
  'ServiceNow',
  'Slack',
  'Microsoft 365',
  'Google Workspace',
  'SharePoint',
  'Drive',
  'Box',
  'Notion',
  'More'
]

const industries = [
  {
    title: 'Manufacturing and Distribution',
    description:
      'Automate RFQ and BOM parsing to first draft quotes with margin guardrails and ERP sync which improves price consistency and order accuracy and delivers 60 to 70 percent faster turnaround. Extend sales workflows with prospect-aware capability mapping, discovery answer packs, objection handling, and proposal snippets grounded in product specs and prior wins.'
  },
  {
    title: 'Construction and EPC',
    description:
      'Generate tender and BOQ packs with compliance annexures and manage variation orders with audit trails which standardizes submissions and cuts bid preparation to under 48 hours. Enrich pursuit workflows with role-specific responses for owners and consultants, capability summaries linked to method statements, and tailored bid clarifications aligned to drawings and HSE requirements.'
  },
  {
    title: 'IT and Consulting',
    description:
      'Draft SoWs from precedent libraries and apply clause and policy guardrails and enforce approval SLAs with redline summaries which reduces proposal cycles by 50 to 70 percent. Accelerate pursuits with discovery Q&A from case studies and playbooks, persona-specific objection handling, and auto-assembled proposal sections mapped to solution accelerators.'
  },
  {
    title: 'Logistics and Supply Chain',
    description:
      'Convert PDF and email orders into clean TMS and WMS and ERP records with exception routing and SLA tracking which lowers manual errors and reduces SLA breaches by 25 to 30 percent. Support revenue teams with lane-specific capability briefs, tariff and SLA clarifications with citations, and rapid quote emails aligned to customer contracts.'
  },
  {
    title: 'Public Sector',
    description:
      'Run tender and notification analysis and policy Q and A with source citations and maintain cross department provenance and audit ready logs for consistent and defensible responses. Equip pursuit teams with requirement-by-clause responses, eligibility and credential summaries, and compliant proposal text tailored to RFP sections and formats.'
  },
  {
    title: 'Defense',
    description:
      'Streamline mission paperwork and policy retrieval and approvals with source cited answers and audit grade trails which reduces decision latency and improves compliance. Enhance engagements with classification-aware capability briefs, doctrine-linked clarifications, and structured responses to technical and commercial queries while preserving access controls.'
  },
  {
    title: 'Energy',
    description:
      'Accelerate asset, HSE, and compliance workflows by auto ingesting RFQs and POs and surfacing risks before they impact uptime which shortens reporting cycles and lowers downtime risk. Enable pursuits with equipment capability matrices, standards-based responses, and quote narratives that adapt to field constraints and lead times.'
  },
  {
    title: 'Retail and Consumer',
    description:
      'Unify product, price, and operations data to cut ticket resolution time and automate order and reconciliation at scale which improves accuracy and customer experience. Power sales motions with assortment-aware product briefs, competitive objection handling, and channel-specific proposal copy tied to inventory and pricing policies.'
  },
  {
    title: 'Education',
    description:
      'Turn syllabi, policies, and LMS content into instant cited answers and automate admissions and support queues which improves service levels across the campus. Assist outreach with program-specific capability summaries, eligibility clarifications, and templated responses for partnerships and grants.'
  },
  {
    title: 'Financial Services',
    description:
      'Lower operational risk with permission aware search and KYC and AML document automation and policy guarded approvals which increases SLA adherence. Strengthen front-office responses with policy-cited explanations, product suitability narratives, and regulated disclosure inserts aligned to jurisdiction.'
  },
  {
    title: 'Legal',
    description:
      'Draft faster with precedent aware clause retrieval and redline summaries and matter file automation which delivers fully auditable matters and shorter cycles. Support business development with sector-specific capability statements, authority-linked answers to RFP questions, and proposal sections that reuse winning language.'
  },
  {
    title: 'Telecom, Media, and Technology',
    description:
      'Connect CRM and OSS and BSS and documents into one action layer to speed quotes and service activation and support which improves accuracy and first call resolution. Advanced pursuits offer configuration narratives, service capability matrices, and SLA-referenced responses tied to network and catalog data.'
  },
  {
    title: 'Marketing',
    description:
      'Convert more pipeline with a 24 by 7 demand generation agent and automate campaign operations and produce executive ready performance insights. Equip commercial teams with persona-tailored discovery answers, competitive rebuttals linked to collateral, and on-brand proposal copy aligned to current campaigns.'
  }
]

const proofStats = [
  'First draft of proposal or SoW in five minutes or less with Discovery and objection coverage ≥90% across the defined question set',
  'Sales and Q&A latency at p95 ≤3 seconds with source citations',
  'Automation coverage at 70 percent or more of eligible documents with under 2 percent critical field error',
  'Meeting→proposal conversion uplift +20–30% based on pilot cohorts',
  'Three to five times efficiency gains within the first year',
  'Personalized follow-up and email sequence generation in ≤60 seconds with CRM merge fields'
]

export default function SolvorisPage() {
  return (
    <main id="product-Solvoris" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id="hero" role="banner" className="grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary">
            Solvoris — Enterprise AI Copilot
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Solvoris brings enterprise search, decision intelligence, and business process automation into one cognitive platform. Teams move from context to answer to action with audit ready precision and measurable ROI.
          </p>
          <ul className="space-y-3 text-text-secondary">
            {[
              'Built for revenue, operations, delivery, and back office teams in small, mid, and large enterprises',
              'Delivers instant answers with citations, first draft proposals and SoWs, RFQ to PO to invoice automation, proactive risk and opportunity signals, provide AI sales engineer as a service',
              'Powered by a Cognitive Memory Fabric that preserves organizational context so every interaction improves the next'
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              data-analytics="cta_hero_start"
              aria-label="Start in Minutes"
              className="btn-primary inline-flex items-center justify-center rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-primary/90 focus:outline-none focus:ring-2 focus:ring-accent-primary"
            >
              Start in Minutes
            </button>
            <button
              type="button"
              data-analytics="cta_hero_demo"
              aria-label="Book a Demo"
              className="btn-secondary inline-flex items-center justify-center rounded-full border border-accent-primary px-6 py-3 text-sm font-semibold text-accent-primary transition hover:bg-accent-primary/10 focus:outline-none focus:ring-2 focus:ring-accent-primary"
            >
              Book a Demo
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              'Source-cited answers',
              'Sales and Ops agents at your disposal',
              'Human-in-the-loop safety',
              'Support all types of deployment'
            ].map((label) => (
              <span
                key={label}
                className="badge inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-text-secondary"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <figure aria-label="Solvoris product preview" className="flex justify-center">
          <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-border-soft bg-surface-card">
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
        </figure>
      </section>

      <section id="outcomes" className="mt-24">
        <h2 className="text-3xl font-bold text-text-primary text-center">Primary Outcomes</h2>
        <div className="grid grid-cards mt-10 gap-6 sm:grid-cols-2">
          {[
            'Proposal and SoW turnaround down 50–70%',
            'Knowledge retrieval time down 80–90% with citations',
            'Document intake automated ≥65% with <2% critical field error',
            'SLA breaches down 25–30% via exception routing and approval control',
            'AI Sales engineer enables 30-40% higher deal velocity'
          ].map((item) => (
            <div key={item} className="card rounded-2xl border border-border-soft bg-surface-card p-6 text-center">
              <p className="text-lg text-text-secondary">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="dashboard" className="mt-24 bg-bg-elevated/50 rounded-3xl p-10 space-y-8">
        <h2 className="text-3xl font-bold text-text-primary">One Workspace</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            'Enterprise Search and AI Sales Engineer answer company-specific and prospect-specific questions across Drive, SharePoint, email, Slack, Jira, Salesforce, and more with source citations and permission awareness, then auto-compose sales-ready responses including capability mapping, discovery answers, objection handling, and proposal snippets grounded in your content.',
            'AI Copilot turns requests into actions such as drafting proposals, applying pricing and policy guardrails, and routing approvals.',
            'Proactive Insights highlights early signals on pipeline health, policy deviations, and operational risk.',
            'Compliance Layer provides RBAC, audit logs, regional deploys for India and UAE, and built in PII controls.'
          ].map((item) => (
            <div key={item} className="card rounded-2xl border border-border-soft bg-white/[0.04] p-6">
              <p className="text-text-secondary">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <SolvorisModules />

      <section id="how-it-works" className="mt-24 space-y-8">
        <h2 className="text-3xl font-bold text-text-primary text-center">How It Works</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              title: 'Connect (data plane)',
              description:
                'Securely link CRM, ERP, file stores, chat, email, and ticketing. Normalize content, tag metadata, and index while preserving source permissions.'
            },
            {
              title: 'Understand (intelligence plane)',
              description:
                'Retrieve, reason, and verify using the Cognitive Memory Fabric that links documents, decisions, and prior outcomes.'
            },
            {
              title: 'Act (action plane)',
              description:
                'Execute tasks such as drafting proposals, submitting quotes, and creating POs or tickets. Route approvals and update systems with end to end traceability.'
            },
            {
              title: 'Learn (continuous improvement)',
              description:
                'Every answer, draft, and approval enriches enterprise memory and improves speed, accuracy, and policy compliance.'
            }
          ].map((step, index) => (
            <div key={step.title} className="card rounded-2xl border border-border-soft bg-surface-card p-6 space-y-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-accent-primary/20 text-sm font-semibold text-accent-primary">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-text-primary">{step.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="integrations" className="mt-24 space-y-8">
        <h2 className="text-3xl font-bold text-text-primary text-center">Integrations & Interoperability</h2>
        <div className="grid grid-cards mt-10 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((logo) => (
            <div key={logo} className="card flex h-16 items-center justify-center rounded-2xl border border-border-soft bg-white/[0.04] text-sm font-semibold text-text-secondary">
              {logo}
            </div>
          ))}
        </div>
        <ul className="mt-6 space-y-3 text-text-secondary">
          {[
            'APIs and webhooks for event driven automations and partner connectors',
            'Read only onboarding and staged write backs',
            'Environment tiering from sandbox to pilot to production'
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="security" className="mt-24 grid gap-6 md:grid-cols-3">
        {[
          {
            title: 'Access and identity',
            description: 'SSO and SAML and SCIM and granular RBAC and approval rules'
          },
          {
            title: 'Data protection',
            description: 'Encryption in transit and at rest, regional data residency for India and UAE, PII redaction, configurable retention'
          },
          {
            title: 'Auditability',
            description: 'End to end action logs and reason of record that captures what, why, and when with exportable evidence for audits'
          }
        ].map((item) => (
          <div key={item.title} className="card rounded-2xl border border-border-soft bg-surface-card p-6 space-y-3">
            <h3 className="text-xl font-semibold text-text-primary">{item.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </section>

      <section id="industries" className="mt-24">
        <h2 className="text-3xl font-bold text-text-primary text-center">Who Benefits Most</h2>
        <div className="grid grid-cards mt-10 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.title} className="card rounded-2xl border border-border-soft bg-surface-card p-6 space-y-4">
              <h3 className="text-xl font-semibold text-text-primary">{industry.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="proof" className="mt-24 space-y-8">
        <h2 className="text-3xl font-bold text-text-primary text-center">Outcomes You Can Measure</h2>
        <div className="grid grid-cards gap-6 sm:grid-cols-2">
          {proofStats.map((item) => (
            <div key={item} className="card rounded-2xl border border-border-soft bg-surface-card p-6 text-text-secondary text-sm leading-relaxed">
              {item}
            </div>
          ))}
        </div>
        <p className="text-center text-text-secondary">
          Proof Block
        </p>
      </section>

      <section id="final-cta" aria-label="Get Started" className="mt-24 rounded-3xl border border-border-soft bg-surface-card p-10 space-y-6 text-center">
        <h2 className="text-3xl font-bold text-text-primary">Final call to action — start in minutes</h2>
        <div className="space-y-4 text-text-secondary">
          <p>Launch your first automation today, discover instant insights this week, and watch your business processes scale in one unified platform.</p>
          <p>Experience cited answers, context aware proposals, and automated workflows in days.</p>
          <p>Cut turnaround time by up to 70 percent with enterprise grade controls and zero setup hassle.</p>
          <p>Transform scattered data into real time intelligence that acts for you.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            data-analytics="cta_final_visit"
            aria-label="Visit our website"
            className="btn-primary inline-flex items-center justify-center rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-primary/90 focus:outline-none focus:ring-2 focus:ring-accent-primary"
          >
            Visit our website
          </button>
          <Link
            href="#"
            data-analytics="cta_final_demo"
            aria-label="Book a demo"
            className="btn-secondary inline-flex items-center justify-center rounded-full border border-accent-primary px-6 py-3 text-sm font-semibold text-accent-primary transition hover:bg-accent-primary/10 focus:outline-none focus:ring-2 focus:ring-accent-primary"
          >
            Book a demo
          </Link>
        </div>
      </section>
    </main>
  )
}

