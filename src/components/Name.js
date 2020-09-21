import React, { useState } from "react";

function Name(props) {
  const [marked, setMarked] = useState(false);
  function displayName(name) {
    alert(name);
  }

  return (
    <div style={{ backgroundColor: marked === true ? "red" : "transparent" }}>
      <span> {props.value} </span>
      <button onClick={() => setMarked((marked) => !marked)}>
        Marcar nombre
      </button>
      <button onClick={() => displayName(props.value)}>Mostrar nombre</button>
      <button onClick={() => props.removeName(props.value)}>Eliminar</button>
    </div>
  );
}

export default Name;
