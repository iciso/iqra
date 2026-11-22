import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

const routes: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/subjects", priority: 0.9, changeFrequency: "weekly" },
  { path: "/challenges", priority: 0.8, changeFrequency: "daily" },
  { path: "/leaderboard", priority: 0.7, changeFrequency: "daily" },
  { path: "/how", priority: 0.6, changeFrequency: "monthly" },
  { path: "/badges", priority: 0.5, changeFrequency: "monthly" },
  { path: "/about", priority: 0.5, changeFrequency: "monthly" },
  { path: "/profile", priority: 0.3, changeFrequency: "monthly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
