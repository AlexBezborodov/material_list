import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import ErrorBoundry from "../Error-boundry/ErrorBoundry";
import useValidation from "../../Hooks/useValidation";

const EditField = ({ item, editCancel, savedItem, idx }) => {
  const [name, setName] = useState(item.name);
  const [surname, setSurname] = useState(item.surname);
  const [age, setAge] = useState(item.age);
  const [bool, setBool] = useState(item.bool);
  const [formValid, setFormValid] = useState(false);
  const [
    nameDirty,
    surnameDirty,
    nameError,
    surnameError,
    nameHandler,
    surnameHandler,
    blurHandler,
  ] = useValidation(setFormValid, setName, setSurname, name, surname);

  let ageArr = [];

  const ageList = () => {
    for (let i = 0; i <= 100; i++) {
      ageArr.push(i);
    }
  };
  ageList();

  return (
    <div className="edit-item-wrapper border rounded py-1 px-1 my-2 bg-dark">
      <h2 className="text-center text-secondary">Edited field N {item.id}</h2>
      <Form>
        <Row className="my-2 mx-2">
          <Col className="d-flex justify-content-center">
            <label className="text-light my-2 mx-1 mr-4">Name</label>
            <Form.Control
              value={name}
              className="transparent-input"
              name="name"
              onChange={(e) => {
                nameHandler(e)
              }}
              onBlur={(e) => blurHandler(e)}
            />
          </Col>
        </Row>
        <Row className="my-2 mx-2">
          <Col className="d-flex justify-content-center">
            <label className="text-light my-2 mx-1">Surname</label>
            <Form.Control
              value={surname}
              className="transparent-input"
              name="surname"
              onChange={(e) => {surnameHandler(e)}}
              onBlur={(e) => blurHandler(e)}
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
              disabled={!formValid}
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
      {nameDirty && nameError && <ErrorBoundry errorText={nameError} />}
      {surnameDirty && surnameError && (
        <ErrorBoundry errorText={surnameError} />
      )}
    </div>
  );
};
export default EditField;
