const reverse = require('./reverse');

test('goo should equal to og', () => {
  expect(reverse('goo')).toBe('oog');
});

test('encyclopedia should equal to aidepolcycne', () => {
  expect(reverse('encyclopedia')).toBe('aidepolcycne');
});
