import { LoadingAnimation } from "@/components/loading-animation"

export default function ChallengeLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <LoadingAnimation size="lg" text="Preparing Challenge..." />
    </div>
  )
}
