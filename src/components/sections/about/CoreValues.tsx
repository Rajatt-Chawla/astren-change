const values = [
  { 
    title: "Client-First Approach", 
    desc: "Every solution is tailored to deliver measurable value and ROI for our clients.", 
    icon: "/assets/icons/freepik/client-focus.svg" 
  },
  { 
    title: "Technical Excellence", 
    desc: "We maintain the highest standards in AI development and engineering practices.", 
    icon: "/assets/icons/freepik/engineering-ai.svg" 
  },
  { 
    title: "Continuous Learning", 
    desc: "We stay at the forefront of AI innovation through constant research and development.", 
    icon: "/assets/icons/freepik/learning.svg" 
  },
  { 
    title: "Collaborative Spirit", 
    desc: "We believe the best solutions emerge from true partnerships and open communication.", 
    icon: "/assets/icons/freepik/collaboration.svg" 
  },
  { 
    title: "Ethical AI", 
    desc: "We're committed to developing AI responsibly, with fairness and transparency.", 
    icon: "/assets/icons/freepik/ethical-ai.svg" 
  },
  { 
    title: "Results-Driven", 
    desc: "We measure success by the tangible impact we create for our clients' businesses.", 
    icon: "/assets/icons/freepik/results.svg" 
  },
]

export default function CoreValues() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">
        <span className="metallic-text">Core Values</span>
      </h2>
      <p className="mt-2 text-center text-white/70">
        The principles that guide everything we do
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((v) => (
          <div 
            key={v.title} 
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center hover:border-sky-400/40 transition group"
          >
            <img 
              src={v.icon} 
              alt={v.title} 
              className="mx-auto mb-3 h-14 w-14 object-contain opacity-90 group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.25)] transition" 
            />
            <h3 className="font-semibold mb-2 text-base">{v.title}</h3>
            <p className="text-sm text-white/75 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
