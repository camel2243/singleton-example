'use strict';

const singleton = Symbol('singleton');

module.exports = class NumberType {
  // singleton.instance
  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new this;
    }

    return this[singleton];
  }
  // new singleton()
  constructor() {
    const klass = this.constructor;

    if (!klass[singleton]) {
      klass[singleton] = this;
    }

    return klass[singleton];
  }

  isNumber(num) {
    return !isNaN(num);
  }

  convert(num, from, to) {
    return parseInt(num, from).toString(to);
  }
}