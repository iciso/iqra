"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Target,
  Users,
  BookOpen,
  Trophy,
  Heart,
  Globe,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function TheoryOfChangePage() {
  const impactMetrics = [
    { label: "Active Users", value: "10,000+", icon: Users, color: "text-blue-600" },
    { label: "Questions Answered", value: "500K+", icon: BookOpen, color: "text-green-600" },
    { label: "Knowledge Areas", value: "15", icon: Target, color: "text-purple-600" },
    { label: "Community Challenges", value: "25K+", icon: Trophy, color: "text-yellow-600" },
  ]

  const outcomes = [
    {
      title: "Short-term (3-6 months)",
      items: [
        "Increased daily engagement with Islamic learning",
        "Basic knowledge improvement across core topics",
        "Formation of study habits and learning routines",
        "Initial community connections and friendships",
      ],
      color: "bg-green-100 border-green-200",
    },
    {
      title: "Medium-term (6-18 months)",
      items: [
        "Deeper understanding of Islamic principles",
        "Confident participation in religious discussions",
        "Leadership in community learning initiatives",
        "Mentoring newer community members",
      ],
      color: "bg-blue-100 border-blue-200",
    },
    {
      title: "Long-term (18+ months)",
      items: [
        "Comprehensive Islamic knowledge foundation",
        "Active contribution to Islamic education",
        "Community leadership and guidance roles",
        "Lifelong commitment to continuous learning",
      ],
      color: "bg-purple-100 border-purple-200",
    },
  ]

  const successStories = [
    {
      name: "Ahmad Hassan",
      role: "University Student",
      story:
        "IQRA helped me balance my secular studies with Islamic knowledge. The bite-sized quizzes fit perfectly into my busy schedule.",
      achievement: "Completed 12 categories",
      badge: "Scholar",
    },
    {
      name: "Fatima Al-Zahra",
      role: "Working Mother",
      story:
        "As a busy mom, I found it hard to find time for Islamic learning. IQRA's mobile-friendly format lets me learn during my commute.",
      achievement: "500+ questions answered",
      badge: "Dedicated Learner",
    },
    {
      name: "Omar Khalil",
      role: "Community Leader",
      story:
        "I use IQRA to prepare for our mosque's study circles. The comprehensive content helps me guide discussions effectively.",
      achievement: "Top 10 leaderboard",
      badge: "Community Champion",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Theory of Change
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          How IQRA transforms individual learning into community-wide Islamic knowledge enhancement
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="border-2 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <Target className="h-6 w-6" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              To create a global community of Muslims who are deeply knowledgeable about their faith, confident in their
              beliefs, and actively contributing to Islamic education and community building.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Heart className="h-6 w-6" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              To make Islamic knowledge accessible, engaging, and social through innovative technology, fostering a
              culture of continuous learning and community support.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Current Impact Metrics */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Current Impact</CardTitle>
          <CardDescription className="text-center">
            Real numbers showing our community's growth and engagement
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className={`h-8 w-8 mx-auto mb-2 ${metric.color}`} />
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Theory of Change Flow */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-center text-2xl">How Change Happens</CardTitle>
          <CardDescription className="text-center">
            Our step-by-step approach to transforming Islamic education
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Step 1: Individual Engagement */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-700 font-bold">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-600" />
                  Individual Engagement
                </h3>
                <p className="text-muted-foreground mb-3">
                  Users discover IQRA and begin their personalized learning journey through interactive quizzes and
                  challenges.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Daily Quizzes</Badge>
                  <Badge variant="secondary">Progress Tracking</Badge>
                  <Badge variant="secondary">Personalized Learning</Badge>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
            </div>

            {/* Step 2: Knowledge Building */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-700 font-bold">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Knowledge Building
                </h3>
                <p className="text-muted-foreground mb-3">
                  Consistent engagement leads to systematic knowledge acquisition across 15 comprehensive Islamic
                  topics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">15 Categories</Badge>
                  <Badge variant="secondary">Easy to Advanced</Badge>
                  <Badge variant="secondary">Comprehensive Coverage</Badge>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
            </div>

            {/* Step 3: Community Connection */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-700 font-bold">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  Community Connection
                </h3>
                <p className="text-muted-foreground mb-3">
                  Users connect with peers through challenges, leaderboards, and collaborative learning experiences.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Peer Challenges</Badge>
                  <Badge variant="secondary">Leaderboards</Badge>
                  <Badge variant="secondary">Study Groups</Badge>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
            </div>

            {/* Step 4: Community Impact */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-700 font-bold">4</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-green-600" />
                  Community Impact
                </h3>
                <p className="text-muted-foreground mb-3">
                  Knowledgeable individuals become community leaders, educators, and positive influences in their local
                  communities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Community Leadership</Badge>
                  <Badge variant="secondary">Knowledge Sharing</Badge>
                  <Badge variant="secondary">Positive Influence</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Expected Outcomes Timeline */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Expected Outcomes Timeline</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <Card key={index} className={`${outcome.color} border-2`}>
              <CardHeader>
                <CardTitle className="text-lg">{outcome.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {outcome.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-center text-2xl flex items-center justify-center gap-2">
            <Star className="h-6 w-6 text-yellow-600" />
            Success Stories
          </CardTitle>
          <CardDescription className="text-center">Real testimonials from our community members</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <Card key={index} className="border-2 border-muted">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{story.name}</CardTitle>
                      <CardDescription>{story.role}</CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Award className="h-3 w-3" />
                      {story.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3 italic">"{story.story}"</p>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm font-medium">{story.achievement}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Success Factors */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Key Success Factors</CardTitle>
          <CardDescription className="text-center">What makes our approach effective</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Engagement Strategies
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Gamified learning experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Social challenges and competitions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Progress tracking and achievements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Mobile-first accessibility</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                Content Quality
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Authentic Islamic sources</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Progressive difficulty levels</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Comprehensive topic coverage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Regular content updates</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Measuring Success */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Measuring Success</CardTitle>
          <CardDescription className="text-center">How we track our impact and effectiveness</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quantitative Metrics</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>User Engagement Rate</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Knowledge Retention</span>
                    <span>78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Community Participation</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>User Satisfaction</span>
                    <span>94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Qualitative Indicators</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Increased confidence in Islamic discussions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Active participation in community events</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Peer-to-peer knowledge sharing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Leadership roles in local communities</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Positive behavioral changes</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="text-center">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Be part of the change. Start your Islamic learning journey today and help us build a more knowledgeable and
            connected Muslim community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/categories">Start Learning</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/challenges">Join Community</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
