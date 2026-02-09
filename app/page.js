"use client";

import { useState } from "react";
import ValentineCard from "./components/ValentineCard";
import Countdown from "./components/Countdown";
import Puzzle from "./components/Puzzle";
import Gallery from "./components/Gallery";
import FinalQuestion from "./components/FinalQuestion";
import WishPage from "./components/WishPage";

export default function Home() {
  const [step, setStep] = useState(0);

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      {step === 0 && <ValentineCard onYes={() => setStep(1)} />}
      {step === 1 && <Countdown onDone={() => setStep(2)} />}
      {step === 2 && <Puzzle onSolved={() => setStep(3)} />}
      {step === 3 && <Gallery onNext={() => setStep(4)} />}
      {step === 4 && <FinalQuestion onNext={() => setStep(5)}/> }
      {step === 5 && <WishPage/>}
    </main>
  );
}
