const Engineer = require("./Engineer");

class Intern extends Engineer {
    constructor(name, id, email, officeNumber, github, school){
        super(name, id, email, officeNumber, github)
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
};

module.exports = Intern;