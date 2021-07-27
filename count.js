function count(string) {
  if (string.length < 1 || string.length > 10) {
    throw new Error('invalid string');
  }
  return string.length;
}
module.exports = count;