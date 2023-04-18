import React from "react"

export default function Header({ Resume, navbarOpen, scrollingUp, setScrollingUp }) {
    const [offset, setOffset] = React.useState(window.pageYOffset || document.documentElement.scrollTop);
   
    const element = React.useRef(null);

    React.useEffect(() => {
        function ScrollHandle() {
            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            
            if (st > offset) {
                //downscroll code   
                if (!navbarOpen) {
                    setScrollingUp(false)
                }

            }
            else {
                if (!navbarOpen) {
                    setScrollingUp(true)
                }

            }

            // For Mobile or negative scrolling
            if (st <= 0) {
                setOffset(0);
            }
            else {
                setOffset(st);
            }
        }
        window.addEventListener("scroll", ScrollHandle, false);

        return (() => {
            window.removeEventListener("scroll", ScrollHandle);
        })
    }, [navbarOpen, offset]);

    return (
        <div className={`tabMenu ${scrollingUp ? "" : "TabClose"} ${navbarOpen ? "Hidden" : "Shown"}`} id="tabMenu" ref={element}>
                <div className="logo">Z</div>
                {/*We are keeping one set of navigation buttons on the header menu, and another on the Navbar. */}
                {/*We use CSS and JS to make on set available and the other not available depending on screen width and navbar state.*/}

                <ol className="inline ColoredNumbers">
                    <li className="inline ColoredNumbers Disabled"><a className="tabMenuButton" href="#AboutSection">About</a></li>
                    <li className="inline ColoredNumbers Disabled"><a className="tabMenuButton" href="#ExperienceSection">Experience</a></li>
                    <li className="inline ColoredNumbers Disabled"><a className="tabMenuButton" href="#ProjectsSection">Projects</a></li>
                    <li className="inline ColoredNumbers Disabled"><a className="tabMenuButton" href="#ContactSection">Contact</a></li>
                    <li className="inline DisableNumbering Disabled"><a className="tabMenuButton ResumeButton" href={`${process.env.PUBLIC_URL}/ZacharyRuizResume.pdf`} target="_blank">Resume</a></li>
                </ol>
            </div>
        )

}

