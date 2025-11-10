'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, Award, GraduationCap, BadgeCheck } from 'lucide-react'

const certifications = [
  {
    icon: ShieldCheck,
    title: 'ISO 27001 Ready',
    description: 'We enforce security-by-design practices aligned with ISO 27001 controls across infrastructure, data, and AI workloads.'
  },
  {
    icon: Award,
    title: 'AWS & Azure Partner Talent',
    description: 'Our engineering pods include certified builders across AWS, Azure, and Google Cloud, enabling rapid, compliant deployment.'
  },
  {
    icon: GraduationCap,
    title: 'Enterprise AI Academy',
    description: 'Astrentech’s enablement programs certify internal champions on safe AI adoption, prompt engineering, and automation playbooks.'
  },
  {
    icon: BadgeCheck,
    title: 'Responsible AI Framework',
    description: 'We adhere to SOC 2 inspired governance, model documentation, and bias testing standards across every AI engagement.'
  }
]

const recognitions = [
  {
    name: 'Ministry of Corporate Affairs',
    logo: '/assets/images/certifications/mca.png',
    width: 180,
    height: 80
  },
  {
    name: 'DPIIT Startup India',
    logo: '/assets/images/certifications/dpiit.png',
    width: 180,
    height: 80
  },
  {
    name: 'INDIAai Initiative',
    logo: '/assets/images/certifications/india-ai.png',
    width: 180,
    height: 80
  },
  {
    name: 'Government e-Marketplace (GeM)',
    logo: '/assets/images/certifications/gem.png',
    width: 200,
    height: 80
  }
]

export default function Certifications() {
  return (
    <section className="py-24 bg-[#05070f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-white/15 bg-white/5 text-xs font-semibold tracking-[0.35em] uppercase text-white/70">
            Trust &amp; Governance
          </span>
          <h2 className="mt-6 text-h1 font-bold text-white">Certifications &amp; Standards</h2>
          <p className="mt-4 text-lg text-white/70">
            Our delivery model pairs high-velocity engineering with enterprise-grade security, compliance, and responsible AI practices.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_24px_60px_rgba(15,23,42,0.45)] backdrop-blur hover:border-accent-secondary/35 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-accent-primary via-sky-400 to-accent-secondary flex items-center justify-center shadow-[0_12px_28px_rgba(34,211,238,0.2)]">
                <cert.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{cert.title}</h3>
              <p className="mt-3 text-white/70 leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/60 mb-3">Government Recognitions</p>
              <h3 className="text-2xl font-semibold text-white">Registered &amp; Trusted by National Programs</h3>
              <p className="mt-3 text-white/60 max-w-xl">
                Astrentech is recognized by leading Government of India programs for corporate compliance, innovation, and responsible AI adoption.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center w-full">
              {recognitions.map((item) => (
                <div
                  key={item.name}
                  className="relative h-16 w-full max-w-[180px] flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 px-4 py-3"
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={item.width}
                    height={item.height}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

