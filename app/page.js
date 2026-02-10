

"use client";

import ClientOnly from "./components/ClinetOnly";
import Home from "./Home"; // move your Home component to Home.js

export default function Page() {
  return (
    <ClientOnly>
      <Home />
    </ClientOnly>
  );
}
