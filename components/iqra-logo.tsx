import { BookOpen, Trophy } from "lucide-react"
import Link from "next/link"

interface IqraLogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
  isLink?: boolean
}

export function IqraLogo({ size = "md", showText = false, isLink = true }: IqraLogoProps) {
  const dimensions = {
    sm: {
      container: "w-16 h-16",
      icons: "w-7 h-7",
      text: "text-xl",
    },
    md: {
      container: "w-24 h-24",
      icons: "w-10 h-10",
      text: "text-2xl",
    },
    lg: {
      container: "w-32 h-32",
      icons: "w-14 h-14",
      text: "text-3xl",
    },
  }

  const logoContent = (
    <div
      className={`relative ${dimensions[size].container} bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-20"></div>
      <div className="relative flex flex-col items-center justify-center w-full h-full">
        {/* Book icon positioned above */}
        <div className="absolute transform -translate-y-1/4 -rotate-12">
          <BookOpen className={`${dimensions[size].icons} text-green-700 opacity-90`} strokeWidth={1.5} />
        </div>
        {/* Trophy icon positioned below */}
        <div className="absolute transform translate-y-1/4 rotate-12">
          <Trophy className={`${dimensions[size].icons} text-green-700 opacity-90`} strokeWidth={1.5} />
        </div>
        {/* IQRA text in the center (optional) */}
        {showText && <span className={`relative ${dimensions[size].text} font-bold text-green-800 z-10`}>IQRA</span>}
      </div>
    </div>
  )

  if (isLink) {
    return (
      <Link href="/" aria-label="Back to home">
        {logoContent}
      </Link>
    )
  }

  return logoContent
}
