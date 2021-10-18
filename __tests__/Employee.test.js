const Employee = require('../lib/Employee');

console.log(new Employee());

test('creates employee object', () => {
  const employee = new Employee('Amina')

  expect(employee.name).toBe('Amina');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.arrayContaining([expect.any(Object)]));
});

test("gets employee name", () =>
{
  const employee = new Employee('Amina');

  expect(employee.getName()).toEqual(expect.any(Array));
});

test("get employee id", () =>
{
  const employee = new Employee('Amina');

  expect(employee.getID()).toEqual(expect.stringContaining(player.id.toString()));
});

test("get employee email", () =>
{
  const employee = new Employee ('Amina');

  expect(employee.getEmail()).toEqual(expect.stringContaining(player.email.toString()));
});

test("get employee role", () =>
{
  const employee = new Employee ('Amina');

  expect(emplotee.getRole()).toEqual('Employee')
})



