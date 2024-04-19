import Button from "./Button";
import "../Styles/HeroStyles.css";
import "../Styles/ContactSection.css"
import useOnScreen from "../Hooks/useOnScreen";

import { useEffect, useState, useRef} from "react";


const ContactDescription = () => {
    const onScreenRef = useRef(null);
    const isOnScreen = useOnScreen(onScreenRef);

    const [initialAnimationComplete, setInitialAnimationComplete] = useState(false);
    const [seen, setSeen] = useState(false);

    useEffect(() => {
        if (isOnScreen && !seen) {
            setSeen(true);
        }
    }, [isOnScreen])
   
    return (
        <div className= {`left-aligned-column${(seen ? " contact-section-animation" : "")}`} ref={onScreenRef}>
            <h1 className="contact-section-gradient-header">Reach Out</h1>

            <div className="unfocused-text">
                I am excited to explore new opportunities, and I would love to hear from you! Send me an email and I'll get back to you soon.
            </div>
            <Button 
                onClick={()=>{
                    let x=window.open("mailto:" + "zacharyruiz1" + "@gmail.com");
                    x.close();
                }}
                text={"Contact Me"}
                style={{height: '40px', width: "120px", marginTop: "20px" }}
            />      
            <div className="blob" style={{translate: "-45% 25%",borderRadius: "100% 75% 92% 74% / 60% 80% 30% 70%"}}></div>
        </div>
    )
}

export default ContactDescription;