import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IqraLogo } from "@/components/iqra-logo"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col items-center mb-8">
        <IqraLogo size="lg" showText={true} isLink={false} />
      </div>

      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl text-center">About IQRA</CardTitle>
          <CardDescription className="text-center text-lg">
            Islamic Knowledge Quiz & Resource Application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            IQRA is an educational platform designed to help users learn about Islam through interactive quizzes,
            challenges, and informative resources. Our mission is to make Islamic knowledge accessible, engaging, and
            enjoyable for everyone.
          </p>

          <h3 className="text-xl font-semibold mt-6">Features</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Comprehensive quizzes across 11 Islamic knowledge categories</li>
            <li>Learning mode with detailed explanations</li>
            <li>Challenge mode with competitive elements</li>
            <li>Interactive infographics on key Islamic concepts</li>
            <li>Achievement badges to track your progress</li>
            <li>Leaderboards to compare your knowledge with others</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Our Approach</h3>
          <p>
            IQRA promotes understanding over rote memorization. We believe that true knowledge comes from comprehension
            and application, not just memorizing facts. Our platform is designed to encourage critical thinking and deep
            understanding of Islamic principles.
          </p>

          <p className="text-center text-muted-foreground mt-8">Version 1.0 • © 2023-2024 IQRA</p>
        </CardContent>
      </Card>
    </div>
  )
}
