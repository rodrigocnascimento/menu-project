const { REACT_APP_API_URI } = process.env

function Customer() {
    this.uri = REACT_APP_API_URI;
    this.fetchOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }

    this.baseUri = `${this.uri}/cliente`

    this.response = async function (response) {
        const { status, statusText } = response;
        return { status, statusText, ...await response.json() };
    }

    this.mergeOptions = function(options) {
        return {...this.fetchOptions, ...options}
    }
}

Customer.prototype.getAllCustomers = async function () {
    const response = await fetch(`${this.baseUri}`, this.fetchOptions);

    return await this.response(response);
}

Customer.prototype.getCustomer = async function (customerId) {
    const response = await fetch(`${this.baseUri}/${customerId}`);

    return await this.response(response);
}

Customer.prototype.createCustomer = async function (customer) {
    delete customer.id;

    let options = {
        method: "POST",
        body: JSON.stringify(customer)
    }
    const response = await fetch(`${this.baseUri}`, this.mergeOptions(options));

    return await this.response(response);
}

Customer.prototype.updateCustomer = async function (customer) {
    let options = {
        method: "PUT",
        body: JSON.stringify(customer)
    }
    const response = await fetch(`${this.baseUri}/${customer.id}`, this.mergeOptions(options));

    return await this.response(response);
}

Customer.prototype.deleteCustomer = async function (customerId) {
    let options = {
        method: "DELETE"
    }
    const response = await fetch(`${this.baseUri}/${customerId}`, this.mergeOptions(options));

    return await this.response(response);
}

export default Customer;