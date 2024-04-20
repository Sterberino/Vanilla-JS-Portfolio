import { useEffect, useRef, useState } from "react";
import useOnScreen from "../Hooks/useOnScreen";
import SectionHeader from "./SectionHeader";

import "../Styles/AboutSection.css"
import Timeline from "./Timeline";

const ExperienceSection = ({ }) => {
    const elementRef = useRef(null);
    const onScreen = useOnScreen(elementRef)
    const [seen, setSeen] = useState(false);

    useEffect(() => { 
        if (onScreen && !seen)
        {
            setSeen(true);
        }
    }, [onScreen])

    const ExperienceImage = `${process.env.PUBLIC_URL}/Images/Brain.png`
    return (
        <section className="SectionBlock NotIntersected" id="ExperienceSection" ref={ elementRef}>
                <SectionHeader text={"2. Experience"} />      
                <Timeline />
        </section>
    )
}

export default ExperienceSection;