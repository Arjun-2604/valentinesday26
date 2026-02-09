"use client";
import { useEffect, useState } from "react";

export default function Countdown({ onDone }) {
  const [seconds, setSeconds] = useState(5);

  // ⏳ Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
        //   launchConfetti();   // 🎆 burst
          setTimeout(onDone, 1200);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onDone]);

  // 💕 Floating hearts generator
  useEffect(() => {
    const heartInterval = setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "floating-heart";
      heart.innerText = "❤️";

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 4 + Math.random() * 3 + "s";

      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 7000);
    }, 500);

    return () => clearInterval(heartInterval);
  }, []);

  return (
    <div style={container}>
      <div style={heart}>❤️</div>
      <h1 style={text}>Counting down to us</h1>
      <h2 style={count}>{seconds}</h2>
    </div>
  );
}

/* 🎨 Styles */

const container = {
  textAlign: "center",
  color: "white",
  zIndex: 1,
  position: "relative"
};

const heart = {
  fontSize: "64px",
  animation: "bounce 1.2s infinite"
};

const text = {
  marginTop: "10px",
  fontSize: "22px"
};

const count = {
  fontSize: "36px",
  marginTop: "10px"
};

// 🎆 Confetti burst function
function launchConfetti() {
  const colors = ["#ff4d6d", "#ff7eb3", "#ffd1dc", "#ffffff"];

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}
