const Manager = require('../lib/Manager');

test('create manager object', () => {
  const manager = new Manager('Amina', 25, 'kurdiamina3@gmail.com', 4);
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get role ', () => {
  const manager = new Manager('Amina', 25, 'kurdiamina3@gmail.com', 3);
  expect(manager.getRole()).toBe('Manager');
});