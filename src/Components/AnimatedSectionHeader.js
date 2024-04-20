import { useEffect, useRef, useState } from "react"
import useOnScreen from "../Hooks/useOnScreen"

const AnimatedSectionHeader = ({text, delay="0.25s"}) => { 
    const elementRef = useRef(null);
    const isOnScreen = useOnScreen(elementRef);
    const [seen, setSeen] = useState(false);

    useEffect(() => { 
        if (isOnScreen && !seen)
        {
            setSeen(true);    
        }
    }, [isOnScreen])

    return <h2
        className={(seen ? "hero-title-gradient" : "hero-title")}
        style={{animationDelay: delay, textAlign: "center"}}
        ref={ elementRef}
    >{text}</h2>
}

export default AnimatedSectionHeader;