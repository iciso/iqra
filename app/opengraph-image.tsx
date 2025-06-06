import { ImageResponse } from "next/og"

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
      <div
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          position: "relative",
          background: "linear-gradient(to bottom right, #4ADE80, #15803D)",
          opacity: 0.2,
          themeColor: "#15803D",
          icons: [
    {
      "src": "https://cvemrafi.vercel.app/iqra-app.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "https://cvemrafi.vercel.app/iqra-app.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  },
        }}
      />
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
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse width and height.
      //...size,
    },
  )
}
