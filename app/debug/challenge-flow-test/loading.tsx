import { LoadingAnimation } from "@/components/loading-animation"

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <LoadingAnimation size="lg" text="Loading challenge flow test..." />
    </div>
  )
}
