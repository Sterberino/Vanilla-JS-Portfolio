import { Chrono } from "react-chrono"
import useWindowSize from "../Hooks/useWindowSize";
import { useEffect, useRef, useState } from "react";

import "../Styles/TimelineStyles.css"
import useMagicCards from "./UseMagicCards";
import TimelineCard from "./TimelineCard";

const Timeline = () => { 
    const alternatingWidth = 640;
    const elementRef = useRef(null);
    useMagicCards(elementRef);

    const size = useWindowSize();
    const [alternating, setAlternating]= useState(size.x > alternatingWidth)
    useEffect(() => { 
        if (size.x > alternatingWidth && !alternating)
        {
            setAlternating(true);
        }
        else if (size.x <= alternatingWidth && alternating)
        {
            setAlternating(false);
        }
    }, [size.x, alternating])

    return (
        <div
            style={{
                width: "100%",
                minHeight: "fit-content",
                paddingTop: "20vh",
                transform: `${(alternating ? "" : "translateX(-20px)") }`
            }} ref={elementRef}>
            <Chrono
                className="timeline"
                mode={(alternating ? "VERTICAL_ALTERNATING" : "VERTICAL")}
                disableToolbar={true}
                disableClickOnCircle={ true}
                enableOutline={false}
                lineWidth={1}
                focusActiveItemOnLoad={false}
                iconBackgroundColor={ "rgba(255,255,255,1)"}
                cardHeight={ String( "fit-content")}
                classNames={{
                    card: "timeline-card"
                }}
                theme={{
                    primary: 'rgba(248, 250, 252 , 0.1)',
                    cardBgColor: 'rgba(248, 250, 252, 0)',
                    titleColorActive: 'rgba(248, 250, 252, 0)'
                  }}
            >
                <TimelineCard
                    odd={true}
                    headerIcon={`url("${process.env.PUBLIC_URL}/Images/brain-icon.png")`}
                    headerText={"Intern at Brain Game Center"}
                    date={"Aug. 2022"}
                >
                    <p className="timeline-card-description">
                        {"In August of 2022 I began a Software Engineer Intern role at the UCR Brain Game Center, where I pioneered the integration of eye tracking technology into concussion research, spearheading the development of a Unity port for a cognitive test adapted from ANAM. I leveraged C# and the Tobii Pro SDK to craft precise eye tracking tools, enabling in-depth cognitive analysis. Additionally, I developed eye tracking solutions using C# and the Meta Quest Pro SDK, further enriching our research capabilities. I also enhanced data management by creating JSON logging scripts with C# and JSON Lite, ensuring efficient data analysis and interpretation."}
                    </p>
                </TimelineCard>
                <TimelineCard
                    headerIcon={`url("${process.env.PUBLIC_URL}/Images/web-div-icon.png")`}
                    headerText={"Research at UC Riverside"}
                    date={"Aug. 2023"}
                >
                    <p className="timeline-card-description">
                        {`In August of 2023 I began work on as a student assistant at University of California, Riverside. I helped to create an adaptive learning platform in an agile environment, where I crafted robust and efficient API routes in Express for a cutting-edge research project, ensuring seamless data transmission and optimal performance.`}
                    </p>
                </TimelineCard>
                <TimelineCard
                    headerIcon={`url("${process.env.PUBLIC_URL}/Images/graduated-icon.png")`}
                    headerText={"Graduation From UCR"}
                    date={"Mar. 2024"}
                    odd={true}    
                >
                    <p className="timeline-card-description">
                        {`In March of 2024 I graduated from University of California, Riverside with a Bachelor's of Science in Computer Engineering. I took some time to rest and enjoy the accomplishment, and now I'm seeking exciting opportunities to apply and develop my skills. I'm ready to help you take your web applications from concept to deployment.`}
                    </p>
                </TimelineCard>
            </Chrono>
            <div
                className="blob"
                style={{
                    translate: "225% -70%",
                    borderRadius: "100% 75% 92% 74% / 60% 80% 30% 70%"
                }}>
            </div>
            <div
                className="blob"
                style={{
                    translate: "-50% -180%",
                    borderRadius: "100% 75% 92% 74% / 60% 80% 30% 70%"
                }}>
            </div>
            <div
                className="blob"
                style={{
                    translate: "250% -300%",
                    borderRadius: "100% 75% 92% 74% / 60% 80% 30% 70%"
                }}>
            </div>
      </div>
    )
}

export default Timeline;