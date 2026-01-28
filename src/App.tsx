import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/main";

export default function App() {
  // 1. 함수로 작성되어야 함
  // 2. return으로 JSX 혹은 null 반환
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
