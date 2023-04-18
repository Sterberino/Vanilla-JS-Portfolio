// JavaScript source code
export default {
    "data": [
        {
            key: 0,
            projectTitle: "Fitness Buddy",
            projectDescription: "A full-stack fitness tracker app made using MongoDB, ExpressJS, React, and NodeJS.", 
            projectImage: `${process.env.PUBLIC_URL}/Images/FitnessBuddy.png`,
            containImage: false,
            iconsArray: [
                { key : 0, iconLink: "https://fitness-buddy.herokuapp.com/", iconImage: `${process.env.PUBLIC_URL}/Images/NewWindowIcon.png` }, 
                { key : 1, iconLink: "https://github.com/Sterberino/FitnessBuddy", iconImage: `${process.env.PUBLIC_URL}/Images/Icon-White-Github.png` }
            ]
        },
        {
            key : 1,
            projectTitle: "Procedural Island Generator",
            projectDescription: "A collection of precedural generation scripts that generate Islands using Simplex Noise and Cellular Automata, written in C# for use with 2D tile- based Unity games.It uses Unity's Job system, allowing for Safe multithreaded code, and Unity's Burst compiler which translates from IL /.NET bytecode to highly optimized native code using LLVM.",
            projectImage: "./Images/IslandTexture.png",
            containImage: false,
            iconsArray: [
                { key: 0, iconLink: "https://github.com/Sterberino/Procedural-Generation-Suite", iconImage: "./Images/Icon-White-Github.png" }
            ]
        },
        {
            key: 2,
            projectTitle: "RPG Project",
            projectDescription: "An RPG made with C# and Unity. This is a large project that includes: A Star Pathfinding, A custom quest system, A Branching Dialogue System, Saving and Loading, Melee and Gun Combat, Behavior trees, A custom cutscene system, and a lot more.",
            projectImage: "./Images/RPG-Project-Thumbnail.png",
            containImage: false,
            iconsArray: [
                { key: 0, iconLink: "https://github.com/Sterberino/RPG-Project-Public/blob/main/README.md", iconImage: "./Images/Icon-White-Github.png"},
                { key: 1, iconLink: "https://www.youtube.com/watch?v=CK1rz9l62xg&list=PLSY0zih09Z57qlUkaLDA3L8GYmQmkVUBu&index=1", iconImage: "./Images/Icon-White-YouTube.png" }
            ]
        },
        {
            key: 3,
            projectTitle: "This Website",
            projectDescription: "I made this Website from scratch using HTML, CSS, and Javascript/ ES6. It was intended to not only showcase my programming skills, but develop them.",
            projectImage: "./Images/Icon.png",
            containImage: true,
            iconsArray: [{ key : 0, iconLink: "https://github.com/Sterberino/Sterberino.github.io", iconImage: "./Images/Icon-White-Github.png" }]
        },
        
    ]
}