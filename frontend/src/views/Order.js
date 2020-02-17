import React, { useState, useEffect } from 'react';

import { useToasts } from "react-toast-notifications";
import OrderAPI from "../services/order/api";
import CustomerAPI from "../services/customer/api";
import OrderForm from "../components/order/form";
import OrderMasterDetail from "../components/order/detail";

function Order() {

    const { addToast } = useToasts();

    const [orders, setOrders] = useState([]);
    const [edition, setEditing] = useState(false);
    const [customersList, setCustomerList] = useState("");
    const [currentOrder, setCurrentOrder] = useState({ 
        id: null, 
        customerId: null, 
        status: "", 
        value: "", 
        category: "", 
        location: ""
    });

    const Order = new OrderAPI();
    const Customer = new CustomerAPI();

    async function fecthAllOrders() {
        const { orders } = await Order.getAllOrders();
        setOrders(orders);
    }

    async function fecthCustomersList() {
        const { customers } = await Customer.getAllCustomers();

        let customerList = customers.map(customer=> {
            return {
                customerId: customer.id,
                customerName: customer.name
            }
        })

        setCustomerList(customerList);
    }


    async function deletion(orderId) {
        const { status, message } = await Order.deleteOrder(orderId);

        if (status !== 200) {
            addToast(message, { appearance: "error" });
        } else {
            addToast(message, { appearance: "success" });
            fecthAllOrders();
        }
    }

    async function retrieve(orderId) {
        const { order, status, message } = await Order.getOrder(orderId);

        if (status !== 200) {
            addToast(message, { appearance: "error" });
        } else {
            setEditing(true)

            setCurrentOrder(...order)
        }
    }

    async function create(orderData) {
        const { order, status, message } = await Order.createOrder(orderData);

        if (status !== 200) {
            addToast(message, { appearance: "error" });
        } else {
            addToast(`Pedido ${order.id} criado com sucesso`, { appearance: "success" });
            fecthAllOrders();
        }

        setEditing(false);
    }

    async function update(orderData) {
        const { order, status, message } = await Order.updateOrder(orderData);
        const [orderUpdate] = order;
        
        if (status !== 200) {
            addToast(message, { appearance: "error" });
        } else {
            addToast(`Pedido ${orderUpdate.id} editado com sucesso`, { appearance: "success" });
            fecthAllOrders();
        }

        setEditing(false);
    }

    useEffect(() => {
        fecthCustomersList();
        fecthAllOrders();
    }, []);

    return (
        <>
            <div className="p-6">
                <p className="text-2xl">Pedidos</p>
            </div>
            <OrderForm
                customersList={customersList}
                edition={edition}
                setEditing={setEditing}
                currentOrder={currentOrder}
                create={create}
                update={update}
            />
            <div className="p-6">
                <OrderMasterDetail
                    orders={orders}
                    deletion={deletion}
                    retrieve={retrieve}
                />
            </div>
        </>
    );
}

export default Order;
