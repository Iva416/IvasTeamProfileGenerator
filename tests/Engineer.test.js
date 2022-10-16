const Engineer = require ("..lib/Engineer")
const name = "Iva"
const id = 101
const email = "iva123@gmail.com"
const obj = new Engineer (name, id, email, github)


describe("Engineer", () => {
    describe("Initialization", () => {
        it("should have Engineer Name", () => {
    
     expect(obj).toBeInstanceOf(Employee);
     expect(obj.name).toBe(name);
     expect(obj.id).toBe(id);
     expect(obj.email).toBe(email)
        })

     describe("getName", () => {
        it("should return Employee", () => {
            expect(obj.getName()).toBe(obj.name);
        })
        })

    describe("getId", () => {
        it("should return Employee Id", () => {
            expect(obj.getId()).toBe(obj.id);    
        })
        })
    describe("getEmail", () => {
        it("should return Employee Email", () => {
            expect(obj.getEmail()).toBe(obj.email);
        })
        })
    describe("getEmail", () => {
        it("should return Employee Email", () => {
            expect(obj.getEmail()).toBe(obj.email);
        })
        })

     });
    })