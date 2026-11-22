import type { HTMLAttributes, ReactNode } from "react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Both tones are the site green family: "green" is the brand green, "emerald" the cooler one.
const tones = {
  green: {
    border: "border-green-200 dark:border-green-800",
    bar: "bg-green-600",
    square: "bg-green-50 text-green-600 dark:bg-green-900/40 dark:text-green-400",
    badge: "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/60 dark:text-green-300",
    title: "text-green-800 dark:text-green-400",
    tag: "bg-green-50 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  },
  emerald: {
    border: "border-emerald-200 dark:border-emerald-800",
    bar: "bg-emerald-500",
    square: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400",
    badge: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "text-emerald-900 dark:text-emerald-100",
    tag: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  },
}

type FeatureCardProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  /** A lucide icon; it takes the tone colour from the tinted square around it. */
  icon: ReactNode
  title: ReactNode
  subtitle?: ReactNode
  /** Main paragraph. */
  description?: ReactNode
  tags?: string[]
  /** Small label above the title, e.g. "Track 1". */
  eyebrow?: ReactNode
  /** Footer buttons. */
  actions?: ReactNode
  /** Anything else for the body (a list, a note); it goes after the tags. */
  children?: ReactNode
  align?: "center" | "left"
  tone?: keyof typeof tones
  /** Tone-coloured border and a top bar, for cards that stand side by side as choices. */
  accent?: boolean
}

// One feature card: icon in a tinted square, title, subtitle, body, tags, footer actions.
const FeatureCard = ({
  icon,
  title,
  subtitle,
  description,
  tags,
  eyebrow,
  actions,
  children,
  align = "center",
  tone = "green",
  accent = false,
  className,
  ...rest
}: FeatureCardProps) => {
  const t = tones[tone]
  const centered = align === "center"
  const square = (
    <div
      className={cn(
        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl sm:h-14 sm:w-14 [&_svg]:h-6 [&_svg]:w-6 sm:[&_svg]:h-7 sm:[&_svg]:w-7",
        t.square,
      )}
    >
      {icon}
    </div>
  )

  return (
    <Card
      {...rest}
      className={cn(
        "relative flex w-full flex-col overflow-hidden rounded-xl shadow-sm",
        accent && t.border,
        className,
      )}
    >
      {accent && <div aria-hidden="true" className={cn("absolute inset-x-0 top-0 h-1.5", t.bar)} />}

      <CardHeader className={cn("pb-2", centered && "items-center text-center")}>
        {eyebrow ? (
          <div className={cn("mb-2 flex w-full items-center gap-3", centered ? "flex-col" : "justify-between")}>
            <Badge className={t.badge}>{eyebrow}</Badge>
            {square}
          </div>
        ) : (
          <div className="mb-2">{square}</div>
        )}
        <CardTitle className={cn("text-xl sm:text-2xl", t.title)}>{title}</CardTitle>
        {subtitle && <CardDescription className="text-sm sm:text-base">{subtitle}</CardDescription>}
      </CardHeader>

      <CardContent className={cn("flex-1 space-y-4", centered && "text-center")}>
        {description && (
          <p className="text-sm leading-relaxed text-gray-600 sm:text-base dark:text-muted-foreground">{description}</p>
        )}
        {tags && tags.length > 0 && (
          <ul aria-label="Topics" className={cn("flex flex-wrap gap-1 sm:gap-2", centered && "justify-center")}>
            {tags.map((tag) => (
              <li key={tag} className={cn("rounded px-2 py-1 text-xs", t.tag)}>
                {tag}
              </li>
            ))}
          </ul>
        )}
        {children}
      </CardContent>

      {actions && (
        <CardFooter
          className={cn(
            "flex flex-col gap-3",
            centered ? "items-center sm:flex-row sm:justify-center" : "items-stretch",
          )}
        >
          {actions}
        </CardFooter>
      )}
    </Card>
  )
}

export default FeatureCard
