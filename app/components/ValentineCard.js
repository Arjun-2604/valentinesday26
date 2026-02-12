"use client";
import { useState } from "react";

export default function ValentineCard({ onYes }) {
  const noTexts = [
    "No 🙃",
    "Are you sure? 😶",
    "Think again 😏",
    "Nice try 😂",
    "You can't escape ❤️"
  ];

  const [noIndex, setNoIndex] = useState(0);

  const moveNo = (e) => {
    const x = Math.random() * 220 - 110;
    const y = Math.random() * 220 - 110;
    e.target.style.transform = `translate(${x}px, ${y}px)`;
    setNoIndex((prev) => (prev + 1) % noTexts.length);
  };

  return (
    <div style={wrapper}>
      <div style={card}>
        <h1 style={title}>Hey Karthick❤️</h1>
        <p style={text}>Will you be my forever Valentine?</p>

        <div style={btnRow}>
          <button style={yesBtn} onClick={onYes}>
            Yes 💖
          </button>

          <button
            style={noBtn}
            onMouseEnter={moveNo}
          >
            {noTexts[noIndex]}
          </button>
        </div>
      </div>
    </div>
  );
}

/* 🎨 Styles — matched to original index.html */

const wrapper = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"  
};

const card = {
  background: "white",
  padding: "2.8rem 2.5rem",
  borderRadius: "22px",
  textAlign: "center",
  width: "200%",
  maxWidth: "450px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.25)"
};

const title = {
  color: "#ff4d6d",
  fontSize: "32px",
  marginBottom: "10px"
};

const text = {
  color: "#444",
  fontSize: "18px",
  marginBottom: "30px"
};

const btnRow = {
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  position: "relative"
};

const yesBtn = {
  background: "#ff4d6d",
  color: "white",
  padding: "14px 26px",
  borderRadius: "999px",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
  boxShadow: "0 8px 20px rgba(255,77,109,0.4)"
};

const noBtn = {
  background: "#f0f0f0",
  color: "#333",
  padding: "14px 26px",
  borderRadius: "999px",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
  position: "relative",
  transition: "transform 0.2s ease"
};
