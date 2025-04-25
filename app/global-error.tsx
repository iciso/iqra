"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
          <p className="mb-8 text-gray-600 max-w-md">We apologize for the inconvenience. Please try again later.</p>
          <button onClick={() => reset()} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
