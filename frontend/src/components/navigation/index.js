import React from 'react';
import {
    Link
} from 'react-router-dom';


function Menu() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-300 p-6">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="/"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">Home</span></Link>
                    <Link to="/customer"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">Clientes</span></Link>
                    <Link to="/order"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">Pedidos</span></Link>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
