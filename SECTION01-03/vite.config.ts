import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// vite 설정 파일
// 플러그인 설정 등 다양한 빌드 옵션을 여기서 지정할 수 있습니다.
export default defineConfig({
  plugins: [react()],
});
