import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
        background: "radial-gradient(circle at top, #222, #000)",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "28px", marginBottom: "12px" }}>
        Page not found 💔
      </h1>
      <p style={{ opacity: 0.8, marginBottom: "24px" }}>
        This link might be old or mistyped. Head back to start your Valentine
        journey.
      </p>
      <Link
        href="/"
        style={{
          padding: "14px 28px",
          borderRadius: "999px",
          background: "linear-gradient(135deg, #ff758c, #ff7eb3)",
          color: "white",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Back to start 💖
      </Link>
    </div>
  );
}
