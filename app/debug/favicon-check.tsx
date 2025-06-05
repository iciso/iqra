"use client"

import { useEffect, useState } from "react"

export default function FaviconCheck() {
  const [faviconStatus, setFaviconStatus] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const checkFaviconExists = async (path: string) => {
      try {
        const response = await fetch(path, { method: "HEAD" })
        return response.ok
      } catch (error) {
        return false
      }
    }

    const checkAllFavicons = async () => {
      const favicons = [
        "/favicon.ico",
        "/favicon.png",
        "/apple-touch-icon.png",
        "/android-chrome-192x192.png",
        "/android-chrome-512x512.png",
        "/site.webmanifest",
        "/manifest.json",
      ]

      const results: Record<string, boolean> = {}

      for (const favicon of favicons) {
        results[favicon] = await checkFaviconExists(favicon)
      }

      setFaviconStatus(results)
    }

    checkAllFavicons()
  }, [])

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Favicon Status Check</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-2">Favicon Path</th>
              <th className="text-left p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(faviconStatus).map(([path, exists]) => (
              <tr key={path} className="border-t">
                <td className="p-2">{path}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${exists ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {exists ? "Available" : "Missing"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>If any favicons are missing, make sure they exist in the public directory.</p>
        <p>
          You can access this page at: <code>/debug/favicon-check</code>
        </p>
      </div>
    </div>
  )
}
