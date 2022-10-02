// inquirer to generate questions
const inquirer = require('inquirer');
const fs = require('fs');
const {generateMarkdown} = require('./utils');


inquirer.prompt([

        {
            type: 'input',
            name: 'title',
            message: 'What is the project title?'
    
        },
        {
            type: 'input',
            name: 'description',
            message: 'How would you describe the project?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How did you install your app?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your app?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use?',
            choices: ['The MIT License', 'The GPL License', 'Apache license', 'GNU license', 'N/A']
        },
        {
            // Enter your github information
            type: 'input',
            name: 'Git',
            message: 'Github username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'E-mail:'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What were your contributions?'
        },
    
        {
            type: 'input',
            name: 'tests',
            message: 'How would you test this?'
        }
    ]).then((answers) => {
        //console.log(generateMarkdown(answers));
        fs.writeFile("demo.md", generateMarkdown(answers), (err) => {
            if(err) {
                console.log(err);
            }
            
        });
        
        })



//     fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err) => {
//         if(err){
//             console.log(err);
