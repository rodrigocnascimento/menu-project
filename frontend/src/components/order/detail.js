import React from 'react';
import moment from "moment";
import Icons from "../svg-icons";

function OrderMasterDetail({ orders, deletion, retrieve }) {
    
    return (
        <>
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
                        <th className="px-4 py-2 text-center">Ações</th>
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
                                <td className="border px-4 py-2 text-center">
                                    <button 
                                        onClick={() => deletion(order.id)} 
                                        className="mx-2 bg-red-400 text-xs text-gray-300 rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-1 px-3 inline-flex items-center">
                                        <span className="p-0 mx-1">Deletar</span>
                                        <Icons name="trash" width={12} height={12} />
                                    </button>
                                    <button 
                                        onClick={() => retrieve(order.id)} 
                                        className="mx-2 bg-blue-400 text-xs text-gray-300 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-1 px-3 inline-flex items-center">
                                        <span className="py-0">Editar</span>
                                        <Icons name="edit-pencil" width={12} height={12} />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}

export default OrderMasterDetail;
