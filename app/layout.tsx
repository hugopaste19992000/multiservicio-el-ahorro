import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Multiservicio El Ahorro | Alineación, Balanceo y Suspensión en Machachi',
  description: 'Multiservicio el Ahorro en MACHACHI - Expertos en alineación computarizada, balanceo de llantas y enllantaje. Servicio profesional para autos, camionetas y vehículos pesados. Atención personalizada, precios justos y garantía en todos nuestros trabajos.',
  keywords: 'alineación y balanceo Ecuador, taller automotriz, balanceo de llantas, alineación computarizada, enllantaje, revisión de suspensión, autos, camionetas, vehículos pesados, multiservicio el ahorro, taller mecánico, servicio automotriz',
  generator: 'v0.app',
  openGraph: {
    title: 'Multiservicio el Ahorro | Alineación y Balanceo Profesional',
    description: 'Expertos en alineación computarizada, balanceo de llantas y enllantaje. Servicio profesional para todo tipo de vehículos.',
    type: 'website',
    locale: 'es_EC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multiservicio el Ahorro | Alineación y Balanceo',
    description: 'Expertos en alineación computarizada, balanceo de llantas y enllantaje.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
