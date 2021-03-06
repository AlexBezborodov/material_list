import React from 'react';
import SearchPanel from '../SearchPanel/SearchPanel';

function Header({searching, searchValue, searchRes}) {
    return (
        <div className="header d-flex justify-content-center px-5 mb-2 align-items-center bg-info">
            
            <SearchPanel searching={searching} searchValue={searchValue} searchRes={searchRes}/>
            
        </div>
    )
}

export default Header
