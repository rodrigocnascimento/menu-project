import React from 'react';
import moment from "moment";
import Icons from "../svg-icons";

function CustomerMasterDetail({ data, deletion, retrieve }) {
    const customers = data;
    
    return (
        <>
            <table className="text-left w-full">
                <thead>
                    <tr className="bg-black text-white">
                        <th className="px-4 py-2">Nome</th>
                        <th className="px-4 py-2">Sobrenome</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Criado em</th>
                        <th className="px-4 py-2">Última atualização</th>
                        <th className="px-4 py-2 text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {!customers.length ? <tr><td>Nenhum usuário cadastrado</td></tr> : customers.map(customer => {
                        return (
                            <tr className={customer.id % 2 || "bg-gray-500"} key={customer.id}>
                                <td className="border px-6 py-2">{customer.name}</td>
                                <td className="border px-4 py-2">{customer.lastName}</td>
                                <td className="border px-4 py-2">{customer.email}</td>
                                <td className="border px-4 py-2">{moment(customer.createdAt).format("DD/MM/YYYY")}</td>
                                <td className="border px-4 py-2">{moment(customer.updatedAt).format("DD/MM/YYYY")}</td>
                                <td className="border px-4 py-2 text-center">
                                    <button 
                                        onClick={() => deletion(customer.id)} 
                                        className="mx-2 bg-red-400 text-xs text-gray-300 rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-1 px-3 inline-flex items-center">
                                        <span className="p-0 mx-1">Deletar</span>
                                        <Icons name="trash" width={12} height={12} />
                                    </button>
                                    <button 
                                        onClick={() => retrieve(customer.id)} 
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

export default CustomerMasterDetail;
