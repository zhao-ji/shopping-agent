import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation,
} from "react-router-dom";

import { Sidebar } from './sidebar';
import { Header } from './header';
import { Records } from './record';
import { LoginPage } from './login';

const Auth = {
    isAuthenticated: false,
    login(callback) {
        Auth.isAuthenticated = true;
        setTimeout(callback, 100);
    },
    logout(callback) {
        Auth.isAuthenticated = false;
        setTimeout(callback, 100);
    }
};

export default function App() {
    const renderMain = ({ location }) => {
        if (Auth.isAuthenticated) {
            return (
                <div id="App">
                    <Sidebar />
                    <Header />
                    <div id="body">
                        <Records />
                    </div>
                </div>
            );
        }
        return <Redirect to={{ pathname: "/login", state: { from: location } }} />;
    }
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/" render={renderMain} />
            </Switch>
        </Router>
    );
}
