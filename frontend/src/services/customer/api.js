const { REACT_APP_API_URI } = process.env

function Customer() {
    this.uri = REACT_APP_API_URI;
}

Customer.prototype.getAllCustomers = async function () {
    const customer = await fetch(`${this.uri}/cliente`);
    const { customers } = await customer.json()

    return customers
}

export default Customer