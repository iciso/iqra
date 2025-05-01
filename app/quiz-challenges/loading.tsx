import { LoadingAnimation } from "@/components/loading-animation"

export default function QuizChallengesLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <LoadingAnimation size="lg" text="Loading Quiz Challenges..." />
    </div>
  )
}
