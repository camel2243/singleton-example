'use strict';
const CacheManager = require('../../singletons/CacheManager.js');

describe('CacheManager', () => {
  beforeEach(() => {
    this.host = '%redis_host%';
    this.port = '%redis_port%';
    this.config = '%config%';
    this.cacheManager = CacheManager.instance;
    this.cacheManager.init(this.host, this.port, this.config);
    this.cacheManager.clear();
  });

  it('should be singleton', () => {
    const instance1 = CacheManager.instance;
    const instance2 = CacheManager.instance;
    const instance3 = new CacheManager();

    expect(instance1 === instance2).toBeTruthy();
    expect(instance2 === instance3).toBeTruthy();
  });

  it('init', () => {
    expect(this.cacheManager.host).toBe(this.host);
    expect(this.cacheManager.port).toBe(this.port);
    expect(this.cacheManager.config).toBe(this.config);
  });

  it('set number as key, number as value', () => {
    const key = 0;
    const value = 100;

    this.cacheManager.set(key, value);

    expect(this.cacheManager.get(key)).toBe(value);
  });

  it('set object as key, object as value', () => {
    const key = { key: 'key' };
    const value = { value: 'value' };

    this.cacheManager.set(key, value);

    expect(this.cacheManager.get(key)).toBe(value);
  });

  it('set string as key, string as value', () => {
    const key = 'key';
    const value = 'value';

    this.cacheManager.set(key, value);

    expect(this.cacheManager.get(key)).toBe(value);
  });

  it('should return key,value pair size', () => {
    this.cacheManager.set('name', 'camel');

    expect(this.cacheManager.size()).toBe(1);
  })

  it('should clear cache store', () => {
    this.cacheManager.clear();
    expect(this.cacheManager.size()).toBe(0);
  });
});