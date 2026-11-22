import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { AuthProvider } from "@/contexts/auth-context"

const inter = Inter({ subsets: ["latin"] })

// Fix for auto-fit / auto-zoom issue on mobile web views
export const viewport: Viewport = {
  themeColor: "#10b981",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://iqrar.vercel.app/"),
  title: "IQRA 🏆 Islamic Quiz Rivalry App",
  description: "Test your Islamic knowledge with quizzes💡🎯 and challenges",
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
  openGraph: {
    title: "IQRA 🏆 Islamic Quiz Rivalry App",
    description: "Test your Islamic knowledge with quizzes💡🎯and challenges",
    images: [{ url: "/logo.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IQRA 🏆 Islamic Quiz Rivalry App",
    description: "Test your Islamic knowledge with quizzes💡🎯and challenges",
    images: [{ url: "/logo.png" }],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: { url: "/logo.png", sizes: "180x180" },
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html prefix="og: https://ogp.me/ns#" lang="en" className="overflow-x-clip" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* Root layout <head> applies to every route; this rule targets pages/_document. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" href="/logo.png" />
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
