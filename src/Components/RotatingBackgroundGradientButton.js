import React from "react";
import "../Styles/RotatingBackgroundGradientButton.css"

export default function RotatingBackgroundGradientButton({HandleClick, style, text})
{


    return(
        <div 
            className="rotating-background-gradient-button"
            style={{...style}}
            onClick={()=>{if(HandleClick && HandleClick !== undefined){ HandleClick()}}}    
        >
            {text !== null && text !== undefined && <div>{`${text}`}</div>}
        </div>
    )
}