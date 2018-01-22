class OrderDetail {
    constructor(public price: number) {}
}

class IOrder {
    constructor(public orderDetails: OrderDetail[]){}
}


class OrderLogic {
    constructor(public order: IOrder) { }

    getOrderTotal(): number {
        let sum: number = 0;

        for (let orderDetail of this.order.orderDetails) {
            sum += orderDetail.price;
        }
        return sum;
    }
}