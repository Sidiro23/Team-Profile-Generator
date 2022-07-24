//  Engineer constructor 
const Engineer = require('../lib/Engineer');

// new engineer 
test('creates an Engineer object', () => {
    const engineer = new Engineer('Savvas', 72, 'savvas.sidiropoulos72@gmail.com','Sidiro23');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// get github with getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Savvas', 72, 'savvas.sidiropoulos72@gmail.com','Sidiro23');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// get role with getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Savvas', 72, 'savvas.sidiropoulos72@gmail.com','Sidiro23');

    expect(engineer.getRole()).toEqual("Engineer");
});