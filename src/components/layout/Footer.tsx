'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github, ArrowUp } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'AI Transformation', href: '/ai-transformation' },
  { name: 'AI Engineering', href: '/ai-engineering' },
  { name: 'Intelligent Automations', href: '/intelligent-automations' },
  { name: 'Digital & IT Consulting', href: '/consulting-modernization' },
  { name: 'Hire Talent', href: '/hire-talent' },
  { name: 'MVP Studio', href: '/mvp-studio' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Industries', href: '/industries' },
  { name: 'Products', href: '/products' }
]

const contactDetails = [
  {
    label: 'Address',
    value: 'Noida, UP',
    href: 'https://maps.google.com/?q=Noida%20UP'
  },
  {
    label: 'Phone',
    value: '+91 8384016763',
    href: 'tel:+918384016763'
  },
  {
    label: 'Email',
    value: 'Prajwal@astrentech.com',
    href: 'mailto:Prajwal@astrentech.com'
  }
]

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/astrenox' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'GitHub', icon: Github, href: 'https://github.com' }
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#03050b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="py-16 border-b border-white/10">
          <div className="grid gap-12 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <a href="/" className="text-2xl font-semibold tracking-tight text-white">
                {/* Logo will be replaced with provided header/footer logo */}
                <span className="holo-fade neon-glow">
                  Astrenox
                </span>
              </a>
              <p className="text-sm leading-relaxed text-white/70">
                AI-first strategy and engineering partners helping teams modernize operations, build AI-native
                products, and deliver measurable outcomes at velocity.
              </p>
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary text-white flex items-center justify-center shadow-[0_12px_24px_rgba(34,211,238,0.25)] transition hover:opacity-95"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-3 text-sm text-white/70">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="transition hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Contact</h4>
              <ul className="space-y-3 text-sm text-white/70">
                {contactDetails.map((item) => (
                  <li key={item.label} className="space-y-1">
                    <p className="uppercase tracking-[0.3em] text-white/50 text-xs">{item.label}</p>
                    <a href={item.href} className="block transition hover:text-white">
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between py-6 text-sm text-white/50 gap-4"
        >
          <p>© {new Date().getFullYear()} Astrenox. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.25em]">
            <a href="/privacy" className="transition hover:text-white">
              Privacy
            </a>
            <a href="/legal" className="transition hover:text-white">
              Legal
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-white/70 transition hover:border-white/40 hover:text-white"
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </button>
        </motion.div>
      </div>
    </footer>
  )
}
