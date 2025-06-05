import Link from "next/link"
import { ArrowRight, ArrowLeft, Github, BookOpen, Database, ListPlus, Users, Clock, Gamepad2 } from "lucide-react"
import { FileText } from "@geist/icons"
import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IqraLogo } from "@/components/iqra-logo"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <section className="mb-12">
          <div className="flex justify-center mb-8">
             <IqraLogo size="lg" showText={false} />
          </div>
          <h1 className="text-4xl font-bold text-center text-green-800 dark:text-green-400 mb-2">About IQRA</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl">
          The first freeware open-source Islamic knowledge quiz app with competitive challenges
        </p>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
             بِرٌّ هَذِهِ صَدَقَةٌ جَارِيَةٌ لِوَجْهِ اللهِ تَعَالَى
          </p>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            or This is an ongoing charity for the sake of Allah <span className="text-2xl font-normal align-middle">ﷻ</span>, The Entirely Generous.<br />
            Thus, all apps by IQRA team of Rafique and Joy are freeware, and open source.
            <br />
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            So, through gaming and social learning, IQRA aims to make Islamic knowledge accessible, engaging, and interactive for Muslims around the world.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
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
            <strong>Badges & Achievements</strong> - Earn badges as you master different knowledge areas
          </li>
            <li>
            <strong>Responsive design</strong> - For desktop and mobile use</li>
          </ul>
        </section>

         <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Islamic Knowledge Categories</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            IQRA currently covers a wide range of Islamic knowledge categories including Quran, Fiqh, Tafsir, Hadeeth,
          Aqeedah, Seerah, Tazkiyah, Islamic History, Dawah, New Muslims, Comparative Religion, and Islamic Finance..
          </p>
        </section>


        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Open Source</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            IQRA is completely open-source and free to use. We welcome contributions from developers, Arabic linguists,
            Quran scholars, and anyone passionate about making Islamic knowledge more accessible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="https://github.com/iciso/iqra" target="_blank" rel="noopener noreferrer">
            <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
              <Github className="mr-2 h-4 w-4" />
                GitHub IQRA Repository
              </Button>
            </Link>
            <Link href="https://qalaam.vercel.app/contribute" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full sm:w-auto">
                How to Contribute
              </Button>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technology</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">IQRA is built using modern web technologies:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Next.js - React framework for server-rendered applications</li>
            <li>TypeScript - For type safety and better developer experience</li>
            <li>Tailwind CSS - For responsive and customizable styling</li>
            <li>Vercel - For deployment and hosting</li>
          </ul>
        </section>

         <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><cite>Credits</cite></h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
          <li>
            <strong>Concept, Design & Demo Version:</strong> by {" "}
              <a
                href="https://cvemrafi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Rafique
              </a>{" "}; and May Allah <span className="text-2xl font-normal align-middle">ﷻ</span>, <span>
              reward{" "}
              <a href="https://zettabyteincorp.com/"
              target="_blank"
              rel="noopener noreferrer"
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
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">IQRA Papers</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            This document provides the Policy, Proposal, & Plans (PPP) for the future to continue this ongoing charity for the sake of Allah <span className="text-2xl font-normal align-middle">ﷻ</span>, The Entrely Merciful, The Entirely Generous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="https://tinyurl.com/mchf5tut" target="_blank" rel="noopener noreferrer">
            <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
              <FileText className="mr-2 h-4 w-4" />
                IQRA Papers
              </Button>
            </Link>
          </div>
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
      <div className="border-t border-gray-200 p-4 text-center text-sm text-gray-700 bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 w-full mt-8 rounded-lg">
  <div className="flex items-center justify-center mb-1">
    <MessageSquare className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400" />
    <span>
      For suggestions WhatsApp{" "}
      <a
        href="https://cvemrafi.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 underline"
      >
        Rafique
      </a>{" "}
      at +91 7558845528
    </span>
  </div>
  <div className="flex items-center justify-center">
    <svg viewBox="0 0 496.08 512" className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400">
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
        className="text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 underline"
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
