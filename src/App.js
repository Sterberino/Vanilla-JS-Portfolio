import './App.css';
import "./Styles/BodyElements.css"
import "./Styles/GridStyles.css"
import "./Styles/ResponsiveTabIcon.css"
import "./Styles/ShowOnScrollStyles.css"
import "./Styles/TabMenu.css"

import AnimatedSectionHeader from './Components/AnimatedSectionHeader.js'
import ExperienceImage from "./Images/Brain.png"
import React from "react"
import ProjectsGrid from "./Components/ProjectsGrid.js"
import Navbar from "./Components/Navbar.js"
import useWindowSize from './Hooks/useWindowSize';
import Sidebar from './Components/Sidebar';
import Hero from './Components/Hero.js';
import ContactSection from './Components/ContactSection.js';
import AboutSection from './Components/AboutSection.js';
import SectionHeader from './Components/SectionHeader.js';


const SidebarContext = React.createContext();
export {SidebarContext}

function App()
{
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const size = useWindowSize();
    const [lastSize, setLastSize] = React.useState(size.x);

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("Intersected");
                }
                else {
                    entry.target.classList.remove("Intersected");
                }
            });
        });
        const hiddenElements = document.querySelectorAll(".NotIntersected");
        hiddenElements.forEach((el) => observer.observe(el));

        return (() => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        })
    }, [])

    React.useEffect(() => {
        function handleResize(){
            if(size.x !== lastSize)
            {
                if (size.x >= 640 && lastSize < 640) {
                    setSidebarOpen(false);
                }
                else if (size.x < 640 && lastSize >= 640) {        
                    setSidebarOpen(false);
                }        
            }
            setLastSize(size.x);
        }
    
        handleResize()
    }, [size])

    
 

    return (
        <div style = {{overflow: 'hidden'}}>
            <div className="background"></div>           
            
            <SidebarContext.Provider value={{sidebarOpen: sidebarOpen, setSidebarOpen: setSidebarOpen}}>
                <Navbar Resume={`${process.env.PUBLIC_URL}/Zachary Ruiz - Software Engineer.pdf`} />
                <Sidebar />
            </SidebarContext.Provider>
            <Hero />
            <AboutSection />
            <section className="SectionBlock NotIntersected" id="ExperienceSection">
                <SectionHeader text={"2. Experience"} />      
                <div className="AboutSection">
          
                    <div className="imgOverlay">
                        <img src={ExperienceImage} />
                    </div>
                    <p>
                        I currently work as a Software Engineer Intern for the UCR Brain Game Center. During my time here I've built eyetracking tools using the Tobii Pro and Meta Quest Pro.
                        These tools have been used for studying concussion symtpoms and scotoma central vision loss.
                        I've learned so much about software development and working as part of a larger team while at the BGC, and now I'm ready to use what I've learned to help your enterprise.
                    </p>
                </div>
            </section>


            <section className="SectionBlock NotIntersected" id="ProjectsSection">
                <SectionHeader text={"3. Projects"} />
                <ProjectsGrid />
            </section>
            <ContactSection />
        </div>
  );
}

export default App;
