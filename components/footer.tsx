import Link from "next/link"
import { Info } from "lucide-react"
import { cn } from "@/lib/utils"

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("w-full py-4 flex justify-center", className)}>
      <div className="flex items-center gap-6">
        <Link
          href="/home"
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Home"
        >
          <div className="rounded-full bg-muted p-2 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <span className="text-xs mt-1">Home</span>
        </Link>

        <Link
          href="/about"
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="About"
        >
          <div className="rounded-full bg-muted p-2 flex items-center justify-center">
            <Info className="h-5 w-5" />
          </div>
          <span className="text-xs mt-1">About</span>
        </Link>
      </div>
    </footer>
  )
}
