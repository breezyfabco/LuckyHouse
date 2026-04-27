'use client'

import { motion } from 'framer-motion'
import {
  Home,
  Building2,
  Wrench,
  Layers,
  Ruler,
  Droplets,
  LayoutGrid,
  Paintbrush,
} from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Výstavba domov na kľúč',
    description:
      'Kompletná realizácia rodinných domov od základov až po odovzdanie kľúčov zákazníkovi.',
  },
  {
    icon: Building2,
    title: 'Hrubé stavby',
    description:
      'Murárske práce, betonáže a komplexné hrubé stavebné konštrukcie.',
  },
  {
    icon: Wrench,
    title: 'Rekonštrukcie domov',
    description:
      'Moderná prestavba a kompletná rekonštrukcia bytov a rodinných domov.',
  },
  {
    icon: Layers,
    title: 'Zatepľovanie fasád',
    description:
      'Profesionálne zateplenie budov pre úsporu energií a dlhodobý komfort bývania.',
  },
  {
    icon: Ruler,
    title: 'Anhydridové potery',
    description:
      'Liate samonivelačné podlahy s dokonalo rovným povrchom a rýchlym zaschnutím.',
  },
  {
    icon: Droplets,
    title: 'Strojové omietky',
    description:
      'Rýchle a kvalitné nanášanie vnútorných i vonkajších strojových omietok.',
  },
  {
    icon: LayoutGrid,
    title: 'Sadrokartónové práce',
    description:
      'Montáž priečok, podhľadov a SDK obkladov podľa aktuálnych noriem.',
  },
  {
    icon: Paintbrush,
    title: 'Maliarske práce',
    description:
      'Maľovanie interiérov a exteriérov s dôrazom na čistotu a dlhodobú zárukou.',
  },
]

export default function ServicesSection() {
  return (
    <section id="sluzby" className="py-20 lg:py-28 bg-white">
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
              Naše služby
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Čo pre vás vieme spraviť
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Poskytujeme komplexné stavebné služby s dôrazom na kvalitu,
              dodržanie termínov a spokojnosť každého zákazníka.
            </p>
          </motion.div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group bg-gray-50 hover:bg-brand rounded-2xl p-6 transition-all duration-300 cursor-default border border-transparent hover:border-brand/20 hover:shadow-xl hover:shadow-brand/10"
            >
              <div className="w-12 h-12 bg-brand/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <service.icon
                  className="text-brand group-hover:text-white transition-colors duration-300"
                  size={22}
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="text-charcoal group-hover:text-white font-bold text-base mb-2 transition-colors duration-300 leading-snug">
                {service.title}
              </h3>
              <p className="text-gray-500 group-hover:text-white/75 text-sm leading-relaxed transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
