import { AuthProvider } from "@/contexts/auth-context"
import { AuthDemo } from "@/components/auth-demo"

export default function HomePage() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <AuthDemo />
      </div>
    </AuthProvider>
  )
}
