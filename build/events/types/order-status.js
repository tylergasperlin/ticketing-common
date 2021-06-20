"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    // order has been created but ticket that is tryingto be ordered has not been reserved 
    OrderStatus["Created"] = "created";
    // ticket order is trying to reserve has already been reserved or when user cancelled order or order expires before payment
    OrderStatus["Cancelled"] = "cancelled";
    // order has successfully reserved the ticket 
    OrderStatus["AwaitingPayment"] = "awaiting:payment";
    // order has reserved the ticket and user has provided payment
    OrderStatus["Complete"] = "complete";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
