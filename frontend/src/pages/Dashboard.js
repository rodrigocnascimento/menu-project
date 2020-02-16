import React, { useState, useEffect } from 'react';
import OrderAPI from "../services/order/api";

function Dashboard() {

    const [orders, setOrders] = useState([]);
    const Order = new OrderAPI();

    async function fetchUserOrders() {
        const orders = await Order.getCustomerOrders();

        setOrders(orders);
    }

    useEffect(() => {
        fetchUserOrders();
    }, []);

    return (
        <div className="p-3">
            <p className="text-2xl">Perfomance de vendas</p>

            <p className="text-2xl">Últimos pedidos</p>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Data da compra</th>
                        <th>Valor</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, i) => {
                        return (<tr key={i}>
                            <td>{order.Client.name}</td>
                            <td>{order.createdAt}</td>
                            <td>R$ 5</td>
                            <td>{order.status}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;
