import React, { useEffect } from "react"


export default function Navbar({ Resume, navbarOpen }) {


    const [buttonsOn, setButtonsOn] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {

        let timer;
        if (navbarOpen) {
            setOpen(true)
            timer = setTimeout(() => {
                setButtonsOn(true);

            },500)
     
        }
        else {
            
            setButtonsOn(false);
            timer = (setTimeout(() => {
                setOpen(false)
            }, 650));
        }
        
        
        
       

        return () => {
            if (timer != null) {
                clearTimeout(timer);
            }

        };

    }, [navbarOpen, buttonsOn])


    return (
        <div
            className={`NavBar ${open ? "NavBarOpen" : "NavBarClose"}`}
            id="NavBar">
            <ol className="inline ColoredNumbers">
                <li key={0} className={`inline ColoredNumbers ${buttonsOn ? "fadeIn" : "fadeOut"}`}><a className="tabMenuButton" href="#AboutSection">About</a></li>
                <li key={1} className={`inline ColoredNumbers ${buttonsOn ? "fadeIn" : "fadeOut"}`}><a className="tabMenuButton" href="#ExperienceSection">Experience</a></li>
                <li key={2} className={`inline ColoredNumbers ${buttonsOn ? "fadeIn" : "fadeOut"}`}><a className="tabMenuButton" href="#ProjectsSection">Projects</a></li>
                <li key={3} className={`inline ColoredNumbers ${buttonsOn ? "fadeIn" : "fadeOut"}`}><a className="tabMenuButton" href="#ContactSection">Contact</a></li>
                <li key={4} className={`inline DisableNumbering ${buttonsOn ? "fadeIn" : "fadeOut"}`}><a className= "tabMenuButton ResumeButton" href={Resume} target="_blank">Resume</a></li>
            </ol>
        </div>
        )

}