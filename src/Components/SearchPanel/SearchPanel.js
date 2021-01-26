import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

const SearchPanel = ({ searching, searchValue }) => {
  return (
    <div className="d-flex">
      <InputGroup className="mb-3">
        <FormControl
          className=" rounded"
          placeholder="Search everything"
          value={searchValue}
          onChange={(val) => {
            searchValue = val.target.value;
            searching(searchValue);
          }}
        />
      </InputGroup>
    </div>
  );
};
export default SearchPanel;
