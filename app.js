const inquirer = require('inquirer');
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some info about yourself:'
        }
    ]);
};

const promptProject = portfolioData => {
    // create new projects array only if array doesn't exist currently
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`
    ====================
    Add a new project
    ====================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with (check all that apply)?',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ]);
};
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
      });
    
// const fs = require('fs');
// const generatePage = require('./src/page-template');
// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;
//     console.log("Portfolio complete! Check out index.html to see results!")
// });
