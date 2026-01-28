```tsx
export default function App() {
  // <- 함수형 컴포넌트
  return (
    // 문자열 없이 html과 유사한 문법을 쓸 수 있다.
    // 이 문법을 JSX라고 부른다.
    // jsx 문법 : javascript + xml
    // jsx ----트랜스파일러(ESBuild)---> javascript
    <>
      <h1>App Component</h1>
    </>
  );
}
// import React, { Component } from "react";

// export default class App
//   // <- 클래스형 컴포넌트
//   extends Component
// {
//   // 함수형 컴포넌트보다 문법이 복잡하고 가독성이 떨어진다.
//   render() {
//     return (
//       <>
//         <h1>App Component</h1>
//       </>
//     );
//   }
// }
```
