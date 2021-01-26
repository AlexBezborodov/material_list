import React, { useState } from "react";
import { FormControl, InputGroup, Button, ButtonGroup } from "react-bootstrap";

const SearchPanel = ({ searching, searchValue, searchRes }) => {
  const buttons = [
    { name: "default", label: "All" },
    { name: "name", label: "Sort by name" },
    { name: "surname", label: "Sort by surname" },
    { name: "age", label: "Sort by age" },
  ];
  const [statusFilter, setStatusFilter] = useState("");
  let filteredData = [];    
  const filteredBy = (title) => {
    return (a,b) => a[title] > b[title] ? 1 : -1;
  }
  const filtered = (filteredData, filter) => {
    if (filter === "default") {
      console.log("all")
      filteredData = searchRes;
    } else if (filter === "name") {
      console.log('filtered array',filteredData.sort(filteredBy('name')))  
    return filteredData.sort(filteredBy('name'));
    } else if (filter === "surname") {
        console.log('filtered array',filteredData.sort(filteredBy('surname')))    
      return filteredData.sort(filteredBy('surname'));
    } else if (filter === "age") {
        console.log('filtered array',filteredData.sort(filteredBy('age')))    
      console.log("sorted by age");
      return filteredData.sort(filteredBy('age')); 
    }

  };
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
          {buttons.map(({ name, label }) => {
            const activeFilter = statusFilter === name;
            const activeButton = activeFilter ? "dark" : "light";
            return (
              <Button
                size="sm"
                key={name}
                variant={activeButton}
                onClick={() => {
                  setStatusFilter(name);
                  filtered(searchRes, statusFilter);
                }}
              >
                {label}
              </Button>
            );
          })}
        </ButtonGroup>
      </InputGroup>
    </div>
  );
};
export default SearchPanel;
