'use strict';

const NumberType = require('../../singletons/NumberType.js');
const { instance } = require('../../singletons/NumberType.js');

describe('NumberType', () => {
  it('should be singleton', () => {
    const instance1 = NumberType.instance;
    const instance2 = NumberType.instance;
    const instance3 = new NumberType();

    expect(instance1 === instance2).toBeTruthy();
    expect(instance2 === instance3).toBeTruthy();
  });

  it('isNumber should return true', () => {
    expect(NumberType.instance.isNumber(10));
  });

  it('isNumber should return true', () => {
    expect(NumberType.instance.isNumber(10)).toBeTruthy();
  });

  it('isNumber should return false', () => {
    expect(NumberType.instance.isNumber('str'));
  });
});