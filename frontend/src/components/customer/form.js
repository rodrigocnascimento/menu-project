import React, { useState, useEffect } from 'react';
import Icons from "../svg-icons";

function CustomerForm({ edition, setEditing, currentCustomer, create, update }) {
    const [id, setId] = useState("");
    const [newCustomer, setNewCustomer] = useState(false);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const { id, name, lastName, email } = currentCustomer;
        setId(id);
        setName(name);
        setLastName(lastName);
        setEmail(email);
    }, [currentCustomer]);

    function resetState() {
        setId("");
        setName("");
        setLastName("");
        setEmail("");
    }

    function resetForm(e) {
        e.preventDefault();
        resetState();
        setNewCustomer(false);
        setEditing(false);
    }

    function createNewCustomer(e) {
        e.preventDefault();
        setNewCustomer(true);
        setEditing(true);
        resetState();
    }

    function handleInputChange(e) {
        if (e.target.name === "name") {
            setName(e.target.value);
        }

        if (e.target.name === "lastName") {
            setLastName(e.target.value);
        }

        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
    }

    return (
        <div className="p-6">
            {edition ? <>
                <p className="text-2xl">{newCustomer ? "Cadastrar" : "Editar"} Cliente</p>
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        let customerData = {
                            id,
                            name,
                            lastName,
                            email
                        };

                        if (newCustomer) {
                            create(customerData);
                        } else {
                            update(customerData);
                        }
                        setNewCustomer(false);
                    }}
                    className="w-full max-w-sm">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="customerName">
                                Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                                id="customerName"
                                type="text"
                                name="name"
                                placeholder="Customer Name"
                                value={name}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="customerLastName">
                                Last Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                                id="customerLastName"
                                type="text"
                                name="lastName"
                                placeholder="Customer Last Name"
                                value={lastName}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="customerEmail">
                                Email
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                                id="customerEmail"
                                type="text"
                                name="email"
                                placeholder="customer@email.com"
                                value={email}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button
                                type="submit"
                                className="mx-2 bg-orange-200 text-xs text-black rounded border-b-2 border-orange-500 hover:border-orange-600 hover:bg-orange-500 hover:text-white shadow-md py-1 px-3 inline-flex items-center">
                                <span className="p-0 mx-1">Registrar</span>
                                <Icons name="checkmark-outline" fill="green" width={12} height={12} />
                            </button>
                            <button
                                onClick={(e) => resetForm(e)}
                                className="mx-2 bg-orange-200 text-xs text-black rounded border-b-2 border-orange-500 hover:border-orange-600 hover:bg-orange-500 hover:text-white shadow-md py-1 px-3 inline-flex items-center">
                                <span className="p-0 mx-1">Cancelar</span>
                                <Icons name="close" fill="red" width={12} height={12} />
                            </button>
                        </div>
                    </div>
                </form>
            </> : (
                    <div className="md:1/3">
                        <button
                            className="shadow bg-orange-400 hover:bg-orange-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button"
                            onClick={(e) => createNewCustomer(e)}
                        >
                            Novo Cliente
                    </button>
                    </div>
                )}
        </div>
    );
}

export default CustomerForm;
