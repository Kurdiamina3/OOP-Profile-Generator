const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test ('creates Engineer object', () => {
  const engineer = new Engineer('Amina', 25, 'kurdiamina3@gmail.com','kurdiamina3');
  expect(engineer.github).toEqual(expect.any(String));
});

test('get engineer github', () => {
  const engineer = new Engineer('Amina', 25, 'kurdiamina3@gmail.com','kurdiamina3');
  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
  const engineer = new Engineer('Amina', 25, 'kurdiamina3@gmail.com','kurdiamina3');
  expect(engineer.getRole()).toEqual('Engineer');
})