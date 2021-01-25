import React, { useState } from "react";
import { FormControl, InputGroup, Button, ButtonGroup } from "react-bootstrap";

const SearchPanel = ({searching,searchValue}) => {
  const buttons = ["name", "surname", "age"];


  return (
    <div className="d-flex">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search everything"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={searchValue}
           onChange={(val) => {searchValue = val.target.value; searching(searchValue)} }
        />
        <ButtonGroup aria-label="Basic example">
          {buttons.map((btn) => (
            <Button size="sm" key={btn} variant="dark">
              Sort by {btn}
            </Button>
          ))}
        </ButtonGroup>
      </InputGroup>
    </div>
  );
};
export default SearchPanel;
