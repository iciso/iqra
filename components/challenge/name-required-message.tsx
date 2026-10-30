"use client"

import Link from "next/link"

// Bookmark on the Home page (id is set in app/page.tsx)
export const NAME_BOOKMARK = "/#challenge-name"

export function NameRequiredMessage({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <span>
      Please enter your name in the Challenge Notifications box on the Home page first.{" "}
      <Link
        href={NAME_BOOKMARK}
        onClick={onNavigate}
        className="font-semibold underline underline-offset-2"
      >
        Go to Home page →
      </Link>
    </span>
  )
}
