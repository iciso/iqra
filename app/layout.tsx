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
  title: "IQRA - Islamic Knowledge Quiz App",
  description: "Test your Islamic knowledge with interactive quizzes covering Quran, Hadith, and more",
  keywords: ["Islam", "Quiz", "Quran", "Hadith", "Islamic Knowledge", "Education"],
  authors: [{ name: "IQRA Team" }],
  openGraph: {
    title: "IQRA - Islamic Knowledge Quiz App",
    description: "Test your Islamic knowledge with interactive quizzes",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "IQRA - Islamic Knowledge Quiz App",
    description: "Test your Islamic knowledge with interactive quizzes",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
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
          <AuthProvider>
            <div className="min-h-screen bg-background">
              <Header />
              <main>{children}</main>
            </div>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
