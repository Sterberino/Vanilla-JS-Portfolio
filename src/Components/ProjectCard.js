// JavaScript source code
import React, { useEffect, useRef, useState } from "react"
import useOnScreen from "../Hooks/useOnScreen";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

import '../Styles/SpotlightProjectCard.css';
import '../Styles/GridStyles.css';
import '../Styles/AboutSection.css';

const ProjectCard = ({ projectTitle, projectDescription, projectImage, containImage, iconsArray, tags }) => {    
    const elementRef = useRef(null);
    const onScreen = useOnScreen(elementRef);

    const [opacity, setOpacity] = React.useState(0);
    const [seen, setSeen] = useState(onScreen);
    
    console.log(JSON.stringify(tags))
    useEffect(() => { 
        if (onScreen && !seen)
        {
            setSeen(true);    
        }
    }, [seen, onScreen])

    const getHeader = () => { 
        const icons = iconsArray.map(icon => {
            return (
                <a key={icon.key} href={icon.iconLink} target="_blank">
                    <div className="skillset-icon" style={{ maskImage: `url("${icon.iconImage}")` }}></div>
                </a>)
        });
        return (
            <div className="title-row">
                <h2 className="contact-section-gradient-header"> {projectTitle}</h2>
                <span className="icons-row">
                    {icons}
                </span>
            </div>
        );
    } 
        
    const getTags = (tags) => { 
        return (
            <div className="project-card-tags">
                {tags.map((tag) => { 
                    return(
                        <p className="unfocused-text">
                            {tag}
                        </p>
                    )
                })}
            </div>
        )
    }
    
    const handleMouseEnter = () => {
        setOpacity(1);
      };
    
      const handleMouseLeave = () => {
        setOpacity(0);
      };
    
    return (
        <div 
            className={`gridItem background-spotlight-card${(seen ? " grid-card-animate" : "")}`}
            ref={elementRef}
            onMouseEnter={() => { handleMouseEnter() }}
            onMouseLeave={()=> {handleMouseLeave()}}
            style={{
                "--spotlight-bg-color-opacity": 0,
                "--spotlight-opacity" : opacity
            }}
        >
            <div className="card-gradient-bg">
                <img className="project-image" src={projectImage }></img>
                {getHeader()}
                <p className="unfocused-text">{projectDescription }</p>
                {getTags(tags)}
            </div>
        </div>
        )
}

export default ProjectCard;