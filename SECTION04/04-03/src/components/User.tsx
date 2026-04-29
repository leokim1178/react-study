export default function User(
  props: {
    name: string;
    age: number;
  }, //관례상 props라는 이름으로 사용한다
) {
  console.log("props : ", props);
  return (
    <div>
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
    </div>
  );
}
