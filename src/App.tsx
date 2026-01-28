import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";

export default function App() {
  // 1. 함수로 작성되어야 함
  // 2. return으로 JSX 혹은 null 반환
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}
