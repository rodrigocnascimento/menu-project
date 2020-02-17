const { REACT_APP_API_URI } = process.env

function Order() {
    this.uri = REACT_APP_API_URI;
    this.fetchOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }

    this.baseUri = `${this.uri}/pedido`

    this.response = async function (response) {
        const { status, statusText } = response;
        return { status, statusText, ...await response.json() };
    }

    this.mergeOptions = function(options) {
        return {...this.fetchOptions, ...options}
    }
}

Order.prototype.getAllOrders = async function () {
    const response = await fetch(`${this.baseUri}`, this.fetchOptions);

    return await this.response(response);
}

Order.prototype.getOrder = async function (orderId) {
    const response = await fetch(`${this.baseUri}/${orderId}`);

    return await this.response(response);
}

Order.prototype.createOrder = async function (order) {
    delete order.id;

    let options = {
        method: "POST",
        body: JSON.stringify(order)
    }
    const response = await fetch(`${this.baseUri}`, this.mergeOptions(options));

    return await this.response(response);
}

Order.prototype.updateOrder = async function (order) {
    order.value = order.orderValue;
    delete order.orderValue;
    
    let options = {
        method: "PUT",
        body: JSON.stringify(order)
    }
    const response = await fetch(`${this.baseUri}/${order.id}`, this.mergeOptions(options));

    return await this.response(response);
}

Order.prototype.deleteOrder = async function (orderId) {
    let options = {
        method: "DELETE"
    }
    const response = await fetch(`${this.baseUri}/${orderId}`, this.mergeOptions(options));

    return await this.response(response);
}

export default Order;