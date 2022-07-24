//  Manager constructor 
const Manager = require('../lib/Manager');

// new manager 
test('creates an Manager object', () => {
    const manager = new Manager('Savvas', 72, 'savvas.sidiropoulos72@gmail.com', 7);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// get role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Savvas', 72, 'savvas.sidiropoulos72@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 