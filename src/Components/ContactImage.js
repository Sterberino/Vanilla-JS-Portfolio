import "../Styles/HeroImageStyles.css"
import "../Styles/BackgroundElements.css"
import { useEffect, useRef, useState } from "react"
import useOnScreen from "../Hooks/useOnScreen";

const ContactImage = () => {   
    const onScreenRef = useRef(null);
    const isOnScreen = useOnScreen(onScreenRef);

    const [initialAnimationComplete, setInitialAnimationComplete] = useState(false);
    const [seen, setSeen] = useState(false);

    useEffect(() => {
        if (isOnScreen && !seen)
        {
            setSeen(true);    
        }
    }, [isOnScreen])

    let classes = "hero-image-wrapper";
    if (seen)
    {
        classes += (initialAnimationComplete ? " hero-image-looping-animation" : " hero-image-wrapper-initial-animation");
    }

    return (
        <div
            className= {classes}
            onAnimationEnd={() => { setInitialAnimationComplete(true) }}
            ref={onScreenRef}
        >
            <img
                className="hero-image-front"
                src={`${process.env.PUBLIC_URL}/Images/Programming-amico.png`}
                href="https://storyset.com/web"
            />
            <div className="blob" style={{translate: "10% -10%",borderRadius: "100% 75% 92% 74% / 60% 80% 30% 70%"}}></div>
        </div>
    )
}

export default ContactImage;