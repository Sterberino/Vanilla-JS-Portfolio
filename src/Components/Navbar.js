import React, { useEffect } from "react"
import '../Styles/NavbarStyles.css'
import Icon from "./Icon";

import RotatingBackgroundGradientButton from "./RotatingBackgroundGradientButton.js";
import useScrollingUp from "../Hooks/useScrollingUp";
import BackgroundSpotlightButton from "./BackgroundSpotlightButton";

export default function Navbar({ Resume, navbarOpen }) {

    const scrollingUp = useScrollingUp(true);

    const [buttonsOn, setButtonsOn] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    return (
        <div
            style = {{
                top: scrollingUp ? "0px": "-70px"
            }} 
            className = "navbar">
            <Icon 
                shimmerAlways = {true} 
                maskUrl={`${process.env.PUBLIC_URL}Images/Icon.png`}
                style = {{height: "50%", alignSelf: "center"}}    
            />
            <div >
                <ul className = "nav-elements">
                    <li className="nav-element"><a className = "nav-anchor" href="#">About</a></li>
                    <li className="nav-element"><a className = "nav-anchor" href="#">Experience</a></li>
                    <li className="nav-element"><a className = "nav-anchor" href="#">Projects</a></li>
                    <li className="nav-element"><a className = "nav-anchor" href="#">Contact</a></li>
                    <li className="li-container">
                        <BackgroundSpotlightButton 
                            style ={{  
                                marginRight: '10px', 
                                marginLeft: '10px', 
                                alignSelf: 'center'
                            }}
                            text = {"Resume"}
                            HandleClick={()=>{
                                window.open(`${process.env.PUBLIC_URL}/Zachary Ruiz - Software Engineer.pdf`, '_blank')
                            }}
                        />
                    </li>
                </ul>
            </div>
        </div>
        )

}