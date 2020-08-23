'use strict';
const CacheManager = require('../../singletons/CacheManager.js');
const User = require('../../User.js');

describe('User', () => {
  beforeEach(() => {
    this.name = 'camel';
    this.user = new User(this.name);
  });
  it('should login with name', () => {
    this.user.login();

    expect(CacheManager.instance.get(this.name)).toStrictEqual({ logged: true })
  });

  it('should return logged:true ', () => {
    CacheManager.instance.set(this.name, { logged: true });

    expect(this.user.isLogged()).toBeTruthy()
  });

  it('should return logged:false ', () => {
    CacheManager.instance.clear();

    expect(this.user.isLogged()).toBeFalsy();
  });
});