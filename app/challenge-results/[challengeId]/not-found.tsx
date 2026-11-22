import Link from "next/link"
import { Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const ChallengeNotFound = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="text-center py-8">
          <Trophy className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-200 mb-2">Challenge not found</p>
          <p className="text-sm text-gray-400 mb-6">
            This challenge may have expired or does not exist.
          </p>
          <Link href="/challenges">
            <Button className="bg-green-600 hover:bg-green-700">Back to Challenges</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export default ChallengeNotFound
