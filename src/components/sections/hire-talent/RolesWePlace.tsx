'use client'

import { motion } from 'framer-motion'
import { Brain, Database, Target, Code, Cloud, Zap, Users } from 'lucide-react'

export default function RolesWePlace() {
  const roleCategories = [
    {
      icon: Brain,
      title: 'AI/ML & GenAI',
      roles: ['Applied AI Engineer', 'Agent Engineer', 'RAG Specialist', 'MLOps', 'Computer Vision', 'NLP']
    },
    {
      icon: Database,
      title: 'Data',
      roles: ['Analytics Engineer', 'Data Engineer', 'BI Developer', 'Data Scientist']
    },
    {
      icon: Target,
      title: 'Product & Design',
      roles: ['Product Manager', 'Product Designer', 'UX Writer', 'Researcher']
    },
    {
      icon: Code,
      title: 'Full-Stack & Platform',
      roles: ['Frontend (React/Next)', 'Backend (Node/Python/Go)', 'Full-Stack', 'API Engineer']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      roles: ['SRE', 'DevOps', 'Platform Engineer', 'Release/CI-CD']
    },
    {
      icon: Zap,
      title: 'Automation',
      roles: ['Workflow/RPA Engineer', 'Integration Engineer', 'QA Automation']
    },
    {
      icon: Users,
      title: 'Leadership (fractional)',
      roles: ['Head of Engineering', 'Head of Data/AI', 'CTO', 'Architect']
    }
  ]

  const pods = [
    {
      name: 'Forward-Deployed Squad',
      description: 'TPM plus two to six engineers embedded on a forward-deployed workstream'
    },
    {
      name: 'Data/AI Pod',
      description: 'Specialized pod for analytics, data platform, and AI initiatives'
    },
    {
      name: 'Platform Pod',
      description: 'Infrastructure, DevOps, and platform engineering pod to stabilize core systems'
    }
  ]

  return (
    <section className="py-24 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/18 border border-accent-primary/35 text-accent-primary text-sm font-semibold mb-6">
            👥 Roles We Place
          </div>
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            Builders for every layer
            <span className="block gradient-text">of your stack</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Builders for every layer of your stack—from applied AI to product leadership and managed pods that own entire workstreams.
          </p>
        </motion.div>

        {/* Role Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {roleCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-card border border-border-soft rounded-xl p-6 hover:shadow-float transition-all duration-med hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6 text-accent-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-text-primary mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                    <span className="text-sm text-text-secondary">{role}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pods Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-surface-card border border-border-soft rounded-xl p-8"
        >
          <h3 className="text-xl font-bold text-text-primary mb-6 text-center">Managed Pods</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pods.map((pod, index) => (
              <div key={pod.name} className="text-center">
                <div className="w-16 h-16 bg-accent-secondary/14 border border-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent-secondary" />
                </div>
                <h4 className="font-bold text-text-primary mb-2">{pod.name}</h4>
                <p className="text-sm text-text-secondary">{pod.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
