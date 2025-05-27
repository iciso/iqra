import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-4xl font-bold">Welcome to the App!</h1>
        <p className="text-lg">This is the home page.</p>
        <Button>Click me</Button>
      </div>
    </main>
  )
}
