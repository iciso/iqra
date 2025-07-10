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
    url: "https://ichal.vercel.app/", // Added og:url
    title: "IQRA - Islamic Quiz Rivalry App",
    description: "Test your Islamic knowledge through interactive quizzes and challenges",
    images: [{ 
      url: "https://cvemrafi.vercel.app/iqra-app.png?fe032b8e85e0108a4b81b3e81fff56d6", // Version parameter
      width: 1200, // Recommended dimensions
      height: 630,
      alt: "IQRA App Logo",
    }],
    type: "website",
    siteName: "IQRA", // Recommended
  },
  twitter: {
    card: "summary_large_image",
    title: "IQRA - Islamic Quiz Rivalry App",
    description: "Test your Islamic knowledge through interactive quizzes and challenges",
    images: [{ url: "/placeholder-logo.png" }],  
  },
  //removed for WhatsApp image url https://cvemrafi.vercel.app/iqra-app.png?fe032b8e85e0108a4b81b3e81fff56d6 to see if logo appears 
  // Optional but recommended if you have a Facebook App
  // other: {
  //   "fb:app_id": "YOUR_FACEBOOK_APP_ID" 
  // },
  icons: {
    icon: [
      { url: "https://cvemrafi.vercel.app/iqra-app.png", type: "image/png" },
      { url: "https://cvemrafi.vercel.app/iqra-app.png", sizes: "any" },
    ],
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
