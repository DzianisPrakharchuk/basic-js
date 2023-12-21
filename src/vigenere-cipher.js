const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.type = type;
  }

  checkArgs(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
  }

  encrypt(message, key) {
    this.checkArgs(message, key);

    let result = '';
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      if (j > key.length - 1) {
        j = 0;
      }
      if (!this.alphabet.includes(message[i].toUpperCase())) {
        result += message[i];
      } else {
        const encryptedCharCode = (this.alphabet.indexOf(message[i].toUpperCase()) + this.alphabet.indexOf(key[j].toUpperCase())) % 26;
        result += this.alphabet[encryptedCharCode];
        j++;
      }
    }

    return this.type ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    this.checkArgs(message, key);

    let result = '';
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      if (j > key.length - 1) {
        j = 0;
      }

      if (!this.alphabet.includes(message[i].toUpperCase())) {
        result += message[i];
      } else {
        let decryptedCharCode = (this.alphabet.indexOf(message[i].toUpperCase()) - this.alphabet.indexOf(key[j].toUpperCase()) + 26) % 26;
        result += this.alphabet[decryptedCharCode];
        j++;
      }
    }

    return this.type ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
