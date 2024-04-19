import AnimatedSectionHeader from "./AnimatedSectionHeader";


const SectionHeader = ({ text }) => {
    return (
        <div className="section-header">
            <div className="gradient-bar gradient-bar-left"></div>
            <AnimatedSectionHeader text={text} />
            <div className="gradient-bar gradient-bar-right"></div>
        </div>    
    )
    
}

export default SectionHeader;