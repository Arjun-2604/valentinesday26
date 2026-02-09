"use client";
// import { useState } from "react";
import { useState, useRef, useEffect } from "react";


export default function Gallery({ onNext }) {
  const audioRef = useRef(null);
  const [unlocked, setUnlocked] = useState(false);
  const cards = [
    {
      title: "The day I knew it was you 💖",
      image: "/photos/1.jpg",
      bg: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
      personality: "bounce" 
    },
    {
      title: "Every laugh we share ✨",
      image: "/photos/2.jpg",
      bg: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
      personality: "bounce"
    },
    {
      title: "My favorite adventure 🚲",
      image: "/photos/3.jpg",
      bg: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
      personality: "bounce"
    }
  ];

  const [flipped, setFlipped] = useState(cards.map(() => false));
//   const [firstFlipDone, setFirstFlipDone] = useState(false);
//   const [hearts, setHearts] = useState([]);

//   const handleFlip = (index) => {
//     if (flipped[index]) return;

//     const updated = [...flipped];
//     updated[index] = true;
//     setFlipped(updated);

//     if (!firstFlipDone) {
//       burstHearts();
//       setFirstFlipDone(true);
//     }
//   };

//   const handleFlip = (index) => {
//   const updated = [...flipped];
//   updated[index] = !updated[index]; // 👈 TOGGLE
//   setFlipped(updated);

//   // Only trigger hearts on the VERY first flip ever
//   if (!firstFlipDone && updated[index] === true) {
//     burstHearts();
//     setFirstFlipDone(true);
//   }
// };

// const handleFlip = (index) => {
//   const updated = [...flipped];
//   updated[index] = !updated[index];
//   setFlipped(updated);
// };

const handleFlip = (index) => {
  const updated = [...flipped];
  updated[index] = !updated[index];
  setFlipped(updated);

  // 🔓 Unlock audio on first interaction
  if (!unlocked && audioRef.current) {
    audioRef.current.muted = false;
    audioRef.current.volume = 0;
    audioRef.current.play();

    let vol = 0;
    const fade = setInterval(() => {
      vol += 0.05;
      audioRef.current.volume = Math.min(vol, 0.3);
      if (vol >= 0.3) clearInterval(fade);
    }, 100);

    setUnlocked(true);
  }
};





//   const burstHearts = () => {
//     const burst = Array.from({ length: 16 }).map((_, i) => ({
//       id: i,
//       left: Math.random() * 100,
//       size: 16 + Math.random() * 24,
//       delay: Math.random() * 0.3
//     }));
//     setHearts(burst);
//     setTimeout(() => setHearts([]), 2000);
//   };

  const allFlipped = flipped.every(Boolean);

  return (
    <div style={wrapper}>
        <audio
            ref={audioRef}
            src="/music/love.mp3"
            loop
            autoPlay
            muted
            />

      {/* Floating hearts */}
      {/* {hearts.map((h) => (
        <div
          key={h.id}
          style={{
            position: "absolute",
            left: `${h.left}%`,
            bottom: "40%",
            fontSize: h.size,
            animation: `floatUp 2s ease-out ${h.delay}s`,
            pointerEvents: "none"
          }}
        >
          ❤️
        </div>
      ))} */}

      <h1 style={title}>Tap the memories 💌</h1>

      <div style={grid}>
        {cards.map((card, i) => (
          <div
            key={i}
            style={{
              ...cardWrap,
              animation:
                card.personality === "bounce"
                  ? "softBounce 2s infinite"
                  : card.personality === "tilt"
                  ? "tilt 4s infinite"
                  : card.personality ==="pulse"
                  ? "pulseGlow 2.4s infinite"
                  : "none"
            }}
            onClick={() => handleFlip(i)}
          >
            <div
              style={{
                ...cardInner,
                transform: flipped[i] ? "rotateY(180deg)" : "rotateY(0)"
              }}
            >
              {/* Front */}
              <div
                style={{
                  ...cardFace,
                  background: card.bg
                }}
              >
                <h3>{card.title}</h3>
                <p style={{ opacity: 0.7 }}>Tap 💗</p>
              </div>

              {/* Back */}
              <div
                style={{
                  ...cardFace,
                  ...cardBack
                }}
              >
                <img
                  src={card.image}
                  alt="memory"
                  style={image}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={!allFlipped}
        style={{
          ...button,
          opacity: allFlipped ? 1 : 0.4,
          pointerEvents: allFlipped ? "auto" : "none"
        }}
      >
        One last thing 💍
      </button>

      {!allFlipped && (
        <p style={{ opacity: 0.6, marginTop: 10 }}>
          Unlock all memories 💕
        </p>
      )}

      {/* Animations */}
      <style>{`
        @keyframes floatUp {
          from { transform: translateY(0); opacity: 1; }
          to { transform: translateY(-200px); opacity: 0; }
        }

        @keyframes softBounce {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes tilt {
          0%,100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }
      `}</style>
    </div>
  );
}

/* ---------------- styles ---------------- */

const wrapper = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top, #222, #000)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  position: "relative",
  overflow: "hidden", 
  width: "100%"
};

const title = {
  fontSize: "28px",
  marginBottom: "30px"
};

const grid = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  justifyContent: "center"
};

// const grid = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//   gap: "20px",
//   maxWidth: "900px"
// };

const cardWrap = {
  width: 220,
  height: 300,
  perspective: 1200,
  cursor: "pointer"
};

const cardInner = {
  width: "100%",
  height: "100%",
  position: "relative",
  transformStyle: "preserve-3d",
  transition: "transform 0.8s"
};

const cardFace = {
  position: "absolute",
  inset: 0,
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backfaceVisibility: "hidden",
  color: "#fff",
  textAlign: "center",
  padding: "20px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
};

const cardBack = {
  background: "linear-gradient(135deg, #111, #222)",
  transform: "rotateY(180deg)",
  padding: "10px",
  background: "linear-gradient(135deg, rgb(233 138 255 / 53%), #ffffff8f)"
};

const image = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "16px"
};

const button = {
  marginTop: "30px",
  padding: "14px 26px",
  borderRadius: "999px",
  border: "none",
  fontSize: "16px",
  background: "linear-gradient(135deg, #ff758c, #ff7eb3)",
  color: "white",
  cursor: "pointer"
};

