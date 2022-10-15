const Employee = require("./lib/Employee");
class Intern extends Employee {
}
class Intern{
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
}
getSchool(){
    return this.school 
}
getRole(){
    return 'Intern'
}}

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the employee NameIntern?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the employee id",
            name: 'id',
        },        
        {
            type: 'input',
            message: "What is the the employee's email?",
            name: 'email',
        },       
        {
            type: 'input',
            message: "Where does this employee go to school?",
            name: 'school',
        },
    ])
    .then((data) => {

    })