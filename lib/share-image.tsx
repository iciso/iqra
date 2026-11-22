import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

// The 1200x630 card shown when an IQRA link is shared. Both opengraph-image.tsx and
// twitter-image.tsx render renderShareImage once at build time (no request data); a
// challenge link renders renderChallengeShareImage per request. Both read the files below from disk.

const acronym = [
  { initial: "I", rest: "slamic" },
  { initial: "Q", rest: "uiz" },
  { initial: "R", rest: "ivalry" },
  { initial: "A", rest: "pp" },
]

const facts = ["50 subjects", "Free", "Open source", "No ads"]

// Literal paths, so the bundler ships just these three files with the image routes.
const loadAssets = async () => {
  const [logo, semibold, extrabold] = await Promise.all([
    readFile(join(process.cwd(), "public", "logo.png")),
    readFile(join(process.cwd(), "assets", "fonts", "Inter-600.ttf")),
    readFile(join(process.cwd(), "assets", "fonts", "Inter-800.ttf")),
  ])
  return {
    logoSrc: `data:image/png;base64,${logo.toString("base64")}`,
    fonts: [
      { name: "Inter", data: semibold, weight: 600 as const, style: "normal" as const },
      { name: "Inter", data: extrabold, weight: 800 as const, style: "normal" as const },
    ],
  }
}

export type ChallengeShareData = {
  subject: string
  level: string
  players: { name: string; score: string | null; winner: boolean }[]
}

const clip = (text: string, max: number) => (text.length > max ? `${text.slice(0, max - 1)}…` : text)

// The card for one challenge link: who played whom, in what, and the scores so far.
export const renderChallengeShareImage = async ({ subject, level, players }: ChallengeShareData) => {
  const { logoSrc, fonts } = await loadAssets()

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "56px 72px",
        background: "radial-gradient(circle at 88% 20%, #dcfce7 0%, #f0fdf4 32%, #ffffff 62%)",
        fontFamily: "Inter",
        color: "#14532d",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 22,
              background: "#ffffff",
              boxShadow: "0 10px 26px rgba(21,128,61,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain img only */}
            <img src={logoSrc} alt="" width={64} height={64} />
          </div>
          <div style={{ fontSize: 60, fontWeight: 800, letterSpacing: 4, color: "#166534" }}>IQRA</div>
        </div>
        <div
          style={{
            display: "flex",
            padding: "12px 26px",
            borderRadius: 999,
            background: "#ffffff",
            border: "1px solid #bbf7d0",
            fontSize: 30,
            fontWeight: 600,
            color: "#166534",
          }}
        >
          {clip(`${subject} · ${level}`, 40)}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        {players.map((player, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", gap: 24, flex: 1 }}>
            {index === 1 && <div style={{ fontSize: 44, fontWeight: 800, color: "rgba(5,46,22,0.35)" }}>vs</div>}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: "28px 32px",
                borderRadius: 28,
                background: "#ffffff",
                border: player.winner ? "3px solid #16a34a" : "1px solid #bbf7d0",
              }}
            >
              <div style={{ fontSize: 26, fontWeight: 600, color: player.winner ? "#15803d" : "rgba(5,46,22,0.5)" }}>
                {player.winner ? "Winner" : index === 0 ? "Challenger" : "Challenged"}
              </div>
              <div style={{ marginTop: 6, fontSize: 44, fontWeight: 800, color: "#14532d" }}>{clip(player.name, 18)}</div>
              <div style={{ marginTop: 10, fontSize: player.score ? 64 : 34, fontWeight: 800, color: "#15803d" }}>
                {player.score ?? "Yet to play"}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: 14, fontSize: 40, fontWeight: 800 }}>
          <span>Quiz to learn.</span>
          <span style={{ color: "#15803d" }}>Rival to excel.</span>
        </div>
        <div style={{ fontSize: 28, fontWeight: 600, color: "#15803d" }}>iqrar.vercel.app</div>
      </div>
    </div>,
    { width: 1200, height: 630, fonts },
  )
}

export const renderShareImage = async () => {
  const { logoSrc, fonts } = await loadAssets()

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
    { width: 1200, height: 630, fonts },
  )
}
