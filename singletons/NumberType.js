'use strict';

const singleton = Symbol('singleton');

module.exports = class NumberType {
  // singleton.instance
  static get instance() {
    this[singleton] = new this;

    return this[singleton];
  }
  // new singleton()
  constructor() {

  }

  isNumber(num) {
    return !isNaN(num);
  }

  convert(num, from, to) {
    return parseInt(num, from).toString(to);
  }
}