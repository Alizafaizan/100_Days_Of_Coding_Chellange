"use strict";
//A list showimg a programmer's skills in details
let developerSkills = {
    languages: [
        "javascript",
        "Typrscript",
        "Python"
    ],
    frameWorks: [
        "React",
        "Angular",
        "Vue"
    ],
    tools: [
        "Git",
        "Webpack",
        "Docker"
    ]
};
//Getting specific skills from the list
let { languages, frameWorks, tools } = developerSkills;
//showing a skill from each category
console.log(`Languages: ${languages[0]}, Framework: ${frameWorks[0]}, Tools: ${tools[0]}`);
