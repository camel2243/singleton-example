'use strict';

const BinToDec = require('../../BinToDec.js');

describe('BinToDec', () => {
  it('should not be singleton', () => {
    const instance1 = new BinToDec();
    const instance2 = new BinToDec();

    expect(instance1 !== instance2);
  });

  it('should return Decimal number', () => {
    const binToDec = new BinToDec();

    expect(binToDec.binToDec(110)).toBe('6');
  });
});