const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe('Initialization', () => {
    it("should create the github username", () => {
        const obj = new Engineer("Leela", 1, "Leela@email.com", 101, "Leelagithub");
        const expectedObj = { name: 'Leela', id: 1, email: 'Leela@email.com', officeNumber: 101, github: "Leelagithub" }

        expect(obj).toEqual(expectedObj);
    })
})
});