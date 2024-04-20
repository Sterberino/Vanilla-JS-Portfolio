import { useEffect, useRef, useState } from "react";
import useOnScreen from "../Hooks/useOnScreen";
import TimelineCardHeader from "./TImelineCardHeader";

const TimelineCard = ({children, odd, headerText, headerIcon, date}) => { 
    const elementRef = useRef(null);
    const onScreen = useOnScreen(elementRef);

    const [opacity, setOpacity] = useState(0);
    const [seen, setSeen] = useState(false);
    
    useEffect(() => { 
        if (onScreen && !seen)
        {
            setSeen(true);
        }
    }, [seen, onScreen])


    const handleMouseEnter = () => {
        setOpacity(1);
      };
    
      const handleMouseLeave = () => {
        setOpacity(0);
      };
    
    const animationClass = `${(odd === true ? " timeline-card-animated timeline-card-animated-odd" : " timeline-card-animated timeline-card-animated-even")}`;
    return (
        <div 
            className={`timeline-hover-card${(seen ? animationClass : "")} background-spotlight-card`}
            onMouseEnter={()=> {handleMouseEnter()}}
            onMouseLeave={()=> {handleMouseLeave()}}
            style = {{
                "--spotlight-opacity" : opacity
            }}
            ref={elementRef}
        >
            <div className="timeline-hover-card-bg">
                <TimelineCardHeader text={headerText} icon={headerIcon} date={date}/>
                {children}
            </div>
        </div>
    )
}

export default TimelineCard;