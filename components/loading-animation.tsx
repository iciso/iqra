import { BookOpen } from "lucide-react"

interface LoadingAnimationProps {
  size?: "sm" | "md" | "lg"
  text?: string
}

export function LoadingAnimation({ size = "md", text }: LoadingAnimationProps) {
  const dimensions = {
    sm: {
      container: "w-16 h-16",
      ring: "border-[3px]",
      icons: "w-6 h-6",
      text: "text-sm",
    },
    md: {
      container: "w-20 h-20",
      ring: "border-4",
      icons: "w-8 h-8",
      text: "text-base",
    },
    lg: {
      container: "w-28 h-28",
      ring: "border-[5px]",
      icons: "w-11 h-11",
      text: "text-lg",
    },
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4" role="status" aria-label="Loading">
      <div className={`relative ${dimensions[size].container} flex items-center justify-center`}>
        {/* A spinning ring around a still book: a faint full circle with one bright arc running round it. */}
        <div
          className={`absolute inset-0 rounded-full ${dimensions[size].ring} border-green-200 border-t-green-600 animate-spin dark:border-green-900 dark:border-t-green-400`}
          aria-hidden="true"
        />
        <BookOpen className={`${dimensions[size].icons} text-green-600 dark:text-green-400`} strokeWidth={1.5} aria-hidden="true" />
      </div>
      {text && <p className={`${dimensions[size].text} text-green-700 dark:text-green-400 animate-pulse`}>{text}</p>}
      <span className="sr-only">Loading...</span>
    </div>
  )
}
