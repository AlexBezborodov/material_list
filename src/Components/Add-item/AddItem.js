import React, { useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import ErrorBoundry from "../Error-boundry/ErrorBoundry";
import useValidation from "../../Hooks/useValidation";

import "./Add-item.css";

const AddItem = ({ addItem }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);
  const [bool, setBool] = useState(true);
  const [formValid, setFormValid] = useState(false);
  
  const [
    nameDirty,
    surnameDirty,
    nameError,
    surnameError,
    nameHandler,
    surnameHandler,
    blurHandler,
  ] = useValidation(setFormValid, setName, setSurname);
  let newId = Math.floor(Math.random() * 1000 + 100);
  let ageArr = [];
  const ageList = () => {
    for (let i = 0; i <= 100; i++) {
      ageArr.push(i);
    }
  };
  ageList();
  
  const clearFields = () => {
    setName("");
    setSurname("");
    setAge(18);
    setBool(true);  
    setFormValid(false)
    console.log('formValid',formValid);
  };

  return (
    <div className="border my-1 rounded add-item">
      <Row className="text-light">
        <Col className="d-flex justify-content-center align-items-center disabled  rounded-start"></Col>
        <Col className="d-flex justify-content-center align-items-center">
          <div className="my-2 ">
            <Form.Control
              value={name}
              className="transparent-input"
              name="name"
              placeholder="Name"
              onChange={(e) => {
                nameHandler(e)
              }}
              onBlur={(e) => blurHandler(e)}
            />
          </div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center my-2 ">
          <Form.Control
            value={surname}
            name="surname"
            placeholder="Surname"
            className="transparent-input"
            onChange={(e) => { surnameHandler(e)}}
            onBlur={(e) => blurHandler(e)}
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center ">
          <Form.Control
            className="transparent-input mx-5"
            as="select"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          >
            {ageArr.map((number) => (
              <option key={number}>{number}</option>
            ))}
          </Form.Control>
        </Col>
        <Col className="d-flex justify-content-center align-items-center ">
          <input
            type="checkbox"
            defaultChecked={bool}
            onChange={() => setBool(!bool)}
          />
        </Col>

        <Col className="d-flex justify-content-center align-items-center  rounded-end">
          <Button
            className="m-1"
            size="sm"
            variant="info"
            disabled={(nameDirty && surnameDirty && formValid)? false : true}
            onClick={() => {
              addItem(newId, name, surname, age, bool);
              clearFields();
            }}
          >
            Add
          </Button>
          <Button
            className="m-1"
            size="sm"
            variant="warning"
            onClick={() => clearFields()}
          >
            Clear
          </Button>
        </Col>
      </Row>
      {nameDirty && nameError && <ErrorBoundry errorText={nameError} />}
      {surnameDirty && surnameError && (
        <ErrorBoundry errorText={surnameError} />
      )}
    </div>
  );
};

export default AddItem;
