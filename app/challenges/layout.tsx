import { ReactNode } from "react";

export default function ChallengesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 w-full max-w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 py-8">{children}</div>
    </div>
  );
}
