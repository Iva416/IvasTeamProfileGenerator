const fs = require('fs')
const inquirer = require('inquirer');


const GenerateHtml = require("./src/generateHTML")

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Engineer");
const Manager = require("./lib/Manager");

const GenerateHtml();

let content = ""

function employeePrompt = () =>

//What is the Employees Name?
//What is the Employees Id?
//fswrite file to create team
//ask if you want to add manager intern or engineer
//ask if the team is done
//process info to template 


function engineerPrompt = () =>

inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the Employee NameEngineer?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is the Employee id?",
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
                name: 'githubUsername',
            },
        ])

    .then((data) => {
        
 })

