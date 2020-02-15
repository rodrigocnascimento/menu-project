import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Header from "./Header";
import Dashboard from "../pages/Dashboard";

function Main({ props }) {

    return (
        <>
            <Header />
            <Router>
                <Switch>

                    <Route exact path="/">
                        <Dashboard {...props} />
                    </Route>

                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>

                </Switch>
            </Router>
        </>
    );
}

export default Main;