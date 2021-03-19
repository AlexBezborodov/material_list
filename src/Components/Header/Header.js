import React from "react";
import Avatar from "../Avatar/Avatar";
import SearchPanel from "../SearchPanel/SearchPanel";
import {Button} from "react-bootstrap";
import Logo from "../Logo/Logo";

function Header({ searching, searchValue, searchRes, isEnter, setIsEnter }) {
  
 let buttonName = isEnter? "Sign in": "Sign Out"
  
  return (
    <div className="header d-flex bg-info">
      <div className="d-flex pl-1 justify-content-center align-items-center col col-2">{isEnter? <Logo /> : <Avatar name="OB" />}</div>
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
            name={buttonName}
            onClick={()=> {(buttonName === "Sign Out")? setIsEnter(true): console.log(`clicked button ${buttonName}`) }}
          >{buttonName}</Button>  
      </div>
    </div>
  );
}

export default Header;