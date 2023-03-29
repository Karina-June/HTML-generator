const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe('Initialization', () => {
    it("should create the office number", () => {
        const obj = new Manager("Leela", 1, "Leela@email.com", 1);
        const expectedObj = { name: 'Leela', id: 1, email: 'Leela@email.com', officeNumber: 1 }

        expect(obj).toEqual(expectedObj);
    })
})
});