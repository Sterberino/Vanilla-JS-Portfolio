// JavaScript source code
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