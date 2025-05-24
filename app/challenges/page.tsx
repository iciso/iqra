import { AuthGuard } from "@/components/auth/auth-guard"

export default function ChallengesPage() {
  return <AuthGuard>{/* existing page content */}</AuthGuard>
}
