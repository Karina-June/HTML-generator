const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe('Initialization', () => {
    it("should create the office number", () => {
        const obj = new Manager("Leela", 1, "Leela@email.com", 101);
        const expectedObj = { name: 'Leela', id: 1, email: 'Leela@email.com', officeNumber: 101 }

        expect(obj).toEqual(expectedObj);
    })
})
});