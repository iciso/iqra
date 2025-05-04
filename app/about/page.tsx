import { Home } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <nav className="mb-8">
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/" className="flex items-center gap-1 text-green-700 hover:text-green-500">
              <Home className="h-4 w-4" />
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-green-700 hover:text-green-500">
              About
            </Link>
          </li>
        </ul>
      </nav>

      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-green-800 dark:text-green-400">About IQRA Demo App</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-500">Our Mission</h2>
          <Card className="mb-6 border-green-200 dark:border-green-800">
            <p className="text-gray-700 dark:text-gray-300">
              Our mission is to provide accessible and high-quality Islamic education to learners of all ages and
              backgrounds. We strive to foster a deep understanding of Islamic principles and values, empowering
              individuals to lead fulfilling and meaningful lives, which brings reward from Allah both in this world and the hereafter.
            </p>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-500">Our Vision</h2>
          <Card className="mb-6 border-green-200 dark:border-green-800">
            <p className="text-gray-700 dark:text-gray-300">
              We envision a world where Islamic knowledge is readily available and easily accessible, fostering a global
              community of informed and engaged Muslims who contribute positively to society.
            </p>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-500">Our Values</h2>
          <Card className="mb-6 border-green-200 dark:border-green-800">
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Integrity: We uphold the highest ethical standards in all our endeavors to provide free Islamic software as open source.</li>
              <li>Excellence: We are committed to providing the best possible learning through a gaming, and fun-filled experience.</li>
              <li>Accessibility: We strive to make Islamic education available to everyone free of cost.</li>
              <li>Community: We foster a supportive and inclusive learning environment for all human beings.</li>
              <li>Innovation: We embrace new technologies and approaches to enhance learning especially through interactive games filled with fun that makes  easier memory building and retention.</li>
            </ul>
          </Card>
        </section>
      </div>
    </main>
  )
}
