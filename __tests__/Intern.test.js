const Intern = require ('../lib/Intern');

test('creates intern object', () => {
  const intern = new Intern('Amina', 25, 'kurdiamina3@gmail.com', "Syracuse University");
  expect(intern.school).toEqual(expect.any(String));
});

test ('get school', () => {
  const intern = new Intern ('Amina', 25, 'kurdiamina3@gmail.com', "Syracuse University");
  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test (' get role', () => {
  const intern = new Intern('Amina', 25, 'kurdiamina3@gmail.com', "Syracuse University");
  expect(intern.getRole()).toEqual('Intern');
});