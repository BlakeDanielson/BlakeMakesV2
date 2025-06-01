import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { BuyMeCoffeeWidget } from "@/components/buy-me-coffee-widget"
import { PerformanceMonitor } from "@/components/performance-monitor"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

// Update metadata to include music
export const metadata: Metadata = {
  title: "Blake Danielson | AI Product Developer & Music Producer",
  description:
    "Portfolio of Blake Danielson, an AI product developer and music producer building thoughtful AI for human experiences and creating original music compositions.",
  keywords: [
    "Blake Danielson",
    "AI Product Developer", 
    "Music Producer",
    "Product Manager",
    "Full Stack Developer",
    "BLVKE",
    "Portfolio",
    "Consulting"
  ],
  authors: [{ name: "Blake Danielson" }],
  creator: "Blake Danielson",
  publisher: "Blake Danielson",
  metadataBase: new URL('https://blakemakesthings.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  other: {
    'contact:email': 'blakejdanielson@gmail.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blakemakesthings.com', // Replace with your actual domain
    siteName: 'Blake Danielson Portfolio',
    title: 'Blake Danielson | AI Product Developer & Financial Analyst',
    description: 'Portfolio of Blake Danielson, an AI product developer financial analyst, and music producer ',
    images: [
      {
        url: '/og-image.jpg', // Create this 1200x630 image and place in public folder
        width: 1200,
        height: 630,
        alt: 'Blake Danielson - AI Product Developer & Financial Analyst',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@BLVKEmusic', // Replace with your actual Twitter handle or remove if no Twitter
    creator: '@BLVKEmusic', // Replace with your actual Twitter handle or remove if no Twitter
    title: 'Blake Danielson | AI Product Developer & Music Producer',
    description: 'Portfolio of Blake Danielson, an AI product developer financial analyst, and music producer ',
    images: ['/og-image.jpg'], // Same image as Open Graph
  },
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Blake Danielson'
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#8b5cf6' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark smooth-scroll">
      <head>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script id="google-adsense-init" strategy="afterInteractive">
          {`
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}",
              enable_page_level_ads: true
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <PerformanceMonitor />
        {children}
        <BuyMeCoffeeWidget />
        <Toaster />
      </body>
    </html>
  )
}
