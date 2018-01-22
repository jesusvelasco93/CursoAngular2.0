var OrderDetail = /** @class */ (function () {
    function OrderDetail(price) {
        this.price = price;
    }
    return OrderDetail;
}());
var IOrder = /** @class */ (function () {
    function IOrder(orderDetails) {
        this.orderDetails = orderDetails;
    }
    return IOrder;
}());
var OrderLogic = /** @class */ (function () {
    function OrderLogic(order) {
        this.order = order;
    }
    OrderLogic.prototype.getOrderTotal = function () {
        var sum = 0;
        for (var _i = 0, _a = this.order.orderDetails; _i < _a.length; _i++) {
            var orderDetail = _a[_i];
            sum += orderDetail.price;
        }
        return sum;
    };
    return OrderLogic;
}());
