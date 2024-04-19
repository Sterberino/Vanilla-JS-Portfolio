import AnimatedSectionHeader from "./AnimatedSectionHeader";
import "../Styles/HeroStyles.css";
import "../Styles/ContactSection.css"
import ContactImage from "./ContactImage";
import ContactDescription from "./ContactDescription";

const ContactSection = ({ }) => { 
    return (
        <section className="SectionBlock NotIntersected" id="ContactSection">
            <div className="SectionHeader">
                <AnimatedSectionHeader text={"4. Get in Touch"} />
                <div className="gradientBarRight"></div>
            </div>
            <div className="contact-section">
                <ContactDescription />
                <ContactImage />
            </div>

      

        </section>
    )
}

export default ContactSection;