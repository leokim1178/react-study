export default function PrintValue(props: {
  numberValue: number;
  stringValue: string;
  booleanValue: boolean;
  arrayValue: number[];
  objectValue: { name: string; age: number };
  handleClick: () => void;
}) {
  console.log(props); // props를 props 객체라고 지칭한다
  return (
    <>
      <p>number : {props.numberValue}</p>
      <p>string : {props.stringValue}</p>
      <p>boolean : {props.booleanValue.toString()}</p>
      <p>array : {props.arrayValue}</p>
      {/* <p>object1 : {props.objectValue}</p> 불가 */}
      <p>object2 : {JSON.stringify(props.objectValue)}</p>
      {/* <p>function : {props.handleClick}</p> */}
      <p>function : {props.handleClick.toString()}</p>
    </>
  );
}
