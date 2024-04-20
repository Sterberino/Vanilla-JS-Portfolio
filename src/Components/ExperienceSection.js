import { useEffect, useRef, useState } from "react";
import useOnScreen from "../Hooks/useOnScreen";
import SectionHeader from "./SectionHeader";

import "../Styles/AboutSection.css"

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
                <div className="AboutSection">
                    <div className="imgOverlay">
                        <img src={ExperienceImage} />
                    </div>
                    <div className="about-description">
                        <p className={(seen ? "about-p-seen" : "")}>
                            I currently work as a Software Engineer Intern for the UCR Brain Game Center. During my time here I've built eyetracking tools using the Tobii Pro and Meta Quest Pro.
                            These tools have been used for studying concussion symtpoms and scotoma central vision loss.
                            I've learned so much about software development and working as part of a larger team while at the BGC, and now I'm ready to use what I've learned to help your enterprise.
                        </p>
                    </div>
                </div>
        </section>
    )
}

export default ExperienceSection;