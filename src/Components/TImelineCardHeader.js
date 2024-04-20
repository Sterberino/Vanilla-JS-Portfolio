import "../Styles/AboutSection.css";
import "../Styles/TimelineStyles.css"
import AnimatedSectionHeader from "./AnimatedSectionHeader";

const TimelineCardHeader = ({text, icon, date}) => { 
    return (
        <div className="timeline-card-header">
            <div
                className="skillset-icon"
                style={{
                    maskImage: icon
                }}
            ></div>
            <AnimatedSectionHeader text={text} />
            <p
                className="unfocused-text"
                style={{ whiteSpace: "nowrap"}}
            >{date}</p>
        </div>
    )
}

export default TimelineCardHeader;