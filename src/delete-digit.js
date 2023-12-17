const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numberString = n.toString();
  const arrResults = [];
  
  for (let i = 0; i < numberString.length; i++) {
    const newNumberString = numberString.substring(0, i) + numberString.substring(i + 1);
    arrResults.push(Number(newNumberString));
  }
  return Math.max(...arrResults)
}

module.exports = {
  deleteDigit
};
