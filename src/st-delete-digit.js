import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
 const arr = String(n).split('').map(Number),
  min = Math.min(...arr);
   arr.forEach((item,i)=>{
      if (item === min){
        arr.splice(i,1);
        return;
      }
   });
   return +arr.join('');

}
