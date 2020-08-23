'use strict';
const CacheManager = require('../../singletons/CacheManager.js');

describe('CacheManager', () => {
  it('should be singleton', () => {
    const instance1 = CacheManager.instance;
    const instance2 = CacheManager.instance;
    const instance3 = new CacheManager();

    expect(instance1 === instance2).toBeTruthy();
    expect(instance2 === instance3).toBeTruthy();
  });

  it('init', () => {
    const host = '%redis_host%';
    const port = '%redis_port%';
    const config = '%config%';
    const cacheManager = CacheManager.instance;

    cacheManager.init(host, port, config);

    expect(cacheManager.host).toBe(host);
    expect(cacheManager.port).toBe(port);
    expect(cacheManager.config).toBe(config);
  });

  it('set number as key, number as value', () => {
    const key = 0;
    const value = 100;

    const cacheManager = CacheManager.instance;
    cacheManager.init();

    cacheManager.set(key, value);

    expect(cacheManager.get(key)).toBe(value);
  });

  it('set object as key, object as value', () => {
    const key = { key: 'key' };
    const value = { value: 'value' };

    const cacheManager = CacheManager.instance;
    cacheManager.init();

    cacheManager.set(key, value);

    expect(cacheManager.get(key)).toBe(value);
  });

  it('set string as key, string as value', () => {
    const key = 'key';
    const value = 'value';

    const cacheManager = CacheManager.instance;
    cacheManager.init();

    cacheManager.set(key, value);

    expect(cacheManager.get(key)).toBe(value);
  });

  // ?_?
  it('should return key,value pair size', () => {
    const cacheManager = CacheManager.instance;
    cacheManager.init();

    cacheManager.set('name', 'camel');

    expect(cacheManager.size()).toBe(1);
  })

  it('should clear cache store', () => {
    const cacheManager = CacheManager.instance;
    cacheManager.init();

    cacheManager.clear();
    expect(cacheManager.size()).toBe(0);
  });
});