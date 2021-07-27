const capitalizeString = require('./capitalizeString');

test('capitalizes a string', () => {
  expect(capitalizeString('good')).toBe('Good');
});

test('does not accpet a non string argument', () => {
  expect(() => capitalizeString(2)).toThrow(Error);
});
