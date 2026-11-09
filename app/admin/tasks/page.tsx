import React from 'react';
import Link from 'next/link';

interface TaskItem {
  id: string;
  title?: string;
  description: React.ReactNode;
}

const todoTasks: TaskItem[] = [
  {
    id: "2",
    description: "Enhance the Badges Page with bigger badges, better logic explained by infographic to players."
  },
  {
    id: "4",
    description: "Explain the algorithm of challenges, scoring, leaderboard, contributors rewards by an animated infographic to motivate Volunteers to play and find out errors in content."
  },
  {
    id: "7a",
    description: "Complete all three levels to same numbers in multiples of 10 for all categories."
  },
  {
    id: "7b",
    description: "Refactor Neon SOL so that those players who earned % above 100% scores and % are rounded to 100%."
  },
  {
    id: "8a",
    description: "Challenge Notifications more than one must be in autoscroll, so second is not seen."
  },
  {
    id: "8b",
    description: "Check if Valid Until time is removed in Challenge notification -> eight figure digit in hours!"
  },
  {
    id: "8c",
    description: "Can clicking on any Player name reveal their profile in IQRA, as IQRA profile depends on what name is used to log in?"
  },
  {
    id: "9",
    description: "Challenges in Easy or Hard start in the same easy level for Quranic Arabic! Check for other categories?"
  },
  {
    id: "11",
    description: "Cross-link IQRA & KALAM to guide users who want or do not want challenges."
  },
  {
    id: "12",
    description: "Merge the scores of two players Feroza and Faizal with spelling mistakes in their names causing two different IDs."
  },
  {
    id: "13",
    description: "Acknowledge Feroza's contribution which helped in refactoring the code, which showed only first ten questions in Easy for any selection."
  },
  {
    id: "14",
    description: "Acknowledge all other AI."
  }
];

const doingTasks: TaskItem[] = [
  {
    id: "1",
    description: (
      <div>
        <span className="font-semibold text-amber-900 block mb-1">Adding New Quiz Categories</span>
        <p className="text-amber-800/90 text-xs leading-relaxed mb-2">
          Integrate Ethical AI Use, Sexual Health, and others from Google Docs.
        </p>
        <div className="space-y-1 font-mono text-[11px] text-indigo-600 bg-indigo-50/50 p-2 rounded border border-indigo-100/50 mb-2">
          <div>• iqra/data/</div>
          <div>• iqra/app/categories/page</div>
          <div>• iqra/components/challenge/category-first-challenge-dialog.tsx</div>
          <div>• iqra/components/challenge/category-first-challenge-sender.tsx</div>
          <div>• iqra/data/quiz-data-manager.tsx</div>
          <div>
            • iqra/app/about/page →{' '}
            <a href="https://vercel.app" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-800">
              iqrar.vercel.app/about#iqra-quizzes
            </a>
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-100 text-amber-800 border border-amber-200">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
          Active Coding
        </div>
      </div>
    )
  },
   {
    id: "3",
    title: "Research, Validate Data",
    description: (
      <div>
        <span className="font-semibold text-amber-900 block mb-1">Tri-pronged Content Validation</span>
        <p className="text-amber-800/90 text-xs leading-relaxed">
          Query AI, Community, and self to continously check every section in every level, 
          in every category, all the words for their validity.
        </p>
        <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-100 text-amber-800 border border-amber-200">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
          Content Validation
        </div>
      </div>
    )
  },
  {
    id: "5",
    title: "Surah Quiz, Challenges & Tamil Categories",
    description: (
      <div>
        <span className="font-semibold text-amber-900 block mb-1">Surah Quiz, Challenges & Tamil Categories</span>
        <p className="text-amber-800/90 text-xs leading-relaxed">
          Complete the work begun on Challenges for Surah Quizzes -> 78 to 114. Also complete Translation from 
          English to Tamil all the 50 English Categories Quizzes.
        </p>
        <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-100 text-amber-800 border border-amber-200">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
          Content Creation
        </div>
      </div>
    )
  },
   {
    id: "6",
    title: "Community Growth, UX & Vibrancy",
    description: (
      <div>
        <span className="font-semibold text-amber-900 block mb-1">Community Growth & Vibrancy</span>
        <p className="text-amber-800/90 text-xs leading-relaxed">
          Start contacting Muslim colleges and schools to demo IQRA; Talk to community members for feedback, 
          corrections, and contributions; Establish the community reward system.
        </p>
        <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-100 text-amber-800 border border-amber-200">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
          CRM
        </div>
      </div>
    )
  },
  {
    id: "10",
    title: "Mobile Responsiveness & UI Audit",
    description: (
      <div>
        <span className="font-semibold text-amber-900 block mb-1">Mobile Responsiveness & UI Audit</span>
        <p className="text-amber-800/90 text-xs leading-relaxed">
          Continuously test to see all quizzes, and pages are Mobile Responsive. Maintain uniform UI and UX as if one AI did the entire project.
        </p>
        <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-100 text-amber-800 border border-amber-200">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
          Active UI Verification
        </div>
      </div>
    )
  }
];

const doneTasks: TaskItem[] = [
  {
    id: "4a",
    description: (
      <div>
        <span className="font-semibold text-emerald-900 block mb-1">Animated Flowchart</span>
        <p className="text-emerald-800/90 text-xs leading-relaxed">
          Explaining workflow of challenge to player.
        </p>
        <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
          <span className="text-emerald-600 font-bold">✓</span> Completed
        </div>
      </div>
    )
  }
];

export default function AdminTasksPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-6 sm:px-8 font-sans antialiased text-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Elements */}
        <header className="mb-10 pb-6 border-b border-gray-200/60 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
              <span>IQRA Admin Portal</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500 font-mono text-[11px] lowercase">iqra/app/admin/tasks/page.tsx</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Project Engine Roadmap & Backlog</h1>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <Link 
              href="https://github.com" 
              target="_blank" 
              className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors shadow-sm"
            >
              GitHub Repo
            </Link>
          </div>
        </header>

        {/* Minimalist Structured Layout Table */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm table-fixed min-w-[900px]">
              <thead>
                <tr className="bg-gray-50/75 border-b border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-500">
                  <th className="w-[45%] py-3.5 px-5 font-semibold text-gray-700">Planned / To Do Tasks</th>
                  <th className="w-[27.5%] py-3.5 px-5 border-l border-gray-200/60 font-semibold text-amber-700 bg-amber-50/30">Doing</th>
                  <th className="w-[27.5%] py-3.5 px-5 border-l border-gray-200/60 font-semibold text-emerald-700 bg-emerald-50/30">Done</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                
                {/* 1. RENDER DOING TASKS */}
                {doingTasks.map((task) => (
                  <tr key={task.id} className="bg-amber-50/10 hover:bg-amber-50/30 transition-colors align-top">
                    <td className="py-4 px-5 pr-8 text-xs text-gray-400 italic">
                      Moved to in-progress
                    </td>
                    <td className="py-4 px-5 border-l border-gray-200/60 bg-amber-50/30">
                      <div className="flex gap-2">
                        <span className="font-mono text-xs font-bold text-amber-600 mt-0.5 min-w-[20px]">
                          {task.id}.
                        </span>
                        <div className="text-[13px]">{task.description}</div>
                      </div>
                    </td>
                    <td className="py-4 px-5 border-l border-gray-200/60 bg-emerald-50/5 text-xs text-gray-400 italic"></td>
                  </tr>
                ))}

                {/* 2. RENDER DONE TASKS */}
                {doneTasks.map((task) => (
                  <tr key={task.id} className="bg-emerald-50/10 hover:bg-emerald-50/20 transition-colors align-top">
                    <td className="py-4 px-5 pr-8 text-xs text-gray-400 italic">
                      Completed
                    </td>
                    <td className="py-4 px-5 border-l border-gray-200/60 text-xs text-gray-400 italic"></td>
                    <td className="py-4 px-5 border-l border-gray-200/60 bg-emerald-50/20">
                      <div className="flex gap-2">
                        <span className="font-mono text-xs font-bold text-emerald-600 mt-0.5 min-w-[20px]">
                          {task.id}.
                        </span>
                        <div className="text-[13px]">{task.description}</div>
                      </div>
                    </td>
                  </tr>
                ))}

                {/* 3. RENDER BACKLOG PLANNED TASKS */}
                {todoTasks.map((task) => (
                  <tr key={task.id} className="hover:bg-gray-50/40 transition-colors align-top">
                    <td className="py-4 px-5 pr-8">
                      <div className="flex gap-3">
                        <span className="font-mono text-xs font-semibold text-gray-400 mt-0.5 min-w-[24px]">
                          {task.id}.
                        </span>
                        <div className="text-gray-700 text-[13.5px] leading-relaxed">
                          {task.description}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-5 border-l border-gray-200/60 bg-amber-50/5 text-xs text-gray-400 italic"></td>
                    <td className="py-4 px-5 border-l border-gray-200/60 bg-emerald-50/5 text-xs text-gray-400 italic"></td>
                  </tr>
                ))}

              </tbody>            
            </table>
          </div>
        </div>

        {/* Development Workspace System Note */}
        <footer className="mt-6 text-center text-xs text-gray-400">
          This system configuration ledger is designated for direct administrative tracking. 
          All apps by the IQRA team are open-source and freeware.
        </footer>

      </div>
    </div>
  );
}
