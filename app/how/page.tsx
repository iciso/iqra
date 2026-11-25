import { pageMetadata } from "@/lib/seo"
import HowContent from "@/components/how/how-content"

export const metadata = pageMetadata({
  title: "How it works",
  description: "How to play IQRA: pick a subject and quiz, or send a friend a challenge and compare scores.",
  path: "/how",
})

const HowItWorksPage = () => <HowContent />

export default HowItWorksPage
