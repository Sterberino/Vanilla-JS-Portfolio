import "../Styles/HeroStyles.css"
import React, { useEffect, useRef, useState } from "react";

const HeroTitle = () => { 
    const text = "Engineering Excellence: Your Partner For The Web"
    
    const numLetters = useRef({ value: 0 });
    const completedLetters = useRef({ value: 0 });
    const [initialAnimationCompleted, setInitialAnimationCompleted] = useState(false);

    function shuffle(array) {
        let currentIndex = array.length;
        let indices = [];
        
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            indices.push(randomIndex);
        }
        return indices
      }


    const GetLetters = (letters) => { 
        let length = letters.split("").length;
        let arr = letters.split(" ");
        let randomIndices = shuffle(arr);
        let currentIndex = 0;
        numLetters.current = { value: 0 };
        completedLetters.current = { value: 0 };
        return arr.map((word, wordIndex) => {
            return (
                <>
                    <span className="hero-title-word" key={`hero-title-span-${numLetters.current.value}`}>
                    {
                        word.split("").map((letter, letterIndex) => {
                            numLetters.current = { value: numLetters.current.value + 1 };
                            currentIndex++;
                            let delay = Math.random() * (currentIndex * 25);
                            return (
                                <span
                                    className="hero-title-letter"
                                    style={{ animationDelay: `${delay}ms` }}
                                    key={`hero-letter-${( numLetters.current.value)}`}
                                    onAnimationEnd={() => { 
                                        completedLetters.current = { value: completedLetters.current.value + 1 };
                                        if (completedLetters.current.value === numLetters.current.value)
                                        {
                                            setInitialAnimationCompleted(true);     
                                        }
                                    }}
                                >
                                    {letter}
                                </span>   
                            )
                        })
                    }                    
                    </span>
                    {wordIndex < arr.length - 1 && <span key={`hero-title-space-${numLetters.current.value}`}>&nbsp;</span>}
                </>
            )

            
        })
    }

    if (initialAnimationCompleted !== true)
    {
        return(
            <h1 className="hero-title">{GetLetters(text)}</h1>
        )
    }
    else {
        return(
            <h1 className="hero-title">Engineering <span className="hero-title-gradient">Excellence</span>: Your Partner For The Web</h1>
        )
    }

}

export default HeroTitle;