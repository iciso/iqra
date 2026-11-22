import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

// The 1200x630 card shown when an IQRA link is shared. Both opengraph-image.tsx and
// twitter-image.tsx render this. It is built once at build time (no request data), so the
// files below are read from disk during `next build`.

const acronym = [
  { initial: "I", rest: "slamic" },
  { initial: "Q", rest: "uiz" },
  { initial: "R", rest: "ivalry" },
  { initial: "A", rest: "pp" },
]

const facts = ["50 subjects", "Free", "Open source", "No ads"]

const readAsset = (path: string) => readFile(join(process.cwd(), path))

export const renderShareImage = async () => {
  const [logo, semibold, extrabold] = await Promise.all([
    readAsset("public/logo.png"),
    readAsset("assets/fonts/Inter-600.ttf"),
    readAsset("assets/fonts/Inter-800.ttf"),
  ])
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "radial-gradient(circle at 88% 30%, #dcfce7 0%, #f0fdf4 32%, #ffffff 62%)",
        fontFamily: "Inter",
        color: "#14532d",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
        <div
          style={{
            width: 112,
            height: 112,
            borderRadius: 32,
            background: "#ffffff",
            boxShadow: "0 12px 32px rgba(21,128,61,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain img only */}
          <img src={logoSrc} alt="" width={96} height={96} />
        </div>
        <div style={{ fontSize: 104, fontWeight: 800, letterSpacing: 6, color: "#166534", lineHeight: 1 }}>IQRA</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", gap: 14, fontSize: 40, fontWeight: 600, color: "rgba(5,46,22,0.6)" }}>
          {acronym.map((word) => (
            <div key={word.initial} style={{ display: "flex" }}>
              <span style={{ color: "#15803d", fontWeight: 800 }}>{word.initial}</span>
              <span>{word.rest}</span>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 18,
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            fontWeight: 800,
            color: "#14532d",
            lineHeight: 1.05,
          }}
        >
          <span>Quiz to learn.</span>
          <span style={{ color: "#15803d" }}>Rival to excel.</span>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: 12 }}>
          {facts.map((fact) => (
            <div
              key={fact}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                background: "#ffffff",
                border: "1px solid #bbf7d0",
                fontSize: 26,
                fontWeight: 600,
                color: "#166534",
              }}
            >
              {fact}
            </div>
          ))}
        </div>
        <div style={{ fontSize: 28, fontWeight: 600, color: "#15803d" }}>iqrar.vercel.app</div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: semibold, weight: 600, style: "normal" },
        { name: "Inter", data: extrabold, weight: 800, style: "normal" },
      ],
    },
  )
}
