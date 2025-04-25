export default function QuizChallengesLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600">Loading challenges...</p>
    </div>
  )
}
