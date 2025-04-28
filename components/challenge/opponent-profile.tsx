import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bot, User } from "lucide-react"

export type OpponentType = "bot" | "user"

export interface Opponent {
  id: string
  name: string
  type: OpponentType
  avatar?: string
  score?: number
  level?: string
}

interface OpponentProfileProps {
  opponent: Opponent
  size?: "sm" | "md" | "lg"
}

export default function OpponentProfile({ opponent, size = "md" }: OpponentProfileProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  }

  const initials = opponent.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="flex flex-col items-center">
      <Avatar
        className={`${sizeClasses[size]} border-2 ${opponent.type === "bot" ? "border-purple-400" : "border-blue-400"}`}
      >
        {opponent.avatar ? (
          <AvatarImage src={opponent.avatar || "/placeholder.svg"} alt={opponent.name} />
        ) : (
          <AvatarFallback
            className={`${opponent.type === "bot" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"} dark:bg-gray-800`}
          >
            {opponent.type === "bot" ? <Bot className="h-5 w-5" /> : initials || <User className="h-5 w-5" />}
          </AvatarFallback>
        )}
      </Avatar>
      <span className="mt-2 text-sm font-medium">{opponent.name}</span>
      {opponent.level && <span className="text-xs text-gray-500">{opponent.level}</span>}
    </div>
  )
}
