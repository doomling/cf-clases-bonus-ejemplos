import { useState } from "react";

export default function InputName() {
  const [name, setName] = useState("usuario");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input placeholder="Ingresa tu nombre" onKeyUp={(e) => handleChange(e)} />
      <h1>Hola {name}</h1>;
    </>
  );
}
