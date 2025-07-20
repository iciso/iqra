import type React from "react";
import Head from "next/head";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/contexts/auth-context";
import { Header } from "@/components/layout/header";
import { Toaster } from "@/components/ui/toaster";
import ChallengeNotification from "@/components/challenge/challenge-notification";

const inter = Inter({ subsets: ["latin"] });

// Metadata export
export const metadata: Metadata = {
  title: "IQRA - Islamic Quiz Rivalry App",
  description: "Increase & Test your Islamic knowledge through interactive quizzes and challenges",
  keywords: "Islamic quiz, Islamic knowledge, Quran quiz, Islamic education, Muslim learning",
  authors: [{ name: "Mohamed Essa Rafique" }],
  creator: "Mohamed Essa Rafique",
  publisher: "IQRA",
  robots: "index, follow",
  openGraph: {
    url: "https://iqrar.vercel.app/",
    title: "IQRA - Islamic Quiz Rivalry App",
    description: "Test your Islamic knowledge through interactive quizzes and challenges",
    images: [
      {
        url: "/iqralogo.png",
        width: 1200,
        height: 630,
        alt: "IQRA App Logo",
      },
    ],
    type: "website",
    siteName: "IQRA",
  },
  twitter: {
    card: "summary_large_image",
    title: "IQRA - Islamic Quiz Rivalry App",
    description: "Test your Islamic knowledge through interactive quizzes and challenges",
    images: [{ url: "/iqralogo.png" }],
  },
  icons: {
    icon: [
      { url: "/iqralogo.ico", type: "image/x-icon" },
      { url: "/iqralogo.ico", sizes: "any" },
    ],
  },
  generator: "v0.dev",
};

// Viewport export
export const viewport: Viewport = {
  themeColor: "#15803D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/iqralogo.png" type="image/png" sizes="32x32" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <ChallengeNotification />
              <Toaster />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
