// TODO: Include packages needed for this application
// included packages and links to required information
const inquirer = require("inquirer");


const fs = require('fs');
// link to markdown file
const mark = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// created inquirer prompts 
inquirer
  .prompt([{
    type: 'input',
    name: 'title',
    message: 'what is the title?'
},{
    type: 'input',
    name: 'badge',
    message: 'what is your badge links?'
},
{
    type: 'input',
    name: 'description',
    message: 'what is your description'
},{
    type: 'input',
    name: 'contact',
    message: 'what is your username?'
},{
    type: 'input',
    name: 'installation',
    message: 'How do you do your installation?'
}, 
{
    type: 'input',
    name: 'credits',
    credits: 'Any credits to people who created the repository?'
},{
    type: 'input',
    name: 'testinfo',
    credits: 'Any testing information?'
},{
    type: 'input',
    name: 'projectlic',
    credits: 'what is the license for your project'
},
{
    type: 'input',
    name: 'contribute',
    message: 'Any notes on contribution to repo? '
}
]).then((data) => console.log(data));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {


}

// Function call to initialize app
init();
