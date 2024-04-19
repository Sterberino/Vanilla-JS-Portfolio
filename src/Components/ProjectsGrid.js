// JavaScript source code
import React from "react"
import ProjectCard from "./ProjectCard.js"
import Projects from "./Projects.js"
import useMagicCards from "./UseMagicCards.js";
import { useRef } from "react";

export default function ProjectGrid() {
    const wrapperRef = React.useRef(null);
    useMagicCards(wrapperRef);

    const projects = Projects.data.map((project, index) => {
        return <ProjectCard
            key={index}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
            projectImage={project.projectImage}
            containImage={project.containImage}
            iconsArray={project.iconsArray}
        />

    });

    return (
        <div className="gridContainer" ref={ wrapperRef}>
            {projects}
        </div>
        )
    
}