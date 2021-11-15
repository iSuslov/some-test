const sayGreetings = require("../services/mainService");


test('adds 1 + 2 to equal 3', () => {
  expect(sayGreetings('Ivan')).toBe('Hello Ivan!!');
});