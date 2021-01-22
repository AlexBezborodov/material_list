import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';


const SearchPanel = () => {
    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Search everything"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                <Button variant="light">Search</Button>
                </InputGroup.Append>
            </InputGroup>

        </div>
    )
};
export default SearchPanel;