import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "IQRA Demo App",
  description:
    "Learn Islam through fun and interactive quizzes across eleven categories. IQRA promotes enjoyable learning rather than rote memorization, covering Quran, Hadith, Fiqh, Tafsir, Aqeedah, Seerah, Islamic History, Comparative Religion, and more.",
  openGraph: {
    title: "IQRA Demo App",
    description:
      "Learn Islam through fun and interactive quizzes across eleven categories. IQRA promotes enjoyable learning rather than rote memorization.",
    images: [
      {
        url: "/iqra-preview.png",
        width: 1200,
        height: 630,
        alt: "IQRA Demo App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IQRA Demo App",
    description:
      "Learn Islam through fun and interactive quizzes across eleven categories. IQRA promotes enjoyable learning rather than rote memorization.",
    images: ["/iqra-preview.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
