const Manager = require('../lib/Manager');

test('create manager object', () => {
  const manager = new Manager('Amina', 25, 'kurdiamina3@gmail.com');
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get role ', () => {
  const manager = new Manager('Amina', 25, 'kurdiamina3@gmail.com');
  expect(manager.getRole).toEqual('Manager');
});