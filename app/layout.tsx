import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/contexts/auth-context"
import Header from "@/components/layout/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IQRA - Islamic Quiz Rivalry App",
  description: "Test your Islamic knowledge through interactive quizzes and challenges",
  keywords: ["Islam", "Quiz", "Islamic Knowledge", "Quran", "Hadith", "Education"],
  authors: [{ name: "IQRA Team" }],
  openGraph: {
    title: "IQRA - Islamic Quiz Rivalry App",
    description: "Test your Islamic knowledge through interactive quizzes and challenges",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "IQRA - Islamic Quiz Rivalry App",
    description: "Test your Islamic knowledge through interactive quizzes and challenges",
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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
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
