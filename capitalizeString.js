function capitalizeString(string) {
    if (typeof string !== 'string') {
      throw new Error('invalid argument');
    }
      return  string.charAt(0).toUpperCase() + string.slice(1);
    }
    module.exports = capitalizeString;