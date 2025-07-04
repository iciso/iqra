"use client"
import Head from "next/head"

const TheoryOfChange = () => {
  return (
    <div
      className="theory-page"
      style={{ fontFamily: "Arial, sans-serif", maxWidth: "1000px", margin: "0 auto", padding: "20px" }}
    >
      <Head>
        <title>Theory of Change | AI-Driven Islamic Apps</title>
      </Head>

      <h1 style={{ textAlign: "center", color: "#2E7D32", marginBottom: "30px" }}>
        Theory of Change: Empowering Islamic Engagement Through AI
      </h1>

      {/* Table 1: Pillars → Apps */}
      <div style={{ marginBottom: "40px", textAlign: "center" }}>
        <h2>Pillars of TOC</h2>

        <p>We introduce the six pillars in the table.</p>

        <table style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "12px", backgroundColor: "#f2f2f2" }}>Pillar No.</th>
              <th style={{ border: "1px solid #ddd", padding: "12px", backgroundColor: "#f2f2f2" }}>Pillar Name</th>
              <th style={{ border: "1px solid #ddd", padding: "12px", backgroundColor: "#f2f2f2" }}>Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "12px" }}>P1</td>
              <td style={{ border: "1px solid #ddd", padding: "12px" }}>AI advancements</td>
              <td style={{ border: "1px solid #ddd", padding: "12px" }}>
                AI manifests in faster, accurate coding of complex apps like quiz challenges leaderboards which in turn
                directly fosters increased motivation, community dialogue and healthy competition
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "12px" }}>P2</td>
              <td style={{ border: "1px solid #ddd", padding: "12px" }}>Freeware and open-source</td>
              <td style={{ border: "1px solid #ddd", padding: "12px" }}>
                The component evidenced by opensource GitHub repos ensures the software accessibility across global
                language and geographical divides
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "12px" }}>P3</td>
              <td style={{ border: "1px solid #ddd", padding: "12px" }}>Islamic education</td>
              <td style={{ border: "1px solid #ddd", padding: "12px" }}>
                is established through gaming - KALAM, interactive AI chat - Noor, and the infographics, and quiz
                challenges leaderboards - IQRA as the synergism within the tripartite approach leads to increased
                retention and recall
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "12px" }}>P4</td>
              <td style={{ border: "1px solid #ddd", padding: "12px" }}>Social welfare</td>
              <td style={{ border: "1px solid #ddd", padding: "12px" }}>
                Describe its address through planned community interaction features—user profiles, leaderboards badges
                and future coding for user connections groups activity streams messaging as well as the
                app-to-masjid-transfer programs Emphasized is the vision to facilitate both online and geographical
                community activities
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "12px" }}>P5</td>
              <td style={{ border: "1px solid #ddd", padding: "12px" }}>Unity promotion</td>
              <td style={{ border: "1px solid #ddd", padding: "12px" }}>
                is achieved among Muslims through educational material sourced only from the Noble Quran and authentic
                Sunnah that are agreed upon by all madhabs IQRA and KALAM and for interfaith non-faith materials by
                focusing on neutral information or commonalities by Noor as well as the nearly completed first draft of
                the book on commonalities with CLCP
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "12px" }}>P6</td>
              <td style={{ border: "1px solid #ddd", padding: "12px" }}>Ethical Dialogue</td>
              <td style={{ border: "1px solid #ddd", padding: "12px" }}>
                We show how neutral information resources provided bilingually by the Noor Chat App not only promotes
                understanding and reduces bias but is the first step towards the software accessibility across global
                language and geographical divides
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Diagram 2: Activities & Immediate Outputs */}
      <div style={{ marginBottom: "40px", textAlign: "center" }}>
        <h2>Activities & Immediate Outputs</h2>
        <div className="w-full max-w-4xl mx-auto">
          <svg viewBox="0 0 800 400" className="w-full h-auto" style={{ maxWidth: "800px" }}>
            {/* Simplified diagram representation */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
              </marker>
            </defs>

            {/* Pillars */}
            <g className="pillars">
              <rect x="50" y="50" width="80" height="40" fill="#ECECFF" stroke="#9370DB" rx="5" />
              <text x="90" y="75" textAnchor="middle" fontSize="12" fill="#333">
                P1
              </text>

              <rect x="50" y="120" width="80" height="40" fill="#ECECFF" stroke="#9370DB" rx="5" />
              <text x="90" y="145" textAnchor="middle" fontSize="12" fill="#333">
                P2
              </text>

              <rect x="50" y="190" width="80" height="40" fill="#ECECFF" stroke="#9370DB" rx="5" />
              <text x="90" y="215" textAnchor="middle" fontSize="12" fill="#333">
                P3
              </text>

              <rect x="50" y="260" width="80" height="40" fill="#ECECFF" stroke="#9370DB" rx="5" />
              <text x="90" y="285" textAnchor="middle" fontSize="12" fill="#333">
                P5
              </text>
            </g>

            {/* Apps */}
            <g className="apps">
              <rect x="300" y="80" width="120" height="60" fill="#E8F5E8" stroke="#2E7D32" rx="5" />
              <text x="360" y="105" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">
                IQRA App
              </text>
              <text x="360" y="125" textAnchor="middle" fontSize="10" fill="#666">
                (Interactive Learning)
              </text>

              <rect x="300" y="160" width="120" height="60" fill="#E8F5E8" stroke="#2E7D32" rx="5" />
              <text x="360" y="185" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">
                KALAM App
              </text>
              <text x="360" y="205" textAnchor="middle" fontSize="10" fill="#666">
                (Gamified Learning)
              </text>

              <rect x="300" y="240" width="120" height="60" fill="#E8F5E8" stroke="#2E7D32" rx="5" />
              <text x="360" y="265" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">
                Noor App
              </text>
              <text x="360" y="285" textAnchor="middle" fontSize="10" fill="#666">
                (AI Chat + Interfaith)
              </text>
            </g>

            {/* Outputs */}
            <g className="outputs">
              <rect x="550" y="60" width="180" height="80" fill="#FFF8E1" stroke="#F57C00" rx="5" />
              <text x="640" y="85" textAnchor="middle" fontSize="12" fill="#333">
                Learning via Interactivity
              </text>
              <text x="640" y="105" textAnchor="middle" fontSize="12" fill="#333">
                Quiz Challenges
              </text>
              <text x="640" y="125" textAnchor="middle" fontSize="12" fill="#333">
                (Leaderboards/Badges)
              </text>

              <rect x="550" y="160" width="180" height="60" fill="#FFF8E1" stroke="#F57C00" rx="5" />
              <text x="640" y="185" textAnchor="middle" fontSize="12" fill="#333">
                Gamified Islamic Education
              </text>
              <text x="640" y="205" textAnchor="middle" fontSize="10" fill="#666">
                (Community features pending)
              </text>

              <rect x="550" y="240" width="180" height="80" fill="#FFF8E1" stroke="#F57C00" rx="5" />
              <text x="640" y="265" textAnchor="middle" fontSize="12" fill="#333">
                AI Chat (Neutral Interfaith)
              </text>
              <text x="640" y="285" textAnchor="middle" fontSize="12" fill="#333">
                + CLCP WhatsApp/Website
              </text>
            </g>

            {/* Arrows */}
            <g className="arrows" stroke="#333" fill="none" markerEnd="url(#arrowhead)">
              <line x1="130" y1="70" x2="290" y2="110" strokeWidth="2" />
              <line x1="130" y1="140" x2="290" y2="110" strokeWidth="2" />
              <line x1="130" y1="210" x2="290" y2="190" strokeWidth="2" />
              <line x1="130" y1="280" x2="290" y2="270" strokeWidth="2" />

              <line x1="420" y1="110" x2="540" y2="100" strokeWidth="2" />
              <line x1="420" y1="190" x2="540" y2="190" strokeWidth="2" />
              <line x1="420" y1="270" x2="540" y2="280" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>

      {/* Diagram 3: Synergies */}
      <div style={{ marginBottom: "40px", textAlign: "center" }}>
        <h2>Synergies</h2>
        <div className="w-full max-w-5xl mx-auto">
          <svg viewBox="0 0 900 300" className="w-full h-auto" style={{ maxWidth: "900px" }}>
            <defs>
              <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
              </marker>
            </defs>

            {/* Top row - Apps and Pillars */}
            <g className="top-elements">
              <rect x="50" y="30" width="80" height="40" fill="#E8F5E8" stroke="#2E7D32" rx="5" />
              <text x="90" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">
                IQRA
              </text>

              <rect x="200" y="30" width="80" height="40" fill="#E8F5E8" stroke="#2E7D32" rx="5" />
              <text x="240" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">
                Noor
              </text>

              <rect x="350" y="30" width="80" height="40" fill="#E8F5E8" stroke="#2E7D32" rx="5" />
              <text x="390" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">
                KALAM
              </text>

              <rect x="500" y="30" width="60" height="40" fill="#ECECFF" stroke="#9370DB" rx="5" />
              <text x="530" y="55" textAnchor="middle" fontSize="12" fill="#333">
                P6
              </text>

              <rect x="620" y="30" width="80" height="40" fill="#E8F5E8" stroke="#2E7D32" rx="5" />
              <text x="660" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">
                KALAM
              </text>

              <rect x="770" y="30" width="60" height="40" fill="#ECECFF" stroke="#9370DB" rx="5" />
              <text x="800" y="55" textAnchor="middle" fontSize="12" fill="#333">
                P2
              </text>
            </g>

            {/* Middle row - Synergies */}
            <g className="synergies">
              <rect x="50" y="120" width="180" height="50" fill="#FFF3E0" stroke="#FF9800" rx="5" />
              <text x="140" y="140" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">
                Synergy 1:
              </text>
              <text x="140" y="155" textAnchor="middle" fontSize="12" fill="#333">
                Reinforced Learning
              </text>

              <rect x="300" y="120" width="180" height="50" fill="#FFF3E0" stroke="#FF9800" rx="5" />
              <text x="390" y="140" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">
                Synergy 3:
              </text>
              <text x="390" y="155" textAnchor="middle" fontSize="12" fill="#333">
                Ethical Framing
              </text>

              <rect x="550" y="120" width="180" height="50" fill="#FFF3E0" stroke="#FF9800" rx="5" />
              <text x="640" y="140" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">
                Synergy 2:
              </text>
              <text x="640" y="155" textAnchor="middle" fontSize="12" fill="#333">
                Gamified Open-Source
              </text>
            </g>

            {/* Bottom row - Outcomes */}
            <g className="outcomes">
              <rect x="50" y="220" width="180" height="50" fill="#E8F5E8" stroke="#4CAF50" rx="5" />
              <text x="140" y="240" textAnchor="middle" fontSize="12" fill="#333">
                Quiz answers via
              </text>
              <text x="140" y="255" textAnchor="middle" fontSize="12" fill="#333">
                Noor AI Chat
              </text>

              <rect x="300" y="220" width="180" height="50" fill="#E8F5E8" stroke="#4CAF50" rx="5" />
              <text x="390" y="240" textAnchor="middle" fontSize="12" fill="#333">
                CLCP Principles in
              </text>
              <text x="390" y="255" textAnchor="middle" fontSize="12" fill="#333">
                IQRA/KALAM Content
              </text>

              <rect x="550" y="220" width="180" height="50" fill="#E8F5E8" stroke="#4CAF50" rx="5" />
              <text x="640" y="240" textAnchor="middle" fontSize="12" fill="#333">
                Community-Driven
              </text>
              <text x="640" y="255" textAnchor="middle" fontSize="12" fill="#333">
                Game Expansion
              </text>
            </g>

            {/* Arrows */}
            <g className="arrows" stroke="#333" fill="none" markerEnd="url(#arrowhead2)" strokeWidth="2">
              {/* Top to middle */}
              <line x1="90" y1="70" x2="120" y2="115" />
              <line x1="240" y1="70" x2="160" y2="115" />
              <line x1="390" y1="70" x2="370" y2="115" />
              <line x1="530" y1="70" x2="410" y2="115" />
              <line x1="660" y1="70" x2="620" y2="115" />
              <line x1="800" y1="70" x2="660" y2="115" />

              {/* Middle to bottom */}
              <line x1="140" y1="170" x2="140" y2="215" />
              <line x1="390" y1="170" x2="390" y2="215" />
              <line x1="640" y1="170" x2="640" y2="215" />
            </g>
          </svg>
        </div>
      </div>

      {/* Explanation Section */}
      <div style={{ marginTop: "40px", lineHeight: "1.6" }}>
        <h2 style={{ color: "#2E7D32" }}>Key to Our Framework</h2>
        <p>
          This Theory of Change validates how <strong>IQRA</strong> (interactive learning), <strong>KALAM</strong>{" "}
          (gamified education), and <strong>Noor</strong> (interfaith AI chat) synergize through{" "}
          <strong>AI, open-source, and Islamic ethics</strong> to create scalable impact.
        </p>
      </div>
    </div>
  )
}

export default TheoryOfChange
