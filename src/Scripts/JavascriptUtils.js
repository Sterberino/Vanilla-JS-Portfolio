// JavaScript source code


//------------------------------------------------------------------------
class TabButton {
    element = null;
    tabMenu = null;
    ActiveName = "";
    InactiveName = "";
    navBar = null;

    constructor(el, tabMenu, navBar, ActiveName, InactiveName) {
        this.element = el;
        this.ActiveName = ActiveName;
        this.InactiveName = InactiveName;
        this.tabMenu = tabMenu;
   
        this.navBar = navBar;


        this.element.addEventListener("click", this.ToggleAnimationState.bind(this));

        if (navBar == null) {
            console.log("NavBar is null");
        }

        let self = this;
        window.addEventListener('resize', function () {
            if (window.innerWidth > 600) {
                self.tabMenu.element.classList.remove("Hidden");
                self.tabMenu.element.classList.remove("Shown");

                self.navBar.element.classList.remove(self.navBar.ActiveName);
                self.navBar.element.classList.remove(self.navBar.InactiveName);

                void self.tabMenu.element.offsetHeight;

                self.element.classList.remove(self.ActiveName);
                self.element.classList.remove(self.InactiveName);
                self.open = false;
                self.element.offsetHeight;
            }
        }, false);


    }


    ToggleAnimationState() {
        if (this.navBar.animating == true) {
            console.log("Menu already animating");
            //console.log(this.tabMenu.animating);
            return;
        }

        if (this.navBar.element.classList.contains(this.navBar.ActiveName)) {
            this.ToggleOff();
        }
        else {
            this.ToggleOn();
        }
      
        this.navBar.ToggleAnimationState();
        //this.tabMenu.ToggleAnimationState();
       
       
    }

    ToggleOn() {
        //console.log(this.InactiveName);
        this.element.classList.remove(this.InactiveName);
        void this.element.offsetHeight;
        this.element.classList.add(this.ActiveName);

        this.tabMenu.element.classList.remove("Shown");
        void this.tabMenu.element.offsetHeight;
        this.tabMenu.element.classList.add("Hidden");
    }

    ToggleOff() {
        //console.log(this.ActiveName);
        this.element.classList.remove(this.ActiveName);
        void this.element.offsetHeight;
        this.element.classList.add(this.InactiveName);

        setTimeout(this.ReactivateScrollTab.bind(this), 1100, false);
    }

    ReactivateScrollTab() {
        this.tabMenu.element.classList.remove("Hidden");
        this.tabMenu.element.classList.remove("TabOpen");
        void this.tabMenu.element.offsetHeight;
        this.tabMenu.element.classList.add("Shown");
    }
}

//---------------------------------------------------------

class TabMenu{
    element = null;
    ActiveName = "";
    InactiveName = "";
   
    animating;
    lastWindowWidth = 0;
    lastScrollTop = 0;
    

    constructor(el, ActiveName, InactiveName) {
        this.element = el;
        this.ActiveName = ActiveName;
        this.InactiveName = InactiveName;
       
        this.animating = false;
        this.lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        this.lastScrollTop = this.lastScrollTop <= 0 ? 0 : this.lastScrollTop;
        this.lastWindowWidth = window.innerWidth;
    

        window.addEventListener('resize', this.OnResize.bind(this), false);

        if (this.element == null) {
            console.log("Failed to cache element reference.")
        }

    }

    OnResize() {
        if (window.innerWidth > 600 && this.lastWindowWidth <= 600) {
            this.animating = false;

            this.RepositionAllColoredNumbers();
            this.element.classList.remove(self.ActiveName);
            this.element.classList.remove(self.InactiveName);
            void this.element.offsetHeight;

            let arr = this.element.getElementsByTagName("li");
            let i = 0;
            for (i; i < arr.length; i++) {
                arr[i].classList.add("Disabled");
            }
        }
        else if (window.innerWidth <= 600 && this.lastWindowWidth > 600) {
            this.animating = false;

            this.element.classList.remove(this.ActiveName);
            this.element.classList.remove(this.InactiveName);
            void this.element.offsetHeight;
        }

        this.lastWindowWidth = window.innerWidth;
    }


    ToggleAnimationState() {
        //console.log("Toggling animation state for " + this.element)
        if (this.element.classList.contains(this.ActiveName)) {
            console.log("calling deactivate menu elements on navbar");
            this.DeactivateMenuElements();
            
        }
        else {
            console.log("calling activate menu elements on navbar");
            this.ActivateMenuElements();
        }
    }

    ToggleOn() {
        
        this.element.classList.remove(this.InactiveName);
        void this.element.offsetHeight;
        this.element.classList.add(this.ActiveName);
    }

    ToggleOff() {
        this.element.classList.remove(this.ActiveName);
        void this.element.offsetHeight;
        this.element.classList.add(this.InactiveName);
    }

    ActivateMenuElements() { 
        if (this.element.classList.contains(this.ActiveName)) {
            return;
        }
        //console.log("Activating LI");
     
     
        this.ToggleOn();
        this.ToggleAnimatingState(true);
        this.RepositionAllColoredNumbers();

            var arr = this.element.getElementsByTagName("li");
            if (arr[0].classList.contains("Disabled")) {
                var i = 0;
                //console.log(arr.length);
                for (var i; i < arr.length; i++) {
                    if (!this.element.classList.contains(this.ActiveName)) {
                        return;
                    }
                    setTimeout(this.ActivateArrayElementAtIndex, (i * 100) + 350, arr, i);
                }
                console.log("setting toggleanimatingstate(false) timeout");
                let self = this;
                setTimeout(self.ToggleAnimatingState.bind(self), i * 100 + 600, false);
            }
      

    }

    ToggleAnimatingState(boolValue) {
        let self = this;
        self.animating = boolValue;

        //console.log("Toggling animating bool, value now: " + this.animating);
    }

    DeactivateMenuElements() {
      
        //console.log("Deactivating LI");
        if (!this.element.classList.contains(this.ActiveName)) {
            console.log("Called deactivate menu elements but returned at method start")
            return;
        }
      
        this.ToggleAnimatingState(true);

            var arr = this.element.getElementsByTagName("li");
            if (!arr[0].classList.contains("Disabled")) {
                //console.log(arr.length);
                var i = arr.length - 1;
                for (i; i >= 0; i--) {
                    if (!this.element.classList.contains(this.ActiveName)) {
                        console.log("returned because the navbar contained the active name, line 221")
                        return;
                    }
                    setTimeout(this.DeactivateArrayElementAtIndex, (((arr.length - i) + 1) * 100), arr, i);
                }

                setTimeout(this.ToggleOff.bind(this), (arr.length + 1) * 100 + 250);
                setTimeout(this.ToggleAnimatingState.bind(this), (arr.length + 1) * 100 + 600, false);
            }
        

    }

   
    ActivateArrayElementAtIndex(arr, i) {
        //console.log(i);
        if (arr[i].classList.contains("Disabled")) {
            arr[i].classList.remove("Disabled");
            arr[i].classList.remove("fadeOut");
            arr[i].classList.add("fadeIn");
        }

        RepositionColoredNumber(arr[i]);
       
    }

    DeactivateArrayElementAtIndex(arr, i) {
        if (!arr[i].classList.contains("Disabled")) {
            arr[i].classList.remove("fadeIn");
            arr[i].classList.add("fadeOut");

            setTimeout(() => { arr[i].classList.add("Disabled") }, (i+1) * 350);
        }
    }

    RepositionAllColoredNumbers() {
        let arr = this.element.getElementsByTagName("li");
        let i = 0;

        for (i; i < arr.length; i++)
        {
            RepositionColoredNumber(arr[i]);
    
        }
    }
}

class ScrollTab {
    ActiveName = "";
    InactiveName = "";
    element = null;
    navBar = null;
    self;

    constructor(element, navbar, ActiveName, InactiveName) {
        this.element = element;
        this.ActiveName = ActiveName;
        this.InactiveName = InactiveName;
        this.navBar = navbar;

        let self = this;

        window.addEventListener("scroll", function () { 
            if (self.navBar.element.classList.contains(self.navBar.ActiveName)) {
                return;
            }

            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > self.lastScrollTop) {
                //downscroll code
                if (!self.element.classList.contains(self.InactiveName)) {
                    //An animation is associated with this class and it is played when closing the navbar. It prevents the opening and closing
                    //animations from playing, so just remove it here in case it is still attached. The next line of code fixes the bug.
                    //It's an ugly solution but after hours of troubleshooting, seems worth it.
                    self.element.classList.remove("Shown");
                    self.element.classList.remove(self.ActiveName);
                    self.element.offsetHeight;
                    self.element.classList.add(self.InactiveName);


                }
            } else {
                // upscroll code
                
                    self.element.classList.remove(self.InactiveName);
                    self.element.offsetHeight;
                    self.element.classList.add(self.ActiveName);

                
            }
            self.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        }, false);
    }

}


class HeightAdjuster {
    element = null;
    parent = null;

    constructor(element, parent) {
        this.element = element;
        this.parent = parent;

        window.setInterval(this.AdjustHeight.bind(this), 5);
    }

    AdjustHeight() {

        let height = this.parent.offsetTop;
        //height *= -1;
        this.element.style.top = height + "px";

        //console.log(height);
    }

}


function RepositionColoredNumber(element) {
   
    if (window.innerWidth <= 600) {
        if (element.classList.contains("ColoredNumbers")) {
            let el = element.getElementsByTagName("a")[0];

            let width = el.offsetWidth;

            width = Math.ceil(width / 2) * -1;
            el.style['left'] = width + "px";

        }
    }
    else {
        let el = element.getElementsByTagName("a")[0];
        el.style.left = 0 + "px";
    }
}


let menuElement = document.getElementById("tabMenu");
let tabMenu = new TabMenu(menuElement, "TabOpen", "TabClose");


let navBar = document.getElementById("NavBar");
let navBarMenu = new TabMenu(navBar, "NavBarOpen", "NavBarClose")

let scrollTab = new ScrollTab(menuElement, navBarMenu, "TabOpen", "TabClose");
let buttonElement = document.getElementById("ResponsiveTabButton");
let tabButton = new TabButton(buttonElement, tabMenu, navBarMenu, "ResponsiveTabSelected", "ResponsiveTabUnselected");
let heightAdjustor = new HeightAdjuster(buttonElement, menuElement);





