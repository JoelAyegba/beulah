import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Suspense } from "react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Beulah walk of hope foundation",
  description:
    "Beulah walk of hope foundation is dedicated to empowering women through advocacy, skill development, and social impact initiatives across Nigeria and Africa.",
  metadataBase: new URL("https://www.beulahwalkofhopefoundation.org"),
  openGraph: {
    title: "Beulah walk of hope foundation",
    description:
      "Beulah walk of hope foundation is dedicated to empowering women through advocacy, skill development, and social impact initiatives across Nigeria and Africa.",
    image: "/placeholder-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${playfair.variable} overflow-x-hidden`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          {children}
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
