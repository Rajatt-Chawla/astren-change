'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay prevented:', error)
      })
    }
  }, [])

  return (
    <section className="relative isolate overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          opacity: 0.4, // Translucent video effect
        }}
      >
        <source src="/media/video-background.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-[1]" />

      {/* Blended bounding box background */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(1200px 600px at 60% 10%, rgba(79,70,229,0.20) 0%, rgba(0,0,0,0) 60%), radial-gradient(1000px 500px at 20% 30%, rgba(14,165,233,0.20) 0%, rgba(0,0,0,0) 55%)",
          mixBlendMode: "screen",
          filter: "blur(2px)",
        }}
      />

      <div className="relative z-[3] mx-auto max-w-7xl px-4 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative inline-block"
          >
            {/* GIF layer behind the headline */}
            <span
              aria-hidden
              className="absolute -inset-x-4 -inset-y-3 -z-10 rounded-2xl opacity-35"
              style={{
                backgroundImage: "url('/media/astro-noise-loop.gif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "saturate(120%) blur(0.2px)",
                mixBlendMode: "screen",
              }}
            />
            <h1 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-[-0.02em]">
              Creating Engineering Disruption with{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                AI-First Digital Transformation
              </span>
            </h1>
          </motion.div>

          {/* Single subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-base md:text-lg text-white/80 max-w-2xl mx-auto"
          >
            We diagnose bottlenecks, design the right AI, and scale execution from quick wins to enterprise rollouts combining strategy and hands-on engineering to deliver measurable outcomes.
          </motion.p>
        </div>

        {/* Key impact metrics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          aria-label="Key impact metrics"
          className="py-8"
        >
          <div className="mx-auto max-w-5xl px-4">
            <ul className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
              <li className="space-y-2">
                <div className="text-3xl font-extrabold tracking-tight">$1M+</div>
                <p className="text-sm text-white/70">recovered lost revenue</p>
              </li>
              <li className="space-y-2">
                <div className="text-3xl font-extrabold tracking-tight">80%</div>
                <p className="text-sm text-white/70">boost in clients' NPS</p>
              </li>
              <li className="space-y-2">
                <div className="text-3xl font-extrabold tracking-tight">3×</div>
                <p className="text-sm text-white/70">increase in clients' platform CTR</p>
              </li>
            </ul>
          </div>
        </motion.section>
      </div>
    </section>
  )
}
