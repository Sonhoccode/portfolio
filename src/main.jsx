// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "../src/i18n/i18.js";
import ClickSpark from "@/components/ClickSpark"; // Dùng alias @ và đường dẫn mới
import { ThemeProvider } from "@/contexts/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ClickSpark
        sparkColor="black"
        sparkSize={20}
        sparkRadius={20}
        sparkCount={8}
        duration={500}
      >
        <App />
      </ClickSpark>
    </ThemeProvider>
  </StrictMode>
);