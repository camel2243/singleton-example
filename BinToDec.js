'use strict';
const NumberType = require('./singletons/NumberType.js');

module.exports = class BinToDec extends NumberType {
  isBinNumber(num) {
    return this.isNumber();
  }

  binToDec(num) {
    return this.convert(num, 2, 10);
  }
}