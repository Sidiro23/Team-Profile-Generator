//  Intern constructor 
const Intern = require('../lib/Intern');

// new intern 
test('creates an Intern object', () => {
    const intern = new Intern('Savvas', 72, 'savvas.sidiropoulos72@gmail.com','UT');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// get school with getSchool()
test('gets employee school', () => {
    const intern = new Intern('Savvas', 72, 'savvas.sidiropoulos72@gmail.com','UT');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// get role with getRole()
test('gets role of employee', () => {
    const intern = new Intern('Savvas', 72, 'savvas.sidiropoulos72@gmail.com','UT');

    expect(intern.getRole()).toEqual("Intern");
}); 