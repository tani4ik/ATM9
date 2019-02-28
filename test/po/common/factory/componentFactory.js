const Header = require('../headerComponent.js');
const Footer = require('../footerComponent.js');
const UspBanners = require('../uspBannersComponent.js');
const LeaveCheckout = require('../leaveCheckoutComponent.js');
const OrderSummary = require('../orderSummaryComponent.js');

class ComponentFactory {
    createHeader() {
        return new Header();
    }
    createFooter() {
        return new Footer();
    }
    createLeaveCheckout() {
        return new LeaveCheckout();
    }
    createOrderSummary() {
        return new OrderSummary();
    }
    createUspBanners() {
        return new UspBanners();
    }
}

module.exports = ComponentFactory;