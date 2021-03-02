import React, {useState} from "react";
import Avatar from "../Avatar/Avatar";
import SearchPanel from "../SearchPanel/SearchPanel";
import {Button} from "react-bootstrap";

function Header({ searching, searchValue, searchRes }) {
  const [isEnter, setIsEnter] = useState(false);
 
  return (
    <div className="header d-flex bg-info">
      <div className="d-flex justify-content-center align-items-center col col-2">{isEnter? null : <Avatar name="OB" />}</div>
      <div className="d-flex justify-content-center align-items-center col col-8">
        <SearchPanel
          searching={searching}
          searchValue={searchValue}
          searchRes={searchRes}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center col col-2">
        <Button
            className="m-1"
            size="sm"
            variant="info"
          >{isEnter? "Sign in": "Sign Out"}</Button>  
      </div>
    </div>
  );
}

export default Header;


//d-flex justify-content-center px-5 mb-2 align-items-center