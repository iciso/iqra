import { LoadingAnimation } from "@/components/loading-animation"

export default function ChallengesLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <LoadingAnimation size="lg" text="Loading Challenges..." />
    </div>
  )
}
