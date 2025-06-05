import Link from "next/link"
import { ArrowRight, ArrowLeft, Github, BookOpen, Database, Album, Users, Clock, Gamepad2 } from "lucide-react"
import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IqraLogo } from "@/components/iqra-logo"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      
  </div>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <section className="mb-12">
         <div className="flex justify-center mb-8">
             <IqraLogo size="lg" showText={false} />
          </div>
          
        
          <h2 className="text-2xl font-bold mb-4">Ways to Contribute</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            IQRA is an open-source freeware project that welcomes contributions from everyone. Whether you're a developer,
            designer, Arabic linguist, or Quran enthusiast, there are many ways you can help improve this project.
          </p>
          </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Code className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Code Contributions</CardTitle>
                <CardDescription>Help improve the application</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Fix bugs and issues</li>
                  <li>Implement new features</li>
                  <li>Improve performance</li>
                  <li>Write tests</li>
                  <li>Enhance accessibility</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Content Contributions</CardTitle>
                <CardDescription>Help expand our vocabulary database</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Add new vocabulary words</li>
                  <li>Provide Quranic examples</li>
                  <li>Create new quizzes</li>
                  <li>Verify translations</li>
                  <li>Improve explanations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Feedback and Ideas</CardTitle>
                <CardDescription>Help us improve the user experience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Report bugs</li>
                  <li>Suggest new features</li>
                  <li>Provide feedback on existing features</li>
                  <li>Share your learning experience</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Community Support</CardTitle>
                <CardDescription>Help spread the word</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Share KALAM with others</li>
                  <li>Write about your experience</li>
                  <li>Create tutorials</li>
                  <li>Answer questions from other users</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How to Contribute Code</h2>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <ol className="list-decimal pl-6 space-y-4 text-gray-600 dark:text-gray-300">
              <li>
                <strong>Fork the repository</strong>
                <p>Start by forking the KALAM repository on GitHub.</p>
              </li>
              <li>
                <strong>Clone your fork</strong>
                <p>Clone your fork to your local machine:</p>
                <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded mt-2 overflow-x-auto">
                  <code>git clone https://github.com/your-username/kalam.git</code>
                </pre>
              </li>
              <li>
                <strong>Create a branch</strong>
                <p>Create a branch for your feature or bugfix:</p>
                <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded mt-2 overflow-x-auto">
                  <code>git checkout -b feature/your-feature-name</code>
                </pre>
              </li>
              <li>
                <strong>Make your changes</strong>
                <p>Implement your changes, following the project's coding standards.</p>
              </li>
              <li>
                <strong>Commit your changes</strong>
                <p>Commit your changes with a descriptive commit message:</p>
                <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded mt-2 overflow-x-auto">
                  <code>git commit -m "Add feature: your feature description"</code>
                </pre>
              </li>
              <li>
                <strong>Push to your fork</strong>
                <p>Push your changes to your fork:</p>
                <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded mt-2 overflow-x-auto">
                  <code>git push origin feature/your-feature-name</code>
                </pre>
              </li>
              <li>
                <strong>Create a Pull Request</strong>
                <p>Go to the KALAM repository and create a pull request from your branch.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Code of Conduct</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            We are committed to providing a welcoming and inspiring community for all. Please be respectful and
            considerate of others when contributing to the project.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            We expect all contributors to adhere to our Code of Conduct, which promotes a positive and inclusive
            environment for everyone.
          </p>
        </section>

        <div className="flex justify-center mt-8">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
