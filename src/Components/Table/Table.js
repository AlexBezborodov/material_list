import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";

function Table({ data, delItem }) {
 
  
  // const delItem = (id) => {
  //   let newUserList = userList;
  //   newUserList.splice(id, 1);
  //   setUserList(
  //     newUserList.map((user) => {
  //       return user;
  //     })
  //   );
  // };

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
          <input type="checkbox" checked={item.bool} />
        </Col>
        <Col
          md={2}
          className="d-flex justify-content-center align-items-center  rounded-end"
        >
          <Button className="m-1 visible" size="sm" variant="warning">
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
          {/* <Button className="m-1" size="sm" variant="outline-secondary">
            X
          </Button> */}
        </Col>
      </Row>
    </div>
  ));

  return <div >{mapped}</div>;
}

export default Table;
