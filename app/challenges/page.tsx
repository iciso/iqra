import SimpleTopPlayers from "@/components/challenge/simple-top-players"

export default function Challenges() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 lg:p-24">
      <div className="w-full max-w-4xl mx-auto mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Challenges</h1>
        <p className="text-muted-foreground">Test your knowledge against other players</p>
      </div>
      <div className="w-full max-w-4xl">
        <SimpleTopPlayers />
      </div>
    </main>
  )
}
