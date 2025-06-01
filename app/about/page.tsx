import { IqraLogo } from "@/components/iqra-logo"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex flex-col items-center mb-10">
        <div className="mb-6">
          <IqraLogo size="lg" showText={false} />
        </div>
        <h1 className="text-4xl font-bold text-center text-green-800 dark:text-green-400 mb-2">About IQRA</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl">
          The first Islamic knowledge quiz app with a competitive challenge system
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2>Our Mission</h2>
        <p>
          IQRA aims to make Islamic knowledge accessible, engaging, and interactive for Muslims around the world.
          Through gamification and social learning, we hope to inspire a deeper connection with Islamic teachings and
          foster a community of continuous learning.\n
        </p>

        <h2>Features</h2>
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
            <strong>Badges and Achievements</strong> - Earn badges as you master different knowledge areas\n
          </li>
        </ul>

        <h2>Credits</h2>
        <p>IQRA was created through a unique collaboration between human vision and artificial intelligence:</p>
        <ul>
          <li>
            <strong>Concept, Design & Demo Version:</strong> Rafique, and May Allah reward Joy whose mail is
            joy_ahmed_007@yahoo.com for teaching and{" "}
            <span>
              guiding{" "}
              <a
                href="https://cvemrafi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Rafique
              </a>{" "}
            </span>
            .\n
          </li>
          <li>
            <strong>Alpha & Beta Versions, Scale-up, Maintenance:</strong> v0 by Vercel\n
          </li>
        </ul>

        <h2>Islamic Knowledge Categories</h2>
        <p>
          IQRA currently covers a wide range of Islamic knowledge categories including Quran, Fiqh, Tafsir, Hadeeth,
          Aqeedah, Seerah, Tazkiyah, Islamic History, Dawah, New Muslims, Comparative Religion, and Islamic Finance.\n
        </p>
        <div className="text-center mt-10 text-sm text-gray-500 dark:text-gray-400">
          <p className="mb-2">
            بِرٌّ هَذِهِ صَدَقَةٌ جَارِيَةٌ لِوَجْهِ اللهِ تَعَالَى or This is an ongoing charity for the sake of Allah, The Entirely
            Generous.
          </p>
          <p className="mb-2">
            Thus, all apps by IQRA codes team of Rafique and Joy are freeware,{" "}
            <span>
              and{" "}
              <a
                href="https://github.com/iciso/iqra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                open source
              </a>{" "}
            </span>
            .
          </p>
          <p className="mb-2">For suggestions WhatsApp Rafique at +91 7558845528.</p>
        </div>
      </div>
    </div>
  )
}
