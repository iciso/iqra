import { LoadingAnimation } from "@/components/loading-animation"

interface LoadingProps {
  size?: "sm" | "md" | "lg"
  text?: string
  fullScreen?: boolean
}

export function Loading({ size = "md", text, fullScreen = false }: LoadingProps) {
  const content = <LoadingAnimation size={size} text={text} />

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
        {content}
      </div>
    )
  }

  return <div className="flex items-center justify-center w-full py-8">{content}</div>
}
