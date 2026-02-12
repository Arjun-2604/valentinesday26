"use client";
import { useState } from "react";

export default function EmailLetterWithHeart({ onNext }) {
  const [opened, setOpened] = useState(false);

  return (
    <div
      style={{
        textAlign: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#000",
        width: "100%",
      }}
    >
      {!opened ? (
        <div style={{ position: "relative" }}>
          <h2>💌 A special letter for you 💌</h2>

          <img
            src="/photos/5.png"
            alt="Envelope"
            style={{ width: "200px", marginTop: "20px" }}
          />

          <div
            onClick={() => setOpened(true)}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "40px",
              color: "darkslategrey",
              cursor: "pointer",
            }}
          >
            ❤️
          </div>

          <p style={{ marginTop: "20px" }}>
            Click the heart to open the letter 💖
          </p>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#355e5e",
            width: "500px",
            height: "80vh",
            borderRadius: "20px",
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        >
          {/* Header */}
          <h2 style={{ marginBottom: "15px" }}>
            💖 My Valentine Message 💖
          </h2>

          {/* Scrollable Message Area */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              paddingRight: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                whiteSpace: "pre-line",
                lineHeight: "1.6",
              }}
            >
{`My love,
We chose each other with open hearts.
And I would choose you again every single time.
We have seen sunshine and storms.
We have argued and disagreed.
We have hurt and healed.
Yet we never stopped loving.
We never stopped trying.
Even in our fights, I see your patience.
Even in my stubborn moments, you stay calm.
You are my safe place.
You are my home.
I still fall for you every day.
I still get butterflies around you.
We fight, but we fix things.
We bend, but we do not break.
We fall, but we rise together.
That is what makes us real.
That is what makes us forever.
Let us keep building memories.
I want to grow old beside you.
I want silver hair and wrinkled hands with you.
You are my always and forever.`}
            </p>
          </div>

          {/* Bottom Section */}
          <h3 style={{ marginTop: "15px" }}>
            Will you be my forever Valentine? 💕
          </h3>

          <button
            onClick={onNext}
            style={{
              background: "white",
              color: "#ff4d6d",
              padding: "12px 25px",
              borderRadius: "25px",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
              marginTop: "10px",
              alignSelf: "center",
            }}
          >
            YESSS 😍
          </button>
        </div>
      )}
    </div>
  );
}
