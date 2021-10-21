const Engineer = require('../lib/Engineer');

test ('creates Engineer object', () => {
  const engineer = new Engineer('Amina', 25, 'kurdiamina3@gmail.com');
  expect(engineer.github).toEqual(expect.any(String));
});

test('get engineer github', () => {
  const engineer = new Employer('Amina', 25, 'kurdiamina3@gmail.com');
  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
  const engineer = new Employer('Amina', 25, 'kurdiamina3@gmail.com');
  expect(engineer.getRole()).toEqual('Engineer');
})