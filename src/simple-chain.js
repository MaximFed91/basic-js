import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  arr : [],

  getLength() {
    return this.arr.length;
  },
  addLink(val) {
    this.arr.push(String(val));
    return this;
  },
  removeLink(pos) {
    if( typeof(pos) != 'number' || pos<1 || pos>this.arr.length || pos%1>0){
      this.arr = [];
      throw new Error('You can\'t remove incorrect link!');
    } else {
      this.arr.splice(pos-1,1);
    return this;
    }
    
  },
  reverseChain() {
   this.arr.reverse();
   return this;
  },
  finishChain() {
    const res = this.arr.join(' )~~( ');
    this.arr= [];
    return '( ' + res + ' )';
  }
};
