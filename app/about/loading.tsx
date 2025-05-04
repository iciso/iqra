import { LoadingSpinner } from "@/components/ui/loading"

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <LoadingSpinner size="lg" text="Loading About Page..." />
    </div>
  )
}
