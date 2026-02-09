"use client";
import { useState } from "react";

export default function Puzzle({ onSolved }) {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);

  const handleUnlock = () => {
    if (answer.toLowerCase().trim() === "you") {
      onSolved(); // ✅ move to next step
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div style={wrapper}>
      <div style={card}>
        <h1>Unlock my message 💌</h1>
        <p>Who do I love the most?</p>

        <div style={row}>
          <input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type here..."
            style={{ ...input, ...(error ? shake : {}) }}
          />
          <button style={button} onClick={handleUnlock}>Unlock 🔓</button>
        </div>

        {error && <p style={{ color: "#ff7eb3" }}>Try again 😉</p>}
      </div>
    </div>
  );
}



const wrapper = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#000",
  width: "100%"
};

const row = {
  display: "flex",
  gap: "10px",
  marginTop: "15px",
  justifyContent: "center"
};

const card = {
  width: "90%",
  maxWidth: "420px",
  padding: "40px 30px",
  borderRadius: "24px",
  background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
  boxShadow: "0 0 40px rgba(255,118,140,0.25)",
  textAlign: "center",
  color: "white"
};

const title = {
  fontSize: "26px",
  marginBottom: "6px",
  fontWeight: 600
};

const subtitle = {
  opacity: 0.75,
  marginBottom: "25px",
  fontSize: "15px"
};

const inputRow = {
  display: "flex",
  gap: "10px",
  marginBottom: "12px"
};

const input = {
  flex: 1,
  padding: "12px 14px",
  borderRadius: "12px",
  border: "none",
  background: "#2a2a2a",
  color: "white",
  fontSize: "15px",
  outline: "none"
};

const button = {
  padding: "12px 16px",
  borderRadius: "12px",
  border: "none",
  background: "linear-gradient(135deg, #ff758c, #ff7eb3)",
  color: "white",
  cursor: "pointer",
  fontSize: "14px",
  whiteSpace: "nowrap"
};

const errorText = {
  marginTop: "8px",
  fontSize: "13px",
  color: "#ff7eb3"
};

const shake = {
  animation: "shake 0.3s"
};
