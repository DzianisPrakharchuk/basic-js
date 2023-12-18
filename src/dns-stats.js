const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  const parts = domains.map(domain => domain.split('.'));

  const partsWithDots = parts.map(subArray => subArray.map(part => `.${part}`));

  const reversedParts = partsWithDots.map(subArray => subArray.reverse());

  const concatenatedStrings = reversedParts.map(subArray => {
    let currentString = '';
    return subArray.map(part => currentString += part);
  });

  const finalResult = [].concat(...concatenatedStrings);
  
  for (const element of finalResult) {
    result[element] = (result[element] || 0) + 1;
  }

  return result;
}

module.exports = {
  getDNSStats
};
