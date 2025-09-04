import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { AuthProvider } from "@/contexts/auth-context"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/components/i18n/i18n-provider"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IQRA - Islamic Knowledge Quiz App",
  description: "Test and enhance your Islamic knowledge with interactive quizzes and challenges",
  keywords: "Islam, quiz, knowledge, learning, Quran, Hadith, Islamic education",
  authors: [{ name: "IQRA Team" }],
  openGraph: {
    title: "IQRA - Islamic Knowledge Quiz App",
    description: "Test and enhance your Islamic knowledge with interactive quizzes and challenges",
    type: "website",
    locale: "en_US",
    siteName: "IQRA",
  },
  twitter: {
    card: "summary_large_image",
    title: "IQRA - Islamic Knowledge Quiz App",
    description: "Test and enhance your Islamic knowledge with interactive quizzes and challenges",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <I18nProvider>
            <AuthProvider>
              <div className="min-h-screen bg-background">
                <Header />
                <main>{children}</main>
                <Toaster />
              </div>
            </AuthProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
