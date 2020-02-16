import React, { useState, useEffect } from 'react';
import CustomerAPI from "../services/customer/api";
import moment from "moment";

function Customer() {

    const [customers, setCustomers] = useState([]);
    const Customer = new CustomerAPI();

    async function fecthAllCustomers() {
        const customers = await Customer.getAllCustomers();

        setCustomers(customers);
    }

    useEffect(() => {
        fecthAllCustomers();
    }, []);

    return (
        <>
            <div className="p-6">
            <p className="text-2xl">Clientes</p>
            </div>
            <div className="p-6">
                <table className="text-left w-full">
                    <thead>
                        <tr className="bg-black text-white">
                            <th className="px-6 py-2">Nome</th>
                            <th className="px-4 py-2">Sobrenome</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Criado em</th>
                            <th className="px-4 py-2">Última atualização</th>
                            <th className="px-4 py-2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, i) => {
                            return (
                                <tr className={i % 2 || "bg-gray-500"} key={i}>
                                    <td className="border px-6 py-2">{customer.name}</td>
                                    <td className="border px-4 py-2">{customer.lastName}</td>
                                    <td className="border px-4 py-2">{customer.email}</td>
                                    <td className="border px-4 py-2">{moment(customer.createdAt).format("DD/MM/YYYY")}</td>
                                    <td className="border px-4 py-2">{moment(customer.updatedAt).format("DD/MM/YYYY")}</td>
                                    <td className="border px-4 py-2">{moment(customer.updatedAt).format("DD/MM/YYYY")}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Customer;
