export default function App() {
  // 참조 자료형 예제
  const referenceArray = [1, 2, 3, 4];
  const referenceObject = { name: "John", age: 30 };
  const referenceFunction = () => "함수의 리턴 값";
  const referenceDate = new Date();
  const referenceRegExp = /react/i;
  const referenceMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
  ]);
  const referenceSet = new Set([1, 2, 3, 4]);

  return (
    <>
      <h2>참조 자료형 출력</h2>
      {/* <p>배열: {referenceArray}</p> -> 중괄호 안에 배열을 넣으면 각각의 요소를 평가해서 html로 렌더링한다*/}
      <p>배열: {referenceArray.join(", ")}</p>
      {/* <p>객체 : {referenceObject}</p> -> react는 객체로 되어있는것을 표현하지 못한다 */}
      <p>객체 : {JSON.stringify(referenceObject)}</p>
      {/* <p>함수 : {referenceFunction}</p> -> 함수도 JSX에서 바로 출력할 수 없다 */}
      <p>함수 : {referenceFunction.toString()}</p>
      <p>날짜 : {referenceDate.toString()}</p>
      <p>정규식 : {referenceRegExp.toString()}</p>
      <p>
        Map :{" "}
        {Array.from(referenceMap).map(([key, value]) => `${key} => ${value} `)}
      </p>
      <p> Map2 : {JSON.stringify(Array.from(referenceMap))}</p>
      <p>Set : {Array.from(referenceSet).join(", ")}</p>
      <p>Set2 : {JSON.stringify(Array.from(referenceSet))}</p>
    </>
  );
}
