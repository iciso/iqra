import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type EmptyStateProps = {
  /** A lucide icon, e.g. <Users />; it is sized and muted here. */
  icon?: ReactNode
  title: ReactNode
  text?: ReactNode
  /** A button or link, e.g. "Start a Quiz". */
  action?: ReactNode
  /** Smaller padding and icon, for dropdowns and short lists. */
  compact?: boolean
  className?: string
}

// What every empty list shows: a muted icon, one line saying what is missing, what to do next.
const EmptyState = ({ icon, title, text, action, compact = false, className }: EmptyStateProps) => (
  <div
    data-empty-state=""
    className={cn("flex flex-col items-center text-center", compact ? "gap-1 px-2 py-4" : "gap-2 py-8", className)}
  >
    {icon && (
      <div
        aria-hidden="true"
        className={cn(
          "mb-1 flex items-center justify-center rounded-xl bg-green-50 text-green-700/60 dark:bg-green-900/30 dark:text-green-300/60",
          compact ? "h-9 w-9 [&_svg]:h-5 [&_svg]:w-5" : "h-12 w-12 [&_svg]:h-6 [&_svg]:w-6",
        )}
      >
        {icon}
      </div>
    )}
    <p className="text-sm font-medium text-foreground">{title}</p>
    {text && <div className="max-w-sm text-sm text-muted-foreground">{text}</div>}
    {action && <div className="mt-2">{action}</div>}
  </div>
)

export default EmptyState
