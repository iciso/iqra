import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Welcome to the Islamic Knowledge Hub</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore and enhance your understanding of Islam through our interactive learning platforms
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="flex flex-col h-full border-2 border-primary/20 hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl">IQRA Learning Mode</CardTitle>
            <CardDescription>
              Learn at your own pace with our comprehensive Islamic knowledge quiz system
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p>
              The IQRA learning mode provides a structured approach to learning about various aspects of Islam. Test
              your knowledge, learn from explanations, and track your progress across different categories.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-1">
              <li>Multiple difficulty levels</li>
              <li>Detailed explanations for each answer</li>
              <li>Track your learning progress</li>
              <li>Covers 11 Islamic knowledge categories</li>
            </ul>
          </CardContent>
          <CardFooter>
            <a href="/categories" className="w-full">
              <Button size="lg" className="w-full">
                Start Learning
              </Button>
            </a>
          </CardFooter>
        </Card>

        <Card className="flex flex-col h-full border-2 border-primary/20 hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl">IQRA Challenge Mode</CardTitle>
            <CardDescription>Test your knowledge and compete with others in timed challenges</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p>
              The IQRA challenge mode puts your Islamic knowledge to the test with timed quizzes and competitive
              leaderboards. Challenge yourself and others to see who has the best understanding of Islamic topics.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-1">
              <li>Timed challenges for added pressure</li>
              <li>Compete on global leaderboards</li>
              <li>Earn badges and achievements</li>
              <li>Special themed challenges</li>
            </ul>
          </CardContent>
          <CardFooter>
            <a href="/challenges" className="w-full">
              <Button size="lg" variant="outline" className="w-full">
                Enter Challenges
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <div className="flex justify-center space-x-6">
          <a href="/about" className="text-primary hover:text-primary/80 transition-colors">
            About IQRA
          </a>
          <a href="/badges" className="text-primary hover:text-primary/80 transition-colors">
            Badges
          </a>
          <a href="/leaderboard" className="text-primary hover:text-primary/80 transition-colors">
            Leaderboard
          </a>
        </div>
      </div>
    </div>
  )
}
