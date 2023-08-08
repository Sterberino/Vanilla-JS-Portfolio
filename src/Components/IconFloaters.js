import React from "react";
import '../Styles/IconFloaters.css'
import IconFloater from "./IconFloater";

export default function IconFloaters()
{
    const getIcons = ()=> {
        let icons = [
            <IconFloater imageUrl={`${process.env.PUBLIC_URL}Images/html-icon.png`}/>,
            <IconFloater imageUrl={`${process.env.PUBLIC_URL}Images/box-cube-icon.png`}/>,
            <IconFloater imageUrl={`${process.env.PUBLIC_URL}Images/database-icon.png`}/>,
            <IconFloater imageUrl={`${process.env.PUBLIC_URL}Images/search-icon.png`}/>,
            <IconFloater imageUrl={`${process.env.PUBLIC_URL}Images/terminal-icon.png`}/>,
            <IconFloater imageUrl={`${process.env.PUBLIC_URL}Images/version-control-icon.png`}/>
        ]
        
        return(icons);
    }


    return(
        <div className="icon-floaters-container">
            {getIcons()}
        </div>
    )
}