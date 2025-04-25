import Link from "next/link"

export default function ChallengeNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Challenge Not Found</h1>
      <p className="mb-8 text-gray-600 max-w-md">
        The challenge you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
        Return to Home
      </Link>
    </div>
  )
}
