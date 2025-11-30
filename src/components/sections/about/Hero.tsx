export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-bg-dark to-bg-base overflow-hidden">
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="metallic-text">About Astrenox</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
            Building the future through AI innovation and digital transformation
          </p>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-purple rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-teal rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
    </section>
  )
}

