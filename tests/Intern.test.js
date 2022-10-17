const Intern = require ("../lib/Intern")
const name = "Iva"
const id = 101
const email = "iva123@gmail.com"
const obj = new Intern (name, id, email)


describe("Intern", () => {
    describe("Initialization", () => {
        it("should have Intern Name", () => {
    
     expect(obj).toBeInstanceOf(Intern);
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

     });
    })