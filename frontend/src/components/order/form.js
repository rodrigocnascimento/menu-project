import React, { useState, useEffect } from 'react';
import Icons from "../svg-icons";

function OrderForm({ edition, setEditing, currentOrder, create, update }) {
    const [newOrder, setNewOrder] = useState(false);
    const [id, setId] = useState("");
    const [customerId, setCustomerId] = useState("");
    const [orderValue, setOrderValue] = useState("");
    const [status, setStatus] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {
        const { id, CustomerId: customerId, status, value: orderValue, category, location } = currentOrder;
        console.log(`currentOrder`, currentOrder)
        setId(id);
        setCustomerId(customerId);
        setStatus(status);
        setOrderValue(orderValue);
        setCategory(category);
        setLocation(location);
    }, [currentOrder]);

    function resetState() {
        setId("");
        setCustomerId("");
        setStatus("");
        setOrderValue("");
        setCategory("");
        setLocation("");
    }

    function resetForm(e) {
        e.preventDefault();
        resetState();
        setNewOrder(false);
        setEditing(false);
    }

    function createNewOrder(e) {
        e.preventDefault();
        resetState();
        setNewOrder(true);
        setEditing(true);
    }

    function handleInputChange(e) {
        console.log(e.target.name, e.target.value)
        if (e.target.name === "orderStatus") {
            setStatus(e.target.value);
        }

        if (e.target.name === "orderValue") {
            setOrderValue(e.target.value);
        }

        if (e.target.name === "orderCategory") {
            setCategory(e.target.value);
        }

        if (e.target.name === "orderLocation") {
            setLocation(e.target.value);
        }
    }

    return (
        <div className="p-6">
            {edition ? <>
                <p className="text-2xl">{newOrder ? "Cadastrar" : "Editar"} Pedido</p>
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        let orderData = {
                            id,
                            customerId,
                            status,
                            orderValue,
                            category,
                            location
                        };

                        if (newOrder) {
                            create(orderData);
                        } else {
                            update(orderData);
                        }
                        setNewOrder(false);
                    }}
                    className="w-full max-w-sm">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="orderValue">
                                Value
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                                id="orderValue"
                                type="text"
                                name="orderValue"
                                placeholder="Order Value"
                                value={orderValue}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="orerCategory">
                                Categoria
                            </label>
                        </div>
                        <div className="md:w-2/3">
                        <select 
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="orderCategory"
                                name="orderCategory"
                                value={category}
                                onChange={handleInputChange}
                            >
                                <option value="Merceria">Merceria</option>
                                <option value="Frios">Frios</option>
                                <option value="Bebidas">Bebidas</option>
                                <option value="Limpeza">Limpeza</option>
                                <option value="Higiene">Higiene</option>
                            </select>
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="orderLocation">
                                Location
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <select 
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="orderLocation"
                                name="orderLocation"
                                value={location}
                                onChange={handleInputChange}
                            >
                                <option value="RJ">RJ</option>
                                <option value="SP">SP</option>
                                <option value="MG">MG</option>
                            </select>
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="orderStatus">
                                Status
                            </label>
                        </div>
                        <div className="md:w-2/3">
                        <select 
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="orderStatus"
                                name="orderStatus"
                                value={status}
                                onChange={handleInputChange}
                            >
                                <option value="Ativo">Ativo</option>
                                <option value="Inativo">Inativo</option>
                            </select>
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
                            onClick={(e) => createNewOrder(e)}
                        >
                            Novo Pedido
                    </button>
                    </div>
                )}
        </div>
    );
}

export default OrderForm;
