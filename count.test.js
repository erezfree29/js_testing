const count = require('./count');

test('hello length should be equal 5', () => {
  expect(count('hello')).toBe(5);
});

test('a too long string should return error message', () => {
  expect(() => count('development')).toThrow(Error);
});

test('an empty string should return error message', () => {
  expect(() => count('development')).toThrow(Error);
});