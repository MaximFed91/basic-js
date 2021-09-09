import { NotImplementedError } from '../extensions/index.js';

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
export default function createDreamTeam(mem) {
  if (!Array.isArray(mem)) return false;
  const checkMem = mem.filter(item => typeof(item) === 'string');
  if (checkMem.length === 0) return false;
  return checkMem.map(name=>{
    return name.split(/\s+/gm).filter(i=>i.length>0)[0].toUpperCase()[0];
  }).sort().join('');
}
