import { ImageResponse } from "next/og"
import { IqraLogo } from "@/components/iqra-logo"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "IQRA Islamic Quiz Rivalry App"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 128,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom right, #DCFCE7, #FFFFFF)",
      }}
    >
      <IqraLogo size="lg" showText={true} isLink={false} />
      <div
        style={{
          marginTop: 40,
          fontSize: 80,
          fontWeight: "bold",
          color: "#15803D",
        }}
      >
        IQRA Islamic Quiz Rivalry App
      </div>
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}
