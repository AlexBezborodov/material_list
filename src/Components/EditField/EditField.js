import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import ErrorBoundry from '../Error-boundry/ErrorBoundry'

const EditField = ({ item, editCancel, savedItem, idx }) => {
  const [name, setName] = useState(item.name);
  const [surname, setSurname] = useState(item.surname);
  const [age, setAge] = useState(item.age);
  const [bool, setBool] = useState(item.bool);
  let isError = false;
  let isDisabled = false;
  let errorText = '';
  let ageArr = [];
  let onlyLetter = "[0-9]"
  const ageList = () => {
    for (let i = 0; i <= 100; i++) {
      ageArr.push(i);
    }
  };
  ageList();
  if (name.length === 0 ) {
    isError = true;
    isDisabled = true;
    errorText = 'Name must be greater then zero'
  }
  if (surname.length === 0) {
    isError = true;
    isDisabled = true;
    errorText = 'Surname must be greater then zero'
  }
  if ((name === "") && (surname ==="")) {
    isError = true;
    isDisabled = true;
    errorText = 'Both inputs must be greater then zero'
  }
  if ((name.match(onlyLetter)) || (surname.match(onlyLetter))) {
    isError = true;
    isDisabled = true;
    errorText = 'Name or Surname cant`t includes figures'
  }
  return (
    <div className="edit-item-wrapper border rounded py-1 px-1 my-2 bg-dark">
      <h2 className="text-center text-secondary">Edited field N {item.id}</h2>
      <Form>
        <Row className="my-2 mx-2">
          <Col className="d-flex justify-content-center">
            <label className="text-light my-2 mx-1 mr-4">Name</label>
            <Form.Control
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row className="my-2 mx-2">
          <Col className="d-flex justify-content-center">
          <label className="text-light my-2 mx-1">Surname</label>
            <Form.Control
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="my-2 mx-2">
          <Col sm={9} md={6} lg={3} className="d-flex justify-content-center">
            <Form.Control
              as="select"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            >
              {ageArr.map((number) => (
                <option key={number}>{number}</option>
              ))}
            </Form.Control>
          </Col>
          <Col className="d-flex align-items-center ">
            <input
              type="checkbox"
              checked={bool}
              onChange={() => setBool(!bool)}
            />
          </Col>
        </Row>
        <Row className="my-2 mx-2">
          <Col className="d-flex justify-content-center ">
            <Button
              className="m-1"
              size="sm"
              variant="primary"
              disabled={isDisabled}
              onClick={() =>
                savedItem(item.id, name, surname, age, bool, false)
              }
            >
              Save
            </Button>
            <Button
              className="m-1"
              size="sm"
              variant="outline-danger"
              onClick={() => editCancel(false)}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
      {(isError)?<ErrorBoundry errorText={errorText} />: null}
    </div>
  );
};
export default EditField;
