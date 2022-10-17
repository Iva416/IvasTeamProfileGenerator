const fs = require('fs')
const inquirer = require('inquirer');
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let newTeam = "";

function startManager() {
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
                message: "Enter your email?",
                name: 'email',
            },       
            {
                type: 'input',
                message: "What is your office number?",
                name: 'officeNumber',
            },
        ])
    
    .then((response) => {
        const manager  = new Manager (response.name, response.id, response.email, response.officeNumber)
    newTeam += htmlManager(manager)
    chooseRole()
    } 

)}



function startEngineer () {
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
        const engineer  = new Engineer(response.name, response.id, response.email, response.github)
    newTeam += htmlEngineer(engineer)
    chooseRole()
    }
)}

function startIntern () {
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
        const intern  = new Intern(response.name, response.id, response.email, response.school)
    newTeam += htmlIntern(intern)
    chooseRole()
    } 
)}

startManager()

function chooseRole(){
inquirer
     .prompt([
            {
                type: 'list',
                message: "Would you like to add an Employee or are you finished making your team?",
                name: 'choice',
                choices: [ "Add engineer", "Add intern", "Finish making my team" ]
            }
        ])
            .then((response) => {
                if (response.choice === "Add engineer") {
                    startEngineer()
                } else if (response.choice === "Add intern") {
                    startIntern()
                } else { 
                    newTeam += `</body> </html>`
                    fs.writeFile("./dist/newTeam.html", newTeam, (err) => 
                err ? console.error(err) : console.log("Success!"))}
            })
        }
const htmlManager = (manager) => 


`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>
<h1 class="title">
TEAM GENERATOR
</h1>
<div class="card" style="width: 18rem;">
  <div class="card-header">
    Manager
  </div>
  <div class="p-2"><ul class="list-group list-group-row">
    <li class="list-group-item">Name: ${manager.name}</li>
    <li class="list-group-item">Role: ${manager.getRole()}</li>
    <li class="list-group-item">Id: ${manager.id}</li>
    <li class="list-group-item"><a href="mailto: ${manager.email}"> Email: ${manager.email}</a></li>
    <li class="list-group-item">Office Number:${manager.officeNumber}</li></div>
  </ul>
</div>
</div>
<body>
`

const htmlEngineer = (engineer) =>

`<div class="card" style="width: 18rem;">
  <div class="card-header">
    Engineer
  </div>
  <div class="p-2">
  <ul class="list-group list-group-row">
    <li class="list-group-item">Name: ${engineer.name}</li>
    <li class="list-group-item">Role: ${engineer.getRole()}</li>
    <li class="list-group-item">Id: ${engineer.id}</li>
    <li class="list-group-item"><a href="mailto: ${engineer.email}"> Email: ${engineer.email}</a></li>
    <li class="list-group-item"><a href="https://github.com/ ${engineer.github}" target="__blank"> Github: ${engineer.github}</a></li>
  </ul></div>
</div>`

const htmlIntern = (intern) => 


`<div class="card" style="width: 18rem;">
  <div class="card-header">
    Intern
  </div>
  <div class="p-2">
  <ul class="list-group list-group-row">
    <li class="list-group-item">Name: ${intern.name}</li>
    <li class="list-group-item">Role: ${intern.getRole()}</li>
    <li class="list-group-item">Id: ${intern.id}</li>
    <li class="list-group-item"><a href="mailto: ${intern.email}"> Email: ${intern.email}</a></li>
    <li class="list-group-item">School: ${intern.school}</li>
  </ul></div>
  </div>
</div>`
