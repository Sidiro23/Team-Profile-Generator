//  Employee constructor 
//const Employee = require('../lib/Employee');

// new employee 
test('creates an employee object', () => {
    const employee = new Employee('Savvas', 72, 'savvas.sidiropoulos72@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// get name with getName() 
test('gets employee name', () => {
    const employee = new Employee('Savvas', 72, 'savvas.sidiropoulos72@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// get id with getId() 
test('gets employee ID', () => {
    const employee = new Employee('Savvas', 72, 'savvas.sidiropoulos72@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// get emails with getEmail()
test('gets employee email', () => {
    const employee = new Employee('Savvas', 72, 'savvas.sidiropoulos72@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// get role with getRole()
test('gets role of employee', () => {
    const employee = new Employee('Savvas', 72, 'savvas.sidiropoulos72@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 