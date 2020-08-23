# Singleton demo example

## Questions
* 請使用 singleton pattern 實作 `CacheManger.js` 並符合 unit test 規格
* 你覺得 `CacheManger.js` 的測試上有什麼困難點和問題?
* 你覺得 `CacheManager.js` 是否有符合 SRP(single responsibility principle)?<br/>
> They violate the single responsibility principle: by virtue of the fact that they control their own creation and lifecycle.

Ref: https://stackoverflow.com/questions/137975/what-is-so-bad-about-singletons

* 你覺得以下論述與 `NumberType.js` 的實作是否符合 OCP(open-close principle)?<br/>
> If a singleton class allows inheritance, and is "open" for extension, then it can no longer enforce the singleton pattern.

Ref: https://stackoverflow.com/questions/36887344/why-singleton-breaks-open-closed-principle

* `User.js` 有沒有可能怎麼樣改寫會比較容易測試或是減少測試的耦合性? e.g. dependency injection?