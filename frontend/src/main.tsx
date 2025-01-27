import "./index.css";

import { ThemeProvider } from "./contexts/ThemeProvider.tsx";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
