import React, { useState, useEffect } from 'react';

function Dashboard({ env }) {

    const [orders, setOrders] = useState([])
    
    async function fetchOrders({ URI }) {
        const order = await fetch(`${URI}/pedido`);
        const { orders } = await order.json()

        setOrders(orders);
    }

    useEffect(() => {
        
        fetchOrders(env);
    }, [env]);

    console.log(orders)

    return (
        <div className="p-3">
            <p className="text-2xl">Perfomance de vendas</p>
            <p>Olá dashboard!</p>
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
                { orders.map((order, i) => {
                    return (<tr key={i}>
                        <td>{order.Client.name}</td>
                        <td>{order.createdAt}</td>
                        <td>R$ 5</td>
                        <td>{order.status}</td>
                    </tr>)
                }) }
                </tbody>
            </table>
            
        </div>
    );
}

export default Dashboard;
