import { SupabaseTest } from "@/components/debug/supabase-test"

export default function DebugPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Debug Page</h1>
      <SupabaseTest />
    </div>
  )
}
