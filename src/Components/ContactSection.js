import AnimatedSectionHeader from "./AnimatedSectionHeader";
import "../Styles/HeroStyles.css";
import "../Styles/ContactSection.css"
import ContactImage from "./ContactImage";
import ContactDescription from "./ContactDescription";
import SectionHeader from "./SectionHeader";

const ContactSection = ({ }) => { 
    return (
        <section className="SectionBlock NotIntersected" id="ContactSection">
            <SectionHeader text={"4. Get in Touch" } />
            <div className="contact-section">
                <ContactDescription />
                <ContactImage />
            </div>

      

        </section>
    )
}

export default ContactSection;