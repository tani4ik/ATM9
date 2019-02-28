const Helper = require('./helper');
const ProductPage = require('../po/productPage');
const BasePage = require('../po/basePage');
const BasketPage = require('../po/basketPage');

const singleton = Symbol();
const singletonEnforcer = Symbol();

class CurrentPageProvider {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
       throw "Instantiation failed: use Singleton.getInstance() instead of new.";
    }

    this.helper = new Helper();

    this.basePage = new BasePage();
    this.basketPage = new BasketPage();
    this.productPage = new ProductPage();

    this.pageObjects = {
        [this.basketPage.url]: this.basketPage,
        [this.productPage.url]: this.productPage
    };
  }

  static get instance() {
    if (!this[singleton])
        this[singleton] = new CurrentPageProvider(singletonEnforcer);
    return this[singleton];
  }
  
  static set instance(v) { throw "Can't change constant property!" }

  getCurrentPage() {
    return this.helper.getPageURI().then((uri) => {
        return this.pageObjects[uri] || this.basePage;
    });
  }
}

module.exports = CurrentPageProvider;