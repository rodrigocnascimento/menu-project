import React from 'react';
import {
    Link
} from 'react-router-dom';
import menuLogo from "../images/menu.com.vc.png";

function Header() {

    return (
        <header className="bg-white p-3">
            <nav className="flex items-center justify-between flex-wrap bg-gray-300 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <img src={ menuLogo } alt="Menu.com.vc" />
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link to="/"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">Home</span></Link>
                        <Link to="/dashboard"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">Dashboard</span></Link>
                    </div>
                </div>
            </nav>

        </header>
    );
}

export default Header;