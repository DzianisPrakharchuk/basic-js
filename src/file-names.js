const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const orderNumbers = new Map();

  return names.map((element, index) => {
    if (orderNumbers.has(element)) {
      const count = orderNumbers.get(element);
      const newElement = `${element}(${count})`;
      orderNumbers.set(element, count + 1);
      orderNumbers.set(newElement, 1);
      return newElement;
    } else {
      orderNumbers.set(element, 1);
      return element;
    }
  });
}

module.exports = {
  renameFiles
};
