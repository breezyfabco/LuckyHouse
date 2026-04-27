'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'

const projects = [
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
    alt: 'Moderný rodinný dom s terasou',
    title: 'Rodinný dom – Veľké Kostoľany',
    category: 'Výstavba na kľúč',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    alt: 'Luxusná vila s bazénom',
    title: 'Vila – Trnavský kraj',
    category: 'Výstavba na kľúč',
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    alt: 'Moderný dom s garážou',
    title: 'Rodinný dom – Rekonštrukcia',
    category: 'Rekonštrukcia',
  },
  {
    src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop',
    alt: 'Dom s vonkajším bazénom',
    title: 'Rodinný dom s bazénom',
    category: 'Výstavba na kľúč',
  },
  {
    src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop',
    alt: 'Klasický rodinný dom',
    title: 'Klasický rodinný dom',
    category: 'Hrubá stavba',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    alt: 'Moderná architektúra – fasáda',
    title: 'Zateplenie fasády',
    category: 'Zatepľovanie',
  },
]

export default function PortfolioSection() {
  return (
    <section id="projekty" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-brand/10 text-brand font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
              Portfólio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Naše Projekty
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Prezrite si ukážky našej práce a nechajte sa inšpirovať
              možnosťami, ktoré vám ponúkame.
            </p>
          </motion.div>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category pill */}
              <div className="absolute top-4 left-4 bg-brand text-white text-xs font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                {project.category}
              </div>

              {/* Eye icon */}
              <div className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                <Eye size={16} className="text-white" />
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-semibold text-lg leading-tight">
                  {project.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal/80 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            Máte záujem o podobný projekt?
          </a>
        </motion.div>
      </div>
    </section>
  )
}
