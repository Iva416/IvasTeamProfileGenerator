class Manager extends Employee {
}
class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = 
}}

//getRole()--overridden to return **Manager**

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the Employee NameMANAGER?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the Employee id",
            name: 'id',
        },        
        {
            type: 'input',
            message: "What is the the Employee's email?",
            name: 'email',
        },       
        {
            type: 'input',
            message: "What is the Office Number?",
            name: 'officeNumber',
        },
    ])
    .then((data) => {

    })
        