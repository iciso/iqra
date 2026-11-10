import Link from "next/link";
import React from 'react';
import { ArrowRight, ArrowLeft, Github, BookOpen, Database, Album, Users, Clock, Trophy, Gamepad2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IqraLogo } from "@/components/iqra-logo";

/*
IQRA To do list:
1) To Add categories like Ethical AI use, Sexual Health, choosing form the list in G Docs, add the new files, or alter or add new code at:
iqra/data/
iqra/app/categories/page
iqra/components/challenge/category-first-challenge-dialog.tsx
iqra/components/challenge/category-first-challenge-sender.tsx
iqra/data/quiz-data-manager.tsx 
iqra/app/about/page  -> https://iqrar.vercel.app/about#iqra-quizzes  
------
2) Enhance the Badges Page with bigger badges, better logic explained by infographic to players
3) Animated Flowchart to explain workflow of challenge to player.
4) Explain the algorithm of challenges, scoring, leaderboard, contributors rewards by an 
animated infographic to motiviate Volunteers to play and find out errors in content
------
5) Complete the work begun on Challenges for Surah Quizzes -> 78 to 114
6) Complete the work begun on Challenges for Quranic Arabic and MSA with 1000 words each
7) a)Complete all three levels to same numbers in multiples of 10 for all categories
7) b)Refactor Neon SOL so that those players who earned % above 100% scores and % are rounded to 100% 
8) a) Challenge Notifications more than one must be in autoscroll, so second is not seen
8) b) Check if Valid Until time is removed in Challenge notification -> eight figure digit in hours!
8) c) Can clicking on any Player name reveal their profile in IQRA, as IQRA profile depends on what name is used to log in?
9) Challenges in Easy or Hard start in the same easy level for Quranic Arabic! Check for other categories?

------
10) Continously test to see all quizzes, and pages are Mobile Responsive Maintain uniform UI and UX as if one AI did the entire project
11) Cross-link IQRA & KALAM to guide users who want or do not want challenges 
12) Acknowledge all other AI contributors if any left out
*/


const quizDistribution = [
  { category: "Quran", easy: 30, intermediate: 10, advanced: 30 },
  { category: "Seerah", easy: 40, intermediate: 40, advanced: 40 },
  { category: "Aqeedah", easy: 36, intermediate: 36, advanced: 36 },
  { category: "Shirk", easy: 36, intermediate: 36, advanced: 36 },
  { category: "New Muslims", easy: 30, intermediate: 10, advanced: 30 },
  { category: "Tafsir", easy: 40, intermediate: 40, advanced: 40 },
  { category: "Tazkiyah", easy: 30, intermediate: 10, advanced: 30 },
  { category: "Comparative Religion", easy: 30, intermediate: 10, advanced: 30 },
  { category: "Islamic Finance", easy: 30, intermediate: 50, advanced: 40 },
  { category: "Cryptocurrency", easy: 30, intermediate: 10, advanced: 30 },
  { category: "History", easy: 40, intermediate: 40, advanced: 40 },
  { category: "Hadeeth", easy: 40, intermediate: 40, advanced: 39 },
  { category: "Fiqh", easy: 40, intermediate: 40, advanced: 40 },
  { category: "Christianity", easy: 30, intermediate: 10, advanced: 30 },
  { category: "Bid'ah", easy: 36, intermediate: 36, advanced: 36 },
  { category: "Riba", easy: 40, intermediate: 30, advanced: 30 },
  { category: "Takaful", easy: 35, intermediate: 31, advanced: 27 },
  { category: "Hinduism", easy: 30, intermediate: 10, advanced: 30 },
  { category: "Dawah", easy: 40, intermediate: 40, advanced: 40 },
  { category: "Gender", easy: 30, intermediate: 10, advanced: 30 },
  { category: "LGBTQ", easy: 30, intermediate: 30, advanced: 30 },
  { category: "Psychology", easy: 30, intermediate: 10, advanced: 30 },
  { category: "Music", easy: 40, intermediate: 30, advanced: 30 },
  { category: "Alcohol & Drugs", easy: 34, intermediate: 33, advanced: 33 },
  { category: "Imagery", easy: 36, intermediate: 36, advanced: 36 },
  { category: "Dating", easy: 33, intermediate: 34, advanced: 33 },
  { category: "Marriage", easy: 36, intermediate: 36, advanced: 36 },
  { category: "Parenting", easy: 30, intermediate: 10, advanced: 30 },
  { category: "Peace", easy: 30, intermediate: 10, advanced: 30 },
  { category: "Salah", easy: 30, intermediate: 30, advanced: 30 },
  { category: "Sawm", easy: 29, intermediate: 32, advanced: 35 },
  { category: "Charity", easy: 36, intermediate: 36, advanced: 36 },
  { category: "Hajj", easy: 40, intermediate: 30, advanced: 30 },
  { category: "Madhabs", easy: 36, intermediate: 36, advanced: 36 },
  { category: "Inheritance", easy: 36, intermediate: 36, advanced: 36 },
  { category: "Fitnah", easy: 36, intermediate: 36, advanced: 36 },
  { category: "Islamic Eschatology", easy: 34, intermediate: 33, advanced: 33 },
  { category: "Islamic Medical Ethics", easy: 40, intermediate: 40, advanced: 40 },
  { category: "Surah 78", easy: 35, intermediate: 35, advanced: 35 },
  { category: "Surah 79", easy: 35, intermediate: 35, advanced: 35 },
  { category: "Surah 80", easy: 30, intermediate: 35, advanced: 35 },
  { category: "Surah 81", easy: 30, intermediate: 35, advanced: 35 },
  { category: "Surah 82", easy: 35, intermediate: 35, advanced: 35 },
  { category: "Tamil Quran", easy: 30, intermediate: 10, advanced: 30 },
  { category: "Tamil Aqeedah", easy: 36, intermediate: 36, advanced: 36 },
  { category: "Tamil Salah", easy: 30, intermediate: 30, advanced: 30 },
  { category: "Tamil Charity", easy: 36, intermediate: 36, advanced: 36 },
  { category: "Tamil Fiqh", easy: 40, intermediate: 40, advanced: 40 },
  { category: "Quranic Arabic 01", easy: 125, intermediate: 125, advanced: 125 },
  { category: "Modern Arabic 01", easy: 167, intermediate: 167, advanced: 166 },
];

// URL slugs used by IQRA's category quiz pages
const categorySlugs: Record<string, string> = {
  "Quran": "quran",
  "Seerah": "seerah",
  "Aqeedah": "aqeedah",
  "Shirk": "shirk",
  "New Muslims": "new-muslims",
  "Tafsir": "tafsir",
  "Tazkiyah": "tazkiyah",
  "Comparative Religion": "comparative-religion",
  "Islamic Finance": "islamic-finance",
  "Cryptocurrency": "cryptocurrency",
  "History": "history",
  "Hadeeth": "hadeeth",
  "Fiqh": "fiqh",
  "Christianity": "christianity",
  "Bid'ah": "bidah",
  "Riba": "riba",
  "Takaful": "takaful",
  "Hinduism": "hinduism",
  "Dawah": "dawah",
  "Gender": "gender",
  "LGBTQ": "lgbtq",
  "Psychology": "psychology",
  "Music": "music",
  "Alcohol & Drugs": "islamic-alcohol-drugs",
  "Imagery": "imagery",
  "Dating": "dating",
  "Marriage": "marriage",
  "Parenting": "parenting",
  "Peace": "peace",
  "Salah": "salah",
  "Sawm": "sawm",
  "Charity": "charity",
  "Hajj": "hajj",
  "Madhabs": "madhab",
  "Inheritance": "inheritance",
  "Fitnah": "fitnah",
  "Islamic Eschatology": "islamic-eschatology",
  "Islamic Medical Ethics": "islamic-medical-ethics",
  "Surah 78": "surah-78",
  "Surah 79": "surah-79",
  "Surah 80": "surah-80",
  "Surah 81": "surah-81",
  "Surah 82": "surah-82",
  "Tamil Quran": "ta-quran",
  "Tamil Aqeedah": "ta-aqeedah",
  "Tamil Salah": "ta-salah",
  "Tamil Charity": "ta-charity",
  "Tamil Fiqh": "ta-fiqh",
  "Quranic Arabic 01": "quranic-arabic-01",
  "Modern Arabic 01": "modern-arabic-01",
};

// Totals and Sub-totals of questions
const totalCategory = quizDistribution.length;

const totalEasy = quizDistribution.reduce(
  (sum, item) => sum + item.easy,
  0
);

const totalIntermediate = quizDistribution.reduce(
  (sum, item) => sum + item.intermediate,
  0
);

const totalAdvanced = quizDistribution.reduce(
  (sum, item) => sum + item.advanced,
  0
);

const grandTotal = totalEasy + totalIntermediate + totalAdvanced;

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
            or This is an ongoing charity for the sake of Allah <span className="text-3xl font-normal align-middle">ﷻ</span>, 
            The Entirely Generous.<br />
            Thus, all apps by IQRA team of Rafique and Joy are freeware, and open source.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            So, through gaming and social learning, IQRA aims to make Islamic knowledge accessible, engaging, and interactive for
            Muslims around the world.
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
            <li><strong>Contributions & Recognitions</strong> - Cash Rewards for identifying errors or suggesting improvements </li>
          </ul>
        </section>

                  
          {/* IQRA Quiz Distribution Table - Newly Introduced */}
<section className="my-10 rounded-2xl border border-emerald-200 bg-white p-4 shadow-lg sm:p-6">

                     <div id="iqra-quizzes" className="mb-6 text-center">
              <h2 className="text-2xl font-extrabold text-emerald-800 sm:text-3xl">
                📊 IQRA Quizzes
              </h2>
            
              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                Category-wise Distribution of Questions by Difficulty Level
              </p>
            
              <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-gray-700">
                <p className="mb-3">
                  <strong>Choose your learning level:</strong>
                  {" "}Select the Level: 
                   <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-emerald-100 font-bold text-emerald-800">
                    E
                  </span>
                  for Easy, 
                   <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-sky-100 font-bold text-sky-800">
                    I
                  </span>
                  for Intermediate, or 
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-amber-100 font-bold text-amber-800">
                    A
                  </span> 
                  for Advanced
                  beside any category.
                </p>
            
                <p>
                  <strong>🏆 Want to challenge a friend?</strong>
                  {" "}
                  <a 
                    href="/challenges"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-md bg-purple-500 px-3 py-1 font-bold text-white transition hover:bg-purple-600"
                  >
                    C — Challenge
                  </a>
                </p>
              </div>
            </div>
  
  <div className="w-full overflow-x-auto rounded-lg">
    <table className="w-full min-w-[520px] border-collapse text-sm">

      <thead>
        <tr className="bg-emerald-100 text-emerald-900">
          <th className="border-b-2 border-emerald-200 px-3 py-3 text-left font-bold">
            Category
          </th>
          <th className="border-b-2 border-emerald-200 px-3 py-3 text-center font-bold">
            Easy
          </th>
          <th className="border-b-2 border-emerald-200 px-3 py-3 text-center font-bold">
            Intermediate
          </th>
          <th className="border-b-2 border-emerald-200 px-3 py-3 text-center font-bold">
            Advanced
          </th>
        </tr>
      </thead>

      <tbody>
        {quizDistribution.map((item, index) => (
          <tr
            key={item.category}
            className={
              index % 2 === 0
                ? "bg-white hover:bg-emerald-50"
                : "bg-gray-50 hover:bg-emerald-50"
            }
          >
            
            <td className="border-b border-gray-100 px-3 py-2.5 font-medium text-gray-700">
            <div className="flex flex-wrap items-center gap-2">
              <span>{item.category}</span>
          
              {/* Easy */}
              <a
                href={`/quiz?category=${encodeURIComponent(categorySlugs[item.category])}&difficulty=easy`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-emerald-100 px-2 text-xs font-extrabold text-emerald-800 transition hover:bg-emerald-700 hover:text-white"
                title={`Easy level: ${item.category}`}
                aria-label={`Easy level: ${item.category}`}
              >
                E
              </a>
          
              {/* Intermediate */}
              <a
                href={`/quiz?category=${encodeURIComponent(categorySlugs[item.category])}&difficulty=intermediate`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-sky-100 px-2 text-xs font-extrabold text-sky-800 transition hover:bg-sky-700 hover:text-white"
                title={`Intermediate level: ${item.category}`}
                aria-label={`Intermediate level: ${item.category}`}
              >
                I
              </a>
          
              {/* Advanced */}
              <a
                href={`/quiz?category=${encodeURIComponent(categorySlugs[item.category])}&difficulty=advanced`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-amber-100 px-2 text-xs font-extrabold text-amber-800 transition hover:bg-amber-600 hover:text-white"
                title={`Advanced level: ${item.category}`}
                aria-label={`Advanced level: ${item.category}`}
              >
                A
              </a>
            </div>
          </td>
            <td className="border-b border-gray-100 px-3 py-2.5 text-center tabular-nums">
              {item.easy}
            </td>

            <td className="border-b border-gray-100 px-3 py-2.5 text-center tabular-nums">
              {item.intermediate}
            </td>

            <td className="border-b border-gray-100 px-3 py-2.5 text-center tabular-nums">
              {item.advanced}
            </td>
          </tr>
        ))}

        {/* Total Row */}
        <tr className="bg-gradient-to-r from-emerald-100 to-amber-100 font-extrabold text-emerald-900">
          <td className="border-t-2 border-emerald-300 px-3 py-4">
            TOTAL {" "}{totalCategory.toLocaleString()}
          </td>

          <td className="border-t-2 border-emerald-300 px-3 py-4 text-center">
            {totalEasy.toLocaleString()}
          </td>

          <td className="border-t-2 border-emerald-300 px-3 py-4 text-center">
            {totalIntermediate.toLocaleString()}
          </td>

          <td className="border-t-2 border-emerald-300 px-3 py-4 text-center">
            {totalAdvanced.toLocaleString()}
          </td>
        </tr>
      </tbody>

    </table>
  </div>

  <div className="mt-5 rounded-lg bg-gradient-to-r from-emerald-700 to-green-800 p-4 text-center text-white shadow">
    <p className="text-sm font-medium sm:text-base">
      IQRA Quiz Platform
    </p>

    <p className="mt-1 text-xl font-extrabold sm:text-2xl">
      Total Question Bank: {grandTotal.toLocaleString()} Questions
    </p>
  </div>
        </section>

       {/* Player Contributions & Recognition */}
<section
  id="player-contributions-dhanish-ali"
  className="mb-12 rounded-2xl border-2 border-amber-400
    bg-gradient-to-br from-amber-50 via-yellow-50 to-green-50
    p-6 shadow-lg dark:from-gray-800 dark:via-gray-800
    dark:to-green-950 sm:p-8"
>
  <div className="mb-5 text-center">
    <div className="mb-3 text-5xl" aria-hidden="true">
      🏆
    </div>

    <p className="mb-2 text-sm font-bold uppercase
      tracking-widest text-amber-700 dark:text-amber-400">
      IQRA Player Recognition
    </p>

    <h2 className="mb-4 text-3xl font-extrabold
      text-green-800 dark:text-green-400">
      Celebrating Our Players' Contributions!
    </h2>

    <p className="text-lg leading-relaxed
      text-gray-700 dark:text-gray-200">
      IQRA belongs not only to its creators, but also to the
      players who  make it better. Every correction,
      constructive suggestion, and improvement identified by
      our players can  make IQRA's Islamic knowledge,
      data, and user interface more accurate and useful
      for everyone.
    </p>
  </div>

  <div className="my-6 rounded-xl border border-amber-300
    bg-white/80 p-5 text-center dark:border-amber-700
    dark:bg-gray-900/60">

    <p className="mb-2 text-sm font-semibold uppercase
      tracking-wide text-gray-600 dark:text-gray-300">
      Our First Celebrated Contributor
    </p>

    <h3 className="mb-3 text-3xl font-extrabold
      text-green-700 dark:text-green-400">
      🌟 Dhanish Ali 🌟
    </h3>

    <p className="mb-5 text-gray-700 dark:text-gray-200">
      With sincere appreciation, we acknowledge Dhanish Ali
      for identifying and suggesting three corrections
      to IQRA. All three suggestions were accepted and
      implemented by the IQRA coding team.
    </p>

       {/* Begin Table */}
      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-2.5">
          <thead>
            <tr className="text-white text-lg font-bold">
              <th className="bg-[#1B7A4B] py-3.5 px-4 rounded-l-xl text-center w-[12%]">
                No.
              </th>
              <th className="bg-[#1B7A4B] py-3.5 px-4 text-left w-[58%]">
                💡 Contribution
              </th>
              <th className="bg-[#1B7A4B] py-3.5 px-4 rounded-r-xl text-center w-[30%]">
                💰 Reward
              </th>
            </tr>
          </thead>
          
          <tbody>
            {/* Item 1 */}
            <tr className="text-base">
              <td className="bg-[#F3FBF6] py-3 px-2 text-center rounded-l-xl align-middle">
                <span className="inline-flex items-center justify-center bg-[#1B7A4B] text-white font-bold w-8 h-8 rounded-full">
                  1
                </span>
              </td>
              <td className="bg-[#F3FBF6] py-3 px-4 text-left align-middle font-bold text-[#0C4E2D]">
                <div className="flex items-center gap-2">
                  <span className="text-xl">📖</span>
                  <div>
                    Salah Quiz — 
                    <span className="block text-sm text-gray-600 font-medium mt-0.5">Answer Options</span>
                  </div>
                </div>
              </td>
              <td className="bg-[#FFF9DF] py-3 px-4 text-center rounded-r-xl align-middle font-black text-xl text-[#0C4E2D] border-l-4 border-[#FFF9E6]">
                ₹250
              </td>
            </tr>

            {/* Item 2 */}
            <tr className="text-base">
              <td className="bg-[#F3FBF6] py-3 px-2 text-center rounded-l-xl align-middle">
                <span className="inline-flex items-center justify-center bg-[#1B7A4B] text-white font-bold w-8 h-8 rounded-full">
                  2
                </span>
              </td>
              <td className="bg-[#F3FBF6] py-3 px-4 text-left align-middle font-bold text-[#0C4E2D]">
                <div className="flex items-center gap-2">
                  <span className="text-xl"> 🕌</span>
                  <div>
                    Harun (AS) — 
                    <span className="block text-sm text-gray-600 font-medium mt-0.5">Prophethood</span>
                  </div>
                </div>
              </td>
              <td className="bg-[#FFF9DF] py-3 px-4 text-center rounded-r-xl align-middle font-black text-xl text-[#0C4E2D] border-l-4 border-[#FFF9E6]">
                ₹250
              </td>
            </tr>

            {/* Item 3 */}
            <tr className="text-base">
              <td className="bg-[#F3FBF6] py-3 px-2 text-center rounded-l-xl align-middle">
                <span className="inline-flex items-center justify-center bg-[#1B7A4B] text-white font-bold w-8 h-8 rounded-full">
                  3
                </span>
              </td>
              <td className="bg-[#F3FBF6] py-3 px-4 text-left align-middle font-bold text-[#0C4E2D]">
                <div className="flex items-center gap-2">
                  <span className="text-xl">📗</span>
                  <div>
                    Surah Maryam — 
                    <span className="block text-sm text-gray-600 font-medium mt-0.5">Nabi Reference</span>
                  </div>
                </div>
              </td>
              <td className="bg-[#FFF9DF] py-3 px-4 text-center rounded-r-xl align-middle font-black text-xl text-[#0C4E2D] border-l-4 border-[#FFF9E6]">
                ₹250
              </td>
            </tr>

            {/* Total Reward Row */}
            <tr className="text-lg font-bold text-white">
              <td colSpan={2} className="bg-[#1B7A4B] py-4 px-6 rounded-l-xl text-left align-middle">
                🎁 Total reward
              </td>
              <td className="bg-[#0D6339] py-4 px-4 rounded-r-xl text-center align-middle font-black text-2xl border-l-4 border-[#FFF9E6] tracking-wider">
                ⪧ ₹750 ⪦
              </td>
            </tr>
          </tbody>
        </table>
      </div>
   {/* End of Table */}

    <div className="mx-auto grid max-w-md grid-cols-1
      gap-3 sm:grid-cols-2">

      <div className="rounded-lg bg-green-50 p-4
        dark:bg-green-950">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Accepted Suggestions
        </p>
        <p className="text-3xl font-extrabold text-green-700
          dark:text-green-400">
          3
        </p>
      </div>

      <div className="rounded-lg bg-amber-50 p-4
        dark:bg-amber-950">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Reward Earned
        </p>
        <p className="text-3xl font-extrabold text-amber-700
          dark:text-amber-400">
          ₹750
        </p>
        <p className="mt-1 text-xs text-gray-600
          dark:text-gray-300">
          ₹250 per accepted suggestion
        </p>
      </div>

    </div>
  </div>

  <div className="rounded-xl bg-green-100 p-5 text-center
    dark:bg-green-900/50">

    <h3 className="mb-3 text-xl font-bold
      text-green-800 dark:text-green-300">
      🎉 Reward Presentation — Insha Allah
    </h3>

    <p className="mb-3 text-gray-700 dark:text-gray-200">
      Dhanish Ali's total reward of ₹750 will be presented
      during the Kattoo Yamani (KY) Family Meet 2026.
    </p>

    <p className="font-bold text-green-800
      dark:text-green-300">
      📅 26 December 2026
    </p>

    <p className="font-semibold text-gray-700
      dark:text-gray-200">
      📍 PWD Beach Rest House, Alleppey
    </p>
  </div>

  <p className="mt-6 text-center text-sm italic
    text-gray-600 dark:text-gray-300">
    Have you spotted an error or found a way to improve IQRA?
    Your feedback matters! 
      <span>
            Send suggestions by WhatsApp to {" "}
                <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
              Rafique
            </a> {" "}
            at +91 7558845528. {" "}
          </span>
    
    Help us make IQRA better,
    one thoughtful contribution at a time.
    May Allah ﷻ reward everyone who contributes
    sincerely to beneficial Islamic learning. Ameen.
  </p>
</section>
 {/* End of Player Contributors Note */}

 {/* Open Source & AI  Contributions*/}
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

            <Button variant="outline" className="w-full sm:w-auto" asChild> 
                  <a 
                    href="https://github.com/iciso/iqra/blob/main/contribute.md" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                     <Github className="mr-2 h-4 w-4" />
                    How to Contribute
                  </a>
                </Button>
              
            <Link href="https://docs.google.com/document/d/1CusV5xAsgXDFZGapQ-b9j1fw1YBGG5MKIlXRuCEhllY/edit?usp=sharing">
              <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
                <Trophy className="mr-2 h-4 w-4" />
                 Why IQRA and KALAM?
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
            <li>Neon - For authentication and real-time database</li>
            <li>Vercel - For deployment and hosting</li>
          </ul>
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <img src="/images/design-mode/logo-dark.png" alt="Neon Logo" className="h-10 w-auto hover:scale-105 transition-transform dark:invert" />
            <img src="/images/design-mode/Icon_light_background.png" 
              alt="Vercel Logo" className="h-10 w-auto hover:scale-105 transition-transform dark:invert" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Acknowledgments</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            All praise and thanks are due to Allah <span className="text-3xl font-normal align-middle">ﷻ</span>, The Entirely Merciful, 
            The Entirely Generous. IQRA is a labor of love, made possible through the blessings of Allah and the contributions of many, 
            Ameen, Summa Ameen.
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
              </a>, whose vision and dedication brought IQRA to life, Alhamdulillah. 
              May Allah <span className="text-3xl font-normal align-middle">ﷻ</span> reward{" "}
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
                <img src="/images/design-mode/Icon_light_background.png" 
                  alt="Vercel Logo" className="h-8 w-auto inline-block hover:scale-105 transition-transform dark:invert" />
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
              and their AI assistant, Grok, for tirelessly assisting in debugging, optimizing, and enhancing the codebase of both 
              IQRA and KALAM over the past month. Grok’s precision and insights have been instrumental in ensuring a robust and reliable application, 
              Alhamdulillah.
              <div className="mt-2">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-auto inline-block hover:scale-105 transition-transform dark:text-gray-300">
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
              for their invaluable assistance in structuring data and curating Islamic content, 
              ensuring IQRA’s knowledge base is accurate and accessible, Alhamdulillah.
              <div className="mt-2">
                  <img src="/deepseek.svg" alt="DeepSeek Logo" className="h-8 w-auto inline-block hover:scale-105 transition-transform dark:invert" />
                  </div>
            </li>
             <li>
              <strong>Debugging & Refactoring:</strong> Sincere thanks also go to {" "}
              <a
                href="https://www.deepseek.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Claude AI
              </a>{" "}
              for their meticulous assistance in removing the auth and debugging code, ensuring IQRA’s knowledge base is accessible, 
               to those without email.
              <div className="mt-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg" alt="Claude AI Logo" 
                    className="h-8 w-auto inline-block hover:scale-105 transition-transform dark:invert" />
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
              for their contributions to crafting engaging and meaningful content for IQRA, enhancing the learning experience for users worldwide, 
              Alhamdulillah.
                <div className="mt-2">
                  <img src="/gemini.svg" alt="Gemini Logo" className="h-8 w-auto inline-block hover:scale-105 transition-transform dark:invert" />
                  </div>
              </li>
            <li>
              <strong>Community & Contributors:</strong> Immense gratitude to{" "}
              <a
                href="https://www.meta.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Meta
              </a>{" "}
          all our future open-source contributors, Quran scholars, Arabic linguists, and community members who would provide feedback, 
              questions, and support to make IQRA a global platform for Islamic learning. Shout out to our prospective members who would join our yet to start Groups and Channels in WhatsApp, and Community pages in Fb and other Meta platforms. May Allah <span className="text-3xl font-normal align-middle">ﷻ</span> accept their efforts.
                <div className="flex flex-wrap gap-4 mt-4 justify-center">
                  <div className="mt-2">
                  <img src="/meta.png" alt="Meta WhatsApp Logo" className="h-8 w-auto inline-block hover:scale-105 transition-transform dark:invert" />
                  </div>
                      <div className="mt-2">
                      <img src="/instagram.png" alt="Meta WhatsApp Logo" 
                        className="h-8 w-auto inline-block hover:scale-105 transition-transform dark:invert" />
                        </div>
                   <div className="mt-2">
                  <img src="/meta.svg" alt="Meta Fb Logo" className="h-8 w-auto inline-block hover:scale-105 transition-transform dark:invert" />
                  </div>
                </div>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">IQRA Papers</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            This document provides the Policy, Proposal, & Plans (PPP) for the future to continue this ongoing charity for the sake of Allah 
            <span className="text-3xl font-normal align-middle">ﷻ</span>, The Entirely Merciful, The Entirely Generous.
          </p>
           <div className="flex flex-wrap gap-4 mt-4 justify-center">
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
          <MessageSquare className="mr-1 h-4 w-4 shrink-0 text-green-600 sm:h-5 sm:w-5 dark:text-green-400" />
          <span>
            For suggestions, WhatsApp{" "}
            <a
               href="https://wa.me/917558845528?text=Hi%20Rafique%2C%0AMy%20suggestion%20for%20IQRA%20is"
              target="_blank"
               rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-green-700 underline hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
                >
                  {/* WhatsApp SVG Icon */}
                  <svg
                    className="w-4 h-4 fill-current shrink-0"
                    viewBox="0 0 24 24"
                    xmlns="http://w3.org"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.47 5.425 1.471 5.489 0 9.957-4.469 9.96-9.96.002-2.661-1.034-5.163-2.919-7.05C17.228 1.728 14.73 .689 12.01 .689 6.518.689 2.053 5.155 2.05 10.649c-.001 2.023.52 3.992 1.516 5.696l-1.02 3.722 3.811-1.005zm13.115-6.303c-.292-.146-1.729-.854-1.997-.951-.267-.099-.463-.146-.659.146-.195.292-.756.951-.926 1.146-.17.195-.341.219-.633.073-.292-.146-1.234-.454-2.35-1.449-.869-.775-1.456-1.732-1.627-2.024-.17-.292-.018-.45.129-.595.132-.131.292-.341.439-.512.146-.17.195-.292.292-.487.097-.195.048-.365-.024-.511-.073-.146-.659-1.586-.902-2.17-.236-.569-.477-.492-.659-.501-.17-.008-.365-.01-.56-.01-.195 0-.512.073-.78.365-.268.292-1.022.999-1.022 2.437 0 1.438 1.047 2.827 1.193 3.022.147.195 2.062 3.149 4.996 4.417.697.302 1.242.483 1.666.618.701.223 1.34.191 1.845.116.563-.083 1.729-.706 1.972-1.389.244-.682.244-1.267.17-1.389-.072-.122-.268-.195-.561-.341z" />
                  </svg>
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
