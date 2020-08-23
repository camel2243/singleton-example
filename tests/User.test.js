'use strict';
const rewire = require('rewire');
const User = rewire('../User.js');

describe('User', () => {
  beforeEach(() => {
    this.name = 'camel';
    this.user = new User(this.name);
  });
  it('should login with name', () => {
    const mockFn = jest.fn();
    const revert = User.__set__('CacheManager.instance.set', mockFn);

    this.user.login();

    expect(mockFn.mock.calls[0][0]).toBe(this.name);
    expect(mockFn.mock.calls[0][1]).toEqual({ logged: true });
    revert();
  });

  it('should return logged:true ', () => {
    const revert = User.__set__('CacheManager.instance.get', () => ({
      logged: true
    }));

    expect(this.user.isLogged()).toBeTruthy();
    revert();
  });

  it('should return logged:false ', () => {
    const revert = User.__set__('CacheManager.instance.get', () => ({
      logged: false
    }));

    expect(this.user.isLogged()).toBeFalsy();
    revert();
  });
});