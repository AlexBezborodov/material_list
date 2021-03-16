import React, { useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import ErrorBoundry from "../Error-boundry/ErrorBoundry";
import useValidation from "../../Hooks/useValidation";

import "./Add-item.css";

const AddItem = ({ addItem }) => {
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [age, setAge] = useState(0);
  const [bool, setBool] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorText, setErrorText] = useState("");
  const [validation] = useValidation(setIsError, setIsDisabled, setErrorText,name,surname);
  let newId = Math.floor(Math.random() * 1000 + 100);
  let ageArr = [];
  const ageList = () => {
    for (let i = 0; i <= 100; i++) {
      ageArr.push(i);
    }
  };
  ageList();
  const inActiveButtons = () => {
    setIsDisabled(true)
  }
  const clearFields = () => {
    setName("");
    setSurName("");
    setAge(18);
    setBool(true);
    inActiveButtons();
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
                setName(e.target.value);
              }}
              onBlur={(e) => validation(name, e)}
            />
          </div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center my-2 ">
          <Form.Control
            value={surname}
            name="surname"
            placeholder="Surname"
            className="transparent-input"
            onChange={(e) => setSurName(e.target.value)}
            onBlur={(e) => validation(surname, e)}
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
            disabled={isDisabled}
            onClick={() => {
              addItem(newId, name, surname, age, bool);
              clearFields();
              inActiveButtons();
            }}
          >
            Add
          </Button>
          <Button
            className="m-1"
            disabled={isDisabled}
            size="sm"
            variant="warning"
            onClick={() => clearFields()}
          >
            Clear
          </Button>
        </Col>
      </Row>
      {isError ? <ErrorBoundry errorText={errorText} /> : null}
    </div>
  );
};

export default AddItem;
