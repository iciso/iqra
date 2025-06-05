import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/contexts/auth-context"
import { Header } from "@/components/layout/header"
import { Toaster } from "@/components/ui/toaster"
import ChallengeNotification from "@/components/challenge/challenge-notification"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IQRA - Islamic Quiz Rivalry App",
  description: "Increase & Test your Islamic knowledge through interactive quizzes and challenges",
  keywords: "Islamic quiz, Islamic knowledge, Quran quiz, Islamic education, Muslim learning",
  authors: [{ name: "Mohamed Essa Rafique" }],
  creator: "Mohamed Essa Rafique",
  publisher: "IQRA",
  robots: "index, follow",
  openGraph: {
    title: "IQRA - Islamic Quiz Rivalry App",
    description: "Test your Islamic knowledge through interactive quizzes and challenges",
    type: "website",
    locale: "en_US",
    siteName: "IQRA",
    themeColor: "#15803D",
    icons: [
    {
      "src": "https://cvemrafi.vercel.app/iqra-app.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "https://cvemrafi.vercel.app/iqra-app.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IQRA - Islamic Quiz Rivalry App",
    description: "Test your Islamic knowledge through interactive quizzes and challenges",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#15803D",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              {/* Footer removed for better UX during quiz play */}
            </div>
            <ChallengeNotification />
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
