const fs = require('fs')
const inquirer = require('inquirer');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

TeamArray = [];
let newTeam = "";

function startManager() {}
inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter Managers name:",
                name: 'name',
            },

            {
                type: 'input',
                message: "What is your Employee id?",
                name: 'id',
            },        
            {
                type: 'input',
                message: "What is the the Employee's email?",
                name: 'email',
            },       
            {
                type: 'input',
                message: "What is your office number?",
                name: 'officeNumber',
            },
        ])
    
    .then((response) => {
        const engineer  = new Manager (response.name, reponse.id, response.email, response.officeNumber)
    newTeam += new Manager 
    } 
)

function startEngineer () {}
inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the Engineers name?",
                name: 'name',
            },

            {
                type: 'input',
                message: "What is the Engineers Employee id?",
                name: 'id',
            },        
            {
                type: 'input',
                message: "What is the the Employee's email?",
                name: 'email',
            },       
            {
                type: 'input',
                message: "What is your github Username?",
                name: 'github',
            },
        ])
    
    .then((response) => {
        const engineer  = new Engineer(response.name, reponse.id, response.email, response.github)
    newTeam += new Engineer 
    } 
)

function startIntern () {}
inquirer
        .prompt([
            {
                type: 'input',
                message: "Please enter Intern name:",
                name: 'name',
            },

            {
                type: 'input',
                message: "What is the Intern Employee id?",
                name: 'id',
            },        
            {
                type: 'input',
                message: "What is the the Employee's email?",
                name: 'email',
            },       
            {
                type: 'input',
                message: "Where does this intern go to school?",
                name: 'school',
            },
        ])
    
    .then((response) => {
        const engineer  = new Intern(response.name, reponse.id, response.email, response.school)
    newTeam += new Intern 
    .then((data) => {
    const filename = `${data.name.toLowerCase().split('').join('')}.html`;
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
       );
      });
    } 
)