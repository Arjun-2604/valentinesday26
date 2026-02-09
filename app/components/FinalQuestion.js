// export default function FinalQuestion({onNext}) {
//   return (
//     <div style={{ textAlign: "center", color: "white" }}>
//       <h1>Will you be my lifetime Valentine me? 💕</h1>
//       <button onClick={onNext} style={{
//         background: "#ff4d6d",
//         color: "white",
//         padding: "15px 30px",
//         borderRadius: "30px",
//         border: "none",
//         fontSize: "18px"
//       }}>
//         YESSS 😍
//       </button>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function FinalQuestion({ onNext }) {
//   const [opened, setOpened] = useState(false);

//   return (
//     <div style={{ textAlign: "center", color: "white" }}>
//       {!opened ? (
//         <>
//           <h2>💌 A special letter for you 💌</h2>
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
//             alt="Envelope"
//             style={{ width: "150px", cursor: "pointer", marginTop: "20px" }}
//             onClick={() => setOpened(true)}
//           />
//           <p style={{ marginTop: "10px" }}>Click the heart to open the letter ❤️</p>
//         </>
//       ) : (
//         <div style={{
//           background: "#ff4d6d",
//           padding: "30px",
//           borderRadius: "20px",
//           maxWidth: "500px",
//           margin: "0 auto"
//         }}>
//           <h2>💖 My Valentine Message 💖</h2>
//           <p style={{ fontSize: "18px", margin: "20px 0" }}>
//             You make my world brighter, my heart fuller, and my life sweeter. I’m so lucky to have you!
//           </p>

//           {/* Question at the end */}
//           <h3>Will you be my Valentine? 💕</h3>
//           <button
//             onClick={onNext}
//             style={{
//               background: "white",
//               color: "#ff4d6d",
//               padding: "12px 25px",
//               borderRadius: "25px",
//               border: "none",
//               fontSize: "16px",
//               cursor: "pointer",
//               marginTop: "20px"
//             }}
//           >
//             YESSS 😍
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from "react";

export default function EmailLetterWithHeart({ onNext }) {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{
      textAlign: "center",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "#000",
      width: "100%"
    }}>
      {!opened ? (
        <div style={{ position: "relative" }}>
          <h2>💌 A special letter for you 💌</h2>
          
          {/* Envelope image from public folder */}
          <img
            src="/photos/5.png"
            alt="Envelope"
            style={{ width: "200px", marginTop: "20px" }}
          />

          {/* Heart icon overlay */}
          <div
            onClick={() => setOpened(true)}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "40px",
              color: "darkslategrey",
              cursor: "pointer"
            }}
          >
            ❤️
          </div>

          <p style={{ marginTop: "20px" }}>Click the heart to open the letter 💖</p>
        </div>
      ) : (
        <div style={{
          background: "#ff4d6d",
          padding: "30px",
          borderRadius: "20px",
          maxWidth: "500px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2>💖 My Valentine Message 💖</h2>
          <p style={{ fontSize: "18px", margin: "20px 0" }}>
            You make my world brighter, my heart fuller, and my life sweeter. I’m so lucky to have you!
          </p>

          {/* Question at the end */}
          <h3>Will you be my Valentine? 💕</h3>
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
              marginTop: "20px"
            }}
          >
            YESSS 😍
          </button>
        </div>
      )}
    </div>
  );
}
