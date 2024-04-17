import "../Styles/HeroImageStyles.css"
import "../Styles/BackgroundElements.css"
import { useState } from "react"

const HeroImage = () => {
    const [initialAnimationComplete, setInitialAnimationComplete] = useState(false);

    return (
        <div
            className= {`hero-image-wrapper${(initialAnimationComplete? " hero-image-looping-animation" : " hero-image-wrapper-initial-animation")}`}
            onAnimationEnd={() => {setInitialAnimationComplete(true)}}
        >
            <div
                className="hero-binary-image"
                href="https://storyset.com/web"
                style={{"--mask-url": `url('${process.env.PUBLIC_URL}/Images/Operating system-amico-binary.png')`}}
            ></div>
            <img
                className="hero-image-front"
                src={`${process.env.PUBLIC_URL}/Images/Operating system-amico.png`}
                href="https://storyset.com/web"
            />
            <div className="blob" style={{translate: "10% -10%",borderRadius: "100% 75% 92% 74% / 60% 80% 30% 70%"}}></div>
        </div>
    )
}

export default HeroImage;