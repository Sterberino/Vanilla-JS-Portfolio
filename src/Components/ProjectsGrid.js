// JavaScript source code
import React from "react"
import ProjectCard from "./ProjectCard.js"
import Projects from "./Projects.js"

import useOnScreen from "../Hooks/useOnScreen.js";

export default function ProjectGrid() {
    const cardsRef = React.useRef([]);
    
    const gridRef = React.useRef(null);
    const isOnScreen = useOnScreen(gridRef);

    const projects = Projects.data.map((project, index)=> {
        return <ProjectCard
            key={index}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
            projectImage={project.projectImage}
            containImage={project.containImage}
            iconsArray={project.iconsArray}
        />

    });

    React.useEffect(()=>{
        cardsRef.current = document.getElementsByClassName("background-spotlight-card")
        console.log(cardsRef.current.length)    
    }, 
    [])

    React.useEffect(()=>{
        if(isOnScreen)
        {
            for(let i = 0; i < cardsRef.current.length; i++)
            {
                cardsRef.current[i].classList.add('grid-card-animate');
                cardsRef.current[i].style.animationDelay = `${i * 0.15}s`
            }
            console.log("ON SCREEN");
        }
        else{
            for(let i = 0; i < cardsRef.current.length; i++)
            {
                cardsRef.current[i].classList.remove('grid-card-animate');
                cardsRef.current[i].style.animationDelay = `${i * 0}s`
            }
            console.log("NOT ON SCREEN")
        }
    }, [isOnScreen])

    const handleMouseMove = (e)=>{
        for (const card of cardsRef.current)
        {
            const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`)
            card.style.setProperty("--mouse-y", `${y}px`)
        }
    }

    const handleMouseLeave = (e)=>{
        for (const card of cardsRef.current)
        {
            const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
            card.style.setProperty("--border-spotlight-opacity", 0)
        }
    }

    const handleMouseEnter = (e)=>{
        for (const card of cardsRef.current)
        {
            const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
            card.style.setProperty("--border-spotlight-opacity", 1)
        }
    }

    return (
        <div 
            className="gridContainer"
            onMouseMove={(e)=> {handleMouseMove(e)}}
            onMouseLeave={(e)=> {handleMouseLeave(e)}}
            onMouseEnter={(e)=> {handleMouseEnter(e)}}
            ref ={gridRef}
        >
            {projects}
            <div className="background-grid"></div>
        </div>
        )
    
}