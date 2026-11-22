import type { Metadata } from "next"

export const SITE_URL = "https://iqrar.vercel.app"
export const SITE_NAME = "IQRA"
export const SITE_TITLE = "IQRA – Islamic Quiz Rivalry App"
export const SITE_DESCRIPTION =
  "Free, open-source Islamic quiz app. Quiz any of 50 subjects at your own pace, or challenge a friend and race to excel. No ads, no donations."

type PageSeo = {
  title: string
  description: string
  path: string
  noindex?: boolean
}

// A page that sets its own openGraph/twitter replaces the root's, so the share images
// from app/opengraph-image.tsx and app/twitter-image.tsx are named again here.
const shareImage = { url: "/opengraph-image", width: 1200, height: 630, alt: SITE_TITLE }

// One place for a page's title, description, canonical URL and share text.
export function pageMetadata({ title, description, path, noindex }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${SITE_NAME}`,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${SITE_NAME}`,
      description,
      images: [{ ...shareImage, url: "/twitter-image" }],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  }
}
