import "../Styles/HeroStyles.css"
import React from "react";
import BackgroundSpotlightButton from "./BackgroundSpotlightButton";
import HeroTitle from "./HeroTitle";
import "../Styles/BodyElements.css"
import Button from "./Button";
import HeroImage from "./HeroImage";
import "../Styles/BackgroundElements.css";

const Hero = () => { 
    return (
        <section className="hero NotIntersected">
            <div className="hero-column">
                <div className="hero-text">Hello, my name is Zachary Ruiz</div>
               <HeroTitle />
                <div className="hero-text"> I am a software engineer with a passion for solving problems through programming.</div>
                <Button
                    onClick={()=>{
                        let x=window.open("mailto:" + "zacharyruiz1" + "@gmail.com");
                        x.close();
                    }}
                    text={"Contact Me"}
                    style={{height: '40px', width: "110px", marginTop: "30px" }}
                />
                <div className="blob" style={{translate: "-45% -30%",borderRadius: "100% 75% 92% 74% / 60% 80% 30% 70%"}}></div>
            </div>
            <HeroImage />
        </section>
    )
}

export default Hero;