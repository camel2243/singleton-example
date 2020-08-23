'use strict';
const NumberType = require('./singletons/NumberType.js');

module.exports = class DecToBin extends NumberType {
  isDecNumber(num) {
    return this.isNumber();
  }

  decToBin(num) {
    return this.convert(num, 10, 2);
  }
}