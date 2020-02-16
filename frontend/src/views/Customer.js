import React, { useState, useEffect } from 'react';

import { useToasts } from "react-toast-notifications";
import CustomerAPI from "../services/customer/api";
import CustomerForm from "../components/customer/form";
import CustomerMasterDetail from "../components/customer/detail";

function Customer() {

    const [customers, setCustomers] = useState([]);
    const { addToast } = useToasts();

    const [editing, setEditing] = useState(false);
    const [currentCustomer, setCurrentCustomer] = useState({});


    const Customer = new CustomerAPI();

    async function fecthAllCustomers() {
        const { customers } = await Customer.getAllCustomers();
        setCustomers(customers);
    }

    async function handleCustomerDelete(customerId) {
        const { status, message } = await Customer.deleteCustomer(customerId);

        if (status !== 200) {
            addToast(message, { appearance: "error" });
        } else {
            addToast(message, { appearance: "success" });
            setCustomers(customers.filter(customer => customer.id !== customerId));
        }
    }

    async function handleCustomerRetrieve(customerId) {
        const { customer, status, message } = await Customer.getCustomer(customerId);

        if (status !== 200) {
            addToast(message, { appearance: "error" });
        } else {
            setEditing(true)

            setCurrentCustomer(...customer)
        }
    }

    async function handleCustomerFormCreate(customerData) {
        const { customer, status, message } = await Customer.createCustomer(customerData);

        if (status !== 200) {
            addToast(message, { appearance: "error" });
        } else {
            addToast(`Usuário ${customer.name} inserido com sucesso`, { appearance: "success" });
            fecthAllCustomers();
        }

        setEditing(false);
    }

    async function handleCustomerFormUpdate(customerData) {
        const { customer, status, message } = await Customer.updateCustomer(customerData);
        const [customerUpdate] = customer;
        
        if (status !== 200) {
            addToast(message, { appearance: "error" });
        } else {
            addToast(`Usuário ${customerUpdate.name} editado com sucesso`, { appearance: "success" });
            fecthAllCustomers();
        }

        setEditing(false);
    }

    useEffect(() => {
        fecthAllCustomers();
    }, []);

    return (
        <>
            <div className="p-6">
                <p className="text-2xl">Clientes</p>
            </div>
            <CustomerForm
                edition={editing}
                setEditing={setEditing}
                currentCustomer={currentCustomer}
                create={handleCustomerFormCreate}
                update={handleCustomerFormUpdate}
            />
            <div className="p-6">
                <CustomerMasterDetail
                    data={customers}
                    deletion={handleCustomerDelete}
                    retrieve={handleCustomerRetrieve}
                />
            </div>
        </>
    );
}

export default Customer;
