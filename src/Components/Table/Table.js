import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import data from "../Json-files/users.json";

// const list = data.users;

function Table() {
  const [userList, setUserList] = useState(data.users);

  const delItem = (id) => {
    console.log("item", userList[id]);
    let newUserList = userList;
    newUserList.splice(id, 1);
    setUserList(
      newUserList.map((user) => {
        return user;
      })
    );
  };

  const mapped = userList.map((item, id) => (
    <div className="border my-2 rounded item">
      <Row className="table1 ">
        <Col className="d-flex justify-content-center align-items-center  rounded-start">
          <div>{item.name}</div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center ">
          <div>{item.surname}</div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center ">
          <div>{item.age}</div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center ">
          <input type="checkbox" checked={item.bool} />
        </Col>
        <Col className="d-flex justify-content-center align-items-center  rounded-end">
          <Button className="m-1 visible" size="sm" variant="danger">
            Edit
          </Button>
          <Button
            className="m-1 visible"
            size="sm"
            variant="info"
            onClick={(e) => delItem(id)}
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

  return <div>{mapped}</div>;
}

export default Table;
