import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Scheherazade_New } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { AuthProvider } from "@/contexts/auth-context"
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/seo"

const inter = Inter({ subsets: ["latin"] })

// Arabic text (ayahs, font-arabic): self-hosted by next/font, exposed as --font-arabic for tailwind.
// It has the Arabic ligatures (e.g. U+FDFB) that Inter lacks.
const scheherazade = Scheherazade_New({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-arabic",
})

// One viewport tag for the whole site. Pinch-zoom stays on so readers can enlarge text.
export const viewport: Viewport = {
  themeColor: "#10b981",
  width: "device-width",
  initialScale: 1,
}

// Search engines read this as a description of the app itself.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: SITE_NAME,
  alternateName: "Islamic Quiz Rivalry App",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: 0, priceCurrency: "USD" },
  inLanguage: "en",
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s · ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  keywords:
    "Quran vocabulary, Arabic learning, interactive games, Islamic education, Quranic words, language learning, Arabic flashcards, Infographic, Quiz, Surah vocabulary",
  manifest: "/manifest.json",
  other: {
    "mobile-web-app-capable": "yes",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "IQRA",
  },
  // The share image comes from app/opengraph-image.tsx and app/twitter-image.tsx.
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html prefix="og: https://ogp.me/ns#" lang="en" className={`${scheherazade.variable} overflow-x-clip`} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className={`${inter.className} w-full min-h-screen overflow-x-clip bg-background text-foreground`}>
        <div>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <AuthProvider>
          <div className="flex min-h-dvh w-full flex-col">
            <Header />
            <main className="w-full flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </AuthProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
