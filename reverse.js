function reverse(string) {
  let newString = '';
  for (let i = string.length - 1; i > -1; i -= 1) {
    newString += string[i];
  }
  return newString;
}
module.exports = reverse;