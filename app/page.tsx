import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Trophy, Phone, List } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Card className="w-full max-w-md border-green-200 shadow-lg dark:border-green-800">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-400">IQRA Demo Quiz</CardTitle>
          <CardDescription className="text-green-600 dark:text-green-500">
            IQRA:Islamic Quiz Rivalry App
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            ما شاء الله (Masha Allah!) Welcome to IQRA Demo. Test your knowledge across 11 Islamic categories with easy
            and advanced difficulty levels. Do send your suggestions to Rafique by WhatsApp on +91 7558845528.
          </p>
          <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
            <Book className="w-16 h-16 text-green-600 dark:text-green-400" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Link href="/categories" className="w-full">
            <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 flex items-center justify-center">
              <List className="mr-2 h-4 w-4" />
              Browse Categories
            </Button>
          </Link>
          <div className="flex gap-4 w-full">
            <Link href="/leaderboard" className="w-1/2">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center dark:border-green-700 dark:text-green-400"
              >
                <Trophy className="mr-2 h-4 w-4" />
                Hall of Fame
              </Button>
            </Link>
            <Link href="/contact" className="w-1/2">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center dark:border-green-700 dark:text-green-400"
              >
                <Phone className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  )
}
