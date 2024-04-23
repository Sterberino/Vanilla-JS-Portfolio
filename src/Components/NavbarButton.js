import React, { useRef, useContext, useEffect } from "react"
import { SidebarContext } from "../App";

export default function NavbarButton({OnClickEvent }) {
    const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
    
    const [open, setOpen] = React.useState(false);
    const [clickedOnce, setClickedOnce] = React.useState(false);
    const [buttonClickable, setButtonClickable] = React.useState(true);

    useEffect(() => { 
        if (sidebarOpen && !open)
        {
            setOpen(true)
        }
        else if (!sidebarOpen && open)
        {
            setOpen(false);    
        }
    }, [sidebarOpen])

    const getClassString = ()=> {
        if(!clickedOnce)
        {
            return 'ResponsiveTabButton';
        }
        else{
            return `ResponsiveTabButton ${open ? "ResponsiveTabSelected":  "ResponsiveTabUnselected"}`;
        }
    }

    const handleClick = ()=> {
        if(!buttonClickable)
        {
            return;
        }
        setOpen(prev => !prev);
        if(!clickedOnce)
        {
            setClickedOnce(true);
        }

        if(OnClickEvent !== null && OnClickEvent != undefined)
        {
            OnClickEvent();
        }
    }

    React.useEffect(() => {
        //setSideBarOpen
        setButtonClickable(false);
        const timer = (setTimeout(() => {
            setButtonClickable(true);
            //console.log('Button should now be clickable')
        }, 600));

        return () => {
            if (timer != null) {
                clearTimeout(timer)
            }
        };
    }, [open]);

    return (
        <div
            className={getClassString()}
            id="ResponsiveTabButton"
            onClick={()=>{
                handleClick()
            }}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
        </div>
        )
}