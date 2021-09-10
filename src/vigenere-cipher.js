import {
  NotImplementedError
} from '../extensions/index.js';

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
export default class VigenereCipheringMachine {
  constructor(b) {
    this.b = b;
  }
  encrypt(str, key) {
    if (str === undefined || key === undefined) throw new Error('Incorrect arguments!');
    const keyOk = key.repeat(Math.ceil(str.length / key.length)).toUpperCase(),
      strOk = str.toUpperCase();
    let result = '',
      j=0;
    for (let i =0; i<str.length; i++){
      let shift = strOk.charCodeAt(i) + keyOk.charCodeAt(i-j)-65;
      if (shift>90) shift-=26;
      if(strOk.charCodeAt(i)>64 && strOk.charCodeAt(i)<91){
        result+=String.fromCharCode(shift);
      } else {
        j++;
        result+=strOk[i];
      }
    }
    if(this.b === undefined || this.b){
      return result.toUpperCase();
    } else {
      return result.split('').reverse().join('').toUpperCase();
    }
  }
  decrypt(str, key) {
    if (str === undefined || key === undefined) throw new Error('Incorrect arguments!');
    const keyOk = key.repeat(Math.ceil(str.length / key.length)).toUpperCase(),
      strOk = str.toUpperCase();
    let result = '',
      j=0;
    for (let i =0; i<str.length; i++){
      let shift = strOk.charCodeAt(i) - (keyOk.charCodeAt(i-j)-65);
      if (shift<65) shift+=26;
      if(strOk.charCodeAt(i)>64 && strOk.charCodeAt(i)<91){
        result+=String.fromCharCode(shift);
      } else {
        j++;
        result+=strOk[i];
      }
    }
    if(this.b === undefined || this.b){
      return result.toUpperCase();
    } else {
      return result.split('').reverse().join('').toUpperCase();
    }

  }
}