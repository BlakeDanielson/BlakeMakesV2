import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { BuyMeCoffeeWidget } from "@/components/buy-me-coffee-widget"

const inter = Inter({ subsets: ["latin"] })

// Update metadata to include music
export const metadata: Metadata = {
  title: "Blake Danielson | AI Product Developer & Music Producer",
  description:
    "Portfolio of Blake Danielson, an AI product developer and music producer building thoughtful AI for human experiences and creating original music compositions.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
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
        {children}
        <BuyMeCoffeeWidget />
      </body>
    </html>
  )
}
