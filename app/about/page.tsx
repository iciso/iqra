import { IqraLogo } from "@/components/iqra-logo"

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>About Us</h1>
        <p>This is the about page.</p>
        <IqraLogo size="lg" showText={false} isLink={false} />
      </div>
    </main>
  )
}
