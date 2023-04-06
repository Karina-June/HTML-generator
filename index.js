const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/templatePage')
const path = require("path");


const theManager = [
    {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?"
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the manager's id?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email?"
    },
    {
        type: "input",
        name: "managerNumber",
        message: "What is the manager's office number?"
    }
]

const newTeam = [
    {
        type: "list",
        name: "teamMember",
        message: "What type of team member are you creating?",
        choices: [
            "Manager",
            "Engineer",
            "Intern"]
    },
    {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
        when: function (answers) {
            return answers.teamMember === "Engineer";
        }
    }

];



const getAnswers = [];
const askManagerQuestions = () => {
    inquirer.prompt(theManager).then(answers => {
        getAnswers.push(answers);
        const askTeamQuestions = () => {
            inquirer.prompt(newTeam).then(answers => {
                getAnswers.push(answers);
                if (answers.teamMember !== 'completed') {
                    askTeamQuestions()
                } 
            });
        }
        askTeamQuestions();
    });
}

askManagerQuestions();

const createHTML = generateHTML(this)
fs.writeFile('./src/templatePage', text, (err) => {
      if (err)
        console.log(err);
    })