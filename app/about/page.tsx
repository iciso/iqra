import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { IqraLogo } from "@/components/iqra-logo"
import { ArrowLeft, Book, Code, Heart, Users } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-4">
      <div className="w-full flex justify-between items-center p-4">
        <nav className="flex space-x-4">
          <Link
            href="/"
            className="text-green-700 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300 font-medium flex items-center gap-1"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </nav>
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto mt-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <IqraLogo size="lg" showText={true} />
          </div>
          <h1 className="text-4xl font-bold text-green-800 dark:text-green-400 mb-2">About IQRA</h1>
          <p className="text-xl text-green-600 dark:text-green-500 mb-4">Islamic Quiz Rivalry App</p>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            IQRA is an educational platform designed to make learning about Islam engaging, interactive, and accessible
            to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="border-green-200 shadow-lg dark:border-green-800">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full">
                  <Book className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-xl font-bold text-green-800 dark:text-green-400">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                IQRA aims to promote Islamic knowledge through enjoyable learning rather than rote memorization. We
                believe that understanding the principles and teachings of Islam should be accessible to everyone,
                regardless of their background or level of knowledge.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 shadow-lg dark:border-green-800">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full">
                  <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-xl font-bold text-green-800 dark:text-green-400">Who We Are</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                IQRA was created by Rafique and Joy, two developers passionate about Islamic education and technology.
                We believe in using our skills to create resources that benefit the Ummah and help spread knowledge
                about Islam in an engaging way.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-green-200 shadow-lg dark:border-green-800 mb-12">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full">
                <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-xl font-bold text-green-800 dark:text-green-400">Our Approach</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              IQRA covers eleven comprehensive categories of Islamic knowledge:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
              <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 text-sm rounded-full text-center">
                Quran
              </span>
              <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 text-sm rounded-full text-center">
                Hadith
              </span>
              <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 text-sm rounded-full text-center">
                Fiqh
              </span>
              <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 text-sm rounded-full text-center">
                Tafsir
              </span>
              <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 text-sm rounded-full text-center">
                Aqeedah
              </span>
              <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 text-sm rounded-full text-center">
                Seerah
              </span>
              <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 text-sm rounded-full text-center">
                Islamic History
              </span>
              <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 text-sm rounded-full text-center">
                Comparative Religion
              </span>
              <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 text-sm rounded-full text-center">
                Islamic Finance
              </span>
              <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 text-sm rounded-full text-center">
                Dawah
              </span>
              <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 text-sm rounded-full text-center">
                Contemporary Issues
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Each category offers quizzes at different difficulty levels, allowing users to progress at their own pace.
              Our interactive approach includes infographics, challenges, and rewards to make learning both fun and
              effective.
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 shadow-lg dark:border-green-800 mb-12">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full">
                <Heart className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-xl font-bold text-green-800 dark:text-green-400">Sadaqah Jariyah</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              وهي صدقة جارية لوجه الله تعالى (This is an ongoing charity for the sake of Allah Almighty)
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              All apps by the IQRA codes team are freeware and open source. We believe in creating resources that
              continue to benefit people and serve as Sadaqah Jariyah (continuous charity).
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              We welcome your suggestions and feedback to improve IQRA and make it more beneficial for everyone.
            </p>
          </CardContent>
        </Card>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-4">Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Send your suggestions to Rafique by WhatsApp on +91 7558845528
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">Email Joy at joy_ahmed_007@yahoo.com</p>
        </div>
      </div>
    </main>
  )
}
