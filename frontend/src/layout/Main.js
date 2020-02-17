import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import Menu from "../components/navigation";
import Dashboard from "../views/Dashboard";
import Customer from "../views/Customer";
import Order from "../views/Order";
import menuLogo from "../images/menu.com.vc.png";

function Main() {
    return (
        <>
            <Router>
                <header className="bg-white p-3">
                    <nav className="flex items-center justify-between flex-wrap bg-gray-300 p-6">
                        <div className="flex items-center flex-shrink-0 text-white mr-6">
                            <img src={menuLogo} alt="Menu.com.vc" />
                        </div>
                        <Menu />
                    </nav>
                </header>
                <ToastProvider>
                    <Switch>
                        <Route exact path="/">
                            <Dashboard />
                        </Route>
                        <Route exact path="/customer">
                            <Customer />
                        </Route>

                        <Route exact path="/order">
                            <Order />
                        </Route>
                    </Switch>
                </ToastProvider>
            </Router>
        </>
    );
}

export default Main;