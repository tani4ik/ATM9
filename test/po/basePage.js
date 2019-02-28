const ComponentFactory = require('./common/factory/componentFactory.js');
const Helper = require('../support/helper');

class BasePage {

    constructor() {
        this.factory = new ComponentFactory();

        this.header = this.factory.createHeader();
        this.footer = this.factory.createFooter();
        
        this.helper = new Helper();
    }

    visit() {
        browser.get('http://www.wiggle.co.uk/' + this.url);
        return browser.wait(ec.elementToBeClickable(this.header.logo), GLOBAL_TIMEOUT);
    }

    checkPageTitle(pageTitle) {
        return this.getPageTitle().then((title) => {
            return title === pageTitle;
        });
    }

    checkPageURL(pageURL) {
        return this.helper.getPageURL().then((url) => {
            return url === pageURL;
        })
    }

    getPageTitle() {
        return browser.getTitle();
    }

    scrollToBottom() {
        return browser.executeScript('window.scrollTo(0, document.body.scrollHeight)').
            then(() => {
                return browser.sleep(3000);
            }) 
    }

    changeCurrencyToEuro() {
        return this.header.languageAndCountrySelector.click()
        .then(() => {
            return this.helper.waitForVisibilityOf(this.header.selectCurrency)
            .then(() => {
                return this.header.selectCurrency.click()
                .then(() => {
                    return element(by.css('option[value=EUR]')).click()
                        .then(() => {
                            return this.header.updateLanguageAndCountry.click();
                        })
                })
            })
        })
    }

}

module.exports = BasePage;