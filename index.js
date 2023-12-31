// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown.js")
const fs = require("fs");
const questions = [
    {
        message: "What is the name of your project?",
        name: "title"
    },
    {
        message: "Give a small description of your project:",
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
    },
    {
        type: "list",
        message: "Which License do you wish to use?",
        name: "license",
        choices: ["MIT License","BSD 3-Clause License", "Apache License 2.0", "No License"]
    },
    {
        message: "What is your gitHub username?",
        name: "user"
    },
    {
        message: "What is your email?",
        name: "email"
    },
    {
        message: "What year is it?(yyyy format)",
        name: "year"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./sample/${fileName}.new.md`, data, (err)=> {
        if(err){
            throw err;
        }
        else{
            console.log(`Successfully created ${fileName}`);
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)

    .then((answers) => {
        console.log(answers);
        writeToFile(answers.title, markdown(answers));
    })
    .catch((error) => {
        if(error.isTtyError){
            console.log("prompt couldn't be rendered in the current environment")            
        }
        else{
            console.log("something went terribly wrong");
        }
    });
}

// Function call to initialize app
init();
