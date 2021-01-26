import React from "react";
import { FormControl, InputGroup, Button, ButtonGroup } from "react-bootstrap";

const SearchPanel = ({ searching, searchValue }) => {
  const buttons = [{name:"default", label: 'All'},{name:"name", label: "Sort by name" },{name:"surname", label: "Sort by surname"}, {name:"age", label: "Sort by age"}];
  
  return (
    <div className="d-flex">
      <InputGroup className="mb-3">
        <FormControl
          className="mr-5 rounded"
          placeholder="Search everything"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={searchValue}
          onChange={(val) => {
            searchValue = val.target.value;
            searching(searchValue);
          }}
        />
        <ButtonGroup aria-label="Basic example">
          {buttons.map(({name, label}) => {

              return(
            <Button size="sm" key={name} variant="light">
              {label}
            </Button>
            )})}
        </ButtonGroup>
      </InputGroup>
    </div>
  );
};
export default SearchPanel;
