import React, { useState, useEffect } from 'react';
import OrderAPI from "../services/order/api";
import moment from "moment";

import StatusOrder from "../components/charts/StatusOrders";
import SalesPerformance from "../components/charts/SalesPerformance";

function Dashboard() {

    const [orders, setOrders] = useState([]);
    const Order = new OrderAPI();

    async function fetchUserOrders() {
        const { orders } = await Order.getAllOrders();

        setOrders(orders);
    }

    useEffect(() => {
        fetchUserOrders();
    }, []);

    return (
        <div className="p-3">
            <div class="flex mb-4">
                <div class="w-1/2">
                    <SalesPerformance data={orders} />
                </div>
                <div class="w-1/2">
                    <StatusOrder data={orders} />
                </div>
            </div>
            <p className="text-2xl text-right">
                Total Bruto R$ {orders.reduce((acc, val) => acc + val.value, 0).toLocaleString('pt-BR')}
            </p>
            <p className="text-2xl">Últimos pedidos</p>
            <table className="text-left w-full">
                <thead>
                    <tr className="bg-black text-white">
                        <th className="px-4 py-2">Nome Cliente</th>
                        <th className="px-4 py-2">Data do pedido</th>
                        <th className="px-4 py-2">Última atualização</th>
                        <th className="px-4 py-2">Valor</th>
                        <th className="px-4 py-2">Categoria</th>
                        <th className="px-4 py-2">Localização</th>
                        <th className="px-4 py-2">Situação</th>
                    </tr>
                </thead>
                <tbody>
                    {!orders.length ? <tr><td>Nenhum pedido cadastrado</td></tr> : orders.map(order => {
                        return (
                            <tr className={order.id % 2 || "bg-gray-500"} key={order.id}>
                                <td className="border px-6 py-2">{order.Customer.name}</td>
                                <td className="border px-4 py-2">{moment(order.createdAt).format("DD/MM/YYYY")}</td>
                                <td className="border px-4 py-2">{moment(order.updatedAt).format("DD/MM/YYYY")}</td>
                                <td className="border px-4 py-2">R$ {order.value}</td>
                                <td className="border px-4 py-2">{order.category}</td>
                                <td className="border px-4 py-2">{order.location}</td>
                                <td className="border px-4 py-2">{order.status}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;
