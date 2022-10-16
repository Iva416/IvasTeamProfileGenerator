const Employee = require("./lib/Employee");
class Manager extends Employee {
}
class Manager {
    constructor(name, id, email, officeNumber) {
        super(name,id,email)
        this.officeNumber = officeNumber;
}
getRole() {
    return 'manager'
}
}

module.exports = Manager 