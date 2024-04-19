import React from "react";
import '../Styles/SideBarStyles.css'
import '../Styles/BodyElements.css'
import '../Styles/NavbarStyles.css'

import { SidebarContext } from "../App";
import Button from "./Button";

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
            <div className="Downlit-Radial-Background"></div>

            <div className="sidebar-buttons-wrapper">
                <ul className = "nav-elements">
                    <li className="nav-element">
                                <a 
                                    className = "nav-anchor" 
                                    onClick={()=>{
                                        document.getElementById('AboutSection').scrollIntoView(); 
                                        setSidebarOpen(false);
                                    }}
                        >About</a></li>
                        <li className="nav-element">
                            <a 
                            className = "nav-anchor" 
                            onClick={()=>{
                                document.getElementById('ExperienceSection').scrollIntoView(); 
                                setSidebarOpen(false);
                            }}
                            >Experience</a></li>
                        <li className="nav-element">
                            <a 
                                className = "nav-anchor"
                                onClick={()=>{
                                    document.getElementById('ProjectsSection').scrollIntoView(); 
                                    setSidebarOpen(false);
                                }}
                            >Projects</a></li>
                        <li className="nav-element">
                            <a 
                                className = "nav-anchor"
                                onClick={()=>{
                                    document.getElementById('ContactSection').scrollIntoView(); 
                                    setSidebarOpen(false);
                                }}
                            >Contact</a></li>
                    </ul>
                    <Button 
                        style ={{   
                            left: '20px', 
                            alignSelf: 'center'
                        }}
                        text = {"Resume"}
                        onClick={()=>{
                            window.open(`${process.env.PUBLIC_URL}/Zachary Ruiz - Software Engineer.pdf`, '_blank')
                        }}
                    />
                </div>            
        </div>
    )
}