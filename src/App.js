import React, { useState } from "react";
import { Button, Input, Col, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Name from "./components/Name";
import Age from "./components/Age";
import List from "./components/List";

import "./App.css";

function App() {
  const [names, setNames] = useState([]);
  const [name, setName] = useState("");
  const [index, setIndex] = useState(null);

  function addName() {
    /* if (name !== "" && names.indexOf(name) === -1) {
      const newNames = [name, ...names];
      setNames(newNames);
      setName("");
    } */
    if (index === null) {
      const newNames = [name, ...names];
      setNames(newNames);
      setName("");
    } else {
      names[index] = name;
      setNames([...names]);
      setIndex(null);
      setName("");
    }
  }
  function removeName(name) {
    //                 ['1', '2'], ('2') !== '' //Va a buscar elemento por elemento y el coincida lo va a dejar fuera en el filtro
    const newNames = names.filter((n) => n !== name);
    setNames(newNames); //El arreglo se vuelve a guardar sin el elemento filtrado
  }

  function editName(name) {
    //Index 0,1 ['Ernesto' , 'Cedano']
    const index = names.indexOf(name);
    //Guardar index = en el estadp
    setIndex(index);
    //names[index] names[1]
    setName(names[index]);
  }

  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  return (
    <div className="App">
      <Row justify="center" gutter={10}>
        <Col>
          <Input
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            placeholder="Ingrese un nombre"
          />
        </Col>
        <Col>
          <Button onClick={() => addName()} type="primary">
            Agregar
          </Button>
        </Col>
      </Row>
      <List data={names} removeName={removeName} editName={editName} />
      {/* {names.map((name) => (
        <Name value={name} removeName={removeName} />
      ))} */}
      {/* <Age edad="18" />
      {ages.map((age) => (
        <Age edad={age} />
      ))} */}
    </div>
  );
}

export default App;
