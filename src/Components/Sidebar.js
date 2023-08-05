import React from "react";
import '../Styles/SideBarStyles.css'
import '../Styles/BodyElements.css'

import { SidebarContext } from "../App";

export default function Sidebar()
{   
    const {sidebarOpen, setSidebarOpen} = React.useContext(SidebarContext)

    function disableScroll() {
        document.body.style.overflow = "hidden"    
    }
      
    function enableScroll() {
        document.body.style.overflow = "scroll"
        }

    if(sidebarOpen)
    {
        disableScroll();
    }
    else{
        enableScroll();
    }

    return (
        <div className={`sidebar ${sidebarOpen ? 'sidebarOpen' : 'sidebarClosed'}`}>
            <div className="Downlit-Radial-Background">

            </div>
        </div>
    )
}