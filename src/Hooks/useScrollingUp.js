import React from "react";

export default function useScrollingUp(initialVal = false)
{
const [scrollingUp, setScrollingUp] = React.useState(initialVal);
const [offset, setOffset] = React.useState(window.scrollY || document.documentElement.scrollTop)

    React.useEffect(() => {
        function ScrollHandle() {
            var st = window.scrollY || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > offset) {
                //downscroll code   
                setScrollingUp(false);
            }
            else {
                setScrollingUp(true);
            }

            // For Mobile or negative scrolling
            if (st <= 0) {
                setOffset(st);
            }
            else {
                setOffset(st);
            }
        }
        window.addEventListener("scroll", ScrollHandle, false);

        return (() => {
            window.removeEventListener("scroll", ScrollHandle);
        })
    }, [offset]);


    return scrollingUp;
}