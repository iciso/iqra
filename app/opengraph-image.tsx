import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

// Node runtime (the default): the logo is read from disk below. On the edge
// runtime a relative src like "/logo.png" fails - ImageResponse needs an
// absolute URL or inline data, so this route used to error.

// Image metadata
export const alt = "IQRA Islamic Quiz Rivalry App"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

// Image generation
export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"))
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`

  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 128,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom right, #DCFCE7, #FFFFFF)",
      }}
    >
      <img
        src={logoSrc}
        alt="IQRA Logo"
        style={{
          width: "300px",
          height: "300px",
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
      ...size,
    },
  )
}
