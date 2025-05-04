"use client"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  text?: string
}

export function LoadingSpinner({ size = "md", text }: LoadingSpinnerProps) {
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
          <svg
            className="animate-spin h-10 w-10 text-green-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      </div>
      {text && <p className={`${dimensions[size].text} text-green-700 animate-pulse dark:text-green-400`}>{text}</p>}
      <span className="sr-only">Loading...</span>
    </div>
  )
}
