import type { Metadata } from 'next'
import { Mail, Phone, ArrowRight, Building2, Briefcase, GraduationCap, HeartPulse, Truck, Factory, Cpu, Landmark } from "lucide-react"
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Industries - AI Solutions for Your Sector | Astrenox',
  description: 'Industry-focused AI transformation solutions. We deliver proven industrial solutions to targeted sector challenges across Consumer, FinTech, Healthcare, Manufacturing, and more.',
  keywords: ['AI solutions by industry', 'industry AI transformation', 'sector-specific AI', 'fintech AI', 'healthcare AI', 'manufacturing AI'],
}

const INDUSTRIES = [
  {
    title: "Consumer",
    copy: "We assist businesses in delivering engaging customer experiences, optimizing operations and staying ahead of evolving market trends to reach larger audiences.",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    title: "Financial services · FinTech",
    copy: "We assist financial institutions in enhancing security, improving customer interactions and streamlining processes to foster trust and accessibility.",
    icon: <Landmark className="h-5 w-5" />,
  },
  {
    title: "Technology · Media · Telecom",
    copy: "We work with technology driven businesses to enhance efficiency, improve collaboration and accelerate growth in a competitive digital landscape.",
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    title: "Education",
    copy: "We work with educational institutions and EdTech providers to make learning more accessible, engaging and efficient for students, educators and administrators alike.",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    title: "Healthcare",
    copy: "We support healthcare providers in improving patient care, optimizing administrative processes and maintaining compliance with industry standards.",
    icon: <HeartPulse className="h-5 w-5" />,
  },
  {
    title: "Transportation",
    copy: "We help transportation and logistics companies improve operational efficiency, enhance coordination and optimize movement across global supply chains.",
    icon: <Truck className="h-5 w-5" />,
  },
  {
    title: "Energy",
    copy: "We help energy organizations improve operational efficiency, manage resources effectively and meet evolving industry and environmental standards.",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    title: "Manufacturing",
    copy: "We partner with manufacturers to optimize production workflows, enhance supply-chain coordination and improve overall efficiency to meet growing demand.",
    icon: <Factory className="h-5 w-5" />,
  },
]

export default function IndustriesPage() {
  return (
    <main className="relative min-h-screen bg-bg-base">
      <Navigation />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-14 pt-24">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">Industry</span> focused
          <br />
          Targeted outcomes
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
          We know your business, enabling us to add value with proven industrial solutions to targeted sector challenges.
        </p>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((it) => (
            <article
              key={it.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-sky-400/40"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg border border-sky-400/40 p-2 text-sky-400">{it.icon}</div>
                <h3 className="text-lg font-semibold">{it.title}</h3>
              </div>
              <p className="text-sm text-white/75 leading-relaxed">{it.copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-indigo-500/20">
          <div>
            <h4 className="text-xl md:text-2xl font-semibold">We specialize in your industry.</h4>
            <p className="mt-1 text-white/90">
              Challenge us to deliver targeted solutions that address your business needs.
            </p>
          </div>
          <a
            href="/get-started"
            className="inline-flex items-center gap-2 rounded-full bg-black/20 px-5 py-2.5 font-medium hover:bg-black/30 transition whitespace-nowrap"
          >
            Let&apos;s talk <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Contact band */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h5 className="text-lg font-semibold">Contact us</h5>
            <p className="mt-1 text-white/70 max-w-xl">
              Tell us about your use case and we&apos;ll share relevant work and a plan in days, not weeks.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="mailto:Prajwal@astrentech.com" className="inline-flex items-center gap-2 text-white/90 hover:underline">
              <Mail className="h-4 w-4" /> Prajwal@astrentech.com
            </a>
            <a href="tel:+918384016763" className="inline-flex items-center gap-2 text-white/90 hover:underline">
              <Phone className="h-4 w-4" /> +91 8384016763
            </a>
          </div>
        </div>

        {/* Footer quick links */}
        <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/60">
          <a href="/industries" className="hover:text-white transition">Industries</a>
          <a href="/ai-transformation" className="hover:text-white transition">AI Transformation</a>
          <a href="/products" className="hover:text-white transition">Products</a>
          <a href="/about-us" className="hover:text-white transition">About Us</a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

