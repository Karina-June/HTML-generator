const Employee = require("../lib/Employee");

describe('Employee', () => {
    describe('Initialization', () => {
        it("should create an object", () => {
            const obj = new Employee();

            expect(obj).toEqual('object');
        });
    });
    describe('name', () => {
        it("should create a name", () => {
            const name = "Leela";
            const obj = new Employee(name)

            expect(obj.name).toEqual(name);
        });
    });
    describe('id', () => {
        it("should create an id", () => {
            const id = 5;
            const obj = new Employee("Leela", id);

            expect(obj.id).toEqual(id);
        });
    });
    describe('email', () => {
        it("should create an email", () => {
            const email = "Leela@email.com";
            const obj = new Employee("Leela", 5, email);

            expect(obj.email).toEqual(email);
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
            const id = 5;
            const obj = new Employee("Leela", id);

            expect(obj.getId()).toEqual(id);
        });
    });
    describe('getEmail', () => {
        it("should return an id from getEmail()", () => {
            const email = "Leela@email.com";
            const obj = new Employee("Leela", 5, email);

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