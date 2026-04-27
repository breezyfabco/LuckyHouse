'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram, Send, CheckCircle } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="kontakt" className="py-20 lg:py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-brand/20 text-brand font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
              Kontakt
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kontaktujte nás
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto text-lg leading-relaxed">
              Radi vám poradíme a pripravíme nezáväznú cenovú ponuku priamo na
              mieru vášho projektu.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 sm:p-9"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <CheckCircle className="text-brand" size={56} strokeWidth={1.5} />
                <h3 className="text-white text-2xl font-bold">
                  Správa odoslaná!
                </h3>
                <p className="text-white/60">
                  Ďakujeme za váš záujem. Ozveme sa vám čo najskôr.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: '', email: '', phone: '', message: '' })
                  }}
                  className="mt-2 text-brand hover:text-brand-dark font-semibold underline underline-offset-4 transition-colors"
                >
                  Odoslať ďalšiu správu
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white/75 text-sm font-medium mb-1.5"
                    >
                      Meno a priezvisko <span className="text-brand">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange('name')}
                      className="w-full bg-white/8 border border-white/15 text-white placeholder-white/25 rounded-xl px-4 py-3 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition"
                      placeholder="Ján Novák"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-white/75 text-sm font-medium mb-1.5"
                    >
                      Telefón <span className="text-brand">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange('phone')}
                      className="w-full bg-white/8 border border-white/15 text-white placeholder-white/25 rounded-xl px-4 py-3 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition"
                      placeholder="+421 900 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white/75 text-sm font-medium mb-1.5"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    className="w-full bg-white/8 border border-white/15 text-white placeholder-white/25 rounded-xl px-4 py-3 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition"
                    placeholder="jan@email.sk"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white/75 text-sm font-medium mb-1.5"
                  >
                    Správa <span className="text-brand">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange('message')}
                    className="w-full bg-white/8 border border-white/15 text-white placeholder-white/25 rounded-xl px-4 py-3 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition resize-none"
                    placeholder="Popíšte váš projekt alebo otázku..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-base shadow-lg shadow-brand/20"
                >
                  <Send size={17} />
                  Odoslať správu
                </button>

                <p className="text-white/30 text-xs text-center">
                  Odoslaním súhlasíte so spracovaním osobných údajov.
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-white font-bold text-xl mb-6">
                Kontaktné údaje
              </h3>
              <div className="space-y-5">
                <a
                  href="tel:+421900000000"
                  className="flex items-center gap-4 group"
                  aria-label="Zavolajte nám"
                >
                  <div className="w-12 h-12 bg-brand/15 group-hover:bg-brand rounded-xl flex items-center justify-center transition-colors flex-shrink-0">
                    <Phone
                      className="text-brand group-hover:text-white transition-colors"
                      size={19}
                    />
                  </div>
                  <div>
                    <p className="text-white/45 text-xs uppercase tracking-wide">
                      Telefón
                    </p>
                    <p className="text-white font-semibold text-lg">
                      +421 900 000 000
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@luckyhouse.sk"
                  className="flex items-center gap-4 group"
                  aria-label="Napíšte nám email"
                >
                  <div className="w-12 h-12 bg-brand/15 group-hover:bg-brand rounded-xl flex items-center justify-center transition-colors flex-shrink-0">
                    <Mail
                      className="text-brand group-hover:text-white transition-colors"
                      size={19}
                    />
                  </div>
                  <div>
                    <p className="text-white/45 text-xs uppercase tracking-wide">
                      E-mail
                    </p>
                    <p className="text-white font-semibold text-lg">
                      info@luckyhouse.sk
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-brand" size={19} />
                  </div>
                  <div>
                    <p className="text-white/45 text-xs uppercase tracking-wide">
                      Adresa
                    </p>
                    <p className="text-white font-semibold text-lg">
                      Veľké Kostoľany
                    </p>
                    <p className="text-white/55 text-sm">Trnavský kraj, Slovensko</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social media */}
            <div>
              <h3 className="text-white font-bold text-xl mb-4">
                Sledujte nás
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/8 hover:bg-brand border border-white/10 rounded-xl px-4 py-3 transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook
                    className="text-white/70 group-hover:text-white transition-colors"
                    size={18}
                  />
                  <span className="text-white/70 group-hover:text-white text-sm font-medium transition-colors">
                    Facebook
                  </span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/8 hover:bg-brand border border-white/10 rounded-xl px-4 py-3 transition-colors group"
                  aria-label="Instagram"
                >
                  <Instagram
                    className="text-white/70 group-hover:text-white transition-colors"
                    size={18}
                  />
                  <span className="text-white/70 group-hover:text-white text-sm font-medium transition-colors">
                    Instagram
                  </span>
                </a>
              </div>
            </div>

            {/* Working hours */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-3">
                Pracovné hodiny
              </h4>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/55">Pondelok – Piatok</span>
                  <span className="text-white font-medium">7:00 – 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/55">Sobota</span>
                  <span className="text-white font-medium">8:00 – 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/55">Nedeľa</span>
                  <span className="text-white/40">Zatvorené</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
