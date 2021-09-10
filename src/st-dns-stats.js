import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats(dom) {
  if (dom.length===0)return {};
  const arr = dom.map(item=>item.split('.')),
      keyArr = [],
      result = {};
  arr.forEach((item)=>{
    for (let i = item.length-1; i>=0; i--){
      if (i === item.length-1) {
        keyArr.push('.'+item[i]);
      } else { 
        keyArr.push(keyArr[keyArr.length-1] + '.'+ item[i]);
      }
    }
  });
  keyArr.forEach(item=>{
    if (item in result) {
      result[item]++;
    } else {
      result[item]=1;
    }
  });
  return result;
}
