import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "IQRA Islamic Quiz App",
  description:
    "Learn Islam through fun and interactive quizzes across eleven categories. IQRA promotes enjoyable learning rather than rote memorization, covering Quran, Hadith, Fiqh, Tafsir, Aqeedah, Seerah, Islamic History, Comparative Religion, and more.",
  openGraph: {
    title: "IQRA Islamic Quiz App",
    description:
      "Learn Islam through fun and interactive quizzes across eleven categories. IQRA promotes enjoyable learning rather than rote memorization.",
    images: [
      {
        url: "/iqra-preview.png",
        width: 1200,
        height: 630,
        alt: "IQRA Islamic Quiz App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IQRA Islamic Quiz App",
    description:
      "Learn Islam through fun and interactive quizzes across eleven categories. IQRA promotes enjoyable learning rather than rote memorization.",
    images: ["/iqra-preview.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#15803D",
      },
    ],
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
