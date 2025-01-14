import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  const arrN = arr.filter(item => item === -1 ? false : true).sort((a, b) => a - b),
    arrSort = [];
  let i = 0;
  arr.forEach(item => {
    if (item === -1) {
      arrSort.push(item);
    } else {
      arrSort.push(arrN[i++]);
    }
  });
  return arrSort;
}