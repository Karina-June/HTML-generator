const Employee = require("../lib/Employee");

describe('Employee', () => {
    describe('Initialization', () => {
        it("should create an object", () => {
            const obj = new Employee('Leela', 1,'Leela@email.com');
            const expectedObj = { name: 'Leela', id: 1, email: 'Leela@email.com' }

            expect(obj).toEqual(expectedObj);
        });
    });
    describe('getName', () => {
        it("should return a name from getName()", () => {
            const name = "Leela";
            const obj = new Employee(name);

            expect(obj.getName()).toEqual(name);
        });
    });
    describe('getId', () => {
        it("should return an id from getId()", () => {
            const id = 1;
            const obj = new Employee("Leela", id);

            expect(obj.getId()).toEqual(id);
        });
    });
    describe('getEmail', () => {
        it("should return an id from getEmail()", () => {
            const email = "Leela@email.com";
            const obj = new Employee("Leela", 1, email);

            expect(obj.getEmail()).toEqual(email);
        });
    });
    describe('getRole', () => {
        it("should return an id from getRole()", () => {
            const role = "Employee";
            const obj = new Employee();

            expect(obj.getRole()).toEqual(role);
        });
    });
});
