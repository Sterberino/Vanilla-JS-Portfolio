import React from "react"

import '../Styles/NavbarStyles.css'

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
        <div class = "navbar">
        <div class = "logo"></div>
        <ul class = "nav-elements">
          <li><a class = "nav-anchor" href="#">About</a></li>
          <li><a class = "nav-anchor" href="#">Experience</a></li>
          <li><a class = "nav-anchor" href="#">Projects</a></li>
          <li><a class = "nav-anchor" href="#">Contact</a></li>
        </ul>
      </div>
        )

}

