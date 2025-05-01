import { LoadingAnimation } from "@/components/loading-animation"

export default function QuizLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <LoadingAnimation size="lg" text="Loading Quiz..." />
    </div>
  )
}
