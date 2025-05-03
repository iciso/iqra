import { BookOpen } from "lucide-react"

interface LoadingAnimationProps {
  size?: "sm" | "md" | "lg"
  text?: string
}

export function LoadingAnimation({ size = "md", text }: LoadingAnimationProps) {
  const dimensions = {
    sm: {
      container: "w-16 h-16",
      icons: "w-7 h-7",
      text: "text-sm",
    },
    md: {
      container: "w-24 h-24",
      icons: "w-10 h-10",
      text: "text-base",
    },
    lg: {
      container: "w-32 h-32",
      icons: "w-14 h-14",
      text: "text-lg",
    },
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4" role="status" aria-label="Loading">
      <div
        className={`relative ${dimensions[size].container} bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-20"></div>
        <div className="relative flex items-center justify-center w-full h-full">
          {/* Single Book icon with animation */}
          <div className="animate-pulse">
            <BookOpen className={`${dimensions[size].icons} text-green-700 opacity-90`} strokeWidth={1.5} />
          </div>
        </div>
      </div>
      {text && <p className={`${dimensions[size].text} text-green-700 animate-pulse`}>{text}</p>}
      <span className="sr-only">Loading...</span>
    </div>
  )
}
