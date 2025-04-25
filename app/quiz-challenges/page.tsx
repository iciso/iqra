export default function QuizChallengesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold text-center mb-6">IQRA Challenge Mode</h1>
      <p className="text-center mb-8">
        Test your Islamic knowledge against time and compete with others on our leaderboards.
      </p>

      <div className="max-w-md mx-auto border border-gray-200 rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">Challenges Coming Soon</h2>
        <p className="mb-6">We're preparing exciting Islamic knowledge challenges for you.</p>
        <a href="/categories" className="inline-block py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">
          Browse Learning Categories
        </a>
      </div>
    </div>
  )
}
