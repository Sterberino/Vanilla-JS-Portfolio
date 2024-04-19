import "../Styles/AboutSection.css";
import { useState } from "react";

const SkillSet = ({icon, text, seen, delay}) => { 
    const [opacity, setOpacity] = useState(0);

    const handleMouseEnter = () => {
        setOpacity(1);
      };
    
      const handleMouseLeave = () => {
        setOpacity(0);
      };
    

    return (
        <div
            className={`skillset background-spotlight-card${(seen ? " skillset-animate" : "")}`}
            onMouseEnter={()=> {handleMouseEnter()}}
            onMouseLeave={()=> {handleMouseLeave()}}
            style = {{
                "--spotlight-opacity": opacity,
                animationDelay: delay
            }}
        >
            <div
                className="skillset-icon"
                style={{
                    maskImage: icon
                }}
            ></div>
            <p className="unfocused-text">{ text}</p>
        </div>
    )
    
}

export default SkillSet; 