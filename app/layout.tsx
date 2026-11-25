import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Noto_Sans_Bengali, Noto_Sans_Tamil, Reem_Kufi, Scheherazade_New } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { AuthProvider } from "@/contexts/auth-context"
import I18nProvider from "@/components/i18n/i18n-provider"
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/seo"

const inter = Inter({ subsets: ["latin"] })

// Inter has no Bengali or Tamil letters. These two fill in for বাংলা and தமிழ் text only: the
// browser downloads a file just when a page shows those scripts, so English readers pay nothing.
const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  display: "swap",
  preload: false,
  variable: "--font-bengali",
})
const notoTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  display: "swap",
  preload: false,
  variable: "--font-tamil",
})

// Arabic text (ayahs, font-arabic): self-hosted by next/font, exposed as --font-arabic for tailwind.
// It has the Arabic ligatures (e.g. U+FDFB) that Inter lacks.
const scheherazade = Scheherazade_New({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-arabic",
})

// Every heading (h1-h3, font-heading) and the hero's اقرأ mark: loaded once here as --font-heading.
// Body text stays Inter.
const reemKufi = Reem_Kufi({
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-heading",
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
    <html prefix="og: https://ogp.me/ns#" lang="en" className={`${scheherazade.variable} ${reemKufi.variable} ${notoBengali.variable} ${notoTamil.variable} overflow-x-clip`} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body
        style={{
          fontFamily: `${inter.style.fontFamily}, var(--font-bengali), var(--font-tamil), ui-sans-serif, system-ui, sans-serif`,
        }}
        className={`w-full min-h-screen overflow-x-clip bg-background text-foreground`}
      >
        <div>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <I18nProvider>
        <AuthProvider>
          <div className="flex min-h-dvh w-full flex-col">
            <Header />
            <main className="w-full flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </AuthProvider>
        </I18nProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
