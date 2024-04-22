// JavaScript source code
export default {
    "data": [
        {
            key: 0,
            projectTitle: "Open Behavior Trees",
            projectDescription: "An open-source Behavior Tree package for Unity. Comes with a custom built visual node editor and extensive documentation built with DocFX.",
            projectImage: "./Images/Open-Behavior-Trees-image.png",
            containImage: true,
            iconsArray: [
                { key : 0, iconLink: "https://github.com/Sterberino/open-behavior-trees", iconImage: "./Images/Icon-White-Github.png" },
                { key : 1, iconLink: "https://sterberino.github.io/open-behavior-trees-documentation/index.html", iconImage: `${process.env.PUBLIC_URL}/Images/NewWindowIcon.png` }
            ],
            tags: ["C#", "Unity"]
        },
        {
            key: 1,
            projectTitle: "Bored Ape Escape",
            projectDescription: "An Ecommerce site made using PotgreSQL, Express, React, and the Stripe API.",
            projectImage: "./Images/Bored-Ape-Escape-image.png",
            containImage: true,
            iconsArray: [
                { key : 0, iconLink: "https://github.com/Sterberino/ecommerce-site/", iconImage: "./Images/Icon-White-Github.png" },
                { key : 1, iconLink: "https://bored-ape-escape-f8813669b87a.herokuapp.com/", iconImage: `${process.env.PUBLIC_URL}/Images/NewWindowIcon.png` }
            ],
            tags: ["PostgreSQL", "Express", "React"]
        },
        {
            key: 2,
            projectTitle: "Fitness Buddy",
            projectDescription: "A full-stack fitness tracker app made using MongoDB, ExpressJS, React, and NodeJS.", 
            projectImage: `${process.env.PUBLIC_URL}/Images/Fitness-Buddy-image.png`,
            containImage: false,
            iconsArray: [
                { key : 0, iconLink: "https://github.com/Sterberino/FitnessBuddy", iconImage: `${process.env.PUBLIC_URL}/Images/Icon-White-Github.png` },
                { key : 1, iconLink: "https://fitness-buddy.herokuapp.com/", iconImage: `${process.env.PUBLIC_URL}/Images/NewWindowIcon.png` }
            ],
            tags: ["MongoDB", "Express", "React"]
        },
        {
            key : 3,
            projectTitle: "Procedural Island Generator",
            projectDescription: "A collection of procedural generation scripts that generate islands using Simplex Noise and Cellular Automata. It uses Unity's Job system, allowing for Safe multithreaded code, and Unity's Burst compiler which translates from IL /.NET bytecode to highly optimized native code using LLVM.",
            projectImage: `${process.env.PUBLIC_URL}/Images/Procedural-Generation-image.png`,
            containImage: false,
            iconsArray: [
                { key: 0, iconLink: "https://github.com/Sterberino/Procedural-Generation-Suite", iconImage: "./Images/Icon-White-Github.png" }
            ],
            tags: ["C#", "Unity"]
        },
        {
            key: 4,
            projectTitle: "RPG Project",
            projectDescription: "An RPG made with C# and Unity. This is a large project that includes: A Star Pathfinding, A custom quest system, A Branching Dialogue System, Saving and Loading, Melee and Gun Combat, Behavior trees, A custom cutscene system, and a lot more.",
            projectImage: `${process.env.PUBLIC_URL}/Images/Game-Showcase-Reduced-Size.gif`,
            containImage: false,
            iconsArray: [
                { key: 0, iconLink: "https://github.com/Sterberino/RPG-Project-Public/blob/main/README.md", iconImage: "./Images/Icon-White-Github.png"},
                { key: 1, iconLink: "https://www.youtube.com/watch?v=CK1rz9l62xg&list=PLSY0zih09Z57qlUkaLDA3L8GYmQmkVUBu&index=1", iconImage: "./Images/Icon-White-YouTube.png" }
            ],
            tags: ["C#", "Unity"]
        },
        {
            key: 5,
            projectTitle: "This Website",
            projectDescription: "I made this Website from scratch using HTML, CSS, and Javascript/ ES6. I then recreated it using React.",
            projectImage: "./Images/Portfolio-image.png",
            containImage: true,
            iconsArray: [{ key: 0, iconLink: "https://github.com/Sterberino/Sterberino.github.io", iconImage: "./Images/Icon-White-Github.png" }],
            tags: ["React"]
        }
    ]
}