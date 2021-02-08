import React from "react";
import { Col, Row, Button } from "react-bootstrap";


function Table({ data, deletedItem, modalShow, editShow, headers,filtered, sorted, searchValue }) {
  const tableBody = data.map((item, id) => (
    
    <div key={id} className="border my-2 rounded item">
      <Row className="text-light">
        <Col className="d-flex justify-content-center align-items-center  rounded-start">
          <div>{item.id}</div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <div>{item.name}</div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center ">
          <div>{item.surname}</div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center ">
          <div>{item.age}</div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center ">
          <input type="checkbox" disabled defaultChecked={item.bool} />
        </Col>
       
        <Col className="d-flex justify-content-center align-items-center  rounded-end">
          <Button
            className="m-1 visible"
            size="sm"
            variant="warning"
            // onClick={() => modalShow(true,item.id)}
            onClick={() => {editShow(true, id, data)  }}
          >
            Edit
          </Button>
          <Button
            className="m-1 visible"
            size="sm"
            variant="danger"
            onClick={() => {deletedItem(item.id) }}
          >
            Del
          </Button>
        </Col>
      </Row>
    </div>
  ));
  const tableHeader = headers.map((header, id) => {
    
   return(
    <Col
      className="border-bottom d-flex justify-content-center align-items-center text-uppercase font-weight-bold"
      key={id}
      onClick={(val) => { filtered(header.nameHeader) }}
    >
      {header.nameHeader } {(header.nameHeader === 'Bool' || header.nameHeader === 'Change')? null : sorted}
    </Col>
  )});
  return (
    <div>
      <div className="d-flex my-2 text-secondary mx-1 ">{tableHeader}</div>
      <div className=" my-2 text-secondary mx-1 ">{tableBody}</div>
    </div>
  );
}

export default Table;
