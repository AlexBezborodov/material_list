import React from 'react';
import SearchPanel from '../SearchPanel/SearchPanel';

function Header() {
    return (
        <div className="header d-flex justify-content-between px-5 mb-2 align-items-center bg-info">
            <div>Logo</div>
            <SearchPanel />
            
        </div>
    )
}

export default Header
