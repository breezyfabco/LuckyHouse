'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const stats = [
  { value: '10+', label: 'Rokov skúseností' },
  { value: '150+', label: 'Dokončených projektov' },
]

export default function HeroSection() {
  return (
    <section
      id="uvod"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop"
        alt="Moderný rodinný dom – Lucky House"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/65 to-charcoal/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow-lg"
          >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Profesionálna kvalita prác
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
          >
            Staviame váš domov
            <br />
            <span className="text-brand">s precíznosťou.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed"
          >
            Odborné poradenstvo a profesionálna kvalita prác v Trnavskom kraji a
            okolí.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg shadow-brand/30"
            >
              Získať cenovú ponuku
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#sluzby"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all text-lg"
            >
              Naše služby
            </Link>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="mt-16 flex flex-col sm:flex-row gap-8 sm:gap-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="w-1 h-12 bg-brand rounded-full hidden sm:block" />
              <div>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#sluzby"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        aria-label="Scrollovať nadol"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  )
}
