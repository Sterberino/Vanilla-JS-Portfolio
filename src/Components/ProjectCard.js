// JavaScript source code
import React from "react"


export default function ProjectCard({projectTitle, projectDescription, projectImage, containImage, iconsArray}) {
    const icons = iconsArray.map(icon => {
        return (
            <a key={icon.key} href={icon.iconLink} target="_blank">
                <img src={icon.iconImage} />
            </a>)
    })

    return (
        <div className="gridItem card">
            <div className="cardHeader">
                <h5 className="GradientText">{projectTitle}</h5>
                {icons}

            </div>
            <div className="imgOverlay">
                <img className={containImage ? "containImage" : ""}  src={projectImage} width="720" height="720" />
            </div>

            <div className="DescriptionContainer">
                <p className="briefDescription">{projectDescription}</p>
            </div>
        </div>
        )


}