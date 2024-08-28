export default function AgeCheck(props) {
  return (
    <>
      <p>La edad es de: {props.edad}</p>
      <div>
        <p>
          El usuario es{" "}
          {props.edad >= 18 ? <span>mayor </span> : <span>menor </span>}
          de edad
        </p>
      </div>
    </>
  );
}
