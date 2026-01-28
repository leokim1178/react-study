import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  // 실제로 랜더링하는곳
  // StrictMode: 개발모드에서 잠재적인 문제를 찾아내기 위한 래퍼 컴포넌트
  <StrictMode>
    <App />
  </StrictMode>,
);
