'use strict';
const CacheManager = require('./singletons/CacheManager.js');

module.exports = class User {
  constructor(name) {
    this.name = name;
    CacheManager.instance.init('%host%', '%port%', '%config%')
  }

  login() {
    CacheManager.instance.set(this.name, { logged: true });
  }

  isLogged() {
    return CacheManager.instance.get(this.name) && CacheManager.instance.get(this.name).logged;
  }
}