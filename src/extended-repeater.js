import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, opt) {
  let newStr = '';
  if (opt.additionRepeatTimes>0){
    str+=Array(opt.additionRepeatTimes).fill(String(opt.addition)).join(opt.additionSeparator || '|');
  } else if (!opt.additionRepeatTimes && opt.addition) {str+=opt.addition;}
  if (opt.repeatTimes>0) {
    newStr+=Array(opt.repeatTimes).fill(String(str)).join(opt.separator || '+');
  }
  return newStr?newStr:str;
}
