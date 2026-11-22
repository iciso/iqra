import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type PageHeaderProps = {
  title: ReactNode
  subtitle?: ReactNode
  /** Buttons or a badge, e.g. the "Home" back button. Sits above the title on phones, to the right from sm up. */
  actions?: ReactNode
  /** Optional mark shown before the title (an icon or an avatar). */
  icon?: ReactNode
  align?: "left" | "center"
  className?: string
}

// The one way every page starts: same top spacing, the one h1 size, the same colours.
const PageHeader = ({ title, subtitle, actions, icon, align = "left", className }: PageHeaderProps) => {
  const centered = align === "center"

  return (
    <header
      data-page-header=""
      className={cn(
        "mb-8 flex w-full flex-col gap-4 border-b border-green-100 pb-6 dark:border-green-900/60",
        centered ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className={cn("flex min-w-0 gap-4", centered ? "flex-col items-center" : "items-center")}>
        {icon && <div className="shrink-0">{icon}</div>}
        <div className="min-w-0">
          <h1 className="font-heading break-words text-3xl font-bold tracking-tight text-green-900 sm:text-4xl dark:text-green-100">
            {title}
          </h1>
          {subtitle && (
            <div
              className={cn(
                "mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base",
                centered && "mx-auto",
              )}
            >
              {subtitle}
            </div>
          )}
        </div>
      </div>
      {actions && (
        <div className={cn("flex shrink-0 flex-wrap items-center gap-2", !centered && "order-first sm:order-none")}>
          {actions}
        </div>
      )}
    </header>
  )
}

export default PageHeader
