class OrderSummary {
    constructor() {
        this.OrderSummaryHeader = element(by.css('.bem-checkout__title'));
        this.editBasket = element(by.css('.bem-order-summary__label .js-show-leave-message'));
        this.itemName = element(by.css('.bem-order-summary__product-name'));
    }
}

module.exports = OrderSummary;