"use client";
import { useEffect, useState } from "react";

export default function WishPage() {
  const [seconds, setSeconds] = useState(5);

  // ⏳ Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
    <div style={pageContainer}>
      <div style={centerContent}>
        {/* {seconds > 0 && (
          <>
            <h1 style={countText}>Counting down to us</h1>
            <h2 style={countNumber}>{seconds}</h2>
          </>
        )} */}
        <h1 style={title}>💖 Happy Valentine’s Day! 💖</h1>
        <p style={message}>
          Wishing you all the love, joy, and happiness in the world. You make
          every day brighter and more special!
        </p>
      </div>
    </div>
  );
}

/* 🎨 Styles */
const pageContainer = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  minHeight: "100vh",
  textAlign: "center",
  // background: "linear-gradient(to bottom, #ff9a9e, #fad0c4)",
  overflow: "hidden",
  color: "white",
};

const centerContent = {
  zIndex: 1,
};

const countText = {
  fontSize: "24px",
  marginBottom: "10px",
};

const countNumber = {
  fontSize: "48px",
  marginBottom: "20px",
};

const title = {
  fontSize: "32px",
  marginBottom: "10px",
};

const message = {
  fontSize: "18px",
  maxWidth: "400px",
  margin: "0 auto",
};
