'use strict';

const store = Symbol('redisStore');
const singleton = Symbol('singleton');

module.exports = class CacheManager {
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