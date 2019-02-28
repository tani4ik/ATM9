class UspBanners {
    constructor() {
        this.uspPrice = element(by.css('a[href="/sc/price-match"]'));
        this.uspDelivery = element(by.css('a[href="/h/option/deliveries"]'));
        this.uspReturns = element(by.css('a[href="/h/option/returns-uk"]'));
        this.uspReviews = element(by.css('a[href="/sc/testimonials"]'));
    }
}

module.exports = UspBanners;