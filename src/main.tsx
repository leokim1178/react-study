import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  // 실제로 랜더링하는곳
  <StrictMode>
    <App />
  </StrictMode>
);
