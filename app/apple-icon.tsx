import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 24,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
      }}
    >
      {/* Book with Islamic design */}
      <svg
        width="120"
        height="120"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#15803D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Open book */}
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>

        {/* Islamic flower design (simplified) */}
        <circle cx="12" cy="14" r="2" fill="#15803D"></circle>
        <path d="M12 12v-2"></path>
        <path d="M10.5 13.5l-1.5-1.5"></path>
        <path d="M13.5 13.5l1.5-1.5"></path>
        <path d="M12 16v2"></path>
      </svg>
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}
