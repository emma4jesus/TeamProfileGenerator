const Engineer = require('../lib/Engineer');

// creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Emma', 25, 'emmanuelajean1@gmail.com', 'emma4jesus');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Emma', 25, 'emmanuelajean1@gmail.com', 'emma4jesus');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Emma', 25, 'emmanuelajean1@gmail.com', 'emma4jesus');

    expect(engineer.getRole()).toEqual("Engineer");
});