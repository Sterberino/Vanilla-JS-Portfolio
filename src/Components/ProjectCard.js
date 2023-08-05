// JavaScript source code
import React from "react"
import '../Styles/SpotlightProjectCard.css'
import '../Styles/GridStyles.css'

export default function ProjectCard({projectTitle, projectDescription, projectImage, containImage, iconsArray}) {
    const [opacity, setOpacity] = React.useState(0);
    
    const icons = iconsArray.map(icon => {
        return (
            <a key={icon.key} href={icon.iconLink} target="_blank">
                <img src={icon.iconImage} />
            </a>)
    })


    const handleMouseEnter = () => {
        setOpacity(1);
      };
    
      const handleMouseLeave = () => {
        setOpacity(0);
      };
    

    return (
        <div 
            className="gridItem background-spotlight-card"
            onMouseEnter={()=> {handleMouseEnter()}}
            onMouseLeave={()=> {handleMouseLeave()}}
            style = {{
                "--spotlight-opacity" : opacity
            }}
        >
            <div className="cardHeader">
                <h5 className="GradientText">{projectTitle}</h5>
                <div className="icons-wrapper">{icons}</div>

            </div>
            {/*<div className="imgOverlay">
                <img className={containImage ? "containImage" : ""}  src={projectImage} width="720" height="720" />
            </div>*/}

            <div className="DescriptionContainer">
                <p className="briefDescription">{projectDescription}</p>
            </div>
        </div>
        )


}