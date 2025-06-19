"use client";

import React from "react";
import Head from "next/head";

const TheoryOfChange = () => {
  return (
    <div className="theory-page" style={{ fontFamily: "Arial, sans-serif", maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      <Head>
        <title>Theory of Change | AI-Driven Islamic Apps</title>
      </Head>

      <h1 style={{ textAlign: "center", color: "#2E7D32", marginBottom: "30px" }}>
        Theory of Change: Empowering Islamic Engagement Through AI
      </h1>

      {/* Diagram 1: Pillars → Apps (SVG) */}
      <div style={{ marginBottom: "40px", textAlign: "center" }}>
        <svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
          {/* Pillars */}
          <rect x="50" y="50" width="100" height="400" fill="#4CAF50" opacity="0.7" rx="5" />
          <text x="100" y="30" textAnchor="middle" fontWeight="bold">Foundational Pillars</text>
          
          {/* Pillar Labels */}
          {["AI Advancements", "Open-Source", "Islamic Ed", "Social Welfare", "Unity", "Ethical Dialogue"].map((label, i) => (
            <text key={i} x="100" y={100 + i * 60} textAnchor="middle" fill="white">{label}</text>
          ))}

          {/* Apps */}
          <circle cx="400" cy="150" r="60" fill="#2196F3" />
          <text x="400" y="150" textAnchor="middle" fill="white">IQRA</text>
          
          <circle cx="400" cy="300" r="60" fill="#FF9800" />
          <text x="400" y="300" textAnchor="middle" fill="white">KALAM</text>
          
          <circle cx="600" cy="225" r="60" fill="#9C27B0" />
          <text x="600" y="225" textAnchor="middle" fill="white">NOOR</text>

          {/* Connectors */}
          <path d="M150 80 L340 150" stroke="#333" strokeWidth="2" fill="none" />
          <path d="M150 140 L340 150" stroke="#333" strokeWidth="2" fill="none" />
          <path d="M150 200 L340 150" stroke="#333" strokeWidth="2" fill="none" />
          <path d="M150 260 L340 150" stroke="#333" strokeWidth="2" fill="none" />
          
          <path d="M150 140 L340 300" stroke="#333" strokeWidth="2" fill="none" />
          <path d="M150 200 L340 300" stroke="#333" strokeWidth="2" fill="none" />
          <path d="M150 260 L340 300" stroke="#333" strokeWidth="2" fill="none" />
          <path d="M150 320 L340 300" stroke="#333" strokeWidth="2" fill="none" />
          
          <path d="M150 80 L540 225" stroke="#333" strokeWidth="2" fill="none" />
          <path d="M150 200 L540 225" stroke="#333" strokeWidth="2" fill="none" />
          <path d="M150 260 L540 225" stroke="#333" strokeWidth="2" fill="none" />
          <path d="M150 320 L540 225" stroke="#333" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Diagram 2: Synergies (SVG) */}
      <div style={{ marginBottom: "40px", textAlign: "center" }}>
        <svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
          {/* Synergy Boxes */}
          <rect x="100" y="50" width="200" height="80" fill="#FF5722" rx="5" />
          <text x="200" y="90" textAnchor="middle" fill="white">Reinforced Learning</text>
          
          <rect x="100" y="180" width="200" height="80" fill="#673AB7" rx="5" />
          <text x="200" y="220" textAnchor="middle" fill="white">Gamified Growth</text>
          
          <rect x="100" y="310" width="200" height="80" fill="#009688" rx="5" />
          <text x="200" y="350" textAnchor="middle" fill="white">Ethical Framing</text>

          {/* Outcomes */}
          {["Empowerment", "Cohesion", "Dialogue", "Impact", "Ecosystem"].map((label, i) => (
            <circle key={i} cx={500} cy={50 + i * 90} r="40" fill="#607D8B" />
          ))}
          
          {/* Connectors */}
          <path d="M300 90 L460 50" stroke="#333" strokeWidth="2" fill="none" />
          <path d="M300 220 L460 140" stroke="#333" strokeWidth="2" fill="none" />
          <path d="M300 350 L460 230" stroke="#333" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Explanation Section */}
      <div style={{ marginTop: "40px", lineHeight: "1.6" }}>
        <h2 style={{ color: "#2E7D32" }}>Key to Our Framework</h2>
        <p>
          This Theory of Change validates how <strong>IQRA</strong> (interactive learning), <strong>KALAM</strong> (gamified education), 
          and <strong>Noor</strong> (interfaith AI chat) synergize through <strong>AI, open-source, and Islamic ethics</strong> to create scalable impact.
        </p>
      </div>
    </div>
  );
};

export default TheoryOfChange;
