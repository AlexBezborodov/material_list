import React from "react";
import { Col, Row, Button } from "react-bootstrap";

function Table({ data, delItem, modalShow, editShow }) {
  const mapped = data.map((item, id) => (
    <div key={id} className="border my-2 rounded item">
      <Row className="text-light">
        <Col
          md={3}
          className="d-flex justify-content-center align-items-center  rounded-start"
        >
          <div>{item.name}</div>
        </Col>
        <Col
          md={4}
          className="d-flex justify-content-center align-items-center "
        >
          <div>{item.surname}</div>
        </Col>
        <Col
          md={2}
          className="d-flex justify-content-center align-items-center "
        >
          <div>{item.age}</div>
        </Col>
        <Col
          md={1}
          className="d-flex justify-content-center align-items-center "
        >
          <input type="checkbox" disabled defaultChecked={item.bool} />
        </Col>
        <Col
          md={2}
          className="d-flex justify-content-center align-items-center  rounded-end"
        >
          <Button
            className="m-1 visible"
            size="sm"
            variant="warning"
            // onClick={() => modalShow(true,item.id)}
            onClick={() => editShow(true, item.id)}
          >
            Edit
          </Button>
          <Button
            className="m-1 visible"
            size="sm"
            variant="danger"
            onClick={() => delItem(id)}
          >
            Del
          </Button>
        </Col>
      </Row>
    </div>
  ));

  return (
    <div>
      <Row className=" my-2 text-secondary mx-1">
        <Col
          md={3}
          className="border-bottom d-flex justify-content-center align-items-center text-uppercase font-weight-bold rounded-start"
        >
          Name
        </Col>
        <Col
          md={4}
          className="border-bottom d-flex justify-content-center align-items-center text-uppercase font-weight-bold "
        >
          Surname
        </Col>
        <Col
          md={2}
          className="border-bottom d-flex justify-content-center align-items-center text-uppercase font-weight-bold "
        >
          Age
        </Col>
        <Col
          md={1}
          className="border-bottom d-flex justify-content-center align-items-center text-uppercase font-weight-bold "
        >
          Bool
        </Col>
        <Col
          md={2}
          className="border-bottom d-flex justify-content-center align-items-center text-uppercase font-weight-bold rounded-end"
        >
          Actions
        </Col>
      </Row>
      {mapped}
    </div>
  );
}

export default Table;
