const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown=require("./utils/generateMarkdown");
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app

function init() {


inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your README?',
      default:'MyProject',
      validate: function(answer){
        if(answer.length<1){
            return console.log("Please enter a title longer than one character")
        }return true 
      }
    },
    {
        type:'input',
        message:"What is your GitHub username?",
        name:"username",
        default:"3arc",
        validate: function (answer){
            if (answer.length<1){
                return console.log("Please input a valid GitHub username.");
            }
            return true;
        }

    },
     {
    type: 'checkbox',
    message: 'What languages do you know?',
    name: 'stack',
    choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    
     },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
     },
     {
        type:'input',
        message:"Write a description of your project.",
        name:'description',
        deafault:'Project Description',
        validate: function (answer){
            if(answer.length<5){
                
                    return console.log("Please enter a valif project description."); 
                
                
                }
                return true;
        }
     },
     {
        type:"input",
        message:"Depicts the steps for the installation of your project",
        name:"installation",
     },
     {
        type:"input",
        message:"Depicts the usage information in your usage section",
        name:"Usage",
     },
     {
        type:"input",
        message:"explains the contribution guidelines",
        name:"Contributing"
     },
     {
        type:"input",
        message:"provides test instructions",
        name:"Tests",

     },
     {
        type:"list",
        message:"Which GitHub license would you like to select?",
        name:"License",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
     },
     
  ])
  .then((data) => {
const markdown=generateMarkdown(data)
console.log (markdown)
    fs.writeFile("README.md", markdown,  (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

}

// Function call to initialize app
init();
