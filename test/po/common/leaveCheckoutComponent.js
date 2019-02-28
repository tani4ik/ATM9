class LeaveCheckout {
    constructor() {
        this.leaveCheckoutHeader = element(by.css('#checkout-lightbox-title'));
        this.acceptLeaveCheckout = element(by.css('#dialogue-apply'));
        this.cancelLeaveCheckout = element(by.css('#dialogue-close'));
    }
}

module.exports = LeaveCheckout;