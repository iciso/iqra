import React from "react";
import Head from "next/head"; // For Next.js. Replace with <head> if using plain React.

const TheoryOfChange = () => {
  return (
    <div className="theory-page" style={{ fontFamily: "Arial, sans-serif", maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      <Head>
        <title>Theory of Change | AI-Driven Islamic Apps</title>
        <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
      </Head>

      <h1 style={{ textAlign: "center", color: "#2E7D32", marginBottom: "30px" }}>
        Theory of Change: Empowering Islamic Engagement Through AI
      </h1>

      {/* Diagram 1: Revised Pillars → Apps → Outputs */}
      <div className="mermaid" style={{ marginBottom: "40px" }}>
        {`
          graph LR
            subgraph A. Foundational Pillars
              P1[Pillar 1: AI Advancements]
              P2[Pillar 2: Freeware & Open-Source]
              P3[Pillar 3: Islamic Education]
              P4[Pillar 4: Social Welfare]
              P5[Pillar 5: Unity Promotion]
              P6[Pillar 6: Ethical Dialogue]
            end

            subgraph B. Core Apps & Outputs
              IQRA["IQRA App<br>(Interactive Learning)"]
              KALAM["KALAM App<br>(Gamified Learning)"]
              NOOR["Noor App<br>(AI Chat + Interfaith)"]

              P1 & P2 & P3 & P5 --> IQRA --> Output1["a) Interactive Learning/Infographics<br>b) Quiz Challenges (Badges/Leaderboards)"]
              P1 & P2 & P3 & P4 --> KALAM --> Output2["Gamified Education<br>(Community Features Pending)"]
              P1 & P2 & P5 & P6 --> NOOR --> Output3["AI Chat + CLCP WhatsApp Group/Website"]
            end
        `}
      </div>

      {/* Diagram 2: Synergies → Outcomes */}
      <div className="mermaid">
        {`
          graph TB
            subgraph C. Synergies
              Synergy1["Synergy 1: Reinforced Learning"]
              Synergy2["Synergy 2: Gamified Open-Source Growth"]
              Synergy3["Synergy 3: Ethical Framing"]

              IQRA & NOOR --> Synergy1 --> OnDemand[Quiz Answers via Noor AI]
              KALAM & P2 --> Synergy2 --> Future[Community-Driven Expansion]
              NOOR & P6 --> Synergy3 --> Context[CLCP in IQRA/KALAM Content]
            end

            subgraph D. Outcomes
              Individual[Individual Empowerment]
              Cohesion[Intra-Community Cohesion]
              Dialogue[Interfaith Dialogue]
              Impact[Social Impact]
              Ecosystem[Sustainable Ecosystem]

              Synergy1 & Synergy2 & Synergy3 --> Individual & Cohesion & Dialogue & Impact & Ecosystem --> Transform[Transformative Ummah]
            end
        `}
      </div>

      {/* Explanation Section */}
      <div style={{ marginTop: "40px", lineHeight: "1.6" }}>
        <h2 style={{ color: "#2E7D32" }}>Key to Our Framework</h2>
        <p>
          This Theory of Change validates how <strong>IQRA</strong> (interactive learning), <strong>KALAM</strong> (gamified education), 
          and <strong>Noor</strong> (interfaith AI chat) synergize through <strong>AI, open-source, and Islamic ethics</strong> to create scalable impact.
        </p>
      </div>

      {/* Initialize Mermaid.js */}
      <script dangerouslySetInnerHTML={{ __html: "mermaid.initialize({ startOnLoad: true });" }} />
    </div>
  );
};

export default TheoryOfChange;
