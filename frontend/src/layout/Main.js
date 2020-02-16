import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Menu from "../components/navigation";
import Dashboard from "../pages/Dashboard";
import Customer from "../pages/Customer";
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
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>

                    <Route exact path="/customer">
                        <Customer />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default Main;