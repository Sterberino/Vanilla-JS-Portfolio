import './App.css';
import "./Styles/BodyElements.css"
import "./Styles/GridStyles.css"
import "./Styles/ResponsiveTabIcon.css"
import "./Styles/ShowOnScrollStyles.css"
import "./Styles/TabMenu.css"

import ProfileImage from "./Images/Profile_Image.png"
import ExperienceImage from "./Images/Brain.png"

import React from "react"

import ProjectsGrid from "./Components/ProjectsGrid.js"
import NavbarButton from "./Components/NavbarButton.js"
import Header from "./Components/Header.js"
import Navbar from "./Components/Navbar.js"
import RotatingBackgroundGradientButton from './Components/RotatingBackgroundGradientButton';

import Particles from 'react-particles';
import BackgroundSpotlightButton from './Components/BackgroundSpotlightButton';
import useWindowSize from './Hooks/useWindowSize';
import Sidebar from './Components/Sidebar';

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
            <div className="Hero NotIntersected">
                <div className='Downlit-Radial-Background'></div>
                <div className="Text">Hello, my name is</div>
                <h1 className="GradientText HeroTitle">Zachary Ruiz</h1>
                <div className="Text"> I am a software engineer with a passion for solving problems through programming.</div>
                 <BackgroundSpotlightButton
                    HandleClick={()=>{
                        let x=window.open("mailto:" + "zacharyruiz1" + "@gmail.com");
                        x.close();
                    }}
                    text={"Contact Me"}
                    style={{height: '45px', width: "110px", marginTop: "30px" }}
                />

            </div>

            <div className="SectionBlock NotIntersected" id="AboutSection">
                <div className="SectionHeader">

                    <h1 className="GradientText">1. About</h1>
                    <div className="gradientBarRight"></div>
                </div>


                <div className="AboutSection">
                    <p>
                        My name is Zachary Ruiz, and I am a Computer Engineering student at University of California, Riverside.
                        I am also a Software Engineer Intern at the UCR Brain Game Center, where I build eyetracking tools for cognitive research using C#.
                    </p>
                    <div className='Radial-Background'></div>
                    <div className="imgOverlay">
                        <img src={ProfileImage} />
                    </div>

                </div>
            </div>

            <div className="SectionBlock NotIntersected" id="ExperienceSection">
                <div className="SectionHeader">
                    <h1 className="GradientText">2. Experience</h1>
                    <div className="gradientBarRight"></div>
                </div>


                <div className="AboutSection">
                    <div className="imgOverlay">
                        <img src={ExperienceImage} />
                    </div>
                    <div className='Radial-Background'style={{"--circle-position" : '0% 50%'}}></div>
                    <p>
                        I currently work as a Software Engineer Intern for the UCR Brain Game Center. During my time here I've built eyetracking tools using the Tobii Pro and Meta Quest Pro.
                        These tools have been used for studying concussion symtpoms and scotoma central vision loss.
                        I've learned so much about software development and working as part of a larger team while at the BGC, and now I'm ready to use what I've learned to help your enterprise.
                    </p>
                </div>
            </div>


            <div className="SectionBlock NotIntersected" id="ProjectsSection">
                <div className="SectionHeader">
                    <h1 className="GradientText">3. Projects</h1>
                    <div className="gradientBarRight"></div>
                </div>

                <ProjectsGrid />
                 
            </div>


            <div className="SectionBlock NotIntersected" id="ContactSection">
                <div className="SectionHeader">
                    <h1 className="GradientText">4. Get in Touch</h1>
                    <div className="gradientBarRight"></div>
                </div>

                <div className="ContactSection">
                    <h1 className="GradientText">Reach Out</h1>

                    <div className="Text">
                        I am excited to explore new opportunities, and I would love to hear from you! Send me an email and I'll get back to you soon.
                    </div>
                    <BackgroundSpotlightButton 
                    HandleClick={()=>{
                        let x=window.open("mailto:" + "zacharyruiz1" + "@gmail.com");
                        x.close();
                    }}
                    text={"Contact Me"}
                    style={{height: '45px', width: "120px", marginTop: "20px" }}
                    />                
                </div>
      

            </div>

            <Particles
             style={{ position: "absolute" }}
  params={{
    particles: {
      color: {
        value: "#ffffff"
      },
      line_linked: {
        color: {
          value: "#ffffff"
        }
      },
      number: {
        value: 50
      },
      size: {
        value: 3
      }
    }
  }}
/>
        </div>
  );
}

export default App;
