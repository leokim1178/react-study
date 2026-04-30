import { ReactElement, ReactNode } from "react";

export default function Button(props: {
  text: string;
  // children: ReactElement; // 반드시 jsx 요소여야 허용된다 string,number...불가
  children: ReactNode; // 반드시 jsx 요소여야 허용된다 string,number, 등등 가능
}) {
  return (
    <>
      <button>{props.children}</button>
    </>
  );
}
