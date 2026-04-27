'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Služby', href: '#sluzby' },
  { label: 'Projekty', href: '#projekty' },
  { label: 'Kontakt', href: '#kontakt' },
]

function LHLogo({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="Lucky House logo"
      width={size}
      height={size}
      className="rounded-sm"
      priority
    />
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <LHLogo size={40} />
            <span
              className={cn(
                'text-xl font-bold tracking-tight transition-colors',
                scrolled ? 'text-charcoal' : 'text-white'
              )}
            >
              <span className="text-brand">LUCKY</span>HOUSE
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-medium transition-colors hover:text-brand',
                  scrolled ? 'text-charcoal' : 'text-white/90 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#kontakt"
              className="bg-brand hover:bg-brand-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              Cenovú ponuku
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={cn(
              'md:hidden p-2 rounded-lg transition-colors',
              scrolled
                ? 'text-charcoal hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Zatvoriť menu' : 'Otvoriť menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-4 pt-3 pb-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-charcoal font-medium hover:text-brand hover:bg-gray-50 transition-colors px-3 py-3 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#kontakt"
            className="mt-2 bg-brand hover:bg-brand-dark text-white font-semibold px-5 py-3 rounded-lg text-center transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Získať cenovú ponuku
          </Link>
        </div>
      </div>
    </nav>
  )
}
