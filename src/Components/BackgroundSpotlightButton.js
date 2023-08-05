import React from "react";
import '../Styles/BackgroundSpotlightButton.css'

export default function BackgroundSpotlightButton({HandleClick, style, text})
{
    const divRef = React.useRef(null);
    const [isFocused, setIsFocused] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = React.useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };


  return (
    <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="background-spotlight-button"
        onClick={()=>{if(HandleClick && HandleClick !== undefined){ HandleClick()}}}    
        style = {{
            ...style,
            "--mouse-x": `${position.x}px`,
            "--mouse-y": `${position.y}px`,
            "--spotlight-opacity" : opacity
        }}
    >
        {text !== null && text !== undefined && <div>{`${text}`}</div>}
    </div>
    )
}