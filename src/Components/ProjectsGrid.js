// JavaScript source code
import React from "react"
import ProjectCard from "./ProjectCard.js"
import Projects from "./Projects.js"


export default function ProjectGrid() {
    const projects = Projects.data.map(project => {
        return <ProjectCard
            key={project.key}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
            projectImage={project.projectImage}
            containImage={project.containImage}
            iconsArray={project.iconsArray}
        />

    });

    return (
        <div className="gridContainer">
            {projects}
        </div>
        )
    
}