const Employee = require("./lib/Employee");
class Intern extends Employee {
}
class Engineer{
    constructor()
}


inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the Employee NameINTERN   ?",
            name: 'name',
        },
    ])
    .then((data) => {
    
    })