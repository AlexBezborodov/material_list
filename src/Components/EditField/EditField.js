import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
const EditField = ({ item, editCancel, savedItem, idx }) => {
  const [name, setName] = useState(item.name);
  const [surname, setSurname] = useState(item.surname);
  const [age, setAge] = useState(item.age);
  const [bool, setBool] = useState(item.bool);
  let ageArr = [];
  const ageList = () => {
    for (let i = 0; i <= 100; i++) {
      ageArr.push(i);
    }
  };
  ageList();
  return (
    <div className="edit-item-wrapper border rounded py-1 px-1 my-2 bg-dark">
      <h2 className="text-center text-secondary">Edited field N {idx + 1}</h2>
      <Form>
        <Row className="my-2 mx-2">
          <Col className="d-flex justify-content-center">
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
              onClick={() =>
                savedItem(idx, item.id, name, surname, age, bool, false)
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
    </div>
  );
};
export default EditField;
