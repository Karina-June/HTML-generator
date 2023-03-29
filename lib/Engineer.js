const Manager = require("./Manager");

class Engineer extends Manager {
    constructor(name, id, email, officeNumber, github){
        super(name, id, email, officeNumber)
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer;
