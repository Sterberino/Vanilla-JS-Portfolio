import React from "react";

export default function useScrollingUp(initialVal = false, trueOnScrollTop = true)
{
const [scrollingUp, setScrollingUp] = React.useState(initialVal);
const [offset, setOffset] = React.useState(window.scrollY || document.documentElement.scrollTop)

    React.useEffect(() => {
        function ScrollHandle() {
            var st = window.scrollY || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            var y = (window.pageYOffset !== undefined) ?
            window.pageYOffset :
            (document.documentElement || document.body.parentNode || document.body).scrollTop;
            
            if (st <= offset || (trueOnScrollTop && y <= 0)) {
                //downscroll code   
                setScrollingUp(true);
            }
            else {

                setScrollingUp(false);
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
    }, [offset, trueOnScrollTop]);


    return scrollingUp;
}