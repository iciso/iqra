import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type StatChipProps = {
  /** The number, shown bold in the site green, e.g. "50". */
  value?: ReactNode
  label: ReactNode
  /** Makes the chip a link, e.g. "#no-donations". */
  href?: string
  /** Tooltip and accessible name for a linked chip. */
  title?: string
  className?: string
}

// A small rounded fact pill, one per <li> inside a <ul>: "50 subjects", "3 levels".
const StatChip = ({ value, label, href, title, className }: StatChipProps) => {
  const content =
    value === undefined ? (
      label
    ) : (
      <>
        <b className="font-semibold text-green-700 dark:text-green-300">{value}</b> {label}
      </>
    )

  return (
    <li
      className={cn(
        "rounded-full border border-green-200 px-3.5 py-1.5 text-[13px] text-green-950/70 dark:border-green-800 dark:text-green-100/75",
        className,
      )}
    >
      {href ? (
        <a
          href={href}
          title={title}
          aria-label={title}
          className="rounded-full underline-offset-4 hover:text-green-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 dark:hover:text-green-200 dark:focus-visible:ring-green-400"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  )
}

export default StatChip
