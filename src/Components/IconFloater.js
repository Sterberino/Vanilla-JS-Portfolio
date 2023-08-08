import React from "react";
import '../Styles/IconFloaters.css'

export default function IconFloater({imageUrl})
{
    const iconWrapperRef = React.useRef(null);
    const [mouseInArea, setMouseInArea] = React.useState(false);
    const [mousePositionInRect, setMousePositionInRect] = React.useState({x: 0, y: 0})
    const [lastUpdateTime, setLastUpdateTime] = React.useState(Date.now())

    const handleMouseMove = (e)=>{
        if(!mouseInArea )
        {
            return;
        }

        //elapsed time in seconds
        let elapsed = (Date.now() - lastUpdateTime) / 1000;
        if(elapsed < 0.05)
        {
            return;
        }

        const rect = iconWrapperRef.current.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

        setLastUpdateTime(Date.now())
        setMousePositionInRect(prev => {
            return {x: x, y: y}
        })
    }

    const handleMouseLeave = (e)=>{
        setMouseInArea(false);
    }

    const handleMouseEnter = (e)=>{
        setMouseInArea(true)
    }





    return(
        <div 
            className="icon-floater-wrapper" 
            ref = {iconWrapperRef}
            onMouseEnter={(e)=>{handleMouseEnter(e)}}
            onMouseLeave={(e)=>{handleMouseLeave(e)}}
            onMouseMove={(e)=>{handleMouseMove(e)}}
        >
            <div 
                className={`icon-floater-icon${mouseInArea ? " icon-floater-icon-unselected" : " icon-floater-icon-unselected"}`}
                style = {{
                    "--image-url": imageUrl !== undefined && imageUrl !== null ? `url(${imageUrl})` : `url(${process.env.PUBLIC_URL}Images/Icon-White-Github.png)`,
                    "--mouse-x": mouseInArea ? `${Math.min(Math.max(mousePositionInRect.x - 40, -40), 40) / 2}px` : "0px",
                    "--mouse-y": mouseInArea ? `${Math.min(Math.max(mousePositionInRect.y - 40, -40), 40) / 2}px` : "0px"
                    
                }}
            ></div>
        </div>
    )
}