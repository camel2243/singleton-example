'use strict';

const store = Symbol('redisStore');
const singleton = Symbol('singleton');

module.exports = class CacheManager {
  // singleton.instance
  static get instance() {
    this[singleton] = new this;

    return this[singleton];
  }
  // new singleton()
  constructor() {

  }

  // configuration
  init(host, port, config) {
    this.host = host;
    this.port = port;
    this.config = config;

    // connect with redis
    this[store] = {};
  }

  // set value
  set(key, value) {
    this[store][key] = value;
  }
  // get value
  get(key) {
    return this[store][key];
  }
  // size
  size() {
    return Object.keys(this[store]).length;
  }
  // clear store
  clear() {
    this[store] = {};
  }
}