'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Phone } from 'lucide-react'

const infoCards = [
  {
    icon: MapPin,
    title: 'Our Location',
    description: 'C-18, Sector 105, Noida, UP 201304'
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Prajwal@astrentech.com'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: '+91 8384016763'
  }
]

export default function GetInTouch() {
  return (
    <section className="relative py-24 bg-[#05060d]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(88,120,255,0.16),_transparent_55%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(circle_at_bottom,_rgba(34,211,238,0.08),_transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5 text-xs font-semibold tracking-[0.3em] uppercase text-white/70">
            Contact
          </span>
          <h2 className="text-h1 font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-white/70">
            Contact us for a quote, a project discussion, or to explore how AI-first execution can unlock growth for your team.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="bg-white/[0.04] border border-white/10 rounded-3xl p-10 shadow-[0_24px_60px_rgba(15,23,42,0.45)] backdrop-blur"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="text-sm text-white/80">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent-secondary/50 focus:border-transparent transition"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="text-sm text-white/80">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent-secondary/50 focus:border-transparent transition"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="contact-phone" className="text-sm text-white/80">
                Phone Number
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="+91 80000 00000"
                className="mt-2 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent-secondary/50 focus:border-transparent transition w-full"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="contact-message" className="text-sm text-white/80">
                Your Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us about your project..."
                rows={5}
                className="mt-2 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent-secondary/50 focus:border-transparent transition w-full resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-8 w-full rounded-2xl bg-gradient-to-r from-accent-primary to-accent-secondary py-4 text-lg font-semibold text-white shadow-[0_18px_45px_rgba(56,189,248,0.25)] transition hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-accent-secondary/40"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {infoCards.map((card, index) => (
              <div
                key={card.title}
                className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur hover:border-accent-secondary/40 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-[0_12px_18px_rgba(34,211,238,0.35)]">
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-white/70 leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] p-6 backdrop-blur">
              <h4 className="text-white font-semibold text-lg mb-2">Office Hours</h4>
              <p className="text-white/70">Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
              <p className="text-white/70 mt-1">We typically respond within one business day.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

