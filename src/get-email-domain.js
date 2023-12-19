const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const myArray = [];
  myArray.push(email);
  const newArray = myArray.map((domain) => domain.split('@'));
  const filteredArray = [newArray[0][newArray[0].length - 1]];
  let part = filteredArray.join();
  if (part && part[0] === '.') {
    part = part.slice(1); 
  }
  return part;
}

module.exports = {
  getEmailDomain
};
