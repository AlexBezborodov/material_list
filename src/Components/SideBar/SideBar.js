// import { render } from '@testing-library/react';
import React, {useState} from 'react';

import './SideBar.css'

const SideBar = () => {
      

    let list = [
        {li: "Main", icon:"fa fa-home" },
        {li:"User",icon:"fa fa-user-circle"},
        {li:"Profile settings",icon:"fa fa-wrench"},
        {li:"Settings",icon:"fa fa-cog"} ,
        {li:"About",icon:"fa fa-info"} 
    ];
    const [sideBar,setSideBar] = useState('open-side-bar')
    const [isOpen, setIsOpen] = useState(true);

    const isOpenSideBar = () => {
        let open = "";
        let iconStatus = null;  
        (sideBar === "open-side-bar")? open = "close-side-bar" : open = "open-side-bar";
        (sideBar === "open-side-bar")? iconStatus = false : iconStatus = true;      
        
        setSideBar(open)  
        setIsOpen(iconStatus)
      }  

      

        return (
            <div className={`side-bar ${sideBar}`}>
                <div className="burger-button mx-2 my-3 rounded" onClick={()=> isOpenSideBar()}>
                    <div className="burger rounded"></div>
                    <div className="burger rounded"></div>
                    <div className="burger rounded"></div>
                </div>
                {list.map((item, id) => {
                return(
                    <div className="side-bar-item my-2 rounded " key={id}>
                        {isOpen? <span>{item.li.toUpperCase()}</span>: <i className={`mx-2 ${item.icon}`} aria-hidden="true"></i>}
                    </div>
                )})}            
            </div>
        )
}

export default SideBar;