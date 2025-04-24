import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ChallengesPage() {
  // Sample challenge data - in a real app, this would come from a database
  const challenges = [
    {
      id: "daily-quiz",
      title: "Daily Quiz Challenge",
      description: "Test your knowledge with our daily quiz covering various Islamic topics",
      questions: 10,
      timeLimit: "5 minutes",
      difficulty: "Mixed",
      participants: 245,
      active: true,
    },
    {
      id: "quran-challenge",
      title: "Quran Knowledge Challenge",
      description: "How well do you know the Quran? Take this challenge to find out!",
      questions: 15,
      timeLimit: "7 minutes",
      difficulty: "Intermediate",
      participants: 189,
      active: true,
    },
    {
      id: "seerah-special",
      title: "Seerah Special Challenge",
      description: "Test your knowledge about the life of Prophet Muhammad (PBUH)",
      questions: 12,
      timeLimit: "6 minutes",
      difficulty: "Advanced",
      participants: 132,
      active: true,
    },
    {
      id: "fiqh-basics",
      title: "Fiqh Fundamentals",
      description: "Challenge yourself on the basics of Islamic jurisprudence",
      questions: 10,
      timeLimit: "5 minutes",
      difficulty: "Beginner",
      participants: 201,
      active: true,
    },
    {
      id: "ramadan-special",
      title: "Ramadan Special",
      description: "A special challenge about Ramadan, its virtues, and practices",
      questions: 15,
      timeLimit: "8 minutes",
      difficulty: "Mixed",
      participants: 310,
      active: false,
      comingSoon: true,
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">ICHAL Challenge Mode</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Test your Islamic knowledge against time and compete with others on our leaderboards
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {challenges.map((challenge) => (
          <Card
            key={challenge.id}
            className={`border-2 ${challenge.active ? "border-primary/20 hover:border-primary/50" : "border-muted/50"} transition-colors`}
          >
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{challenge.title}</CardTitle>
                {challenge.active ? (
                  <Badge variant="default">Active</Badge>
                ) : challenge.comingSoon ? (
                  <Badge variant="outline">Coming Soon</Badge>
                ) : (
                  <Badge variant="secondary">Ended</Badge>
                )}
              </div>
              <CardDescription>{challenge.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Questions</p>
                  <p className="font-medium">{challenge.questions}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Time Limit</p>
                  <p className="font-medium">{challenge.timeLimit}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Difficulty</p>
                  <p className="font-medium">{challenge.difficulty}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Participants</p>
                  <p className="font-medium">{challenge.participants}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              {challenge.active ? (
                <Button className="w-full">Start Challenge</Button>
              ) : challenge.comingSoon ? (
                <Button className="w-full" variant="outline" disabled>
                  Coming Soon
                </Button>
              ) : (
                <Button className="w-full" variant="outline" disabled>
                  Challenge Ended
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/leaderboard">
          <Button variant="outline" size="lg">
            View Global Leaderboard
          </Button>
        </Link>
      </div>
    </div>
  )
}
