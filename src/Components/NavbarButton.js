import React, { useRef } from "react"

export default function NavbarButton({navbarOpen, setNavbarOpen, scrollingUp }) {

    const [buttonClickable, setButtonClickable] = React.useState(false);

    React.useEffect(() => {
       
    
        //setSideBarOpen
        const timer = (setTimeout(() => {
            setButtonClickable(true);
            //console.log('Button should now be clickable')
        }, 1000));

        return () => {
            if (timer != null) {
                clearTimeout(timer)
            }
        };
    }, [navbarOpen]);


    function HandleClick() {
        if (buttonClickable) {
            setButtonClickable(false);
            
            //setSideBarOpen
            setNavbarOpen();
        }
    }


    return (
        <div
            className={`ResponsiveTabButton ${navbarOpen ? "ResponsiveTabSelected" : "ResponsiveTabUnselected"} ${scrollingUp ? "" : "tabButtonRaised"}`}
            id="ResponsiveTabButton"
            onClick={HandleClick}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
        </div>
        )
}