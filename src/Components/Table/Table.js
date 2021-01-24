import React from "react";
import { Col, Row, Button } from "react-bootstrap";


function Table({ data, delItem, modalShow, editShow }) {
 
 
  const mapped = data.map((item, id) => (
    <div key={id} className="border my-1 rounded item">
      <Row className="table1   text-light">
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
          <input type="checkbox" disabled defaultChecked={item.bool}  />
        </Col>
        <Col
          md={2}
          className="d-flex justify-content-center align-items-center  rounded-end"
        >
          <Button 
            className="m-1 visible" size="sm" 
            variant="warning" 
            // onClick={() => modalShow(true,item.id)}
            onClick={() => editShow(true,item.id)}
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

  return <div >
          {mapped}
          
         </div>;
  
}

export default Table;
