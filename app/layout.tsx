import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/contexts/auth-context"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/layout/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://iqrar.vercel.app/'),
  title: "IQRA - Islamic Quiz Rivalry App",
  description: "Learn and test your Islamic knowledge through interactive quizzes and challenges",
  keywords:
    "Quran vocabulary, Arabic learning, interactive games, Islamic education, Quranic words, language learning, Arabic flashcards, Infographic, Quiz, Surah vocabulary",
  openGraph: {
  title: "IQRA - Islamic Quiz Rivalry App",
  description: "Learn and test your Islamic knowledge through interactive quizzes and challenges",
  images: [{ url: "/logo.png" }],
  type: "website",
   },
  twitter: {
    card: "summary_large_image",
  title: "IQRA - Islamic Quiz Rivalry App",
  description: "Learn and test your Islamic knowledge through interactive quizzes and challenges",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html prefix="og: https://ogp.me/ns#" lang="en" className="light" style={{ colorScheme: "light" }}>
      <meta property="og:title" content="IQRA - Islamic Quiz Rivalry App" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://iqrar.vercel.app/" />
      <meta property="og:image" content="https://iqrar.vercel.app/logo.png" />
     <head>
      <title>IQRA - Islamic Quiz Rivalry App</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
            </div>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
