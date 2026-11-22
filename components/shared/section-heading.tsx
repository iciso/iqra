import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  /** Small uppercase line above the title, e.g. "New learning tracks". */
  eyebrow?: ReactNode
  title: ReactNode
  /** One short paragraph under the title. */
  lede?: ReactNode
  align?: "center" | "left"
  /** id for the h2, so a <section aria-labelledby> can point at it. */
  id?: string
  className?: string
}

// The one heading block for a section inside a page: eyebrow, h2, lede.
const SectionHeading = ({ eyebrow, title, lede, align = "center", id, className }: SectionHeadingProps) => {
  const centered = align === "center"

  return (
    <div className={cn("mb-8", centered && "text-center", className)}>
      {eyebrow && (
        <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-green-700 dark:text-green-400">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-2xl font-bold tracking-tight text-green-900 dark:text-green-300">
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base",
            centered && "mx-auto",
          )}
        >
          {lede}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
