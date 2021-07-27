const Calculator = require('./calculator');

const calculator = new Calculator();

describe('test the add function', () => {
  test('it adds togther integer numbers', () => {
    expect(calculator.add(3, 5)).toBe(8);
  });

  test('it adds a float to an integer', () => {
    expect(calculator.add(2.6, 2)).toBe(4.6);
  });

  test('it adds two floats', () => {
    expect(calculator.add(2.2, 3.7)).toBe(5.9);
  });
});

describe('test the subtract function', () => {
  test('it subtracts an integer from a bigger one', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('it subtracts an integer from a smaller one', () => {
    expect(calculator.subtract(5, 6)).toBe(-1);
  });

  test('its subtracts a float from an bigger integer', () => {
    expect(calculator.subtract(5, 2.5)).toBe(2.5);
  });
});

describe('test the multiply function', () => {
  test('it multiplies two integers', () => {
    expect(calculator.multiply(5, 3)).toBe(15);
  });

  test('it multiplies an integer and a float', () => {
    expect(calculator.multiply(5, 10.1)).toBe(50.5);
  });

  test('it multiplies two floats', () => {
    expect(calculator.multiply(2.5, 2.5)).toBe(6.25);
  });
});

describe('test the divide function', () => {
  test('it divides two positve integers', () => {
    expect(calculator.divide(3, 6)).toBe(0.5);
  });

  test('it divides a postive integer by a negative one', () => {
    expect(calculator.divide(5, -5)).toBe(-1);
  });

  test('it divides a negative integer by a negative one', () => {
    expect(calculator.divide(-10, -2)).toBe(5);
  });
});