import type React from "react"
import type { Metadata } from "next"
import { pageMetadata, SITE_NAME } from "@/lib/seo"

// A layout title given as a plain string drops the root "%s · IQRA" template for every page under it,
// so the layout names the template itself.
export const metadata: Metadata = {
  ...pageMetadata({
    title: "Subjects",
    description: "Browse 50 Islamic quiz subjects and pick one to play at your own level.",
    path: "/subjects",
  }),
  title: { default: `Subjects · ${SITE_NAME}`, template: `%s · ${SITE_NAME}` },
}

const SubjectsLayout = ({ children }: { children: React.ReactNode }) => <>{children}</>

export default SubjectsLayout
