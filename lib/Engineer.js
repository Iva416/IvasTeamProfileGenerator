const Employee = require("./lib/Employee");
class Engineer extends Employee {
}
class Engineer {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = githubUsername;
}}

//github()
//getRole()-- over ridden to return 'Engineer'

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
