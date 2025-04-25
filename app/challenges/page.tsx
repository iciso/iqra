export default function ChallengesPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-2">IQRA Challenge Mode</h1>
      <p className="text-center mb-8 text-gray-600">
        Test your Islamic knowledge against time and compete with others on our leaderboards
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Daily Quiz Challenge */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold">Daily Quiz Challenge</h2>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
          </div>
          <p className="text-gray-600 mb-4">Test your knowledge with our daily quiz covering various Islamic topics</p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-sm text-gray-500">Questions</h3>
              <p className="font-medium">10</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Time Limit</h3>
              <p className="font-medium">5 minutes</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Difficulty</h3>
              <p className="font-medium">Mixed</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Participants</h3>
              <p className="font-medium">245</p>
            </div>
          </div>

          <a
            href="/quiz?category=quran&difficulty=easy&challenge=daily"
            className="block w-full py-2 px-4 bg-black text-white text-center rounded-md hover:bg-gray-800 transition-colors"
          >
            Start Challenge
          </a>
        </div>

        {/* Quran Knowledge Challenge */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold">Quran Knowledge Challenge</h2>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
          </div>
          <p className="text-gray-600 mb-4">How well do you know the Quran? Take this challenge to find out!</p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-sm text-gray-500">Questions</h3>
              <p className="font-medium">15</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Time Limit</h3>
              <p className="font-medium">7 minutes</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Difficulty</h3>
              <p className="font-medium">Intermediate</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Participants</h3>
              <p className="font-medium">189</p>
            </div>
          </div>

          <a
            href="/quiz?category=quran&difficulty=advanced&challenge=quran"
            className="block w-full py-2 px-4 bg-black text-white text-center rounded-md hover:bg-gray-800 transition-colors"
          >
            Start Challenge
          </a>
        </div>

        {/* Seerah Special Challenge */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold">Seerah Special Challenge</h2>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
          </div>
          <p className="text-gray-600 mb-4">Test your knowledge about the life of Prophet Muhammad (PBUH)</p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-sm text-gray-500">Questions</h3>
              <p className="font-medium">12</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Time Limit</h3>
              <p className="font-medium">6 minutes</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Difficulty</h3>
              <p className="font-medium">Advanced</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Participants</h3>
              <p className="font-medium">132</p>
            </div>
          </div>

          <a
            href="/quiz?category=seerah&difficulty=advanced&challenge=seerah"
            className="block w-full py-2 px-4 bg-black text-white text-center rounded-md hover:bg-gray-800 transition-colors"
          >
            Start Challenge
          </a>
        </div>

        {/* Fiqh Fundamentals */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold">Fiqh Fundamentals</h2>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
          </div>
          <p className="text-gray-600 mb-4">Challenge yourself on the basics of Islamic jurisprudence</p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-sm text-gray-500">Questions</h3>
              <p className="font-medium">10</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Time Limit</h3>
              <p className="font-medium">5 minutes</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Difficulty</h3>
              <p className="font-medium">Beginner</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Participants</h3>
              <p className="font-medium">201</p>
            </div>
          </div>

          <a
            href="/quiz?category=fiqh&difficulty=easy&challenge=fiqh"
            className="block w-full py-2 px-4 bg-black text-white text-center rounded-md hover:bg-gray-800 transition-colors"
          >
            Start Challenge
          </a>
        </div>
      </div>

      {/* Ramadan Special */}
      <div className="border rounded-lg p-6 bg-white shadow-sm mb-8">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold">Ramadan Special</h2>
          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Coming Soon</span>
        </div>
        <p className="text-gray-600 mb-4">A special challenge about Ramadan, its virtues, and practices</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="text-sm text-gray-500">Questions</h3>
            <p className="font-medium">15</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Time Limit</h3>
            <p className="font-medium">8 minutes</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Difficulty</h3>
            <p className="font-medium">Mixed</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Participants</h3>
            <p className="font-medium">310</p>
          </div>
        </div>

        <div className="block w-full py-2 px-4 bg-gray-300 text-gray-600 text-center rounded-md cursor-not-allowed">
          Coming Soon
        </div>
      </div>

      <div className="flex justify-center">
        <a
          href="/leaderboard"
          className="inline-block py-2 px-6 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
        >
          View Global Leaderboard
        </a>
      </div>
    </div>
  )
}
