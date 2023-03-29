const Employee = require("./Employee");

class Manager extends Employee {
    // constructor should take in values for Employee and officeNumber
    constructor(name, id, email, officeNumber) {
        //create employee instance
        super(name, id, email);
        // create officeNumber property for Manager
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
};

module.exports = Manager;