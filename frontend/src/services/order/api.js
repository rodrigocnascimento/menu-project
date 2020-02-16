const { REACT_APP_API_URI } = process.env

function Order() {
    this.uri = REACT_APP_API_URI;
}

Order.prototype.getCustomerOrders = async function () {
    const order = await fetch(`${this.uri}/pedido`);
    const { orders } = await order.json()

    return orders
}


export default Order