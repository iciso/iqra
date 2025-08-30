import type React from "react";
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
    url: "https://iqrar.vercel.app/", // Corrected domain
    title: "IQRA - Islamic Quiz Rivalry App",
    description: "Test your Islamic knowledge through interactive quizzes and challenges",
    images: [
      {
        url: "/iqralogo.png", // Relative path to public folder
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
    images: [{ url: "/iqralogo.png" }], // Use the same logo
  },
  icons: {
    icon: [
      { url: "/iqralogo.ico", type: "image/x-icon" }, // Corrected path
      { url: "/iqralogo.ico", sizes: "any" },
    ],
  },
  generator: "v0.dev",
};

// Viewport export (for viewport and themeColor)
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
              {/* Footer removed for better UX during quiz play */}
            </div>
            <ChallengeNotification />
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
