import React, { useState, useEffect } from 'react';

import { useToasts } from "react-toast-notifications";
import OrderAPI from "../services/order/api";
import OrderForm from "../components/order/form";
import OrderMasterDetail from "../components/order/detail";

function Order() {

    const { addToast } = useToasts();

    const [orders, setOrders] = useState([]);
    const [edition, setEditing] = useState(false);
    const [currentOrder, setCurrentOrder] = useState({ 
        id: null, 
        CustomerId: null, 
        status: "", 
        value: "", 
        category: "", 
        location: ""
    });

    const Order = new OrderAPI();

    async function fecthAllOrders() {
        const { orders } = await Order.getAllOrders();
        setOrders(orders);
    }

    async function deletion(orderId) {
        const { status, message } = await Order.deleteCustomer(orderId);

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
            addToast(`Pedido ${order.id} criado com sucesso, para o cliente: ${order.Customer.name}`, { appearance: "success" });
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
        fecthAllOrders();
    }, []);

    return (
        <>
            <div className="p-6">
                <p className="text-2xl">Pedidos</p>
            </div>
            <OrderForm
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
