import React from "react";

function Button() {
  function manejarClick() {
    alert("¡Hiciste clic en el botón!");
  }

  return <button onClick={() => manejarClick()}>Haz clic aquí</button>;
}

export default Button;
