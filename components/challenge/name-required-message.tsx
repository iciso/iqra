"use client"

import Link from "next/link"

// The name is set (and changed) on the Profile page.
export const NAME_PAGE = "/profile"

export function NameRequiredMessage({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <span>
      Please set your name on your Profile page first.{" "}
      <Link
        href={NAME_PAGE}
        onClick={onNavigate}
        className="font-semibold underline underline-offset-2"
      >
        Go to Profile →
      </Link>
    </span>
  )
}
