import React from 'react';
import Link from 'next/link';

interface TaskItem {
  id: string;
  description: React.ReactNode;
}

const todoTasks: TaskItem[] = [
  {
    id: "1",
    description: (
      <div>
        <p className="font-semibold text-gray-900 mb-1">Add New Quiz Categories</p>
        <p className="text-xs text-gray-500 mb-2">Integrate Ethical AI Use, Sexual Health, and others from G Docs.</p>
        <div className="space-y-1 font-mono text-[11px] text-indigo-600 bg-indigo-50/50 p-2 rounded border border-indigo-100/50">
          <div>• iqra/data/</div>
          <div>• iqra/app/categories/page</div>
          <div>• iqra/components/challenge/category-first-challenge-dialog.tsx</div>
          <div>• iqra/components/challenge/category-first-challenge-sender.tsx</div>
          <div>• iqra/data/quiz-data-manager.tsx</div>
          <div>
            • iqra/app/about/page →{' '}
            <a href="https://iqrar.vercel.app/about#iqra-quizzes" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-800">
              iqrar.vercel.app/about#iqra-quizzes
            </a>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "2",
    description: "Enhance the Badges Page with bigger badges, better logic explained by infographic to players."
  },
  {
    id: "",
    description: "Animated Flowchart to explain workflow of challenge to player."
  },
  {
    id: "4",
    description: "Explain the algorithm of challenges, scoring, leaderboard, contributors rewards by an animated infographic to motivate Volunteers to play and find out errors in content."
  },
  {
    id: "5",
    description: "Complete the work begun on Challenges for Surah Quizzes -> 78 to 114."
  },
  {
    id: "6",
    description: "Complete the work begun on Challenges for Quranic Arabic and MSA with 1000 words each."
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
    id: "10",
    description: "Continuously test to see all quizzes, and pages are Mobile Responsive. Maintain uniform UI and UX as if one AI did the entire project."
  },
  {
    id: "11",
    description: "Cross-link IQRA & KALAM to guide users who want or do not want challenges."
  },
  {
    id: "12",
    description: "Acknowledge all other AI."
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
              href="https://github.com/iciso/iqra" 
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
                {todoTasks.map((task) => (
                  <tr key={task.id} className="hover:bg-gray-50/40 transition-colors align-top">
                    
                    {/* Column 1: To Do Items */}
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

                     {/* Column 2: Doing Workspace */}
                    <td className="py-4 px-5 border-l border-gray-200/60 bg-amber-50/5 text-xs text-gray-400 italic">
                      {/* You can cut a task from list above and paste its placeholder here when actively coding */}
                   This is a placeholder for tasks that are currently being worked on.
                        </td>
                    
                    {/* Column 3: Done Workspace */}
                    <td className="py-4 px-5 border-l border-gray-200/60 bg-emerald-50/5 text-xs text-gray-400 italic">
                      {/* Move rows down here to register fully completed features */}
                      This is a placeholder for tasks that are done or completed.
                    </td>

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
