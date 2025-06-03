import { IqraLogo } from "@/components/iqra-logo"
import { MessageSquare } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex flex-col items-center mb-10">
        <div className="mb-6">
          <IqraLogo size="lg" showText={false} />
        </div>
        <h1 className="text-4xl font-bold text-center text-green-800 dark:text-green-400 mb-2">About IQRA</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl">
          The first freeware open-source Islamic knowledge quiz app with competitive challenges
        </p>
        </div>
      <div className="prose dark:prose-invert max-w-none">
        <h2><strong>Our Mission:</strong></h2>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-600 px-2">
بِرٌّ هَذِهِ صَدَقَةٌ جَارِيَةٌ لِوَجْهِ اللهِ تَعَالَى
</p><p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-600 px-2">or This is an ongoing charity for the sake of Allah, The Entirely Generous.</p>
<p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-600 px-2">So, through gaming and social learning, IQRA aims to make Islamic knowledge accessible, engaging, and interactive for Muslims around the world.
            <br className="hidden sm:block" />                   
            <span className="block sm:inline">{" "}</span> 
        </p>
        </div>
        <div className="prose dark:prose-invert max-w-none">
        <h2><strong>Islamic Knowledge Categories:</strong></h2>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-600 px-2">
          IQRA currently covers a wide range of Islamic knowledge categories including Quran, Fiqh, Tafsir, Hadeeth,
          Aqeedah, Seerah, Tazkiyah, Islamic History, Dawah, New Muslims, Comparative Religion, and Islamic Finance.
            <br className="hidden sm:block" />                   
            <span className="block sm:inline">{" "}</span>
        </p>
      </div>
        <div className="prose dark:prose-invert max-w-none">
        <h2><strong>Features:</strong></h2>
        <ul>
          <li>
            <strong>Comprehensive Quiz System</strong> - Test your knowledge across multiple Islamic topics
          </li>
          <li>
            <strong>Challenge Friends</strong> - Send challenges to friends and compare your Islamic knowledge
          </li>
          <li>
            <strong>Interactive Learning</strong> - Engage with interactive infographics and visual learning aids
          </li>
          <li>
            <strong>Progress Tracking</strong> - Monitor your learning journey with detailed statistics
          </li>
          <li>
            <strong>Badges and Achievements</strong> - Earn badges as you master different knowledge areas
          </li>
        </ul>
        <br className="hidden sm:block" />                   
            <span className="block sm:inline">{" "}</span>
         </div>
         <div className="prose dark:prose-invert max-w-none">
        <h2><cite><strong>Credits</strong></cite></h2>
        <ul>
          <li>
            <strong>Concept, Design & Demo Version:</strong> by {" "}
              <a
                href="https://cvemrafi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Rafique
              </a>{" "}; and May Allah <span>
              reward{" "}
              <a href="joy_ahmed_007@yahoo.com"
                className="text-blue-600 hover:text-blue-800 underline"
              >Joy</a>
               {" "}
            </span>whose mail is
            joy_ahmed_007@yahoo.com for teaching and guiding Rafique.
          </li>
          <li>
            <strong>Alpha & Beta Versions, Scale-up, Maintenance:</strong> v0 by Vercel. For, IQRA was created through a unique collaboration between human vision and artificial intelligence.
          </li>
        </ul>
        <br className="hidden sm:block" />                   
            <span className="block sm:inline">{" "}</span>
         </div>
      <div className="border-t border-gray-200 p-4 text-center text-sm text-gray-600 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 w-full mt-8 rounded-lg">
        <div className="flex items-center justify-center mb-1">
          <MessageSquare className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
          <span>
            For suggestions WhatsApp{" "}
            <a
              href="https://cvemrafi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
            >
              Rafique
            </a>{" "}
            at +91 7558845528
          </span>
        </div>
        <div className="flex items-center justify-center">
          <svg viewBox="0 0 496.08 512" className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400">
            <path
              fill="currentColor"
              d="M245.83 214.87l-33.22 17.28c-9.43-19.58-25.24-19.93-27.46-19.93-22.13 0-33.22 14.61-33.22 43.84 0 23.57 9.21 43.84 33.22 43.84 14.47 0 24.65-7.09 30.57-21.26l30.55 15.5c-6.17 11.51-25.69 38.98-65.1 38.98-22.6 0-73.96-10.32-73.96-77.05 0-58.69 43-77.06 72.63-77.06 30.72-.01 52.7 11.95 65.99 35.86zm143.05 0l-32.78 17.28c-9.5-19.77-25.72-19.93-27.9-19.93-22.14 0-33.22 14.61-33.22 43.84 0 23.55 9.23 43.84 33.22 43.84 14.45 0 24.65-7.09 30.54-21.26l31 15.5c-2.1 3.75-21.39 38.98-65.09 38.98-22.69 0-73.96-9.87-73.96-77.05 0-58.67 42.97-77.06 72.63-77.06 30.71-.01 52.58 11.95 65.56 35.86zM247.56 8.05C104.74 8.05 0 123.11 0 256.05c0 138.49 113.6 248 247.56 248 129.93 0 248.44-100.87 248.44-248 0-137.87-106.62-248-248.44-248zm.87 450.81c-112.54 0-203.7-93.04-203.7-202.81 0-105.42 85.43-203.27 203.72-203.27 112.53 0 202.82 89.46 202.82 203.26-.01 121.69-99.68 202.82-202.84 202.82z"
            />
          </svg>
          <span>
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
            >
              License 4.0
            </a>{" "}
            • Iqra 💡 Team
          </span>
        </div>
      </div>
    </div>
  )
}
