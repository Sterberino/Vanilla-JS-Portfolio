import React from "react";
import '../Styles/IconImage.css'

export default function Icon({style, maskUrl, HandleClick, fillImage = false, showBorder = false, shimmerAlways = false})
{
    return (
        <div 
            onClick={()=>{if(HandleClick !== null && HandleClick !== undefined){HandleClick()}}}
            className="icon-button-border"
            style = {{
                ...style,
                backgroundImage: showBorder && `url(${process.env.PUBLIC_URL}/Images/BlackIcons/icon-border-black.png)`,
            }}
        >
            {fillImage && <div 
            className="icon-button-fill"
            style = {{
                maskImage: `url(${process.env.PUBLIC_URL}/Images/BlackIcons/icon-border-black.png)`,
            }}
            ></div>}   
            <div 
                className= {`icon-button${shimmerAlways === true ? ' icon-shimmer-always': ''}`} 
                style = {{maskImage: `url(${process.env.PUBLIC_URL}/${maskUrl})`}}
            >
                    <div className="icon-button-shimmer"></div>
            </div>

        </div>
    )
}