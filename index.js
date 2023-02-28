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
            },
            {
                name: 'Questions',
                message: "F.A.Q. #1",
                choices: 'input'
    
            },
            {
                name: 'Questions',
                message: 'F.A.Q. #2',
                choices: 'input'

            },
            {
                name: 'Questions',
                message: 'F.A.Q. #3',
                choicecs: 'input'
            }
            
            
        ]

    )
    .then(answers => {
        fs.writeFileSync('New-README.md', generateMarkdown(answers));
    })
}

askQuestions();