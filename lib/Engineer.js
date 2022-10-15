const Employee = require("./lib/Employee");
class Engineer extends Employee 
{
    constructor(name, id, email, githubUsername) {
        super(name,id,email)
        this.github = githubUsername;
}
getGithub() {
    return this.getGithub
}

getRole(){
    return 'Engineer'
}
}

