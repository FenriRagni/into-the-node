// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const config = JSON.parse(fs.readFileSync("./config.json"));


inquirer
    .prompt(questions)
    
    .then(fs.writeToFile("README.md.new", answers))
    .catch((error) => {
        if(error.isTtyError){
            console.log("prompt couldn't be rendered in the current environment")            
        }
        else{
            console.log("something went terribly wrong");
        }
    })
// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the name of your project?",
        name: "title"
    },
    {
        message: "Give a small description of your project: ",
        name: "description"
    },
    {
        message: "How do you install this?:",
        name: "install"
    },
    {
        message: "How do you use this?",
        name: "usage"
    },
    {
        message: "What are some contribution guidelines?",
        name: "contributions"
    },
    {
        message: "What are some test instructions?",
        name: "tests"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
