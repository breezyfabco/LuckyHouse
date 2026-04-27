import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lucky House – Stavebná firma Veľké Kostoľany',
  description:
    'Výstavba rodinných domov na kľúč, rekonštrukcie a stavebné práce v trnavskom kraji a celom Slovensku. Profesionálna kvalita, odborné poradenstvo.',
  keywords: [
    'Stavebná firma Veľké Kostoľany',
    'Výstavba rodinných domov Slovensko',
    'stavba domu na kľúč',
    'rekonštrukcia domu',
    'zatepľovanie fasád',
    'Lucky House',
    'hrubá stavba',
    'strojové omietky',
    'sadrokartón',
  ],
  authors: [{ name: 'Lucky House' }],
  openGraph: {
    title: 'Lucky House – Stavebná firma Veľké Kostoľany',
    description:
      'Profesionálna výstavba domov a stavebné práce v trnavskom kraji a okolí.',
    locale: 'sk_SK',
    type: 'website',
    url: 'https://luckyhouse.sk',
    siteName: 'Lucky House',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucky House – Stavebná firma Veľké Kostoľany',
    description: 'Profesionálna výstavba domov a stavebné práce v trnavskom kraji.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
