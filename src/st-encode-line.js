import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
 const arr = [],
 stArr=str.split('');
 let c=1;
   stArr.forEach((ch,i)=>{
     if (ch===stArr[i+1]){
       c++;
     } else if (c===1) {
      arr.push(ch);
     } else {
       arr.push(c);
       arr.push(ch);
       c=1;
     }
 });
 return arr.join('');
}
