import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Instrument_Serif } from "next/font/google"
import "./globals.css"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-instrument-serif",
})

export const metadata: Metadata = {
  title: "Privia - Sistema Operativo para Barrios Privados y Country Clubs de Lujo",
  description: "Privia es el sistema operativo que potencia comunidades exclusivas, country clubs y barrios privados. Tecnología de lujo para la máxima seguridad y experiencia residencial premium en Punta del Este.",
  keywords: [
    "Privia",
    "barrio privado",
    "country club",
    "country",
    "club",
    "seguridad",
    "exclusividad", 
    "lujo",
    "comunidades premium",
    "Punta del Este",
    "sistema operativo residencial",
    "software exclusivo",
    "gestión comunitaria",
    "tecnología residencial"
  ],
  authors: [{ name: "Privia" }],
  creator: "Privia",
  publisher: "Privia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_UY',
    url: 'https://privia.com',
    siteName: 'Privia',
    title: 'Privia - Sistema Operativo para Barrios Privados y Country Clubs de Lujo',
    description: 'El sistema operativo que potencia comunidades exclusivas, country clubs y barrios privados. Tecnología de lujo para la máxima seguridad y experiencia residencial premium.',
    images: [
      {
        url: '/images/portada_landing_pv.jpg',
        width: 1200,
        height: 630,
        alt: 'Privia - Sistema Operativo para Comunidades de Lujo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privia - Sistema Operativo para Barrios Privados y Country Clubs',
    description: 'Tecnología de lujo para comunidades exclusivas, country clubs y barrios privados. Seguridad y experiencia premium.',
    images: ['/images/portada_landing_pv.jpg'],
  },
  alternates: {
    canonical: 'https://privia.com',
    languages: {
      'es-UY': 'https://privia.com',
      'es': 'https://privia.com',
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Technology',
  classification: 'Luxury Residential Technology',
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Performance and Resource Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preload critical images */}
        <link rel="preload" href="/images/portada_landing_pv.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/PriviaIndividualFinal.svg" as="image" type="image/svg+xml" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/PriviaIndividualFinal.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/PriviaIndividualFinal.svg" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#F5A35B" />
        <meta name="color-scheme" content="dark light" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="UY-MA" />
        <meta name="geo.placename" content="Punta del Este" />
        <meta name="geo.position" content="-34.9677;-54.9467" />
        <meta name="ICBM" content="-34.9677, -54.9467" />
        
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-instrument-serif: ${instrumentSerif.variable};
}
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://privia.com/#organization",
                  "name": "Privia",
                  "url": "https://privia.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://privia.com/images/PriviaIndividualFinal.svg",
                    "width": 200,
                    "height": 200
                  },
                  "description": "Sistema operativo exclusivo para comunidades de lujo, country clubs y barrios privados. Tecnología premium para la gestión residencial de élite.",
                  "sameAs": [
                    "https://linkedin.com/company/privia",
                    "https://twitter.com/privia"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "info@privia.com",
                    "contactType": "customer service",
                    "areaServed": "UY",
                    "availableLanguage": "Spanish"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Punta del Este",
                    "addressCountry": "UY"
                  }
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://privia.com/#localbusiness",
                  "name": "Privia",
                  "image": "https://privia.com/images/portada_landing_pv.jpg",
                  "description": "Sistema operativo exclusivo para barrios privados, country clubs y comunidades de lujo. Seguridad, exclusividad y tecnología premium.",
                  "url": "https://privia.com",
                  "priceRange": "Premium",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Punta del Este",
                    "addressRegion": "Maldonado",
                    "addressCountry": "UY"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": -34.9677,
                    "longitude": -54.9467
                  },
                  "telephone": "+598-XXXX-XXXX",
                  "email": "info@privia.com",
                  "openingHours": "Mo-Fr 09:00-18:00",
                  "areaServed": {
                    "@type": "GeoCircle",
                    "geoMidpoint": {
                      "@type": "GeoCoordinates",
                      "latitude": -34.9677,
                      "longitude": -54.9467
                    },
                    "geoRadius": "50000"
                  }
                },
                {
                  "@type": "Service",
                  "@id": "https://privia.com/#service",
                  "name": "Sistema Operativo Residencial Premium",
                  "provider": {
                    "@id": "https://privia.com/#organization"
                  },
                  "description": "Plataforma tecnológica exclusiva para la gestión de barrios privados, country clubs y comunidades de lujo. Automatización de operaciones, seguridad avanzada y experiencia residencial premium.",
                  "serviceType": "Residential Technology Management",
                  "areaServed": "Uruguay",
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Servicios de Gestión Residencial Premium",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Gestión de Amenities",
                          "description": "Sistema automatizado para reservas y gestión de amenities en country clubs y barrios privados"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Control de Acceso y Seguridad",
                          "description": "Plataforma avanzada de seguridad para comunidades exclusivas"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Experiencia del Residente",
                          "description": "Aplicaciones y servicios para elevar la experiencia residencial de lujo"
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://privia.com/#website",
                  "url": "https://privia.com",
                  "name": "Privia",
                  "description": "Sistema operativo para barrios privados y country clubs de lujo",
                  "publisher": {
                    "@id": "https://privia.com/#organization"
                  },
                  "inLanguage": "es-UY"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable}`}>{children}</body>
    </html>
  )
}
