const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js')

function askQuestions() {
    inquirer.prompt(
        [
            {
                name: 'title',
                message: 'What is the title of your project?',
                type: 'input'
            },
            {
                name: 'description',
                message: 'Please write a description of your project',
                type: 'input'
            },
            {
                name:"license",
                message: "What type of license do you want?",
                type: "list",
                choices: [
                    "MIT", "BSD3", "Apache", "JAM"
                
                ]
            },
            {
                name: "table of content",
                message: "Would you like to add a basic table of contents?",
                choices: 'installation, usage, credits and, license?'
            },
            {
              name: "installation",
              message: "Please provide a step by step description of the project installation.",
              choices: "input"
            
            },
            {
                name: "usage",
                message: "Provide instructions and examples for use",
                choices: "input"
            },
            {
              name: 'credits',
              message: "List your collaborators, if any, with links to their GitHub profiles",
              choices: "input"  
            }
        ]

    )
    .then(answers => {
        fs.writeFileSync('New-README.md', generateMarkdown(answers));
    })
}

askQuestions();