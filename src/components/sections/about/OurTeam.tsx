export default function OurTeam() {
  const teamStats = [
    {
      number: "50+",
      label: "AI Engineers & Data Scientists",
      description: "Expert practitioners with deep ML/AI expertise"
    },
    {
      number: "15+",
      label: "Years Combined Experience",
      description: "Decades of collective knowledge in AI and software"
    },
    {
      number: "100+",
      label: "Projects Delivered",
      description: "Successful AI implementations across industries"
    },
    {
      number: "25+",
      label: "Countries Served",
      description: "Global reach with local expertise"
    }
  ]

  return (
    <section className="py-20 bg-bg-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="metallic-text">Our Team</span>
          </h2>
          <p className="text-xl text-text-secondary text-center mb-16 max-w-3xl mx-auto">
            A diverse group of AI experts, engineers, and strategists united by a passion for innovation
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-accent-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-text-primary mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-text-secondary">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-bg-base p-8 md:p-12 rounded-2xl border border-border-subtle">
            <h3 className="text-2xl font-bold text-text-primary mb-4 text-center">
              Why Our Team Stands Out
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <h4 className="text-lg font-semibold text-accent-blue mb-2">Diverse Expertise</h4>
                <p className="text-text-secondary">
                  From machine learning to cloud architecture, our team covers the full AI technology stack.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-accent-purple mb-2">Industry Veterans</h4>
                <p className="text-text-secondary">
                  Our leaders have built AI systems at leading tech companies and Fortune 500 organizations.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-accent-teal mb-2">Continuous Growth</h4>
                <p className="text-text-secondary">
                  We invest heavily in training and development to stay ahead of the AI curve.
                </p>
              </div>
            </div>

            {/* Client Logos */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
                {[
                  { name: "Client 1", src: "/logos/bw/client1.svg" },
                  { name: "Client 2", src: "/logos/bw/client2.svg" },
                  { name: "Client 3", src: "/logos/bw/client3.svg" },
                  { name: "Client 4", src: "/logos/bw/client4.svg" },
                  { name: "Client 5", src: "/logos/bw/client5.svg" },
                  { name: "Client 6", src: "/logos/bw/client6.svg" },
                ].map((l) => (
                  <img
                    key={l.name}
                    src={l.src}
                    alt={l.name}
                    className="mx-auto h-8 w-auto opacity-70 grayscale contrast-125 transition hover:opacity-100 hover:grayscale-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

