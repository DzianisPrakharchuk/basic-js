const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false; // Return false if input is not an array
  }

  const filteredMembers = members.filter(item => {
    if (typeof item === 'string') {
      return true;
    } else if (typeof item === 'object' && item !== null && item.hasOwnProperty('name') && typeof item.name === 'string') {
      return true;
    }
    return false;
  });

  if (filteredMembers.length === 0) {
    return false;
  }

  const firstLetters = filteredMembers.map(item => (typeof item === 'string') ? item.trim()[0].toUpperCase() : item.name.trim()[0].toUpperCase());
  const dreamTeamName = firstLetters.sort().join('');
  return dreamTeamName;
}

module.exports = {
  createDreamTeam
};
