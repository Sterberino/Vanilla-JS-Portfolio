import SectionHeader from "./SectionHeader.js";
import "../Styles/AboutSection.css";
import useOnScreen from '../Hooks/useOnScreen.js';
import { useEffect, useRef, useState } from 'react';
import SkillsetsWrapper from "./SkillsetsWrapper.js";
import useWindowSize from "../Hooks/useWindowSize.js";

const AboutSection = ({ }) => { 
    const elementRef = useRef(null);
    const onScreen = useOnScreen(elementRef);
    const size = useWindowSize();

    const [seen, setSeen] = useState(false);

    useEffect(() => { 
        if (onScreen && !seen)
        {
            setSeen(true);
        }
    }, [onScreen])

    const ProfileImage = `${process.env.PUBLIC_URL}/Images/Profile_Image.png`;
    return (
        <section className="SectionBlock NotIntersected" id="AboutSection" ref={ elementRef}>
            <SectionHeader text={"1. About"} />
            <div className="AboutSection">
                <div className="about-description">
                    <p className={(seen ? "about-p-seen": "")}>
                        {`As a computer engineering graduate from University of California, Riverside, I bring a passion for crafting immersive digital experiences. Proficient in React and Next.js, I specialize in building dynamic full-stack applications that captivate users and drive engagement.`}
                    </p>
                    <p className={(seen ? "about-p-seen" : "")} style={{animationDelay: "0.4s"}}>
                        {` I am constantly curious and continually expanding my web development expertise, and I'm eager to embrace new technologies and methodologies. I'm currently seeking exciting opportunities to apply my skills and contribute to innovative projects, and I'm ready to make a meaningful impact in the ever-evolving landscape of digital technology.`}
                    </p>
                    <div
                            className="blob"
                            style={{
                                translate: `${(size.x > 640 ? "-45% -45%" : "-55% -70%")}`,
                                borderRadius: "100% 75% 92% 74% / 60% 80% 30% 70%"
                            }}>
                    </div>
                </div>
                
                <SkillsetsWrapper />
            </div>
        </section>
    )
}

export default AboutSection;