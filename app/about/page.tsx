"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { IqraLogo } from "@/components/iqra-logo"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { BookOpen, Code, Gamepad2, LightbulbIcon, MessageSquarePlus, Share2 } from "lucide-react"

export default function AboutPage() {
  const [suggestion, setSuggestion] = useState("")

  const handleSubmitSuggestion = (e: React.FormEvent) => {
    e.preventDefault()
    if (suggestion.trim()) {
      toast({
        title: "Suggestion received!",
        description: "Thank you for contributing to IQRA's development.",
      })
      setSuggestion("")
    }
  }

  return (
    <div className="container max-w-5xl mx-auto py-8 px-4">
      <header className="flex flex-col items-center justify-center text-center mb-12">
        <div className="mb-4">
          <IqraLogo className="h-24 w-24" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">About IQRA</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">Learning through engagement, not memorization</p>
      </header>

      <Tabs defaultValue="mission" className="mb-12">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="mission">Our Mission</TabsTrigger>
          <TabsTrigger value="approach">Our Approach</TabsTrigger>
          <TabsTrigger value="contribute">Contribute</TabsTrigger>
        </TabsList>

        <TabsContent value="mission" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LightbulbIcon className="h-5 w-5" />
                Reimagining Islamic Education
              </CardTitle>
              <CardDescription>A proof of concept demonstrating the power of interactive learning</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                IQRA is a demonstration that learning Islamic concepts through interactive gaming experiences is more
                effective than traditional rote memorization. Our proof-of-concept app showcases how engagement, visual
                learning, and interactive elements can transform the way people connect with Islamic knowledge.
              </p>
              <p>
                Our dream is to continuously enhance every question in this application with the best interactive tools
                we can develop—making learning not just informative, but genuinely enjoyable and memorable.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <Gamepad2 className="h-8 w-8 mb-2 text-primary" />
                  <h3 className="font-medium text-center">Learning Through Play</h3>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <BookOpen className="h-8 w-8 mb-2 text-primary" />
                  <h3 className="font-medium text-center">Deep Understanding</h3>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <Share2 className="h-8 w-8 mb-2 text-primary" />
                  <h3 className="font-medium text-center">Community Driven</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approach" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gamepad2 className="h-5 w-5" />
                Gaming as a Learning Tool
              </CardTitle>
              <CardDescription>How interactive elements enhance knowledge retention</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Research consistently shows that interactive learning leads to better knowledge retention and
                understanding. IQRA applies this principle to Islamic education through:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Interactive quizzes that challenge and engage</li>
                <li>Visual infographics that simplify complex concepts</li>
                <li>Competitive elements that motivate continued learning</li>
                <li>Immediate feedback that reinforces correct understanding</li>
                <li>Progressive difficulty that adapts to the learner's level</li>
              </ul>
              <p className="mt-4">
                Our approach transforms what might otherwise be dry memorization into an engaging journey of discovery,
                making Islamic knowledge more accessible and enjoyable for everyone.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contribute" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquarePlus className="h-5 w-5" />
                Share Your Ideas
              </CardTitle>
              <CardDescription>Help us improve IQRA with your suggestions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We're constantly looking for new ways to make learning more interactive and enjoyable. Do you have ideas
                for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Game mechanics that could enhance learning</li>
                <li>Infographic styles that could explain concepts better</li>
                <li>Interactive elements to improve engagement</li>
                <li>New question types or categories</li>
              </ul>
              <form onSubmit={handleSubmitSuggestion} className="space-y-4">
                <Textarea
                  placeholder="Share your suggestion here..."
                  className="min-h-[120px]"
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                />
                <Button type="submit" className="w-full">
                  Submit Suggestion
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="border-dashed">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Open Source & Free
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            IQRA is developed as an open-source project, freely available to anyone who wishes to learn or contribute.
            Our developers are committed to providing the best learning experience through fun and games, without any
            cost barriers.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-sm text-muted-foreground">Join us in our mission to revolutionize Islamic education</p>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href="/categories">Explore Categories</Link>
            </Button>
            <Button asChild>
              <Link href="/quiz">Start Learning</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
