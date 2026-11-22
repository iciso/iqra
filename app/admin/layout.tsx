import type React from "react"
import type { Metadata } from "next"

// Admin tools are never meant for search results, and have no public canonical URL.
export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
}

const AdminLayout = ({ children }: { children: React.ReactNode }) => <>{children}</>

export default AdminLayout
