import Link from "next/link";
import { ArrowRight, ArrowLeft, Github, BookOpen, Database, Album, Users, Clock, Trophy, Gamepad2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IqraLogo } from "@/components/iqra-logo";

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
            or This is an ongoing charity for the sake of Allah <span className="text-3xl font-normal align-middle">ﷻ</span>, The Entirely Generous.<br />
            Thus, all apps by IQRA team of Rafique and Joy are freeware, and open source.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            So, through gaming and social learning, IQRA aims to make Islamic knowledge accessible, engaging, and interactive for Muslims around the world.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li><strong>Comprehensive Quiz System</strong> - Test your knowledge across multiple Islamic topics</li>
            <li><strong>Challenge Friends</strong> - Send challenges to friends and compare your Islamic knowledge</li>
            <li><strong>Interactive Learning</strong> - Engage with interactive infographics and visual learning aids</li>
            <li><strong>Progress Tracking</strong> - Monitor your learning journey with detailed statistics</li>
            <li><strong>Badges & Achievements</strong> - Earn badges as you master different knowledge areas</li>
            <li><strong>Responsive design</strong> - For desktop and mobile use</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Islamic Knowledge Categories</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            IQRA currently covers a wide range of Islamic knowledge categories including Quran, Fiqh, Tafsir, Hadeeth,
            Aqeedah, Seerah, Tazkiyah, Islamic History, Dawah, New Muslims, Comparative Religion, and Islamic Finance.
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
            <Link href="/contribute">
              <Button variant="outline" className="w-full sm:w-auto">
                How to Contribute
              </Button>
            </Link>
            <Link href="/why">
              <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
                <Trophy className="mr-2 h-4 w-4" />
                Why IQRA than KALAM
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
            <li>Supabase - For authentication and real-time database</li>
            <li>Vercel - For deployment and hosting</li>
          </ul>
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <img src="https://supabase.com/images/logo-dark.png" alt="Supabase Logo" className="h-10 w-auto hover:scale-105 transition-transform ring-1 ring-gray-100 dark:ring-gray-300 dark:invert" />
            <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" alt="Vercel Logo" className="h-10 w-auto hover:scale-105 transition-transform ring-1 ring-gray-100 dark:ring-gray-300 dark:invert" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Acknowledgments</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            All praise and thanks are due to Allah <span className="text-3xl font-normal align-middle">ﷻ</span>, The Entirely Merciful, The Entirely Generous. IQRA is a labor of love, made possible through the blessings of Allah and the contributions of many, Ameen, Summa Ameen.
          </p>
          <ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-300">
            <li>
              <strong>Concept, Design & Demo Version:</strong> By{" "}
              <a
                href="https://cvemrafi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Mohamed Essa Rafique
              </a>, whose vision and dedication brought IQRA to life, Alhamdulillah. May Allah <span className="text-3xl font-normal align-middle">ﷻ</span> reward{" "}
              <a
                href="https://zettabyteincorp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Joy Ahmed
              </a>{" "}
              (joy_ahmed_007@yahoo.com) for guiding and mentoring Rafique in this noble endeavor.
            </li>
            <li>
             <strong>Alpha & Beta Versions, Scale-up, Maintenance:</strong> Powered by{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Vercel
              </a>{" "}
              and their innovative v0 platform. The seamless deployment and scaling of IQRA owe much to Vercel’s robust infrastructure.
              <div className="mt-2">
                <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" alt="Vercel Logo" className="h-8 w-auto inline-block hover:scale-105 transition-transform dark:invert" />
              </div>
            </li>
            <li>
              <strong>AI-Powered Debugging & Code Optimization:</strong> Special thanks to{" "}
              <a
                href="https://x.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                xAI
              </a>{" "}
              and their AI assistant, Grok, for tirelessly assisting in debugging, optimizing, and enhancing the codebase of both IQRA and KALAM over the past month. Grok’s precision and insights have been instrumental in ensuring a robust and reliable application, Alhamdulillah.
              <div className="mt-2">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto inline-block hover:scale-105 transition-transform dark:text-gray-300">
                  <path d="M2.30047 8.77631L12.0474 23H16.3799L6.63183 8.77631H2.30047ZM6.6285 16.6762L2.29492 23H6.63072L8.79584 19.8387L6.6285 16.6762ZM17.3709 1L9.88007 11.9308L12.0474 15.0944L21.7067 1H17.3709ZM18.1555 7.76374V23H21.7067V2.5818L18.1555 7.76374Z" fill="currentColor"></path>
                </svg>
              </div>
            </li>
            <li>
              <strong>Data Coding & Content Curation:</strong> Deep gratitude to{" "}
              <a
                href="https://www.deepseek.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                DeepSeek
              </a>{" "}
              for their invaluable assistance in structuring data and curating Islamic content, ensuring IQRA’s knowledge base is accurate and accessible, Alhamdulillah.
              <div className="mt-2">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto inline-block hover:scale-105 transition-transform dark:text-gray-300">
                  <path
                    d="M48.8354 10.0479C48.3232 9.79199 48.1025 10.2798 47.8032 10.5278C47.7007 10.6079 47.6143 10.7119 47.5273 10.8076C46.7793 11.624 45.9048 12.1597 44.7622 12.0957C43.0923 12 41.666 12.5356 40.4058 13.8398C40.1377 12.2319 39.2476 11.272 37.8926 10.6558C37.1836 10.3359 36.4668 10.0156 35.9702 9.31982C35.6235 8.82373 35.5293 8.27197 35.356 7.72754C35.2456 7.3999 35.1353 7.06396 34.7651 7.00781C34.3633 6.94385 34.2056 7.2876 34.0479 7.57568C33.418 8.75195 33.1733 10.0479 33.1973 11.3599C33.2524 14.312 34.4736 16.6641 36.8999 18.3359C37.1758 18.5278 37.2466 18.7197 37.1597 19C36.9946 19.5757 36.7974 20.1357 36.624 20.7119C36.5137 21.0801 36.3486 21.1597 35.9624 21C34.6309 20.4321 33.481 19.5918 32.4644 18.5757C30.7393 16.8721 29.1792 14.9917 27.2334 13.52C26.7764 13.1758 26.3193 12.856 25.8467 12.5518C23.8618 10.584 26.1069 8.96777 26.627 8.77588C27.1704 8.57568 26.8159 7.8877 25.0591 7.896C23.3022 7.90381 21.6953 8.50391 19.647 9.30371C19.3477 9.42383 19.0322 9.51172 18.7095 9.58398C16.8501 9.22363 14.9199 9.14355 12.9033 9.37598C9.10596 9.80762 6.07275 11.6396 3.84326 14.7681C1.16455 18.5278 0.53418 22.7998 1.30664 27.2559C2.11768 31.9521 4.46582 35.8398 8.07373 38.8799C11.8159 42.0322 16.1255 43.5762 21.041 43.2803C24.0269 43.104 27.3516 42.6963 31.1016 39.4561C32.0469 39.936 33.0396 40.1279 34.686 40.272C35.9546 40.3921 37.1758 40.208 38.1211 40.0078C39.6021 39.688 39.4995 38.2881 38.9639 38.0322C34.623 35.9678 35.5762 36.8081 34.71 36.1279C36.9155 33.4639 40.2402 30.6958 41.54 21.728C41.6426 21.0161 41.5557 20.5679 41.54 19.9917C41.5322 19.6396 41.6108 19.5039 42.0049 19.4639C43.0923 19.3359 44.1479 19.0317 45.1167 18.4878C47.9292 16.9199 49.064 14.3438 49.3315 11.2559C49.3711 10.7837 49.3237 10.2959 48.8354 10.0479ZM24.3262 37.8398C20.1196 34.4639 18.0791 33.3521 17.2358 33.3999C16.4482 33.4482 16.5898 34.3682 16.7632 34.9678C16.9443 35.5601 17.1812 35.9683 17.5117 36.4878C17.7402 36.832 17.8979 37.3442 17.2832 37.728C15.9282 38.584 13.5728 37.4399 13.4624 37.3838C10.7207 35.7358 8.42822<reponame
              <div className="mt-2">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto inline-block hover:scale-105 transition-transform dark:text-gray-300">
                  <path
                    d="M48.8354 10.0479C48.3232 9.79199 48.1025 10.2798 47.8032 10.5278C47.7007 10.6079 47.6143 10.7119 47.5273 10.8076C46.7793 11.624 45.9048 12.1597 44.7622 12.0957C43.0923 12 41.666 12.5356 40.4058 13.8398C40.1377 12.2319 39.2476 11.272 37.8926 10.6558C37.1836 10.3359 36.4668 10.0156 35.9702 9.31982C35.6235 8.82373 35.5293 8.27197 35.356 7.72754C35.2456 7.3999 35.1353 7.06396 34.7651 7.00781C34.3633 6.94385 34.2056 7.2876 34.0479 7.57568C33.418 8.75195 33.1733 10.0479 33.1973 11.3599C33.2524 14.312 34.4736 16.6641 36.8999 18.3359C37.1758 18.5278 37.2466 18.7197 37.1597 19C36.9946 19.5757 36.7974 20.1357 36.624 20.7119C36.5137 21.0801 36.3486 21.1597 35.9624 21C34.6309 20.4321 33.481 19.5918 32.4644 18.5757C30.7393 16.8721 29.1792 14.9917 27.2334 13.52C26.7764 13.1758 26.3193 12.856 25.8467 12.5518C23.8618 10.584 26.1069 8.96777 26.627 8.77588C27.1704 8.57568 26.8159 7.8877 25.0591 7.896C23.3022 7.90381 21.6953 8.50391 19.647 9.30371C19.3477 9.42383 19.0322 9.51172 18.7095 9.58398C16.8501 9.22363 14.9199 9.14355 12.9033 9.37598C9.10596 9.80762 6.07275 11.6396 3.84326 14.7681C1.16455 18.5278 0.53418 22.7998 1.30664 27.2559C2.11768 31.9521 4.46582 35.8398 8.07373 38.8799C11.8159 42.0322 16.1255 43.5762 21.041 43.2803C24.0269 43.104 27.3516 42.6963 31.1016 39.4561C32.0469 39.936 33.0396 40.1279 34.686 40.272C35.9546 40.3921 37.1758 40.208 38.1211 40.0078C39.6021 39.688 39.4995 38.2881 38.9639 38.0322C34.623 35.9678 35.5762 36.8081 34.71 36.1279C36.9155 33.4639 40.2402 30.6958 41.54 21.728C41.6426 21.0161 41.5557 20.5679 41.54 19.9917C41.5322 19.6396 41.6108 19.5039 42.0049 19.4639C43.0923 19.3359 44.1479 19.0317 45.1167 18.4878C47.9292 16.9199 49.064 14.3438 49.3315 11.2559C49.3711 10.7837 49.3237 10.2959 48.8354 10.0479ZM24.3262 37.8398C20.1196 34.4639 18.0791 33.3521 17.2358 33.3999C16.4482 33.4482 16.5898 34.3682 16.7632 34.9678C16.9443 35.5601 17.1812 35.9683 17.5117 36.4878C17.7402 36.832 17.8979 37.3442 17.2832 37.728C15.9282 38.584 13.5728 37.4399 13.4624 37.3838C10.7207 35.7358 8.42822 33.5601 6.81348 30.584C5.25342 27.7197 4.34766 24.6479 4.19775 21.3677C4.1582 20.5757 4.38672 20.2959 5.15869 20.1519C6.17529 19.96 7.22314 19.9199 8.23926 20.0718C12.5327 20.7119 16.1885 22.6719 19.2529 25.7759C21.002 27.5439 22.3252 29.6558 23.6885 31.7202C25.1377 33.9121 26.6978 36 28.6831 37.7119C29.3843 38.312 29.9434 38.7681 30.479 39.104C28.8643 39.2881 26.1699 39.328 게
              </div>
            </li>
            <li>
              <strong>Content Creation:</strong> Heartfelt thanks to{" "}
              <a
                href="https://gemini.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Gemini
              </a>{" "}
              for their contributions to crafting engaging and meaningful content for IQRA, enhancing the learning experience for users worldwide, Alhamdulillah.
            </li>
            <li>
              <strong>Community & Contributors:</strong> Immense gratitude to all open-source contributors, Quran scholars, Arabic linguists, and community members who have provided feedback, questions, and support to make IQRA a global platform for Islamic learning, may Allah <span className="text-3xl font-normal align-middle">ﷻ</span> accept their efforts.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">IQRA Papers</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            This document provides the Policy, Proposal, & Plans (PPP) for the future to continue this ongoing charity for the sake of Allah <span className="text-3xl font-normal align-middle">ﷻ</span>, The Entirely Merciful, The Entirely Generous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="https://tinyurl.com/mchf5tut" target="_blank" rel="noopener noreferrer">
              <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
                <Album className="mr-2 h-4 w-4" />
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
  );
}
