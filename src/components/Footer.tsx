import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

function LHLogo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lucky House logo"
    >
      <rect width="100" height="100" rx="14" fill="#ED1C24" />
      <polyline
        points="18,45 50,17 82,45"
        stroke="white"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect x="65" y="19" width="9" height="17" fill="white" />
      <rect x="19" y="51" width="11" height="31" fill="white" />
      <rect x="19" y="71" width="23" height="11" fill="white" />
      <rect x="52" y="51" width="11" height="31" fill="white" />
      <rect x="76" y="51" width="11" height="31" fill="white" />
      <rect x="52" y="63" width="35" height="9" fill="white" />
    </svg>
  )
}

const navLinks = [
  { label: 'Služby', href: '#sluzby' },
  { label: 'Projekty', href: '#projekty' },
  { label: 'Kontakt', href: '#kontakt' },
]

const services = [
  'Výstavba domov na kľúč',
  'Hrubé stavby',
  'Rekonštrukcie domov',
  'Zatepľovanie fasád',
  'Anhydridové potery',
  'Strojové omietky',
  'Sadrokartónové práce',
  'Maliarske práce',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal border-t border-white/8">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <LHLogo size={40} />
              <span className="text-xl font-bold text-white">
                <span className="text-brand">LUCKY</span>HOUSE
              </span>
            </Link>
            <p className="text-white/45 text-sm leading-relaxed mb-5">
              Profesionálna stavebná firma s dlhoročnými skúsenosťami v oblasti
              výstavby a rekonštrukcie rodinných domov.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+421900000000"
                className="flex items-center gap-2 text-white/45 hover:text-brand text-sm transition-colors"
              >
                <Phone size={14} />
                +421 900 000 000
              </a>
              <a
                href="mailto:info@luckyhouse.sk"
                className="flex items-center gap-2 text-white/45 hover:text-brand text-sm transition-colors"
              >
                <Mail size={14} />
                info@luckyhouse.sk
              </a>
              <div className="flex items-center gap-2 text-white/45 text-sm">
                <MapPin size={14} className="flex-shrink-0" />
                Veľké Kostoľany, Trnavský kraj
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Navigácia
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/45 hover:text-brand text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Naše služby
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#sluzby"
                    className="text-white/45 hover:text-brand text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-brand rounded-full flex-shrink-0" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-sm">
            © {year} Lucky House s.r.o. Všetky práva vyhradené.
          </p>
          <p className="text-white/20 text-xs">
            Veľké Kostoľany · Trnavský kraj · Slovensko
          </p>
        </div>
      </div>
    </footer>
  )
}
