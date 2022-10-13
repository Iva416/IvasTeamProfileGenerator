class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    }}
    
//getName()
//getId()
//getEmail()
//getRole()-returns *Employee*

inquirer
.prompt([
    {
        type: 'input',
        message: "What is the Employee NameEmployee",
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
])
    .then((data) => {
        
    })

