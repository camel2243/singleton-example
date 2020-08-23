'use strict';

const DecToBin = require('../DecToBin.js');

describe('DecToBin', () => {
  it('should not be singleton', () => {
    const instance1 = new DecToBin();
    const instance2 = new DecToBin();

    expect(instance1 !== instance2);
  });

  it('should return Decimal number', () => {
    const decToBin = new DecToBin();

    expect(decToBin.decToBin(4)).toBe('100');
  });
});