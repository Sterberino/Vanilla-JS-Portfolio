import { useEffect, useRef, useState } from "react";
import useOnScreen from "../Hooks/useOnScreen";

import "../Styles/AboutSection.css";
import useMagicCards from "./UseMagicCards";
import SkillSet from "./Skillset";
import useWindowSize from "../Hooks/useWindowSize";

const SkillsetsWrapper = ({ }) => { 
    const element = useRef(null);
    const onScreen = useOnScreen(element);
    useMagicCards(element);
    const size = useWindowSize();
    
    const [seen, setSeen] = useState(false);
    const [shortenedText, setShortenedText] = useState(size.x < 800);

    useEffect(() => { 
        console.log(size.x);
        if ((size.x < 800 && size.x > 640) && !shortenedText)
        {
            setShortenedText(true);
        }
        else if ((size.x >= 800 || size.x <= 640) && shortenedText)
        {
            setShortenedText(false);    
        }

    }, [size, shortenedText])

    useEffect(() => { 
        if (onScreen && !seen)
        {
            setSeen(true);    
        }
    }, [onScreen, seen])

    return (
        <div className="skillsets-wrapper" ref={element}>
            <SkillSet
                seen={seen}
                icon={`url("${process.env.PUBLIC_URL}/Images/frontend-icon.png")`}
                delay={"0.2s"}
                text={(shortenedText ? "Frontends" : "Fabulous Frontends") }
            />
            <SkillSet
                seen={seen}
                icon={`url("${process.env.PUBLIC_URL}/Images/backend-icon.png")`}
                delay={"0.4s"}
                text={(shortenedText ? "Backends" : "Blazing Fast Backends") }
            />
            <SkillSet
                seen={seen}
                icon={`url("${process.env.PUBLIC_URL}/Images/database-icon.png")`}
                delay={"0.6s"}
                text={(shortenedText ? "Databases" : "Database Expertise")}
            />
            <SkillSet
                seen={seen}
                icon={`url("${process.env.PUBLIC_URL}/Images/devops-icon.png")`}
                delay={"0.8s"}
                text={(shortenedText ? "Devops" : "Devops Extraordinaire")}
            />
        </div>
    )
}

export default SkillsetsWrapper;