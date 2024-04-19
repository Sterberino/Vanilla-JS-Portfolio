// JavaScript source code
import React from "react"
import "../Styles/SpotlightProjectCard.css";

const useMagicCards = (wrapperRef) =>{
    const cardsRef = React.useRef([]);

    React.useEffect(() => {
        if (!wrapperRef)
        {
            return;
        }

        cardsRef.current = wrapperRef.current.getElementsByClassName("background-spotlight-card")
        for (const card of cardsRef.current)
        {
            const rect = card.getBoundingClientRect(),
            x = 10000 - rect.left,
            y = 10000 - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`)
            card.style.setProperty("--mouse-y", `${y}px`)
        }

        const element = wrapperRef.current;

        // Attach event listeners
        if (element) {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
            element.addEventListener('mousemove', handleMouseMove);
        }

        // Cleanup function to remove event listeners when component unmounts
        return () => {
            if (element) {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
                element.removeEventListener('mousemove', handleMouseMove);
            }
        }
    }, [])

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
            card.style.setProperty("--border-spotlight-opacity", 0)
        }
    }

    const handleMouseEnter = (e)=>{
        for (const card of cardsRef.current)
        {
            card.style.setProperty("--border-spotlight-opacity", 1)
        }
    }
}

export default useMagicCards;