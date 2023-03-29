const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe('Initialization', () => {
    it("should create the school name", () => {
        const obj = new Intern("Leela", 1, "Leela@email.com", 101, "Leelagithub", "U of A");
        const expectedObj = { name: 'Leela', id: 1, email: 'Leela@email.com', officeNumber: 101, github: "Leelagithub", school: "U of A" }

        expect(obj).toEqual(expectedObj);
    })
})
});