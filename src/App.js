import React, { useState } from "react";
import { Button, Input, Col, Row, Form } from "antd";
import Name from "./components/Name";
import Age from "./components/Age";
import List from "./components/List";

import "./App.css";

function App() {
  const [names, setNames] = useState([]);
  const [name, setName] = useState("");
  const [enteredText, setEnteredText] = useState("");
  const [form] = Form.useForm();
  //const ages = ["21", "20", "15"];
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  function addName() {
    if (name !== "" && names.indexOf(name) === -1) {
      const newNames = [name, ...names];
      setNames(newNames);
      form.resetFields();
    }
  }
  function removeName(name) {
    //                 ['1', '2'], ('2') !== '' //Va a buscar elemento por elemento y el coincida lo va a dejar fuera en el filtro
    const newNames = names.filter((n) => n !== name);
    setNames(newNames); //El arreglo se vuelve a guardar sin el elemento filtrado
  }

  function editName(nombre) {
    const indice = names.indexOf(nombre);

    if (name !== "" && names.indexOf(name) === -1) {
      names[indice] = name;
      form.resetFields();
    }
  }

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  return (
    <div className="App">
      <Row justify="center" gutter={10}>
        <Form form={form} onFinish={addName}>
          <Col>
            <Form.Item name="name">
              <Input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                placeholder="Ingrese un nombre"
                value={enteredText}
              />
            </Form.Item>
          </Col>
          <Col>
            <Button onClick={() => addName()} type="primary">
              Agregar
            </Button>
          </Col>
        </Form>
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
