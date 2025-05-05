import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { IqraLogo } from "@/components/iqra-logo"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#e6f7eb]">
      <div className="container mx-auto py-12 px-4 flex-grow flex flex-col">
        <div className="text-center mb-8">
          <div className="mx-auto w-24 h-24 bg-[#e0f2e3] rounded-full flex items-center justify-center mb-4">
            <IqraLogo className="w-12 h-12 text-green-700" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-green-800 mb-2">IQRA</h1>
          <p className="text-xl text-green-700">Islamic Quiz Rivalry App</p>
          <p className="mt-4 text-gray-600">
            ما شاء الله (Masha Allah!) Welcome to IQRA. Test your knowledge
            <br />
            of Islam through learning or challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
              </div>
              <CardTitle className="text-2xl text-green-800">IQRA Learn</CardTitle>
              <CardDescription>Learn at your own pace</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Browse through 12 Islamic categories with easy and advanced difficulty levels. Test your knowledge and
                learn at your own pace.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">Quran</span>
                <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">Fiqh</span>
                <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">Tafsir</span>
                <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">Hadeeth</span>
                <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">Aqeedah</span>
              </div>
            </CardContent>
            <CardFooter className="pt-0 flex justify-center">
              <Link href="/categories">
                <Button className="bg-green-600 hover:bg-green-700">Start Learning</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
              <CardTitle className="text-2xl text-green-800">IQRA Challenge</CardTitle>
              <CardDescription>Compete with others</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Challenge your friends or join the daily challenge. Compete with others and test your Islamic knowledge
                in a fun and engaging way.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Friend Challenge
                </span>
                <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  Daily Challenge
                </span>
              </div>
            </CardContent>
            <CardFooter className="pt-0 flex justify-center">
              <Link href="/challenges">
                <Button className="bg-green-600 hover:bg-green-700">Start Challenges</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-auto pt-12 text-center text-gray-600 text-sm">
          <p className="mb-2">
            بِرٌّ هَذِهِ صَدَقَةٌ جَارِيَةٌ لِوَجْهِ اللهِ تَعَالَى or This is an ongoing charity for the sake of Allah Almighty.
          </p>
          <p className="mb-2">Thus, all apps by IQRA codes team of Rafique and Joy are freeware, and open source.</p>
          <p className="mb-2">
            So, do send your suggestions to Rafique by WhatsApp on +91 7588845528 and May Allah reward Joy whose mail is
            joy_ahmed_007@yahoo.com for his teaching, guidance and help.
          </p>
          {/* About link removed as requested */}
        </div>
      </div>
    </div>
  )
}
