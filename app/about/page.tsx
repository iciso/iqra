import AboutContent from "@/components/about/about-content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description: "Who builds IQRA, why it is free and open source, and the tools it is built with.",
  path: "/about",
});

/*
IQRA To do list:
1) To Add categories like Ethical AI use,  Sexual Health, Death, Ijtihad, Ihsan or Spiritual Excellence, Fiqh of Trade, choosing form the list in G Docs, add the new files, or alter or add new code at:
iqra/data/
iqra/app/subjects/page
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

// Static server page. The text lives in components/about (client, i18next namespace "about").
export default function AboutPage() {
  return <AboutContent />;
}
